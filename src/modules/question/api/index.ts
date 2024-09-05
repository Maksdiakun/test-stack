import data from '../../../assets/stackoverfaux.json';
import { Question } from '@question/types';

export const fetchQuestionById: (id: number) => Promise<Question> = async id => {
    const question = data.find(q => q.id === id);
    if (!question) {
        throw new Error('Question not found');
    }
    return question;
};

export const fetchQuestions: () => Promise<Question[]> = () => {
    return Promise.resolve(data);
};

// Update

export const patchQuestion = async (id: number, updatedData: Partial<Question>) => {
    const questionIndex = data.findIndex(q => q.id === id);
    if (questionIndex === -1) {
        throw new Error('Question not found');
    }
    data[questionIndex] = { ...data[questionIndex], ...updatedData };
    return data[questionIndex];
};
