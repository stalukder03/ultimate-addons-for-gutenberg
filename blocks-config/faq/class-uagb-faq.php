<?php
/**
 * UAGB FAQ block.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_FAQ' ) ) {


	/**
	 * Class UAGB_FAQ.
	 */
	class UAGB_FAQ {


		/**
		 * Member Variable
		 *
		 * @since x.x.x
		 * @var instance
		 */
		private static $instance;

        /**
		 *  Initiator
		 *
		 * @since x.x.x
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
			add_action( 'init', array( $this, 'register_faq' ) );
		}

        /**
		 * Renders the UAGB FAQ block.
		 *
		 * @since x.x.x
		 * @access public
		 *
		 * @param  array  $attributes Block attributes.
		 *
		 * @return string Rendered block HTML.
		 */
        public function render_faq( $attributes, $content, $block  ){         

            $equalHeightClass = $attributes['equalHeight'] ? "uagb-faq-equal-height" : "";

            $wrap = array(
				'wp-block-uagb-faq uagb-faq__outer-wrap',
				'uagb-block-' . $attributes['block_id'],
                'uagb-faq-icon-' . $attributes['iconAlign'],
                'uagb-faq-layout-' . $attributes['layout'],
                'uagb-faq-expand-first-' . $attributes['expandFirstItem'],
                'uagb-faq-inactive-other-' . $attributes['inactiveOtherItems'],
                $equalHeightClass
			);

            ob_start();
			?>
            <div class="<?php echo esc_html( implode( ' ', $wrap ) ); ?>"
            data-faqtoggle = "<?php echo esc_attr( $attributes['enableToggle'] ); ?>"
            role = 'tablist'
            >
            <?php if ( true === $attributes['enableSchemaSupport'] ) { ?>
                <?php 
                echo '<script type="application/ld+json">{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "@id": page_url,
                    "mainEntity": []}
                    </script>';  
                ?>
            <?php } ?>
                <div className="uagb-faq__wrap uagb-buttons-layout-wrap">
                   <?php 
                        echo $content;
                    ?>
                </div>
            </div>
            <?php

            return ob_get_clean();
        }

        /**
		 * Registers the UAGB FAQ block.
		 *
		 * @since x.x.x
		 * @access public
		 *
		 * @uses render_faq()
		 *
		 * @throws WP_Error An exception parsing the block definition.
		 */
		public function register_faq() {

					register_block_type(
						'uagb/faq',
						array(
							'attributes'      => array_merge(
								array(
									'block_id' => array(
                                        'type' => "string"
                                    ),
                                    'layout' => array(
                                        'type' => "string",
                                        'default' => "accordion"
                                    ),
                                    'inactiveOtherItems' => array(
                                        'type' => "boolean",
                                        'default' => true
                                    ),
                                    'expandFirstItem' => array(
                                        'type' => "boolean",
                                        'default' => false
                                    ),
                                    'enableSchemaSupport' => array(
                                        'type' => "boolean",
                                        'default' => false
                                    ),
                                    'align' => array(
                                        'type' => "string",
                                        'default' => "left"
                                    ),
                                    'enableSeparator' => array(
                                        'type' => "boolean",
                                        'default' => false
                                    ),
                                    'rowsGap' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'columnsGap' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'boxBgColor' => array(
                                        'type' => "string",
                                        'default'=> "#FFFFFF"
                                    ),
                                    'boxPaddingTypeMobile' => array(
                                        'type' => "string",
                                        'default' => "px"
                                    ),
                                    'boxPaddingTypeTablet' => array(
                                        'type' => "string",
                                        'default' => "px"
                                    ),
                                    'boxPaddingTypeDesktop' => array(
                                        'type' => "string",
                                        'default' => "px"
                                    ),
                                    'vBoxPaddingMobile' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'hBoxPaddingMobile' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'vBoxPaddingTablet' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'hBoxPaddingTablet' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'vBoxPaddingDesktop' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'hBoxPaddingDesktop' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'borderStyle' => array(
                                        'type' => "string",
                                        'default' => "solid"
                                    ),
                                    'borderWidth' => array(
                                        'type' => "number",
                                        'default' => 1
                                    ),
                                    'borderRadius' => array(
                                        'type' => "number",
                                        'default' => 2
                                    ),
                                    'borderColor' => array(
                                        'type' => "string",
                                        'default'=> "#D2D2D2"
                                    ),
                                    'questionTextColor' => array(
                                        'type' => "string",
                                        'default'=> "#313131"
                                    ),
                                    'questionTextActiveColor' => array(
                                        'type' => "string",
                                        'default'=> "#656565"
                                    ),
                                    'questionPaddingTypeDesktop' => array(
                                        'type' => "string",
                                        'default' => "px"
                                    ),
                                    'vquestionPaddingMobile' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'vquestionPaddingTablet' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'vquestionPaddingDesktop' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'hquestionPaddingMobile' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'hquestionPaddingTablet' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'hquestionPaddingDesktop' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'answerTextColor' => array(
                                        'type' => "string",
                                        'default' => "#313131"
                                    ),
                                    'answerPaddingTypeDesktop' => array(
                                        'type' => "string",
                                        'default' => "px"
                                    ),
                                    'vanswerPaddingMobile' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'vanswerPaddingTablet' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'vanswerPaddingDesktop' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'hanswerPaddingMobile' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'hanswerPaddingTablet' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'hanswerPaddingDesktop' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'iconColor' => array(
                                        'type' => "string"
                                    ),
                                    'iconActiveColor' => array(
                                        'type' => "string"
                                    ),
                                    'gapBtwIconQUestion' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'questionloadGoogleFonts' => array(
                                        'type' => "boolean",
                                        'default' => false	
                                    ),
                                    'answerloadGoogleFonts' => array(
                                        'type' => "boolean",
                                        'default' => false	
                                    ),
                                    'questionFontFamily' => array(
                                        'type' => "string",
                                        'default' => "default" ,
                                    ),
                                    'questionFontWeight' => array(
                                        'type' => "string",
                                    ),
                                    'questionFontSubset' => array(
                                        'type' => "string",
                                    ),
                                    'questionFontSize' => array(
                                        'type' => "number",
                                    ),
                                   'questionFontSizeType' => array(
                                        'type' => "string",
                                        'default' => "px"
                                    ),
                                    'questionFontSizeTablet' => array(
                                        'type' => "number",
                                    ),
                                    'questionFontSizeMobile' => array(
                                        'type' => "number",
                                    ),
                                    'questionLineHeight' => array(
                                        'type' => "number",
                                    ),
                                    'questionLineHeightType' => array(
                                        'type' => "string",
                                        'default' => "em"
                                    ),
                                    'questionLineHeightTablet' => array(
                                        'type' => "number",
                                    ),
                                    'questionLineHeightMobile' => array(
                                        'type' => "number",
                                    ),
                                    'answerFontFamily' => array(
                                        'type' => "string",
                                        'default' => "default" ,
                                    ),
                                    'answerFontWeight' => array(
                                        'type' => "string",
                                    ),
                                    'answerFontSubset' => array(
                                        'type' => "string",
                                    ),
                                    'answerFontSize' => array(
                                        'type' => "number",
                                    ),
                                    'answerFontSizeType' => array(
                                        'type' => "string",
                                        'default' => "px"
                                    ),
                                    'answerFontSizeTablet' => array(
                                        'type' => "number",
                                    ),
                                    'answerFontSizeMobile' => array(
                                        'type' => "number",
                                    ),
                                    'answerLineHeight' => array(
                                        'type' => "number",
                                    ),
                                    'answerLineHeightType' => array(
                                        'type' => "string",
                                        'default' => "em"
                                    ),
                                    'answerLineHeightTablet' => array(
                                        'type' => "number",
                                    ),
                                    'answerLineHeightMobile' => array(
                                        'type' => "number",
                                    ),
                                    'icon' => array(
                                        'type' => "string",
                                        'default' => "fas fa-plus"
                                    ),
                                    'iconActive' => array(
                                        'type' => "string",
                                        'default' => "fas fa-minus"
                                    ),
                                    'iconAlign' => array(
                                        'type' => "string",
                                        'default' => "row"
                                    ),
                                    'iconSize' => array(
                                        'type' => "number",
                                        'default' => 12
                                    ),
                                    'iconSizeTablet' => array(
                                        'type' => "number",
                                        'default' => 12
                                    ),
                                    'iconSizeMobile' => array(
                                        'type' => "number",
                                        'default' => 12
                                    ),
                                    'iconSizeType' => array(
                                        'type' => "string",
                                        'default' => "px"
                                    ),
                                    'columns' => array(
                                        'type' => "number",
                                        'default' => 2
                                    ),
                                    'tcolumns' => array(
                                        'type' => "number",
                                        'default' => 2,
                                    ),
                                    'mcolumns' => array(
                                        'type' => "number",
                                        'default' => 1,
                                    ),
                                    'schema' => array(
                                        'type' => "string",
                                        'default' => ""
                                    ),
                                    'enableToggle' => array(
                                        'type' => "boolean",
                                        'default' => true	
                                    ),
                                    'equalHeight' => array(
                                        'type' => "boolean",
                                        'default' => true	
                                    ),
                                    'questionLeftPaddingTablet' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'questionBottomPaddingTablet' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'questionLeftPaddingDesktop' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'questionBottomPaddingDesktop' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'questionLeftPaddingMobile' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'questionBottomPaddingMobile' => array(
                                        'type' => "number",
                                        'default' => 10
                                    ),
                                    'headingTag' => array(
                                        'type' => "html",
                                        'selector' => "span,p,h1,h2,h3,h4,h5,h6",
                                        'default' => "span"
                                    )
								)
							),
							'render_callback' => array( $this, 'render_faq' ),
						)
					);
		}

	}

	/**
	 *  Prepare if class 'UAGB_FAQ' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_FAQ::get_instance();
}