<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/advanced-heading';
$block_data = array(
	'slug'             => '',
	'admin_categories' => array( 'content', 'core' ),
	'link'             => 'advanced-heading',
	'doc'              => 'advanced-heading',
	'title'            => __( 'Heading', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Add heading, sub heading and a separator using one block.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => Spectra_Block_Prioritization::get_block_priority( 'advanced-heading' ),
	'deprecated'       => false,
	'static_dependencies' => array(
		'uagb-animated-headline-js'  => array(
			'src'  => UAGB_Scripts_Utils::get_js_url( 'animated-headline' ),
			'dep'  => array( 'jquery' ),
			'type' => 'js',
		),
	),
	'dynamic_assets'   => array(
		'dir' => 'advanced-heading',
	),
);
