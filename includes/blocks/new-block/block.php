<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/new-block';
$block_data = array(
	'doc'              => 'new-block',
	'slug'             => '',
	'admin_categories' => array( 'core', 'content' ),
	'link'             => 'new-block',
	'title'            => __( 'Info Box 2.0', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Add Spectra blocks inside the infoBox to design multiple layouts.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => Spectra_Block_Prioritization::get_block_priority( 'new-block' ),
	'deprecated'       => false,
	'dynamic_assets'   => array(
		'dir' => 'new-block',
	),
);
