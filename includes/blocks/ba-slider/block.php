<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/ba-slider';
$block_data = array(
	'slug'             => '',
	'admin_categories' => array( 'content' ),
	'link'             => 'ba-slider',
	'doc'              => 'ba-slider',
	'title'            => __( 'Image Comparison Block', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block allows visitors to compare two images using a slider.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => 2,
);

/**
 * Enqueue <img-comparison-slider> scripts and styles for frontend.
 */
function uagb_ba_slider_scripts() {
	wp_enqueue_style( 'uagb-style-ba-slider', dirname( plugin_dir_url( __DIR__ ), 2 ) . '/assets/css/img-comparison-slider-styles.css', array(), time() );
	wp_enqueue_script( 'uagb-style-ba-slider', dirname( plugin_dir_url( __DIR__ ), 2 ) . '/assets/js/img-comparison-slider-index.js', array(), time(), true );
}
add_action( 'wp_enqueue_scripts', 'uagb_ba_slider_scripts' );
