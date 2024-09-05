import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button {...props} className={styles.btn}></button>;
};
