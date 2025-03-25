module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
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
    "quotes": ["error", "single"],
    "no-unused-vars": "warn",
    "prettier/prettier": "error",
    "vue/no-multiple-template-root": "off",
  }
}