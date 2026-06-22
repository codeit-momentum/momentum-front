import { css, Global, useTheme } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import type { Theme } from '@emotion/react';

const style = (theme: Theme) => css`
  ${emotionNormalize};

  * {
    box-sizing: border-box;
  }

  ol,
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    width: 100%;
    text-align: left;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    padding: 0;
    margin: 0;
    &:hover {
      text-decoration: none;
      color: none;
    }

    &:active {
      text-decoration: none;
      color: black;
    }

    &:visited {
      text-decoration: none;
      color: black;
    }

    &:link {
      text-decoration: none;
      color: black;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }

  input {
    outline: none;
  }

  :root {
    --vh: 100%;
  }

  body {
    max-width: 700px;
    height: 100vh;
    padding: 0 2.4rem;
    font-family: ${theme.fontFamily.main};
    background: ${theme.colors.surface.bg};
    color: ${theme.colors.content.primary};
    ${theme.typography.body1};
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  #root {
    height: 100vh;
  }
  #root,
  body,
  html {
    scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
    margin: 0 auto;
    font-size: 62.5%;
    -ms-overflow-style: none; /* 인터넷 익스플로러  스크롤바 숨김 */
    scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */

    /* 버튼 클릭 시 색 제거 */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  #root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 스크롤바 숨김 */
  }
`;

const GlobalStyle = () => {
  const theme = useTheme();

  return <Global styles={style(theme)} />;
};

export default GlobalStyle;
