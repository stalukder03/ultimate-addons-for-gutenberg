<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.1.0
 *
 * @package uagb
 */

$block_slug = 'uagb/countdown';
$block_data = array(
	'doc'              => 'countdown',
	'slug'             => '',
	'admin_categories' => array( 'content', 'post' ),
	'link'             => 'countdown',
	'title'            => __( 'Countdown', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block allows you to add countdown timers.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-countdown-js' ),
	'priority'         => Spectra_Block_Prioritization::get_block_priority( 'countdown' ),
);
