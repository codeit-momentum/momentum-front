import { NavLink } from 'react-router';

import * as S from './GNB.style';

const GNB = () => {
  const navList = [
    {
      label: 'home',
      name: '홈',
      path: '/home',
      activeIcon: null,
      unactiveIcon: null,
    },
    {
      label: 'feed',
      name: '피드',
      path: '/feed',
      activeIcon: null,
      unactiveIcon: null,
    },
    {
      label: 'moment',
      name: '모멘트 생성',
      path: '/moment',
      activeIcon: null,
      unactiveIcon: null,
    },
    {
      label: 'moment',
      name: '모멘트',
      path: '/moment',
      activeIcon: null,
      unactiveIcon: null,
    },
    {
      label: 'mypage',
      name: '버킷리스트',
      path: '/mypage',
      activeIcon: null,
      unactiveIcon: null,
    },
  ];

  return (
    <S.GNBLayout>
      {navList.map((nav) => (
        <NavLink key={nav.label} to={nav.path}>
          {({ isActive }) => (
            <S.NavItem>
              {isActive ? nav.activeIcon : nav.unactiveIcon}
              {nav.name}
            </S.NavItem>
          )}
        </NavLink>
      ))}
    </S.GNBLayout>
  );
};

export default GNB;
