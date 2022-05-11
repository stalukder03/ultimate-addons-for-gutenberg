const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const wp_rules = defaultConfig.module.rules.filter( function ( item ) {
	if ( String( item.test ) === String( /\.jsx?$/ ) ) {
		return true;
	}

	if ( String( item.test ) === String( /\.(sc|sa)ss$/ ) ) {
		item.exclude = [ /node_modules/, /editor/ ];
		return true;
	}
	return false;
} );

module.exports = {
	...defaultConfig,
	plugins: [
		...defaultConfig.plugins,
		// new BundleAnalyzerPlugin,
	],
	entry: {
		blocks: path.resolve( __dirname, 'src/blocks.js' ),
	},
	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
			'@Controls': path.resolve(
				__dirname,
				'blocks-config/uagb-controls/'
			),
			'@Components': path.resolve( __dirname, 'src/components/' ),
			'@Utils': path.resolve( __dirname, 'blocks-config/utils/' ),
			'@Blocks': path.resolve( __dirname, 'src/blocks/' ),
		},
	},
	module: {
		rules: [
			...wp_rules,
			{
				test: /\.(scss|css)$/,
				exclude: [ /node_modules/, /style/ ],
				use: [
					{
						loader: 'style-loader',
						options: {
							injectType: 'lazySingletonStyleTag',
							attributes: { id: 'uagb-editor-styles' },
							insert: function insertAtTop( element ) {

								const spectraEditorIframe = document.querySelector( '#sepctra-frame' );

								let parent = false;

								if ( ! spectraEditorIframe ) {
									// For Core Editor Desktop Iframe Static CSS loading.
									parent = document.head;
								} else {
									// For Spectra Editor Iframe Static CSS loading.
									parent = spectraEditorIframe.contentWindow.document.head;
								}

								if ( parent ) {
									parent.appendChild( element );
								}

								// eslint-disable-next-line no-underscore-dangle
								window._lastElementInsertedByStyleLoader = element;
							},
						},
					},
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	output: {
		...defaultConfig.output,
		// eslint-disable-next-line no-undef
		path: path.resolve( __dirname, 'dist' ),
	},
};
