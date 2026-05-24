import '@emotion/react';
import type { SerializedStyles } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      black: string;
      white: string;
      yellow: string;
      violet: string;
      textGray: string;
      dividerGray: string;
    };
    fontFamily: {
      main: string;
    };
    typography: {
      display: SerializedStyles;
      title1: SerializedStyles;
      title2: SerializedStyles;
      body1: SerializedStyles;
      body2: SerializedStyles;
      label1: SerializedStyles;
      label2: SerializedStyles;
      label3: SerializedStyles;
    };
  }
}
