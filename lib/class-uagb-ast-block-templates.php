<?php
/**
 * Init
 *
 * @since 1.0.0
 * @package Ast Block Templates
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'UAGB_Ast_Block_Templates' ) ) :

	/**
	 * Admin
	 */
	class UAGB_Ast_Block_Templates {

		/**
		 * Instance
		 *
		 * @since 1.0.0
		 * @var (Object) UAGB_Ast_Block_Templates
		 */
		private static $instance = null;

		/**
		 * Get Instance
		 *
		 * @since 1.0.0
		 *
		 * @return object Class object.
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Constructor.
		 *
		 * @since 1.0.0
		 */
		private function __construct() {
			$this->version_check();
			add_action( 'init', array( $this, 'load' ), 999 );
			add_filter( 'ast_block_templates_localize_vars', array( $this, 'update_vars' ) );
		}

		/**
		 * Add support to change template button text.
		 *
		 * @since x.x.x
		 * @param  array $vars localize array of button.
		 */
		public function update_vars( $vars = array() ) {
			if ( defined( 'ASTRA_SITES_VER' ) ) {
				return $vars;
			}

			$vars['button_text']         = 'UAG Templates';
			$vars['display_button_logo'] = true;
			$vars['popup_logo_uri']      = UAGB_URL . '/admin/assets/images/uagb_logo.svg';
			$vars['button_logo']         = UAGB_URL . '/admin/assets/images/uag-white-logo.svg';
			$vars['button_class']        = 'uagb-template-button-logo';
			return $vars;
		}

		/**
		 * Version Check
		 *
		 * @return void
		 */
		public function version_check() {

			$file = realpath( dirname( __FILE__ ) . '/ast-block-templates/version.json' );

			// Is file exist?
			if ( is_file( $file ) ) {
				// @codingStandardsIgnoreStart
				$file_data = json_decode( file_get_contents( $file ), true );
				// @codingStandardsIgnoreEnd
				global $ast_block_templates_version, $ast_block_templates_init;
				$path    = realpath( dirname( __FILE__ ) . '/ast-block-templates/ast-block-templates.php' );
				$version = isset( $file_data['ast-block-templates'] ) ? $file_data['ast-block-templates'] : 0;

				// Compare versions.
				if ( version_compare( $version, $ast_block_templates_version, '>' ) ) {
					$ast_block_templates_version = $version;
					$ast_block_templates_init    = $path;
				}
			}
		}

		/**
		 * Load latest plugin
		 *
		 * @return void
		 */
		public function load() {
			global $ast_block_templates_version, $ast_block_templates_init;
			if ( is_file( realpath( $ast_block_templates_init ) ) ) {
				include_once realpath( $ast_block_templates_init );
			}
		}

	}

	/**
	 * Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Ast_Block_Templates::get_instance();

endif;
