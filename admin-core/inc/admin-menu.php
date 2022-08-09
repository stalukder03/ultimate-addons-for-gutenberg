<?php
/**
 * Uag Admin Menu.
 *
 * @package Uag
 */

namespace UagAdmin\Inc;

use UagAdmin\Inc\Admin_Helper;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Admin_Menu.
 */
class Admin_Menu {

	/**
	 * Instance
	 *
	 * @access private
	 * @var object Class object.
	 * @since 1.0.0
	 */
	private static $instance;

	/**
	 * Initiator
	 *
	 * @since 1.0.0
	 * @return object initialized object of class.
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Instance
	 *
	 * @access private
	 * @var string Class object.
	 * @since 1.0.0
	 */
	private $menu_slug = 'spectra';

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 */
	public function __construct() {

		$this->initialize_hooks();
	}

	/**
	 * Init Hooks.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function initialize_hooks() {
		add_action( 'admin_menu', array( $this, 'setup_menu' ) );
		add_action( 'admin_init', array( $this, 'settings_admin_scripts' ) );

		add_filter( 'plugin_action_links_' . UAGB_BASE, array( $this, 'add_action_links' ) );
		/* Render admin content view */
		add_action( 'uag_render_admin_page_content', array( $this, 'render_content' ), 10, 2 );

