<?php
/**
 * Block Information.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/faq';
$block_data = array(
	'doc'              => 'faq-schema-or-accordion',
	'slug'             => '',
	'admin_categories' => array( 'seo' ),
	'link'             => 'faq-schema',
	'title'            => __( 'FAQ', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Add accordions/FAQ schema to your page.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-faq-js' ),
	'priority'         => Spectra_Block_Prioritization::get_block_priority( 'faq' ),
	'deprecated'       => false,
	'dynamic_assets'   => array(
		'dir' => 'faq',
	),
	'js_assets'        => array( 'uagb-faq-js' ),
);
