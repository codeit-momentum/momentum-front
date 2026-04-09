import { createBrowserRouter, Navigate } from 'react-router';

import Layout from '../layouts/Layout';
import LayoutWithGNB from '../layouts/LayoutWithGNB';

import { LoginPage, MainPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/main" replace /> },
      {
        element: <LayoutWithGNB />,
        children: [
          {
            path: 'main',
            element: <MainPage />,
          },
        ],
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
