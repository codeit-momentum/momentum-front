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
      /** 메인 폰트 - NEXON Lv.1 Gothic */
      main: string;
    };
    typography: {
      /** 32px / Bold / 130% / 2% - 핵심 수치 강조 */
      display: SerializedStyles;
      /** 20px / Regular / 140% / 2% - 페이지 최상단 헤더 */
      title1: SerializedStyles;
      /** 18px / Regular / 140% / 2% - 섹션 구분 타이틀 */
      title2: SerializedStyles;
      /** 16px / Regular / 150% / 0 - 주 콘텐츠 메인 텍스트 */
      body1: SerializedStyles;
      /** 14px / Regular / 150% / 0 - 보조 설명 텍스트, 피드 게시물 본문 */
      body2: SerializedStyles;
      /** 12px / Bold / 120% / 0 - 버튼 텍스트, 태그 레이블 */
      label1: SerializedStyles;
      /** 12px / Regular / 120% / 0 - 버튼 텍스트, 태그 레이블 보조 */
      label2: SerializedStyles;
      /** 11px / Regular / 120% / 0 - 최소 단위 정보 텍스트 */
      label3: SerializedStyles;
    };
    space: {
      /** 4px - 미세한 간격 (ex. 텍스트와 아이콘 사이) */
      xxs: string;
      /** 8px - 기본 간격 */
      xs: string;
      /** 12px - 카드 내 콘텐츠 간격 */
      s: string;
      /** 16px - 표준 여백 */
      m: string;
      /** 24px - 큰 그룹 간의 간격 (ex. 헤더와 컨텐츠 사이) */
      l: string;
      /** 32px - 확실한 구분 (ex. 섹션과 섹션 사이) */
      xl: string;
    };
  }
}
