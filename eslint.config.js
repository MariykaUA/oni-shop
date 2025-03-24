import vueParser from 'vue-eslint-parser'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import {
  codeStyleRules,
  ignoreFiles,
  typescriptRules,
  vitestConfig,
  vueAttributesOrder,
  vueLintRules,
} from '../../eslint.common.js'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ignoreFiles,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      ...codeStyleRules,
      ...typescriptRules,
        },
      ...vueLintRules,
      ...vueAttributesOrder,
    },
  vitestConfig
)
