<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$combined_selectors = array();

if( $attr['overrideStyle'] ) {
    $border        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'inner' );
    $border        = UAGB_Block_Helper::uag_generate_deprecated_border_css(
        $border,
        ( isset( $attr['borderWidth'] ) ? $attr['borderWidth'] : '' ),
        ( isset( $attr['borderRadius'] ) ? $attr['borderRadius'] : '' ),
        ( isset( $attr['borderColor'] ) ? $attr['borderColor'] : '' ),
        ( isset( $attr['borderStyle'] ) ? $attr['borderStyle'] : '' ),
        ( isset( $attr['borderHColor'] ) ? $attr['borderHColor'] : '' )
    );
    $border_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'inner', 'tablet' );
    $border_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'inner', 'mobile' );

    $selectors = array(
        '.uagb-faq-item'          => $border,
    );

    $t_selectors = array(
        '.uagb-faq-item'          => $border_tablet,
    );

    $m_selectors = array(
        '.uagb-faq-item'          => $border_mobile,
    );

    $combined_selectors = array(
        'desktop' => $selectors,
        'tablet'  => $t_selectors,
        'mobile'  => $m_selectors,
    );
}

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
