<?php
/**
 * UAGB Presets extensions.
 *
 * @package UAGB
 */

use PhpParser\Node\Expr\Print_;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Presets' ) ) {

	/**
	 * Class UAGB_Table_Of_Content.
	 */
	class UAGB_Presets {


		/**
		 * Member Variable
		 *
		 * @since 1.23.0
		 * @var instance
		 */
		private static $instance;

		/**
		 * Rest API Base namespace.
		 *
		 * @var string $namespace
		 * @since 0.0.1
		 */
		private $namespace = 'uagpro/v1';


		private $option_key = 'uagpro_presets';


		/**
		 *  Initiator
		 *
		 * @since 1.23.0
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
			add_action( 'rest_api_init', [ $this, 'register_routes' ] );
		}

		/**
		 * Register All Routes
		 *
		 * @hooked - rest_api_init
		 * @return void
		 * @since 0.0.1
		 */
		public function register_routes() {

			register_rest_route(
				$this->namespace,
				'/presets',
				array(
					array(
						'methods'             => WP_REST_Server::READABLE,
						'callback'            => array( $this, 'get_presets' ),
						'permission_callback' => function () {
							return current_user_can( 'edit_posts' );
						},
						'args'                => array(
							'block_name' => array(
								'sanitize_callback' => 'sanitize_text_field',
							),
						),
					),
					array(
						'methods'             => WP_REST_Server::CREATABLE,
						'callback'            => array( $this, 'create_preset' ),
						'permission_callback' => function () {
							return current_user_can( 'edit_posts' );
						},
						'args'                => array(
							'block_name' => array(
								'sanitize_callback' => 'sanitize_text_field',
							),
							'label' => array(
								'sanitize_callback' => 'sanitize_text_field',
							),
							'value' => array(
								'sanitize_callback' => 'sanitize_text_field',
							),
							'attributes' => array(
								'sanitize_callback' => 'rest_sanitize_array'
							),
						),
					),
					array(
						'methods'             => WP_REST_Server::DELETABLE,
						'callback'            => array( $this, 'delete_preset' ),
						'permission_callback' => function () {
							return current_user_can( 'delete_posts' );
						},
						'args'                => array(
							'block_name' => array(
								'sanitize_callback' => 'sanitize_text_field',
							),
							'preset_id' => array(
								'sanitize_callback' => 'absint',
							),
						),
					)
				)
			);
		}

		public function get_presets($request){
			$block_name = $request->get_param('block_name');
			$response = [];
			if($block_name){
				$presets = json_decode(get_option($this->option_key, '{}'), true);
				$response = (isset($presets[$block_name]) ? $presets[$block_name] : []);
			}
			return new \WP_REST_Response( $response, 200 );
		}

		public function create_preset($request){
			$params = $request->get_params();
			$block_name = (isset($params['block_name']) ? sanitize_text_field($params['block_name']) : '');
			$label = (isset($params['label']) ? sanitize_text_field($params['label']) : '');
			$value = (isset($params['value']) ? sanitize_text_field($params['value']) : '');
			$attributes = (isset($params['attributes']) ? rest_sanitize_array($params['attributes']) : []);
			if($block_name){
				$current_value = json_decode(get_option($this->option_key, '{}'), true);
				$preset = array(
					'label' 		=> $label,
					'value' 		=> $value,
					'attributes' 	=> $attributes,
				);
				$current_value[$block_name][] = $preset;
				update_option($this->option_key, json_encode($current_value));
				return new \WP_REST_Response( $preset, 200 );
			}
			return new \WP_REST_Response( [], 200 );
		}

		public function delete_preset($request){
			return new \WP_REST_Response( [], 200 );
		}

	}

	/**
	 *  Prepare if class 'UAGB_Presets' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Presets::get_instance();
}
