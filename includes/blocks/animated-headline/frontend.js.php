<?php
/**
 * Frontend JS File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id;
$animated_headline_options = apply_filters('uagb_animated_headline_options', array(
	'animateType' => $attr['animateType'],
	'rotatingAnimation' => $attr['rotatingAnimation'],
	'rotatingText' => $attr['rotatingText'],
), $id);
$settings = wp_json_encode($animated_headline_options);
ob_start();
?>
window.addEventListener( 'load', function() {
	UAGBAnimatedHeading.init( '<?php echo esc_attr( $selector ); ?>', <?php echo $settings; ?> );
});
<?php
return ob_get_clean();
?>