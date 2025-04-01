module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    '@nuxtjs/eslint-config-typescript',
    "plugin:vue/vue3-recommended",
    'plugin:@typescript-eslint/recommended',
    "plugin:prettier/recommended"
  ],
  parser: 'vue-eslint-parser',
  "parserOptions": {
    parser: '@typescript-eslint/parser', 
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'], 
  "rules": {
    "semi": ["error", "always"],
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "quotes": ["error", "single"],
    "no-unused-vars": "warn",
    "prettier/prettier": "error",
    "vue/no-multiple-template-root": "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'], 
  },
}