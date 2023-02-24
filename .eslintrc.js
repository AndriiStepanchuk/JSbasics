/* eslint-disable no-tabs */
module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: 'standard',
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		indent: [
			'warn',
			'tab'
		],
		quotes: [
			'error',
			'single'
		],
		semi: [
			'error',
			'always'
		],
		'no-unused-vars': [
			'warn'
		]
	}
};
