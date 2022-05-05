<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

if ( ! function_exists( 'get_dimensions' ) ) {
	/**
	 * Get dimensions of slider/images based on size type (full, thumbnail, small, medium, large, custom).
	 *
	 * @param string $dimension (full, thumb, small, medium, large, custom).
	 * @param string $newWidth Pass the new width in case of custom type.
	 * @param string $newHeight Pass the new height in case of custom type.
	 * @return array Array of [ width, height, maxWidth, maxHeight ]
	 */
	function get_dimensions( $dimension, $newWidth = '100%', $newHeight = 'auto' ) {

		$width     = '100%';
		$height    = 'auto';
		$maxWidth  = '100%';
		$maxHeight = '100%';

		switch ( $dimension ) {
			case 'full':
				$width  = '100%';
				$height = 'auto';
				break;
			case 'thumb':
				$width     = '100%';
				$height    = 'auto';
				$maxWidth  = '150px';
				$maxHeight = '150px';
				break;
			case 'medium':
				$width     = '100%';
				$height    = 'auto';
				$maxWidth  = '300px';
				$maxHeight = '300px';
				break;
			case 'large':
				$width     = '100%';
				$height    = 'auto';
				$maxWidth  = '1024px';
				$maxHeight = '1024px';
				break;
			case 'custom':
				$width  = $newWidth;
				$height = $newHeight;
				break;
			default:
				break;
		}

		return array( $width, $height, $maxWidth, $maxHeight );
	}
}

$dimsDesktop = get_dimensions( $attr['imageDimDesktop'], $attr['sliderWidthDesktop'], $attr['sliderHeightDesktop'] );
$dimsTablet  = get_dimensions( $attr['imageDimTablet'], $attr['sliderWidthTablet'], $attr['sliderHeightTablet'] );
$dimsMobile  = get_dimensions( $attr['imageDimMobile'], $attr['sliderWidthMobile'], $attr['sliderHeightMobile'] );

// Define selectors.
$selectors   = array();
$t_selectors = array();
$m_selectors = array();

// Initialize selectors.

