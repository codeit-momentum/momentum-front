import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
    },
    rules: {
      // 태그 관련 규칙
      'react/no-unknown-property': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'react/self-closing-comp': ['warn', { component: true, html: true }],
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-pascal-case': 'warn',
      'react/jsx-no-duplicate-props': 'warn',
      'react/jsx-boolean-value': ['warn', 'never'],

      // TypeScript 네이밍
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],

      // 변수 관련
      'prefer-const': 'error',
      'no-var': 'error',

      // React 관련
      'prefer-arrow-callback': 'warn',
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'react/prop-types': 'off',

      // 반복문
      'no-restricted-syntax': [
        'warn',
        {
          selector: 'ForStatement',
          message:
            'Use array methods like .map(), .filter() or .forEach() instead of for loops.',
        },
      ],
      'no-unused-expressions': ['error', { allowTernary: true }],

      // 기타
      eqeqeq: ['error', 'always'],
      'no-console': 'warn',
      'react/jsx-key': 'error',

      'react/jsx-max-props-per-line': [
        'warn',
        { maximum: 1, when: 'multiline' },
      ],

      '@typescript-eslint/explicit-function-return-type': 'off',

      'prefer-destructuring': ['warn', { object: true, array: false }],
      'prefer-template': 'warn',
      'react/no-array-index-key': 'warn',

      // import 관련
      'unused-imports/no-unused-imports': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'type',
          ],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },

            { pattern: '@/app/**', group: 'internal', position: 'before' },
            { pattern: '@/pages/**', group: 'internal', position: 'before' },

            { pattern: '@/entities/**', group: 'internal', position: 'before' },
            { pattern: '@/shared/**', group: 'internal', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  eslintConfigPrettier,
]);
