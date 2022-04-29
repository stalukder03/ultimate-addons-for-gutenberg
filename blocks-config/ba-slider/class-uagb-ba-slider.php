<?php
/**
 * UAGB - BA Slider/Comparison Block.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_BA_Slider' ) ) {

	/**
	 * Class UAGB_BA_Slider.
	 */
	class UAGB_BA_Slider {

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 *  Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 *  Animate specific instance of slider if animation is enabled.
		 *
		 * @param int     $id Block ID.
		 * @param boolean $animationEnabled Tells if block is animated.
		 */
		public static function animate_slider_instance( $id, $animationEnabled ) {

			if ( 'true' === $animationEnabled ) {

				ob_start();
				?>
					window.addEventListener( 'DOMContentLoaded', function() {
						const scope = document.querySelector( '.uagb-block-<?php echo esc_html( $id ); ?>' );
						if ( scope ){
							if ( scope.children[0].classList.contains( 'uagb-ba-slider__img-comparison' ) ) {
								const slider = scope.querySelector( '.uagb-ba-slider__img-comparison' );

								let direction = 'right';

								const move = () => {

									slider.value = slider.value + 0.2 * ( direction === 'right' ? 1 : -1 );

									if ( slider.value >= 100 ) {
										direction = 'left';
									}

									if ( slider.value <= 0 ) {
										direction = 'right';
									}

								};

								let animationId;

								if( <?php echo esc_js( $animationEnabled ); ?> ) {

									const animate = () => {

										move();
										animationId = requestAnimationFrame( animate );

									};

									animationId = requestAnimationFrame( animate );

								} else {
									cancelAnimationFrame( animationId );
								}
							}
						}
					});
				<?php
				return ob_get_clean();

			} else {
				return '';
			}
		}

	}

}
