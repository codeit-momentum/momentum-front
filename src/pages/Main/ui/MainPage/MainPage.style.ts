import styled from '@emotion/styled';

export const MainPageLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.typography.display};
`;
