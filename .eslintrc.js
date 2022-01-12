module.exports = {
	root: true,
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	ignorePatterns: [ 'deprecated.js' ],
	rules: {
		'camelcase': 'off',
		'prettier/prettier': 'off',
		'@wordpress/no-global-event-listener': 'off',
		'quotes': [ 'error', 'single', { allowTemplateLiterals: true, avoidEscape: true } ],
		'quote-props': [ 'error', 'consistent-as-needed' ],
		'space-in-parens': ['error', 'always', { exceptions: [ 'empty' ] } ]
	},
	overrides: [
		{
			files: [
				'src/blocks/*/styling.js',
				'src/blocks/*/*/styling.js',
				'src/blocks/*/inline-styles.js',
				'tests/e2e/**/*.js',
			],
			extends: [
				'plugin:@wordpress/eslint-plugin/test-e2e',
				'plugin:jest/all',
			],
			settings: {
				jest: {
					version: 26,
				},
			},
			rules: {
				// 'quotes': [ 'warn', 'single', { allowTemplateLiterals: true, avoidEscape: true } ],
				'object-shorthand': ['error', 'never'],
				'quote-props': [ 'error', 'always' ],
				'jest/lowercase-name': [
					'error',
					{
						ignore: [
							'describe',
						],
					},
				],
				'jest/no-hooks': 'off',
				'jest/prefer-expect-assertions': 'off',
				'jest/prefer-inline-snapshots': 'off',
			},
		},
	],
	globals: {
		uagb_blocks_info: true,
		UAGB_Block_Icons: true,
		__webpack_public_path__: true,
		jQuery: true,
		uagb_deactivate_blocks: true,
		uag_react: true,
		uagb_data: true,
		bodymovin: true,
		uagb_forms_data: true,
		define: true,
		Cookies: true
	},
};
