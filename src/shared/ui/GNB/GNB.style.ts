import styled from '@emotion/styled';
import { NavLink } from 'react-router';

interface NavItemProps {
  isActive: boolean;
}

export const GNBLayout = styled.div`
  flex-direction: row;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 6rem;
  padding: 0.4rem 2rem 1.4rem 2rem;
  bottom: 0;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.dividerGray};
`;

export const NavLinkWrapper = styled(NavLink)`
  flex: 1;
  display: flex;
`;

export const NavItem = styled.ul<NavItemProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.2rem;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.yellow : theme.colors.textGray};
`;
