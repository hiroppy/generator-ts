module.exports = {
  env: {
    browser: false,
    node: true,
    'jest/globals': true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['jest'],
  overrides: [
    {
      files: ['*.js'],
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      rules: {}
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended'
      ],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: {}
    }
  ]
};
