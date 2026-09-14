import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'styles/global.scss';
import Layout from '@/layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from 'pages/home';
import ProjectPage from '@/pages/project';
import AboutPage from '@/pages/about';
import ForUPage from 'pages/lovelove';
import { AppContextProvider } from 'components/context/app.context';
import '@/i18n';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/project',
                element: <ProjectPage />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            }
        ],
    },
    {
        path: '/for-u',
        element: <ForUPage />,
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppContextProvider>
            <RouterProvider router={router} />
        </AppContextProvider>
    </StrictMode>
);
