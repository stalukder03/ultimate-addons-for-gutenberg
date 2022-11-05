<?php
/**
 * Block Information.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/slider';
$block_data = array(
	'doc'              => 'slider',
	'slug'             => '',
	'admin_categories' => array( 'content' ),
	'link'             => 'slider',
	'title'            => __( 'Slider', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Create a Slider.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-slider-js' ),
	'css_assets'       => array( 'uagb-slider-css' ),
	'priority'         => 11,
	'deprecated'       => false,
);