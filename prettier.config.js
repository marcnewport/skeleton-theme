export default {
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  singleAttributePerLine: true,
  endOfLine: 'lf',
  arrowParens: 'always',
  useTabs: false,
  bracketSpacing: true,
  printWidth: 80,
  plugins: ['@shopify/prettier-plugin-liquid'],
  overrides: [
    {
      files: '*.liquid',
      options: {
        parser: 'liquid-html',
        singleQuote: false,
      },
    },
  ],
}
