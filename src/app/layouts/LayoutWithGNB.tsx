import { Outlet } from 'react-router';

import GNB from '@/shared/ui/GNB/GNB';

const LayoutWithGNB = () => {
  return (
    <>
      <Outlet />
      <GNB />
    </>
  );
};

export default LayoutWithGNB;
