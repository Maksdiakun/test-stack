import { createBrowserRouter } from 'react-router-dom';
import { Routes } from '@constants';
import { ErrorBlock } from '@components';
import { HomePage } from '@/shared/pages';
import { QuestionPage, QuestionsListPage } from '@question/pages';
import { OboardingPage } from '@onboarding/pages';

export const routes = createBrowserRouter([
    {
        path: `${Routes.Home}`,
        element: <HomePage />,
    },
    {
        path: `${Routes.Form}`,
        element: <OboardingPage />,
    },
    {
        path: `${Routes.Questions}`,
        errorElement: <ErrorBlock />,
        element: <QuestionsListPage />,
    },
    {
        path: `${Routes.Questions}/:id`,
        errorElement: <ErrorBlock />,
        element: <QuestionPage />,
    },
]);
