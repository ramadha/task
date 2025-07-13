import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: Object.fromEntries(
        Object.entries({
          ...globals.browser,
          ...globals.es2021,
        }).map(([key, value]) => [key.trim(), value]),
      ),
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Core
      'no-console': 'warn',
      'no-debugger': 'warn',

      // TypeScript
      '@typescript-eslint/no-unused-vars': 'warn',

      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Accessibility
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-autofocus': 'warn',

      // Prettier
      ...prettier.rules,
    },
  },
];
