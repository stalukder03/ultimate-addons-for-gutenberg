<?php
/**
 * Frontend JS File.
 *
 * @since 0.0.1
 *
 * @package SpectraPro
 */

$selector                  = '.uagb-block-' . $id;
$animated_headline_options = apply_filters(
	'uagb_animated_headline_options',
	array(
		// 'animateType'       => $attr['animateType'],
		// 'highlightedShape'  => $attr['highlightedShape'],
		// 'rotatingAnimation' => $attr['rotatingAnimation'],
		// 'rotatingText'      => $attr['rotatingText'],
		// 'animationDuration' => ( ! empty( $attr['animationDuration'] ) ? $attr['animationDuration'] : 1200 ),
		// 'animationDelay'    => ( ! empty( $attr['animationDelay'] ) ? $attr['animationDelay'] : 8000 ),
	),
	$id
);
$settings                  = wp_json_encode( $animated_headline_options );
ob_start();
?>
window.addEventListener( 'load', function() {
	UAGBAnimatedHeading.init( '<?php echo esc_attr( $selector ); ?>', <?php echo $settings; ?> );
});
<?php
return ob_get_clean();
?>
