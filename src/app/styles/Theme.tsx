import { css } from '@emotion/react';

const colors = {
  brand: {
    primary: {
      default: '#D8E63C',
      pressed: '#BCCF2D',
    },
    secondary: {
      default: '#273287',
      pressed: '#1F286B',
    },
  },
  surface: {
    bg: '#222222',
    sunken: '#1A1A1A',
    lv1: '#2C2C2C',
    lv2: '#373737',
    lv3: '#454545',
  },
  content: {
    primary: 'rgba(255, 255, 255, 0.95)',
    secondary: 'rgba(255, 255, 255, 0.65)',
    tertiary: 'rgba(255, 255, 255, 0.40)',
    invert: '#222222',
    brand: '#D8E63C',
  },
  border: {
    default: 'rgba(255, 255, 255, 0.10)',
    strong: 'rgba(255, 255, 255, 0.20)',
    brand: '#D8E63C',
  },
  status: {
    success: '#00E676',
    error: '#FF4B4B',
    warning: '#FFAB40',
    info: '#273287',
  },
  overlay: {
    dim: 'rgba(0, 0, 0, 0.60)',
    glass: 'rgba(255, 255, 255, 0.05)',
  },
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

const space = {
  xxs: '0.4rem',
  xs: '0.8rem',
  s: '1.2rem',
  m: '1.6rem',
  l: '2.4rem',
  xl: '3.2rem',
};

const theme = {
  colors,
  fontFamily,
  typography,
  space,
};

export default theme;
