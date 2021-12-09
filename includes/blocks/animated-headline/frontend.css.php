<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */


$m_selectors = array();
$t_selectors = array();

$selectors = array(
	'.wp-block-uagb-animated-headline ' => array(
		'text-align' => $attr['headlineAlign'],
	)
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';
error_log(print_r($attr, true));
error_log(print_r($id, true));
return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
