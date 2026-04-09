import type React from 'react';

import { ThemeProvider } from '@emotion/react';

import GlobalStyle from './GlobalStyles';
import theme from './Theme';

interface StyleProps {
  children: React.ReactNode;
}

const Style = ({ children }: StyleProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Style;
