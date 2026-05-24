import styled from '@emotion/styled';

export const MainPageLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.surface.bg};
  color: ${({ theme }) => theme.colors.content.primary};
  ${({ theme }) => theme.typography.display};
`;
