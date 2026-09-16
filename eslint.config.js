import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginAstro from 'eslint-plugin-astro'
import { neostandard } from 'neostandard'
import nodePlugin from 'eslint-plugin-n'
import importPlugin from 'eslint-plugin-import'
import pluginPromise from 'eslint-plugin-promise'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import globals from 'globals'

export default [
	{
		ignores: ['dist/', '.astro/']
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...neostandard({ noStyle: true, ts: true }),
	{
		...importPlugin.flatConfigs.recommended,
		files: ['**/*.{js,mjs,cjs,ts}'],
		rules: {
			...importPlugin.flatConfigs.recommended.rules,
			// Astro virtual modules (astro:*) and Vite-resolved bare specifiers
			// aren't visible to eslint-plugin-import's resolver; astro check
			// already validates real import errors via the TS compiler.
			'import/no-unresolved': 'off'
		}
	},
	{
		...nodePlugin.configs['flat/recommended-module'],
		files: ['*.config.{js,mjs,cjs}'],
		rules: {
			...nodePlugin.configs['flat/recommended-module'].rules,
			'n/no-unpublished-import': 'off'
		}
	},
	pluginPromise.configs['flat/recommended'],
	...eslintPluginAstro.configs.recommended,
	eslintConfigPrettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		rules: {
			'no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			],
			// False positive on `...eslintPluginAstro.configs.recommended`,
			// which is the pattern eslint-plugin-astro's own docs recommend.
			'import/no-named-as-default-member': 'off'
		}
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: ['.astro']
			}
		},
		rules: {
			'astro/no-set-html-directive': 'error'
		}
	}
]
