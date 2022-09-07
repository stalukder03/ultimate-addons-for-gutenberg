<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/post-grid';
$block_data = array(
	'doc'              => 'post-grid',
	'slug'             => '',
	'admin_categories' => array( 'content', 'post' ),
	'link'             => 'post-layouts/#post-grid',
	'title'            => __( 'Post Grid', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Display your posts in a grid layout.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => 22,
	'deprecated'       => false,
);
