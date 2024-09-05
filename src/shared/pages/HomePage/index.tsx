import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '@constants';
import styles from './styles.module.scss';
import { Button } from '@components';

export const HomePage = () => {
    return (
        <div className={styles.page}>
            <Button>
                <Link to={Routes.Questions}>Questions</Link>
            </Button>
            <Button>
                <Link to={Routes.Form}>Onboarding form</Link>
            </Button>
        </div>
    );
};
