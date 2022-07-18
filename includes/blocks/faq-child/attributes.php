<?php
/**
 * Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$border_attribute = UAGB_Block_Helper::uag_generate_border_attribute( 'inner' );

return array_merge(
  array(
    'overrideStyle'    => false,
  ),
	$border_attribute,
);
