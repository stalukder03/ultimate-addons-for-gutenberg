<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/separator';
$block_data = array(
	'doc'              => 'section',
	'slug'             => '',
	'admin_categories' => array(),
	'link'             => 'separator',
	'title'            => __( 'Separator', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Add Block Separator.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => Spectra_Block_Prioritization::get_block_priority( 'section' ),
	'deprecated'       => false,
	'dynamic_assets'   => array(
		'dir' => 'separator',
	),
);