$selectors = array(

	'.uagb-ba-slider'                        => array(
		'margin-top'    => UAGB_Helper::get_css_value( $attr['topMarginDesktop'], $attr['marginUnitDesktop'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['rightMarginDesktop'], $attr['marginUnitDesktop'] ) . ' !important',
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['bottomMarginDesktop'], $attr['marginUnitDesktop'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['leftMarginDesktop'], $attr['marginUnitDesktop'] ) . ' !important',
	),

	// <img-comparison-slider> variables and sizing.
	'  .uagb-ba-slider__img-comparison'      => array(
		'--divider-width' => UAGB_Helper::get_css_value( $attr['dividerWidth'], 'px' ),
		'--divider-color' => $attr['dividerColor'],

		'width'           => ( '100%' === $dimsDesktop[0] ) ?
								'100%' :
								UAGB_Helper::get_css_value( $dimsDesktop[0], $attr['sliderWidthUnitDesktop'] ),

		'height'          => ( '100%' === $dimsDesktop[1] ) ?
								'auto' :
								UAGB_Helper::get_css_value( $dimsDesktop[1], $attr['sliderHeightUnitDesktop'] ),

		'max-width'       => ( 'custom' === $attr['imageDimDesktop'] ) ?
								'none' :
								$dimsDesktop[2],
		'max-height'      => ( 'custom' === $attr['imageDimDesktop'] ) ?
								'none' :
								$dimsDesktop[3],
	),

	// Figure -> After (The second image/figure doesn't resize itself, and hence we need the following code).
	' figure.uagb-ba-slider__figure-after'   => array(
		'height' => ( 'custom' === $attr['imageDimDesktop'] ) ?
					UAGB_Helper::get_css_value( $attr['sliderHeightDesktop'], $attr['sliderHeightUnitDesktop'] ) :
					'auto',
	),

	// Before Label.
	' .uagb-ba-slider__label-before'         => array(
		'display'          => $attr['showLabels'] ? 'block' : 'none',

		'color'            => $attr['beforeLabelColor'],
		'background-color' => $attr['beforeLabelBgColor'],
		'opacity'          => $attr['beforeLabelOpacity'],
		'top'              => UAGB_Helper::get_css_value( $attr['beforeLabelVerticalAlignment'], '%' ),
		'left'             => UAGB_Helper::get_css_value( $attr['beforeLabelHorizontalAlignment'], '%' ),

		// Border styles.
		'border-style'     => $attr['labelBorderStyle'],
		'border-width'     => UAGB_Helper::get_css_value( $attr['labelBorderWidth'], 'px' ),
		'border-radius'    => UAGB_Helper::get_css_value( $attr['labelBorderRadius'], 'px' ),
		'border-color'     => $attr['labelBorderColor'],
	),

	// After Label.
	' .uagb-ba-slider__label-after'          => array(
		'display'          => $attr['showLabels'] ? 'block' : 'none',

		'color'            => $attr['afterLabelColor'],
		'background-color' => $attr['afterLabelBgColor'],
		'opacity'          => $attr['afterLabelOpacity'],
		'top'              => UAGB_Helper::get_css_value( $attr['afterLabelVerticalAlignment'], '%' ),
		'right'            => UAGB_Helper::get_css_value( 100 - $attr['afterLabelHorizontalAlignment'], '%' ),

		// Border styles.
		'border-style'     => $attr['labelBorderStyle'],
		'border-width'     => UAGB_Helper::get_css_value( $attr['labelBorderWidth'], 'px' ),
		'border-radius'    => UAGB_Helper::get_css_value( $attr['labelBorderRadius'], 'px' ),
		'border-color'     => $attr['labelBorderColor'],
	),

	// Label hover effects.
	' .uagb-ba-slider__label-before:hover'   => array(
		'border-color' => $attr['labelBorderHoverColor'],
	),
	' .uagb-ba-slider__label-after:hover'    => array(
		'border-color' => $attr['labelBorderHoverColor'],
	),

	' .uagb-ba-slider__img-comparison:focus' => array(
		'box-shadow' => $attr['enableSliderElevation'] ? $attr['sliderBoxShadowHOffset'] . 'px ' . $attr['sliderBoxShadowVOffset'] . 'px ' . $attr['sliderBoxShadowBlur'] . 'px ' . $attr['sliderBoxShadowSpread'] . 'px ' . $attr['sliderBoxShadowColor'] . ( ( 'inset' === $attr['sliderBoxShadowPosition'] ) ? 'inset' : '' ) : 'none',
	),

	' .uagb-ba-slider__handle'               => array(
		'transition' => 'transform 0.5s',
	),

	// Slider-handle hover animation.
	' .uagb-ba-slider__handle:hover'         => array(
		'transform' => $attr['handleHoverAnimation'] ? 'scale(1.2)' : 'scale(1)',
	),


);

$t_selectors = array(

	'.uagb-ba-slider'                   => array(
		'margin-top'    => UAGB_Helper::get_css_value( $attr['topMarginTablet'], $attr['marginUnitTablet'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['rightMarginTablet'], $attr['marginUnitTablet'] ) . '!important',
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['bottomMarginTablet'], $attr['marginUnitTablet'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['leftMarginTablet'], $attr['marginUnitTablet'] ) . '!important',
	),

	// <img-comparison-slider> variables and sizing.
	'  .uagb-ba-slider__img-comparison' => array(
		'--divider-width' => UAGB_Helper::get_css_value( $attr['dividerWidth'], 'px' ),
		'--divider-color' => $attr['dividerColor'],

		'width'           => ( '100%' === $dimsTablet[0] ) ?
								'100%' :
								UAGB_Helper::get_css_value( $dimsTablet[0], $attr['sliderWidthUnitTablet'] ),

		'height'          => ( '100%' === $dimsTablet[1] ) ?
								'auto' :
								UAGB_Helper::get_css_value( $dimsTablet[1], $attr['sliderHeightUnitTablet'] ),

		'max-width'       => ( 'custom' === $attr['imageDimTablet'] ) ?
								'none' :
								$dimsTablet[2],
		'max-height'      => ( 'custom' === $attr['imageDimTablet'] ) ?
								'none' :
								$dimsTablet[3],
	),

	// Figure -> After (The second image/figure doesn't resize itself, and hence we need the following code).
	' .uagb-ba-slider__figure-after'    => array(
		'height' => ( 'custom' === $attr['imageDimTablet'] ) ?
					UAGB_Helper::get_css_value( $attr['sliderHeightTablet'], $attr['sliderHeightUnitTablet'] ) :
					'auto',
	),

	// Before Label.
	' .uagb-ba-slider__label-before'    => array(
		'display' => $attr['showLabelsTablet'] ? 'block' : 'none',
		'top'     => UAGB_Helper::get_css_value( $attr['beforeLabelVerticalAlignmentTablet'], '%' ),
		'left'    => UAGB_Helper::get_css_value( $attr['beforeLabelHorizontalAlignmentTablet'], '%' ),
	),

	// After Label.
	' .uagb-ba-slider__label-after'     => array(
		'display' => $attr['showLabelsTablet'] ? 'block' : 'none',
		'top'     => UAGB_Helper::get_css_value( $attr['afterLabelVerticalAlignmentTablet'], '%' ),
		'right'   => UAGB_Helper::get_css_value( ( 100 - $attr['afterLabelHorizontalAlignmentTablet'] ), '%' ),
	),

);

$m_selectors = array(

	'.uagb-ba-slider'                   => array(
		'margin-top'    => UAGB_Helper::get_css_value( $attr['topMarginMobile'], $attr['marginUnitMobile'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['rightMarginMobile'], $attr['marginUnitMobile'] ) . '!important',
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['bottomMarginMobile'], $attr['marginUnitMobile'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['leftMarginMobile'], $attr['marginUnitMobile'] ) . '!important',
	),

	// <img-comparison-slider> variables and sizing.
	'  .uagb-ba-slider__img-comparison' => array(
		'--divider-width' => UAGB_Helper::get_css_value( $attr['dividerWidth'], 'px' ),
		'--divider-color' => $attr['dividerColor'],

		'width'           => ( '100%' === $dimsMobile[0] ) ?
								'100%' :
								UAGB_Helper::get_css_value( $dimsMobile[0], $attr['sliderWidthUnitMobile'] ),

		'height'          => ( '100%' === $dimsMobile[1] ) ?
								'auto' :
								UAGB_Helper::get_css_value( $dimsMobile[1], $attr['sliderHeightUnitMobile'] ),

		'max-width'       => ( 'custom' === $attr['imageDimMobile'] ) ?
								'none' :
								$dimsMobile[2],
		'max-height'      => ( 'custom' === $attr['imageDimMobile'] ) ?
								'none' :
								$dimsMobile[3],
	),

	// Figure -> After (The second image/figure doesn't resize itself, and hence we need the following code).
	' .uagb-ba-slider__figure-after'    => array(
		'height' => ( 'custom' === $attr['imageDimMobile'] ) ?
					UAGB_Helper::get_css_value( $attr['sliderHeightMobile'], $attr['sliderHeightUnitMobile'] ) :
					'auto',
	),

	// Before Label.
	' .uagb-ba-slider__label-before'    => array(
		'display' => $attr['showLabelsMobile'] ? 'block' : 'none',
		'top'     => UAGB_Helper::get_css_value( $attr['beforeLabelVerticalAlignmentMobile'], '%' ),
		'left'    => UAGB_Helper::get_css_value( $attr['beforeLabelHorizontalAlignmentMobile'], '%' ),
	),

	// After Label.
	' .uagb-ba-slider__label-after'     => array(
		'display' => $attr['showLabelsMobile'] ? 'block' : 'none',
		'top'     => UAGB_Helper::get_css_value( $attr['afterLabelVerticalAlignmentMobile'], '%' ),
		'right'   => UAGB_Helper::get_css_value( ( 100 - $attr['afterLabelHorizontalAlignmentMobile'] ), '%' ),
	),

);

// Combine selectors.

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
