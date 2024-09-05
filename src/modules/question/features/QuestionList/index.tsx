import { Link } from 'react-router-dom';
import { Routes } from '@constants';
import { useFetchQuestions } from '@question/hooks';
import { QuestionItem } from '@question/components';
import { Question } from '@question/types';

export const QuestionList = () => {
    const { data, error, isLoading } = useFetchQuestions();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Usually, when working with such lists, I use pagination or infinite scroll to load the data in parts.
    // I also use useMemo,but it is unnecessary here and will only degrade performance.

    if (!(data && data.length)) {
        return <div>Empty list...</div>;
    }

    return (
        <div>
            {data.map((question: Question) => (
                <Link to={`/${Routes.Questions}/${question.id}`}>
                    <QuestionItem key={question.id} question={question} isPreview={true} />
                </Link>
            ))}
        </div>
    );
};
