<?php
/**
 * Frontend JS File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id . ' .uagb-swiper';
$block_name = 'slider';

$js_attr = array(
	'block_id' => $attr['block_id'],
);

$slider_options = apply_filters(
	'uagb_slider_options',
	array(
		'autoplay'       => $attr['autoplay'] ? array(
			'delay' => (int) $attr['autoplaySpeed'],
			'disableOnInteraction' => false,
			'pauseOnMouseEnter' => 'hover' === $attr['pauseOn'] ? true : false,
			'stopOnLastSlide' => $attr['infiniteLoop'] ? false : true
		) : false,
		'loop'           => $attr['infiniteLoop'],
		'speed'          => (int) $attr['transitionSpeed'],
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

error_log( $attr['infiniteLoop'] );

ob_start();
?>
window.addEventListener("DOMContentLoaded", function(){
	var swiper = new Swiper( "<?php echo esc_attr( $selector ); ?>",
		<?php echo $settings; ?>
	);
});

var swiperWrapper = document.querySelector( "<?php echo esc_attr( $selector ); ?>" );
var autoPlay = <?php echo (int) $attr['autoplay']; ?>;
var pauseOnHover = <?php echo 'hover' === $attr['pauseOn'] ? 1 : 0 ?>;
var pauseOnInteraction = <?php echo 'click' === $attr['pauseOn'] ? 1 : 0 ?>;

swiperWrapper.addEventListener( "onscroll", UagbPauseOnInteraction );
swiperWrapper.addEventListener( "onkeydown", UagbPauseOnInteraction );
swiperWrapper.addEventListener( "click", UagbPauseOnInteraction );

function UagbPauseOnInteraction() {
	var swiperInstance = document.querySelector( "<?php echo esc_attr( $selector ); ?>" ).swiper;
	if( pauseOnInteraction && swiperInstance ) {
		swiperInstance.autoplay.stop();
	}
}

swiperWrapper.onmouseout = function() {	
	var swiperInstance = document.querySelector( "<?php echo esc_attr( $selector ); ?>" ).swiper;
	if( swiperInstance && autoPlay ) {
		swiperInstance.autoplay.start();
	}
};

swiperWrapper.onmouseover = function() {
	var swiperInstance = document.querySelector( "<?php echo esc_attr( $selector ); ?>" ).swiper;
	if( pauseOnHover ) {
		if( swiperInstance ) {
			swiperInstance.autoplay.stop();
		}
	}
};

<?php
return ob_get_clean();
?>
