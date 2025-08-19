import js from '@eslint/js'
import shopifyEslintPlugin from '@shopify/eslint-plugin'
import globals from 'globals'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'

export default [
  js.configs.recommended,
  ...shopifyEslintPlugin.configs.esnext,
  ...shopifyEslintPlugin.configs.prettier,
  {
    plugins: {
      'unused-imports': unusedImportsPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'unused-imports/no-unused-imports': 'error',
      'no-console': 'warn',
    },
  },
  {
    ignores: ['assets/', '*.config.js'],
  },
]
