<?php
/**
 * Frontend JS File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id;

$js_attr = array(
	'block_id' => $attr['block_id'],
);
ob_start();
?>
window.addEventListener("DOMContentLoaded", function(){
	var swiper = new Swiper(".uagb-swiper", {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});
<?php
return ob_get_clean();
?>
