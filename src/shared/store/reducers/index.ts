import { combineReducers } from '@reduxjs/toolkit';
import { onboardingReducer } from '@onboarding/store';

export const rootReducer = combineReducers({
    onboardingStore: onboardingReducer,
});
