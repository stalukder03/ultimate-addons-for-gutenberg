<?php
/**
 * Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$border_defaults = array(
	'borderStyle'             => 'solid',
	'borderTopWidth'          => '',
	'borderRightWidth'        => '',
	'borderBottomWidth'       => '',
	'borderLeftWidth'         => '',
	'borderTopLeftRadius'     => '',
	'borderTopRightRadius'    => '',
	'borderBottomLeftRadius'  => '',
	'borderBottomRightRadius' => '',
);

$border_attribute = UAGB_Block_Helper::uag_generate_border_attribute( 'inner', $border_defaults );

return array_merge(
	array(
		'overrideStyle'     => false,
		'innerBorderHColor' => '',
	),
	$border_attribute,
);
