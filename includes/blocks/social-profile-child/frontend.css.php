<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selectors = UAGB_Block_Helper::get_social_profile_child_selectors( $attr, $id, true );

$desktop = UAGB_Helper::generate_css( $selectors, '.uagb-block-' . $id );

$generated_css = array(
	'desktop' => $desktop,
);

return $generated_css;
