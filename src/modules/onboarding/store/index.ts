import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OnboardingStore } from '@onboarding/types';

const initialState: OnboardingStore = {
    step: 0,
    info: {
        first: '',
        last: '',
        position: '',
    },
};

const onboardingSlice = createSlice({
    name: 'onboarding',
    initialState,
    reducers: {
        setFromValue: (state, { payload }: PayloadAction<{ value: string; key: string }>) => {
            state.info[payload.key] = payload.value;
        },
        setNextStep: state => {
            state.step = state.step + 1;
        },
        setPrevStep: state => {
            state.step = state.step - 1;
        },
        resetForm: state => {
            state.step = initialState.step;
            state.info = initialState.info;
        },
    },
});

export const onboardingActions = onboardingSlice.actions;
export const onboardingReducer = onboardingSlice.reducer;
