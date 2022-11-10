<?php
/**
 * Frontend JS File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selector   = '.uagb-block-' . $id . ' .uagb-swiper';
$block_name = 'slider';

$js_attr = array(
	'block_id' => $attr['block_id'],
);

$slider_options = apply_filters(
	'uagb_slider_options',
	array(
		'autoplay'   => $attr['autoplay'] ? array(
			'delay'                => (int) $attr['autoplaySpeed'],
			'disableOnInteraction' => 'click' === $attr['pauseOn'] ? true : false,
			'pauseOnMouseEnter'    => 'hover' === $attr['pauseOn'] ? true : false,
			'stopOnLastSlide'      => $attr['infiniteLoop'] ? false : true,
		) : false,
		'loop'       => $attr['infiniteLoop'],
		'speed'      => (int) $attr['transitionSpeed'],
		'effect'     => $attr['transitionEffect'],
		'flipEffect' => array(
			'slideShadows' => false,
		),
		'fadeEffect' => array(
			'crossFade' => true,
		),
		'pagination' => ( 'arrows' === $attr['arrowDots'] ) ? false : array(
			'el'          => '.swiper-pagination',
			'clickable'   => true,
			'hideOnClick' => false,
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
	var swiper = new Swiper( "<?php echo esc_attr( $selector ); ?>",
		<?php echo $settings; //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	);
});

<?php
return ob_get_clean();
?>
