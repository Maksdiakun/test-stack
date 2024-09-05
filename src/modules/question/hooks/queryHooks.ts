import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchQuestionById, fetchQuestions, patchQuestion } from '@question/api';
import { Question } from '@question/types';

export const useFetchQuestions = () => {
    return useQuery('questions', fetchQuestions);
};
export const useQuestion = (id: number) => {
    return useQuery(['question', id], () => fetchQuestionById(id), {
        staleTime: 60000,
        cacheTime: 300000,
        retry: 1,
        enabled: !!id,
    });
};

export const useUpdateQuestion = () => {
    const queryClient = useQueryClient();

    return useMutation(
        ({ id, updatedData }: { id: number; updatedData: Partial<Question> }) =>
            patchQuestion(id, updatedData),
        {
            onSuccess: (data, { id }) => {
                queryClient.invalidateQueries(['question', id]);
                queryClient.invalidateQueries('questions');
            },
        }
    );
};
