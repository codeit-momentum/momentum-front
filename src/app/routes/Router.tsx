import { createBrowserRouter } from 'react-router';

import { LoginPage, MainPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/main',
        element: <MainPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
