<?php
/**
 * Frontend JS File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$base_selector = ( isset( $attr['classMigrate'] ) && $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-blockquote-';
$selector      = $base_selector . $id;

$isAnimationEnabled = $attr['animateSlider'] ? 'true' : 'false';

return UAGB_BA_Slider::animate_slider_instance( $id, $isAnimationEnabled, $selector );
