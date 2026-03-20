// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off', // cho phép console.log
      'no-unused-vars': 'warn',
      'semi': ,
      'quotes': ,
      'indent': ['error', 2],
    },
  },
];
