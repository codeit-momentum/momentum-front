import { Outlet } from 'react-router';

import useMobile from '@/shared/hooks/useMobile';
import ScrollToTop from '@/shared/libs/ScrollToTop';

const Layout = () => {
  useMobile();

  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default Layout;
