<?php
/**
 * Block Information.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/faq';
$block_data = array(
	'doc'              => 'faq-schema-or-accordion',
	'slug'             => '',
	'admin_categories' => array( 'seo' ),
	'link'             => 'faq',
	'title'            => __( 'FAQ - Schema', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block helps you add FAQ or Accordion with automatically adding FAQ Schema to your page.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-faq-js' ),
);
