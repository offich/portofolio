import eslintPluginImport from 'eslint-plugin-import'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    ...eslintPluginImport.configs['import/recommended'],

    rules: {
      'no-console': ['error'],

      // vue
      'vue/comma-dangle': ['error', 'always-multiline'], // rules that applies to template in vue file

      // @stylistic
      '@stylistic/comma-dangle': ['error', 'always-multiline'],

      // import
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '#**', // type files generated by nuxt
              group: 'external',
            },
          ],
        },
      ],
    },
  },
)

// your custom flat configs go here, for example:
// {
//   files: ['**/*.ts', '**/*.tsx'],
//   rules: {
//     'no-console': 'off' // allow console.log in TypeScript files
//   }
// },
// {
//   ...
// }
