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

/**
 * Class doc
 */
class UAGB_Block_Module {

	/**
	 * Blocks config lists
	 * @return array
	 * @since 2.0.0
	 */
	public static function get_blocks_config(){
		return apply_filters('uagb_blocks_module_config', array(
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
		));
	}

	/**
	 * get block module dir path
	 * @since 2.0.0
	 * @return string
	 */
	public static function get_block_module_dir_path($path)
	{
		if(file_exists(UAGB_DIR . 'includes/blocks/' . $path)){
			return UAGB_DIR . 'includes/blocks/' . $path;
		}
		
		return apply_filters('uagb_block_module_dir_path', $path);
	}

	/**
	 * Get frontend css.
	 *
	 * @since 2.0.0
	 *
	 * @param string $slug Block slug.
	 * @param array  $attr Block attributes.
	 * @param string $id   Block id.
	 *
	 * @return array
	 */
	public static function get_frontend_css( $slug, $attr, $id ) {

		$blocks = self::get_blocks_config();

		$css = array();

		if ( isset( $blocks[ $slug ] ) ) {

			$block_dir =  self::get_block_module_dir_path($blocks[ $slug ]['dir']);
			
			$css_file = $block_dir . '/frontend.css.php';

			if ( file_exists( $css_file ) ) {

				// Set default attributes.
				$attr_file = $block_dir . '/attributes.php';

				if ( file_exists( $attr_file ) ) {

					$default_attr = include $attr_file;

					$attr = array_merge( $default_attr, $attr );
				}

				// Get CSS.
				$css = include $css_file;
			}
		}

		return $css;
	}
	/**
	 * Get frontend JS.
	 *
	 * @since 2.0.0
	 *
	 * @param string $slug Block slug.
	 * @param array  $attr Block attributes.
	 * @param string $id   Block id.
	 *
	 * @return array
	 */
	public static function get_frontend_js( $slug, $attr, $id ) {

		$blocks = self::get_blocks_config();

		$js = '';

		if ( isset( $blocks[ $slug ] ) ) {

			$block_dir =  self::get_block_module_dir_path($blocks[ $slug ]['dir']);

			$js_file = $block_dir . '/frontend.js.php';

			if ( file_exists( $js_file ) ) {

				// Set default attributes.
				$attr_file = $block_dir . '/attributes.php';

				if ( file_exists( $attr_file ) ) {

					$default_attr = include $attr_file;

					$attr = array_merge( $default_attr, $attr );
				}

				// Get JS.
				$js = include $js_file;
			}
		}

		return $js;
	}
}
