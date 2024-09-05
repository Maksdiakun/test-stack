import { useRef, useEffect } from 'react';
import shave from 'shave';
import { Question } from '@question/types';
import { getTimeFromNow, formatLabelByCount } from '@utils';
import styles from './styles.module.scss';

type Props = {
    question: Question;
    isPreview?: boolean;
};

type ParamsProps = {
    score: number;
    commentsCount: number;
};

type BodyProps = {
    body: string;
    isPreview?: boolean;
};

type FooterProps = {
    user: { name: string };
    creation: number;
};

const Params = ({ score, commentsCount }: ParamsProps) => {
    const views = formatLabelByCount(score, 'vote');
    const answersCount = formatLabelByCount(commentsCount, 'answer');
    return (
        <p className={styles.props}>
            <span>{views}</span>
            <span>{answersCount}</span>
        </p>
    );
};

const Body = ({ body, isPreview }: BodyProps) => {
    const bodyRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (bodyRef.current && isPreview) {
            shave(bodyRef.current as HTMLDivElement, 40);
        }
    }, [body]);

    return <div ref={bodyRef} className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />;
};

const Footer = ({ user, creation }: FooterProps) => {
    const date = getTimeFromNow(creation);
    return (
        <p className={styles.footer}>
            <span>{user.name}</span>
            <span>{date}</span>
        </p>
    );
};

export const QuestionItem = ({ question, isPreview }: Props) => {
    return (
        <div className={styles.item}>
            <Params score={question.score} commentsCount={question.comments.length} />
            <h4>{question.title}</h4>
            <Body body={question.body} isPreview={isPreview} />
            <Footer creation={question.creation} user={question.user} />
        </div>
    );
};

QuestionItem.Params = Params;
QuestionItem.Body = Body;
