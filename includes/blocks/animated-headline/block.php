<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/animated-headline';
$block_data = array(
	'slug'             => '',
	'admin_categories' => array( 'content' ),
	'link'             => 'animated-headline',
	'doc'              => 'animated-headline',
	'title'            => __( 'Animated Headline', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block lets you add a animated headline.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-animated-headline-js' ),
	'priority'         => 1,
);
