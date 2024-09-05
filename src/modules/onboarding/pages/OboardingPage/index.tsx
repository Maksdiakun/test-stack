import { useAppDispatch, useAppSelector } from '@hooks';
import { OnboardingStep } from '@onboarding/features';
import { onboardingActions } from '@onboarding/store';

const steps = [
    {
        infoKey: 'first',
        label: 'First name',
        stepNumber: 0,
    },
    {
        infoKey: 'last',
        label: 'Last name',
        stepNumber: 1,
    },
    {
        infoKey: 'position',
        label: 'Position ',
        stepNumber: 2,
    },
];
export const OboardingPage = () => {
    const { step, info } = useAppSelector(state => state.onboardingStore);
    const dispatch = useAppDispatch();

    const handleSubmit = (infoKey, value) => {
        if (step === 2) {
            alert('Submitted');
            dispatch(onboardingActions.resetForm());
        } else {
            dispatch(onboardingActions.setFromValue({ key: infoKey, value }));
            handleStep(true)();
        }
    };

    const handleStep = (next: boolean) => () => {
        dispatch(next ? onboardingActions.setNextStep() : onboardingActions.setPrevStep());
    };

    const currentStep = steps[step];

    return (
        <div className="container">
            <h2>Onboarding form </h2>
            <h4>Maybe we need some info from store here {step + 1} of 3</h4>
            <OnboardingStep
                infoKey={currentStep.infoKey}
                label={currentStep.label}
                stepNumber={currentStep.stepNumber}
                onPrev={handleStep(false)}
                onSubmit={handleSubmit}
                initValue={info[currentStep.infoKey]}
            />
        </div>
    );
};
