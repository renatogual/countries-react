module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'plugin:jsx-a11y/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier', 'jsx-a11y'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': [1, { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    // 'no-underscore-dangle': 'off',
    // 'react/style-prop-object': 'off',
    // 'react/self-closing-comp': 'off',
    // 'arrow-body-style': 'off',
  },
}
