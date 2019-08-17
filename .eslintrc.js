module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
    },
  },
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/destructuring-assignment': 0,
    'no-return-assign': 0,
    'prefer-destructuring': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
  },
};
