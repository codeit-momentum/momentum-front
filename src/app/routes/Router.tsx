import { createBrowserRouter, Navigate } from 'react-router';

import { BucketListPage } from '@/pages/BucketList';
import { CreateMomentPage } from '@/pages/CreateMoment';
import { FeedPage } from '@/pages/Feed';
import { LoginPage } from '@/pages/Login';
import { MainPage } from '@/pages/Main';
import { MomentPage } from '@/pages/Moment';

import Layout from '../layouts/Layout';
import LayoutWithGNB from '../layouts/LayoutWithGNB';

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
            path: '/main',
            element: <MainPage />,
          },
          {
            path: '/bucket-list',
            element: <BucketListPage />,
          },
          {
            path: '/feed',
            element: <FeedPage />,
          },
          {
            path: '/create-moment',
            element: <CreateMomentPage />,
          },
          {
            path: '/moment',
            element: <MomentPage />,
          },
        ],
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
