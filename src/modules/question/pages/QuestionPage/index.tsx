import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@components';
import { useQuestion, useUpdateQuestion } from '@question/hooks';
import { CommentItem, QuestionItem } from '@question/components';
import styles from './styles.module.scss';

interface RouteParams {
    id: string;
}

export const QuestionPage: React.FC = () => {
    const { id } = useParams<RouteParams>(); // Отримуємо ID з маршруту
    const questionId = +id;
    const { mutate: updateQuestion } = useUpdateQuestion();
    const ref = useRef(false);
    const { data: question, isLoading } = useQuestion(questionId);

    if (isLoading) return <div>loading</div>;

    const handleUpdate = (isLike: boolean) => () => {
        // just to be sure that user can vote only once (not for a real project)
        ref.current = true;
        const initScore = question?.score ?? 0;
        const result = isLike ? initScore + 1 : initScore - 1;
        updateQuestion({
            id: questionId,
            updatedData: { score: result },
        });
    };

    return (
        <div className="container">
            <h1>{question.title}</h1>
            <p className={styles.score}>
                <Button onClick={handleUpdate(true)} disabled={ref.current}>
                    Like
                </Button>
                <span>{question.score}</span>
                <Button onClick={handleUpdate(false)} disabled={ref.current}>
                    Dislike
                </Button>
            </p>
            <QuestionItem.Body body={question.body} />
            <h2>Answers</h2>
            {question.comments?.map(el => {
                return <CommentItem key={el.id} comment={el} />;
            })}
        </div>
    );
};
