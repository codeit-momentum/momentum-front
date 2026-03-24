import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  globalIgnores(['dist']), // 검사 제외 폴더
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      jsxA11y.configs.flat.recommended,
      importPlugin.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // 태그 관련 규칙 (경고 수준)
      'react/no-unknown-property': 'warn', // HTML 속성 잘못 사용 경고
      'jsx-a11y/alt-text': 'warn', // 이미지 태그의 alt 속성 누락 시 경고
      'react/self-closing-comp': [
        'warn',
        { component: true, html: true }, // children이 없는 경우 단일 태그 사용 권장
      ],
      'react/jsx-no-useless-fragment': 'warn', // 불필요한 Fragment 사용 제한
      'react/jsx-pascal-case': 'warn', // 컴포넌트 네이밍 PascalCase 권장
      'react/jsx-no-duplicate-props': 'warn', // JSX에서 중복 props 방지
      'react/jsx-boolean-value': ['warn', 'never'], // 불필요한 `={true}` 생략 권장

      // TypeScript 네이밍 컨벤션 (유연한 적용)
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow', // _변수명 허용
          trailingUnderscore: 'allow', // 변수명_ 허용
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'], // 클래스, 타입, 인터페이스는 PascalCase 적용
        },
      ],

      // 변수 선언 관련 규칙
      'prefer-const': 'error', // let 대신 const 사용 강제
      'no-var': 'error', // var 사용 금지

      // React 관련 규칙
      'prefer-arrow-callback': 'warn',
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }], // JSX 파일 확장자 제한
      'react/prop-types': 'off', // TypeScript 사용 시 PropTypes 필요 없음

      // 반복문, 조건문 관련
      'no-restricted-syntax': [
        'warn',
        {
          selector: 'ForStatement',
          message:
            'Use array methods like .map(), .filter() or .forEach() instead of for loops.',
        },
      ],
      'no-unused-expressions': ['error', { allowTernary: true }],

      // 기타 규칙
      eqeqeq: ['error', 'always'], // 삼중 등호(===) 사용 강제
      'no-console': 'warn', // console 사용 경고
      'react/jsx-key': 'error', // React key 필수 사용

      // 추가된 규칙들
      'react/jsx-max-props-per-line': [
        'warn',
        { maximum: 1, when: 'multiline' },
      ],

      '@typescript-eslint/explicit-function-return-type': 'off',

      // 새로운 기타 규칙 (warn 추가)
      'prefer-destructuring': ['warn', { object: true, array: false }], // 구조분해 할당 권장
      'prefer-template': 'warn', // 템플릿 리터럴 사용 권장
      'react/no-array-index-key': 'warn', // key로 index 사용 경고

      // import 관련 규칙
      'unused-imports/no-unused-imports': 'error', // 사용 안 하는 import 제거
      'import/order': [
        // import 문을 정해진 규칙에 따라 강제
        'error',
        {
          groups: [
            // 해당 그룹에 따라 나눔
            'builtin', // Node 기본 모듈 (fs, path ..)
            'external', // 외부 라이브러리 (react, axios ..)
            'internal', // 내부 코드 (alias 경로)
            ['parent', 'sibling'], // 상대 경로 (./, ../)
            'index', // ./index.ts
            'type', // typescript 타입
          ],
          pathGroups: [
            // 1. 라이브러리 (React)
            { pattern: 'react', group: 'external', position: 'before' }, // react는 항상 최상단

            // 2. 아키텍처 및 뷰 계층 -> internal 내부 순서 강제제
            { pattern: '@/app/**', group: 'internal', position: 'before' },
            { pattern: '@/pages/**', group: 'internal', position: 'before' },

            // 3. 기능 및 공통 계층 (Entities, Shared)
            { pattern: '@/entities/**', group: 'internal', position: 'before' },
            { pattern: '@/shared/**', group: 'internal', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'], // pathGroups의 영향 안 받음
          'newlines-between': 'always', // 그룹 사이 줄바꿈
          alphabetize: {
            order: 'asc', // 같은 그룹 내에서 알파벳 순 정렬
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  eslintConfigPrettier,
]);
