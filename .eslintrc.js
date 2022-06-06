module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-console': 0,
    semi: 0,
    'import/no-unresolved': 0,
    'vue/multi-word-component-names': 0,
    'import/no-extraneous-dependencies': 0,
    'comma-dangle': false
  },
}
