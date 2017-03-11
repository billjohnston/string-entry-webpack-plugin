Webpack plugin for adding entries with a string

Usage:

	var StringEntryPlugin = require('string-entry-webpack-plugin')

	...
	plugins: [
		new StringEntryPlugin({
			'fileName.js': 'File contents',
			'secondFile.js': 'some more contents'
		}),
	]
