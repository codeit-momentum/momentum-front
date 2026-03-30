import { createBrowserRouter, Navigate } from 'react-router';

import { LoginPage, MainPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Navigate to="/main" replace /> },
      {
        path: 'main',
        element: <MainPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
