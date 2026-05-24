import '@emotion/react';
import type { SerializedStyles } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      brand: {
        primary: {
          /** #D8E63C - 핵심 버튼, 강조 텍스트 */
          default: string;
          /** #BCCF2D - Primary 클릭 시 피드백 */
          pressed: string;
        };
        secondary: {
          /** #273287 - 보조 섹션, 깊이감 있는 강조 */
          default: string;
          /** #1F286B - Secondary 클릭 시 피드백 */
          pressed: string;
        };
      };
      surface: {
        /** #222222 - 기본 배경 */
        bg: string;
        /** #1A1A1A - 입력 폼 */
        sunken: string;
        /** #2C2C2C - 기본 카드, 리스트 배경 */
        lv1: string;
        /** #373737 - 버튼, 플로팅 요소 */
        lv2: string;
        /** #454545 - 가장 밝은 강조 레이어 */
        lv3: string;
      };
      content: {
        /** #FFFFFF 95% - 메인 타이틀, 본문 */
        primary: string;
        /** #FFFFFF 65% - 보조 설명, 레이블 */
        secondary: string;
        /** #FFFFFF 40% - 비활성화 텍스트, 플레이스홀더 */
        tertiary: string;
        /** #222222 - 밝은 배경 위에 올라가는 어두운 텍스트 */
        invert: string;
        /** #D8E63C - 텍스트 내 강조 키워드 */
        brand: string;
      };
      border: {
        /** #FFFFFF 10% - 일반적인 구분선 */
        default: string;
        /** #FFFFFF 20% - 명확한 구분 (ex. 카드 테두리) */
        strong: string;
        /** #D8E63C - 포커스된 입력창, 선택된 카드 테두리 */
        brand: string;
      };
      status: {
        /** #00E676 - 성공, 미션 완료 */
        success: string;
        /** #FF4B4B - 삭제, 경고, 실패 */
        error: string;
        /** #FFAB40 - 주의 메시지 */
        warning: string;
        /** #273287 - 일반 정보 안내 */
        info: string;
      };
      overlay: {
        /** #000000 60% - 모달 배경 */
        dim: string;
        /** #FFFFFF 5% - 약간의 비침 효과가 필요한 경우 */
        glass: string;
      };
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
