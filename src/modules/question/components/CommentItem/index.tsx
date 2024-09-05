import React from 'react';
import { QuestionItem } from '@question/components';
import { Comment } from '@question/types';
import styles from './styles.module.scss';

type Props = {
    comment: Comment;
};
export const CommentItem = ({ comment }: Props) => {
    const {
        user: { name },
        body,
    } = comment;
    return (
        <div className={styles.item}>
            <h4>{name}</h4>
            <QuestionItem.Body body={body} />
        </div>
    );
};
