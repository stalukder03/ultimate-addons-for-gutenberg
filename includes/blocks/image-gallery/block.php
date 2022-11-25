<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/image-gallery';
$block_data = array(
	'doc'              => 'image-gallery',
	'slug'             => '',
	'admin_categories' => array( 'content', 'creative' ),
	'link'             => 'image-gallery',
	'title'            => __( 'Image Gallery', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Create a highly customizable image gallery', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => Spectra_Block_Prioritization::get_block_priority( 'image-gallery' ),
	'js_assets'        => array( 'uagb-slick-js', 'uagb-masonry', 'uagb-imagesloaded', 'uagb-image-gallery-js' ),
	'css_assets'       => array( 'uagb-slick-css' ),
);