		/* Action to get total blocks count */
		if ( function_exists( 'as_enqueue_async_action' ) && 'done' !== get_option( 'spectra_blocks_count_status' ) ) {

			as_enqueue_async_action( 'spectra_total_blocks_count_action' );
			update_option( 'spectra_blocks_count_status', 'processing' );
		}

	}

	/**
	 * Show action on plugin page.
	 *
	 * @param  array $links links.
	 * @return array
	 */
	public function add_action_links( $links ) {

		$default_url = admin_url( 'options-general.php?page=' . $this->menu_slug );

		$mylinks = array(
			'<a href="' . $default_url . '">' . __( 'Settings', 'ultimate-addons-for-gutenberg' ) . '</a>',
		);

		return array_merge( $links, $mylinks );
	}

	/**
	 *  Initialize after Cartflows pro get loaded.
	 */
	public function settings_admin_scripts() {
		// Enqueue admin scripts.
		if ( ! empty( $_GET['page'] ) && ( $this->menu_slug === $_GET['page'] || false !== strpos( $_GET['page'], $this->menu_slug . '_' ) ) ) { //phpcs:ignore

			add_action( 'admin_enqueue_scripts', array( $this, 'styles_scripts' ) );

			add_filter( 'admin_footer_text', array( $this, 'add_footer_link' ), 99 );
		}

		if ( 'done' === get_option( 'spectra_blocks_count_status' ) ) {

			if ( function_exists( 'as_next_scheduled_action' ) && false === \as_next_scheduled_action( 'spectra_analytics_count_actions' ) ) {

				// It will automatically reschedule the action once initiated.
				as_schedule_recurring_action( strtotime( 'now' ), 2 * WEEK_IN_SECONDS, 'spectra_analytics_count_actions' );
			}
		}
	}

	/**
	 * Add submenu to admin menu.
	 *
	 * @since 1.0.0
	 */
	public function setup_menu() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$menu_slug  = $this->menu_slug;
		$capability = 'manage_options';

		add_submenu_page(
			'options-general.php',
			'Spectra',
			'Spectra',
			$capability,
			$menu_slug,
			array( $this, 'render' ),
			10
		);
	}

	/**
	 * Renders the admin settings.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function render() {

		$menu_page_slug = ( ! empty( $_GET['page'] ) ) ? sanitize_text_field( wp_unslash( $_GET['page'] ) ) : $this->menu_slug; //phpcs:ignore
		$page_action    = '';

		if ( isset( $_GET['action'] ) ) { //phpcs:ignore
			$page_action = sanitize_text_field( wp_unslash( $_GET['action'] ) ); //phpcs:ignore
			$page_action = str_replace( '_', '-', $page_action );
		}

		include_once UAG_ADMIN_DIR . 'views/admin-base.php';
	}

	/**
	 * Renders the admin settings content.
	 *
	 * @since 1.0.0
	 * @param sting $menu_page_slug current page name.
	 * @param sting $page_action current page action.
	 *
	 * @return void
	 */
	public function render_content( $menu_page_slug, $page_action ) {

		if ( $this->menu_slug === $menu_page_slug ) {
			include_once UAG_ADMIN_DIR . 'views/dashboard-app.php';
		}
	}

	/**
	 * Enqueues the needed CSS/JS for the builder's admin settings page.
	 *
	 * @since 1.0.0
	 */
	public function styles_scripts() {

		$admin_slug  = 'uag-admin';
		$blocks_info = $this->get_blocks_info_for_activation_deactivation();
		wp_enqueue_style( $admin_slug . '-font', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap', array(), UAGB_VER );
		// Styles.

		wp_enqueue_style( 'wp-components' );

		$theme = wp_get_theme();

		$localize = apply_filters(
			'uag_react_admin_localize',
			array(
				'current_user'             => ! empty( wp_get_current_user()->user_firstname ) ? wp_get_current_user()->user_firstname : wp_get_current_user()->display_name,
				'admin_base_url'           => admin_url(),
				'uag_base_url'             => admin_url( 'options-general.php?page=' . $this->menu_slug ),
				'plugin_dir'               => UAGB_URL,
				'plugin_ver'               => UAGB_VER,
				'logo_url'                 => UAGB_URL . 'admin-core/assets/images/uag-logo.svg',
				'admin_url'                => admin_url( 'admin.php' ),
				'ajax_url'                 => admin_url( 'admin-ajax.php' ),
				'wp_pages_url'             => admin_url( 'post-new.php?post_type=page' ),
				'home_slug'                => $this->menu_slug,
				'rollback_url'             => esc_url( add_query_arg( 'version', 'VERSION', wp_nonce_url( admin_url( 'admin-post.php?action=uag_rollback' ), 'uag_rollback' ) ) ),
				'blocks_info'              => $blocks_info,
				'reusable_url'             => esc_url( admin_url( 'edit.php?post_type=wp_block' ) ),
				'global_data'              => Admin_Helper::get_options(),
				'uag_content_width_set_by' => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_content_width_set_by', __( 'Spectra', 'ultimate-addons-for-gutenberg' ) ),
			)
		);

		$this->settings_app_scripts( $localize );
	}


	/**
	 * Create an Array of Blocks info which we need to show in Admin dashboard.
	 */
	public function get_blocks_info_for_activation_deactivation() {

		$blocks = \UAGB_Admin_Helper::get_block_options();

		array_multisort(
			array_map(
				function( $element ) {
					if ( isset( $element['priority'] ) ) {
						return $element['priority'];
					}
					return;
				},
				$blocks
			),
			SORT_ASC,
			$blocks
		);

		$cf7_status = $this->get_plugin_status( 'contact-form-7/wp-contact-form-7.php' );
		$gf_status  = $this->get_plugin_status( 'gravityforms/gravityforms.php' );

		if ( is_array( $blocks ) && ! empty( $blocks ) ) {

			$blocks_names = array();

			foreach ( $blocks as $addon => $info ) {

				$addon = str_replace( 'uagb/', '', $addon );

				$exclude_blocks = array(
					'column',
					'icon-list-child',
					'social-share-child',
					'buttons-child',
					'faq-child',
					'forms-name',
					'forms-email',
					'forms-hidden',
					'forms-phone',
					'forms-textarea',
					'forms-url',
					'forms-select',
					'forms-radio',
					'forms-checkbox',
					'forms-upload',
					'forms-toggle',
					'forms-date',
					'forms-accept',
					'post-title',
					'post-image',
					'post-button',
					'post-excerpt',
					'post-taxonomy',
					'post-meta',
					'restaurant-menu-child',
					'content-timeline-child',
					'tabs-child',
					'how-to-step',
				);

				if ( ( 'cf7-styler' === $addon && 'active' !== $cf7_status ) || ( 'gf-styler' === $addon && 'active' !== $gf_status ) ) {
					$exclude_blocks[] = $addon;
				}

				if ( 'yes' !== get_option( 'uagb-old-user-less-than-2' ) ) {
					$exclude_blocks[] = 'wp-search';
					$exclude_blocks[] = 'columns';
					$exclude_blocks[] = 'section';
					$exclude_blocks[] = 'cf7-styler';
					$exclude_blocks[] = 'gf-styler';
				}

				if ( array_key_exists( 'extension', $info ) && $info['extension'] ) {
					continue;
				}

				if ( in_array( $addon, $exclude_blocks, true ) ) {
					continue;
				}
				$info['slug']   = $addon;
				$blocks_names[] = $info;

			}

			return $blocks_names;
		}

		return array();

	}

	/**
	 * Get plugin status
	 *
	 * @since 2.0.0-beta.3
	 *
	 * @param  string $plugin_init_file Plguin init file.
	 * @return mixed
	 */
	public function get_plugin_status( $plugin_init_file ) {

		$installed_plugins = get_plugins();

		if ( ! isset( $installed_plugins[ $plugin_init_file ] ) ) {
			return 'not-installed';
		} elseif ( is_plugin_active( $plugin_init_file ) ) {
			return 'active';
		} else {
			return 'inactive';
		}
	}

	/**
	 * Settings app scripts
	 *
	 * @param array $localize Variable names.
	 */
	public function settings_app_scripts( $localize ) {
		$handle            = 'uag-admin-settings';
		$build_path        = UAG_ADMIN_DIR . 'assets/build/';
		$build_url         = UAG_ADMIN_URL . 'assets/build/';
		$script_asset_path = $build_path . 'dashboard-app.asset.php';
		$script_info       = file_exists( $script_asset_path )
			? include $script_asset_path
			: array(
				'dependencies' => array(),
				'version'      => UAGB_VER,
			);

		$script_dep = array_merge( $script_info['dependencies'], array( 'updates' ) );

		wp_register_script(
			$handle,
			$build_url . 'dashboard-app.js',
			$script_dep,
			$script_info['version'],
			true
		);

		wp_register_style(
			$handle,
			$build_url . 'dashboard-app.css',
			array(),
			UAGB_VER
		);

		wp_register_style(
			'uag-admin-google-fonts',
			'https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap',
			array(),
			UAGB_VER
		);

		wp_enqueue_script( $handle );

		wp_set_script_translations( $handle, 'ultimate-addons-for-gutenberg' );
		wp_enqueue_style( 'uag-admin-google-fonts' );
		wp_enqueue_style( $handle );
		wp_style_add_data( $handle, 'rtl', 'replace' );
		wp_localize_script( $handle, 'uag_admin_react', $localize );
		wp_localize_script( $handle, 'uag_react', $localize );

	}

	/**
	 *  Add footer link.
	 */
	public function add_footer_link() {

		$logs_page_url = '#';

		echo '<span id="footer-thankyou"> Thank you for using <a href="#" class="focus:text-wphovercolor active:text-wphovercolor hover:text-wphovercolor">Spectra.</a></span>';
	}

}

Admin_Menu::get_instance();
