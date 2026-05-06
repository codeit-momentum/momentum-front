import { Outlet } from 'react-router';

import { GNB } from '@/shared';

const LayoutWithGNB = () => {
  return (
    <>
      <Outlet />
      <GNB />
    </>
  );
};

export default LayoutWithGNB;
