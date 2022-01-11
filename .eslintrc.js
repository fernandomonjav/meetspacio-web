module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-img-element': 'off',
  },
}
