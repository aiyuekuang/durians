module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    require.resolve('@umijs/lint/dist/config/eslint'),
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    // TypeScript 规则
    '@typescript-eslint/no-unused-vars': 'off', // 开发阶段关闭
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-types': 'off', // 允许使用 Function 类型
    '@typescript-eslint/no-use-before-define': 'off',

    // React 规则
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-key': 'off',
    'react/jsx-no-duplicate-props': 'off',
    'react/jsx-no-undef': 'off',
    'react/jsx-uses-vars': 'off',

    // React Hooks 规则
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',

    // JSX A11y 规则 - 开发阶段关闭
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    // Jest 规则
    'jest/no-conditional-expect': 'off',

    // 通用规则
    'no-console': 'off',
    'no-debugger': 'off',
    'prefer-const': 'off',
    'eqeqeq': 'off',
    'no-var': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-empty': 'off',
    'no-prototype-builtins': 'off',
    'no-case-declarations': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.{ts,tsx}', '**/__tests__/**/*.{ts,tsx}'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'no-console': 'off',
      },
    },
  ],
  ignorePatterns: [
    'dist',
    'docs-dist',
    'coverage',
    'node_modules',
    '*.min.js',
    '.dumi',
  ],
};
