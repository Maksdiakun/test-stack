import React from 'react';
import styles from './styles.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input = ({ label, ...rest }: InputProps) => {
    return (
        <label>
            <span>{label}</span>
            <input className={styles.input} {...rest} />
        </label>
    );
};
