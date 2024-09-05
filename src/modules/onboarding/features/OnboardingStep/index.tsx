import React, { useEffect, useState } from 'react';
import { Button, Input } from '@components';
import styles from './styles.module.scss';

type Props = {
    infoKey: string;
    label: string;
    stepNumber: number;
    onPrev: () => void;
    initValue: string;
    onSubmit: (infoKey: string, value: string) => void;
};

export const OnboardingStep = ({
    initValue,
    infoKey,
    label,
    stepNumber,
    onSubmit,
    onPrev,
}: Props) => {
    const [state, setState] = useState('');

    const handleSendValue = () => {
        onSubmit(infoKey, state);
    };

    const handleValue = (value: string) => {
        setState(value);
    };

    useEffect(() => {
        setState(initValue);
    }, [initValue, infoKey]);

    return (
        <div className={styles.form}>
            {stepNumber !== 0 && <Button onClick={onPrev}>Prev</Button>}
            <h5>Step: {stepNumber + 1} </h5>
            <p>Here can be some functionality for this step...</p>
            <Input label={label} value={state} onChange={e => handleValue(e.target.value)} />
            <Button onClick={handleSendValue}>Send</Button>
        </div>
    );
};
