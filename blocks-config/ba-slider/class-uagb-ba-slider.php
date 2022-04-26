<?php
/**
 * UAGB - Image Comparison Block / BA Slider.
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
		 * Constructor
		 */
		public function __construct() {

			// Activation hook.
			add_action( 'init', array( $this, 'register_blocks' ) );
		}

		/**
		 * Registers the `core/latest-posts` block on server.
		 *
		 * @since 0.0.1
		 */
		public function register_blocks() {

			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}

			register_block_type(
				'uagb/ba-slider',
				array(
					'render_callback' => array( $this, 'render_html' ),
					'attributes'      => array(

						'block_id'     => array(
							'type' => 'string',
						),
						'classMigrate' => array(
							'type'    => 'boolean',
							'default' => false,
						),

						// <-- GENERAL SETTINGS -->

						// Images.

						'beforeImage'  => array(
							'type' => 'object',
						),
						'afterImage'  => array(
							'type' => 'object',
						),

						// Image Labels.

						'showLabels'       => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'showLabelsTablet' => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'showLabelsMobile' => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'beforeLabel'      => array(
							'type'    => 'string',
							'default' => __( 'Before', 'ultimate-addons-for-gutenberg' ),
						),
						'afterLabel'       => array(
							'type'    => 'string',
							'default' => __( 'After', 'ultimate-addons-for-gutenberg' ),
						),

						// Slider Orientation, Position, Animation, Hover Navigation.

						'sliderOrientation' => array(
							'type'    => 'string',
							'default' => 'horizontal',
						),
						'sliderPosition'    => array(
							'type'    => 'number',
							'default' => 50,
						),
						'animateSlider'     => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'hoverSlider'       => array(
							'type'    => 'boolean',
							'default' => false,
						),

						// <-- STYLING SETTINGS -->

						// Image Labels Styling.

						'beforeLabelColor'  => array(
							'type'    => 'string',
							'default' => '#ffffff',
						),
						'afterLabelColor'  => array(
							'type'    => 'string',
							'default' => '#ffffff',
						),
						'beforeLabelBgColor'  => array(
							'type'    => 'string',
							'default' => '#000000',
						),
						'afterLabelBgColor'  => array(
							'type'    => 'string',
							'default' => '#000000',
						),
						'beforeLabelOpacity'  => array(
							'type'    => 'number',
							'default' => 1,
						),
						'afterLabelOpacity'  => array(
							'type'    => 'number',
							'default' => 1,
						),

						// Image Label Responsive Alignment (Desktop).

						'beforeLabelHorizontalAlignment'  => array(
							'type'    => 'number',
							'default' => 3,
						),
						'afterLabelHorizontalAlignment'  => array(
							'type'    => 'number',
							'default' => 97,
						),
						'beforeLabelVerticalAlignment'  => array(
							'type'    => 'number',
							'default' => 85,
						),
						'afterLabelVerticalAlignment'  => array(
							'type'    => 'number',
							'default' => 85,
						),

						// Image Label Responsive Alignment (Tablet).

						'beforeLabelHorizontalAlignmentTablet'  => array(
							'type'    => 'number',
							'default' => 3,
						),
						'afterLabelHorizontalAlignmentTablet'  => array(
							'type'    => 'number',
							'default' => 97,
						),
						'beforeLabelVerticalAlignmentTablet'  => array(
							'type'    => 'number',
							'default' => 85,
						),
						'afterLabelVerticalAlignmentTablet'  => array(
							'type'    => 'number',
							'default' => 85,
						),

						// Image Label Responsive Alignment (Mobile).

						'beforeLabelHorizontalAlignmentMobile'  => array(
							'type'    => 'number',
							'default' => 3,
						),
						'afterLabelHorizontalAlignmentMobile'  => array(
							'type'    => 'number',
							'default' => 97,
						),
						'beforeLabelVerticalAlignmentMobile'  => array(
							'type'    => 'number',
							'default' => 85,
						),
						'afterLabelVerticalAlignmentMobile'  => array(
							'type'    => 'number',
							'default' => 85,
						),

						// Image Label Border.

						'labelBorderStyle'  => array(
							'type'    => 'string',
							'default' => 'none',
						),
						'labelBorderWidth'  => array(
							'type'    => 'number',
							'default' => 2,
						),
						'labelBorderRadius'  => array(
							'type'    => 'number',
							'default' => 5,
						),
						'labelBorderColor'  => array(
							'type'    => 'string',
							'default' => '#000000',
						),
						'labelBorderHoverColor'  => array(
							'type'    => 'string',
							'default' => '#ffffff',
						),

						// Slider Elevation Styling.

						'enableSliderElevation'  => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'sliderBoxShadowColor'  => array(
							'type'    => 'string',
							'default' => '#aaaaaa',
						),
						'sliderBoxShadowHOffset'  => array(
							'type'    => 'number',
							'default' => 0,
						),
						'sliderBoxShadowVOffset'  => array(
							'type'    => 'number',
							'default' => 0,
						),
						'sliderBoxShadowBlur'  => array(
							'type'    => 'number',
							'default' => 15,
						),
						'sliderBoxShadowSpread'  => array(
							'type'    => 'number',
							'default' => 5,
						),
						'sliderBoxShadowPosition'  => array(
							'type'    => 'string',
							'default' => '',
						),

						// Divider/Handle Styling Settings.

						'dividerColor'  => array(
							'type'    => 'string',
							'default' => '#ffffff',
						),
						'dividerWidth'  => array(
							'type'    => 'number',
							'default' => 2,
						),
						'handleHoverAnimation'  => array(
							'type'    => 'boolean',
							'default' => false,
						),

					),
				)
			);
		}
	}

}
