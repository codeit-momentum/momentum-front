import * as S from './GNB.style';

export const GNB = () => {
  const navList = [
    {
      label: 'home',
      name: '홈',
      path: '/main',
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
      label: 'create-moment',
      name: '모멘트 생성',
      path: '/create-moment',
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
      label: 'bucket-list',
      name: '버킷리스트',
      path: '/bucket-list',
      activeIcon: null,
      unactiveIcon: null,
    },
  ];

  return (
    <S.GNBLayout>
      {navList.map((nav) => (
        <S.NavLinkWrapper key={nav.label} to={nav.path}>
          {({ isActive }) => (
            <S.NavItem isActive={isActive}>
              {isActive ? nav.activeIcon : nav.unactiveIcon}
              {nav.name}
            </S.NavItem>
          )}
        </S.NavLinkWrapper>
      ))}
    </S.GNBLayout>
  );
};
