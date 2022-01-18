<?php
/**
 * UAGB Block Module.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'UAGB_Block_Module' ) ) {

	/**
	 * Class doc
	 */
	class UAGB_Block_Module {

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 * Blocks Info.
		 *
		 * @var block_attributes
		 */
		public static $blocks = null;

		/**
		 * Block Attributes
		 *
		 * @var block_attributes
		 */
		public static $block_attributes = null;

		/**
		 * Block Assets
		 *
		 * @var block_assets
		 */
		public static $block_assets = null;

		/**
		 *  Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {
			add_filter( 'uag_add_block_static_assets', array( __CLASS__, 'uag_add_block_static_assets' ) );
		}

		/**
		 * Add Blocks Static Assets.
		 *
		 * @since 2.0.0
		 *
		 * @param string $block_assets Block Assets.
		 * @return array
		 */
		public static function uag_add_block_static_assets( $block_assets ) {

			$blocks = ( null === self::$blocks ) ? self::get_block_info() : self::$blocks;

			foreach ( $blocks as $block ) {
				if ( isset( $block['static_assets'] ) ) {

					foreach ( $block['static_assets'] as $key => $static_assets ) {
						if ( isset( $static_assets ) && is_array( $static_assets ) && isset( $static_assets['src'] ) ) {
							$block_assets[ $key ] = $static_assets;
						}
					}
				}
			}

			return $block_assets;
		}

		/**
		 * Get frontend Assets.
		 *
		 * @since 2.0.0
		 *
		 * @param string $slug Block slug.
		 * @param array  $attr Block attributes.
		 * @param string $id   Block id.
		 * @param string $type Asset Type.
		 * @return array
		 */
		public static function get_frontend_assets( $slug, $attr, $id, $type = 'css' ) {

			$blocks = apply_filters(
				'uag_frontend_assets_blocks',
				array(
					'star-rating'        => array(
						'dir' => 'star-rating',
					),
					'advanced-heading'   => array(
						'dir' => 'advanced-heading',
					),
					'columns'            => array(
						'dir' => 'columns',
					),
					'column'             => array(
						'dir' => 'column',
					),
					'blockquote'         => array(
						'dir' => 'blockquote',
					),
					'call-to-action'     => array(
						'dir' => 'call-to-action',
					),
					'cf7-styler'         => array(
						'dir' => 'cf7-styler',
					),
					'content-timeline'   => array(
						'dir' => 'content-timeline',
					),
					'faq'                => array(
						'dir' => 'faq',
					),
					'gf-styler'          => array(
						'dir' => 'gf-styler',
					),
					'how-to'             => array(
						'dir' => 'how-to',
					),
					'how-to-step'        => array(
						'dir' => 'how-to-step',
					),
					'icon-list'          => array(
						'dir' => 'icon-list',
					),
					'icon-list-child'    => array(
						'dir' => 'icon-list-child',
					),
					'info-box'           => array(
						'dir' => 'info-box',
					),
					'inline-notice'      => array(
						'dir' => 'inline-notice',
					),
					'marketing-button'   => array(
						'dir' => 'marketing-button',
					),
					'buttons'            => array(
						'dir' => 'buttons',
					),
					'buttons-child'      => array(
						'dir' => 'buttons-child',
					),
					'post-carousel'      => array(
						'dir' => 'post-carousel',
					),
					'post-grid'          => array(
						'dir' => 'post-grid',
					),
					'post-masonry'       => array(
						'dir' => 'post-masonry',
					),
					'post-timeline'      => array(
						'dir' => 'post-timeline',
					),
					'restaurant-menu'    => array(
						'dir' => 'restaurant-menu',
					),
					'review'             => array(
						'dir' => 'review',
					),
					'section'            => array(
						'dir' => 'section',
					),
					'social-share'       => array(
						'dir' => 'social-share',
					),
					'social-share-child' => array(
						'dir' => 'social-share-child',
					),
					'tabs'               => array(
						'dir' => 'tabs',
					),
					'table-of-contents'  => array(
						'dir' => 'table-of-contents',
					),
					'team'               => array(
						'dir' => 'team',
					),
					'testimonial'        => array(
						'dir' => 'testimonial',
					),
					'wp-search'          => array(
						'dir' => 'wp-search',
					),
					'taxonomy-list'      => array(
						'dir' => 'taxonomy-list',
					),
					'forms'              => array(
						'dir' => 'forms',
					),
					'lottie'             => array(
						'dir' => 'lottie',
					),
				)
			);

			$assets = array();

			if ( 'js' === $type ) {
				$assets = '';
			}

			if ( isset( $blocks[ $slug ] ) ) {

				$main_dir = UAGB_DIR;

				if ( isset( $blocks[ $slug ]['plugin-dir'] ) ) {
					$main_dir = $blocks[ $slug ]['plugin-dir'];
				}

				$block_dir = $main_dir . 'includes/blocks/' . $blocks[ $slug ]['dir'];

				$assets_file = $block_dir . '/frontend.' . $type . '.php';

				if ( file_exists( $assets_file ) ) {

					// Set default attributes.
					$attr_file = $block_dir . '/attributes.php';

					if ( file_exists( $attr_file ) ) {

						$default_attr = include $attr_file;

						$attr = array_merge( $default_attr, $attr );
					}

					// Get Assets.
					$assets = include $assets_file;
				}
			}

			return $assets;

		}

		/**
		 * Get Widget List.
		 *
		 * @since 2.0.0
		 *
		 * @return array The Widget List.
		 */
		public static function get_block_info() {

			if ( null === self::$block_attributes ) {

				self::$block_attributes = array();

				$block_files = apply_filters( 'uag_add_new_block', glob( UAGB_DIR . 'includes/blocks/*/block.php' ) );

				foreach ( $block_files as $block_file ) {
					$block_slug = '';
					$block_data = array();

					include $block_file;

					if ( ! empty( $block_slug ) && ! empty( $block_data ) ) {
						self::$block_attributes[ $block_slug ] = $block_data;
					}
				}
			}
			return self::$block_attributes;
		}

		/**
		 * Get Block Assets.
		 *
		 * @since 1.13.4
		 *
		 * @return array The Asset List.
		 */
		public static function get_block_assets() {

			$blocks = UAGB_Admin_Helper::get_block_options();

			if ( null === self::$block_assets ) {
				self::$block_assets = array(
					// Lib.
					'uagb-imagesloaded' => array(
						'src'  => UAGB_URL . 'assets/js/imagesloaded.min.js',
						'dep'  => array( 'jquery' ),
						'type' => 'js',
					),
					'uagb-slick-js'     => array(
						'src'  => UAGB_URL . 'assets/js/slick.min.js',
						'dep'  => array( 'jquery' ),
						'type' => 'js',
					),
					'uagb-slick-css'    => array(
						'src'  => UAGB_URL . 'assets/css/slick.min.css',
						'dep'  => array(),
						'type' => 'css',
					),
					'uagb-masonry'      => array(
						'src'  => UAGB_URL . 'assets/js/isotope.min.js',
						'dep'  => array( 'jquery' ),
						'type' => 'js',
					),
					'uagb-cookie-lib'   => array(
						'src'        => UAGB_URL . 'assets/js/js_cookie.min.js',
						'dep'        => array( 'jquery' ),
						'skipEditor' => true,
						'type'       => 'js',
					),
					'uagb-bodymovin-js' => array(
						'src'        => UAGB_URL . 'assets/js/uagb-bodymovin.min.js',
						'dep'        => array(),
						'skipEditor' => true,
						'type'       => 'js',
					),
				);
			}

			return apply_filters( 'uag_add_block_static_assets', self::$block_assets );
		}
	}
}

/**
 *  Prepare if class 'UAGB_Block_Module' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Block_Module::get_instance();
