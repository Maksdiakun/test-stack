export interface OnboardingStore {
    step: number;
    info: OnboardingForm | null;
}
export interface OnboardingForm {
    first: string;
    last: string;
    position: string;
}
