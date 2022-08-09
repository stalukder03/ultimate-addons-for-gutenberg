<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/section';
$block_data = array(
	'doc'              => 'section',
	'slug'             => '',
	'admin_categories' => array(),
	'link'             => 'sections',
	'title'            => __( 'Advanced Row', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block is an outer wrap section that allows you to add other blocks within it.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => 36,
	'dynamic_assets'   => array(
		'dir' => 'section',
	),
);
