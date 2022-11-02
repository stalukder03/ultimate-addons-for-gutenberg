<?php
/**
 * Frontend JS File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id;
$block_name = 'slider';

$js_attr = array(
	'block_id' => $attr['block_id'],
);

$slider_options = apply_filters(
	'uagb_slider_options',
	array(
		'autoplay'       => (bool) $attr['autoplay'] ? array(
			'delay' => (int) $attr['autoplaySpeed']
		) : false,
		'loop'           => (bool) $attr['infiniteLoop'],
		'speed'          => (int) esc_html( UAGB_Block_Helper::get_fallback_number( $attr['transitionSpeed'], 'transitionSpeed', $block_name ) ),
		'effect'         => $attr['transitionEffect'],
		'flipEffect'     => array(
			'slideShadows' => false
		),
		'fadeEffect' => array(
			'crossFade' => true
		),
		'pagination' => ( 'arrows' === $attr['arrowDots'] ) ? false : array(
			'el'          => '.swiper-pagination',
			'clickable'   => true,
			'hideOnClick' => false
		),
		'navigation' => ( 'dots' === $attr['arrowDots'] ) ? false : array(
			'nextEl' => '.swiper-button-next',
			'prevEl' => '.swiper-button-prev',
		),
	),
	$id
);

$settings = wp_json_encode( $slider_options );

ob_start();
?>
window.addEventListener("DOMContentLoaded", function(){
	var swiper = new Swiper(".uagb-swiper",
		<?php echo $settings; ?>
	);
});
<?php
return ob_get_clean();
?>
