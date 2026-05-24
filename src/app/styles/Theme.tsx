import { css } from '@emotion/react';

const colors = {
  black: '#222222',
  white: '#F0EEE9',
  yellow: '#D8E63C',
  violet: '#D684FC',
  textGray: 'rgba(255, 255, 255, 0.60)',
  dividerGray: 'rgba(255, 255, 255, 0.10)',
};

const fontFamily = {
  main: "'NEXONLv1Gothic', 'Noto Sans KR', sans-serif",
};

const typography = {
  display: css`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: 0.02em;
  `,
  title1: css`
    font-size: 2rem;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.02em;
  `,
  title2: css`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.02em;
  `,
  body1: css`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0;
  `,
  body2: css`
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0;
  `,
  label1: css`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0;
  `,
  label2: css`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0;
  `,
  label3: css`
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0;
  `,
};

const theme = {
  colors,
  fontFamily,
  typography,
};

export default theme;
