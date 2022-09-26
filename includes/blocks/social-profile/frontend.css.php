<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_name = 'social-profile';

$bg_size_fallback = UAGB_Block_Helper::get_fallback_number( $attr['bgSize'], 'bgSize', $block_name );
$size_fallback    = UAGB_Block_Helper::get_fallback_number( $attr['size'], 'size', $block_name );
$gap_fallback     = UAGB_Block_Helper::get_fallback_number( $attr['gap'], 'gap', $block_name );


$alignment   = ( 'left' === $attr['align'] ) ? 'flex-start' : ( ( 'right' === $attr['align'] ) ? 'flex-end' : 'center' );

$image_size   = UAGB_Helper::get_css_value( $size_fallback, $attr['sizeType'] );

$selectors = array(
	' .uagb-ss-repeater a.uagb-ss__link'           => array(
		'color' => $attr['iconColor'],
	),
	' .uagb-ss-repeater a.uagb-ss__link svg'       => array(
		'fill' => $attr['iconColor'],
	),
	' .uagb-ss-repeater:hover a.uagb-ss__link'     => array(
		'color' => $attr['iconHoverColor'],
	),
	' .uagb-ss-repeater:hover a.uagb-ss__link svg' => array(
		'fill' => $attr['iconHoverColor'],
	),
	' .uagb-ss-repeater.uagb-ss__wrapper'          => array(
		'background' => $attr['iconBgColor'],
	),
	' .uagb-ss-repeater.uagb-ss__wrapper:hover'    => array(
		'background' => $attr['iconBgHoverColor'],
	),
	'  .uagb-icon-list__label' => array(
		'font-family'     => $attr['fontFamily'],
		'font-weight'     => $attr['fontWeight'],
	),
);

$selectors['.uagb-icon-list__label'] = array(
	'font-family'     => $attr['fontFamily'],
    'font-style'      => $attr['fontStyle'],
	'font-weight'     => $attr['fontWeight'],
	'color'           => $attr['labelColor'],
);

$selectors['.uagb-social-profile__outer-wrap .block-editor-inner-blocks']   = array(
	'text-align' => UAGB_Helper::get_css_value( $attr['align'] ),
);

$selectors['.uagb-social-profile__layout-vertical .uagb-ss__wrapper']     = array(
	'margin-left'   => 0,
	'margin-right'  => 0,
	'margin-bottom' => UAGB_Helper::get_css_value( $gap_fallback, 'px' ),
);
$selectors['.uagb-social-profile__layout-vertical .uagb-ss__link']        = array(
	'padding' => UAGB_Helper::get_css_value( $bg_size_fallback, 'px' ),
);
$selectors['.uagb-social-profile__layout-horizontal .uagb-ss__link']      = array(
	'padding' => UAGB_Helper::get_css_value( $bg_size_fallback, 'px' ),
);
$selectors['.uagb-social-profile__layout-horizontal .uagb-ss__wrapper']   = array(
	'margin-left'  => UAGB_Helper::get_css_value( ( $gap_fallback / 2 ), 'px' ),
	'margin-right' => UAGB_Helper::get_css_value( ( $gap_fallback / 2 ), 'px' ),
);

$selectors[' .wp-block-uagb-social-profile-child ']   = array(
	'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
);

$selectors[' .uagb-ss__source-wrap'] = array(
	'width' => $image_size,
);

$selectors[' .uagb-ss__source-wrap svg'] = array(
	'width'  => $image_size,
	'height' => $image_size,
);

$selectors[' .uagb-ss__source-image'] = array(
	'width' => $image_size,
);

$selectors[' .uagb-ss__source-icon'] = array(
	'width'     => $image_size,
	'height'    => $image_size,
	'font-size' => $image_size,
);
$selectors['.uagb-social-profile__outer-wrap'] = array(
	'justify-content'   => $alignment,
	'-webkit-box-pack'  => $alignment,
	'-ms-flex-pack'     => $alignment,
	'justify-content'   => $alignment,
	'-webkit-box-align' => $alignment,
	'-ms-flex-align'    => $alignment,
	'align-items'       => $alignment,
);


if ( 'horizontal' === $attr['social_layout'] ) {

	if ( 'desktop' === $attr['stack'] ) {

		$selectors[' .uagb-ss__wrapper']   = array(
			'margin-left'   => 0,
			'margin-right'  => 0,
			'margin-bottom' => UAGB_Helper::get_css_value( $gap_fallback, 'px' ),
		);

		$selectors['.uagb-social-profile__outer-wrap'] = array(
			'flex-direction'    => 'column',
			'justify-content'   => $alignment,
			'-webkit-box-pack'  => $alignment,
			'-ms-flex-pack'     => $alignment,
			'justify-content'   => $alignment,
			'-webkit-box-align' => $alignment,
			'-ms-flex-align'    => $alignment,
			'align-items'       => $alignment,
		);
	};
}

$combined_selectors = array(
	'desktop' => $selectors,
);

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-social-profile-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
