<?php
/**
 * Uag Admin Helper.
 *
 * @package Uag
 */

namespace UagAdmin\Inc;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Admin_Helper.
 */
class Admin_Helper {

	/**
	 * Common.
	 *
	 * @var object instance
	 */
	public static $common = null;

	/**
	 * Options.
	 *
	 * @var object instance
	 */
	public static $options = null;

	/**
	 * Get Common settings.
	 *
	 * @return array.
	 */
	public static function get_common_settings() {

		$uag_versions   = self::get_rollback_versions_options();
		$changelog_data = self::get_changelog_feed_data();

		$options = array(
			'rollback_to_previous_version'       => isset( $uag_versions[0]['value'] ) ? $uag_versions[0]['value'] : '',
			'enable_beta_updates'                => \UAGB_Admin_Helper::get_admin_settings_option( 'uagb_beta', 'no' ),
			'enable_file_generation'             => \UAGB_Admin_Helper::get_admin_settings_option( '_uagb_allow_file_generation', 'enabled' ),
			'blocks_activation_and_deactivation' => self::get_blocks(),
			'enable_templates_button'            => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_templates_button', 'yes' ),
			'enable_block_condition'             => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_block_condition', 'enabled' ),
			'enable_masonry_gallery'             => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_masonry_gallery', 'enabled' ),
			'select_font_globally'               => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_select_font_globally', array() ),
			'load_select_font_globally'          => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_load_select_font_globally', 'disabled' ),
			'load_gfonts_locally'                => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_load_gfonts_locally', 'disabled' ),
			'collapse_panels'                    => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_collapse_panels', 'enabled' ),
			'copy_paste'                         => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_copy_paste', 'enabled' ),
			'preload_local_fonts'                => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_preload_local_fonts', 'disabled' ),
			'social_login'                		 => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_social_login', [] ),
			'uag_previous_versions'              => $uag_versions,
			'changelog_data'                     => $changelog_data,
		);

		return $options;
	}
	/**
	 * Get Changelogs from API.
	 *
	 * @since x.x.x
	 * @return array $changelog_data Changelog Data.
	 */
	public static function get_changelog_feed_data() {
		$posts          = json_decode( wp_remote_retrieve_body( wp_remote_get( 'https://ultimategutenberg.com/wp-json/wp/v2/changelog?per_page=3' ) ) );
		$changelog_data = array();

		if ( isset( $posts ) && is_array( $posts ) ) {
			foreach ( $posts as $post ) {

				$changelog_data[] = array(
					'title'       => $post->title->rendered,
					'date'        => gmdate( 'l F j, Y', strtotime( $post->date ) ),
					'description' => $post->content->rendered,
					'link'        => $post->link,
				);
			}
		}

		return $changelog_data;
	}
	/**
	 * Get blocks.
	 */
	public static function get_blocks() {

		// Get all blocks.
		$list_blocks    = \UAGB_Helper::$block_list;
		$default_blocks = array();

		// Set all extension to enabled.
		foreach ( $list_blocks as $slug => $value ) {
			$_slug                    = str_replace( 'uagb/', '', $slug );
			$default_blocks[ $_slug ] = $_slug;
		}

		// Escape attrs.
		$default_blocks = array_map( 'esc_attr', $default_blocks );
		$saved_blocks   = \UAGB_Admin_Helper::get_admin_settings_option( '_uagb_blocks', array() );

		return wp_parse_args( $saved_blocks, $default_blocks );
	}

	/**
	 * Get options.
	 */
	public static function get_options() {

		$general_settings = self::get_common_settings();

		$options = $general_settings;

		$options = apply_filters( 'uag_global_data_options', $options );

		return $options;
	}

	/**
	 * Get Rollback versions.
	 *
	 * @since 1.23.0
	 * @return array
	 * @access public
	 */
	public static function get_rollback_versions_options() {

		$rollback_versions = \UAGB_Admin_Helper::get_instance()->get_rollback_versions();

		$rollback_versions_options = array();

		foreach ( $rollback_versions as $version ) {

			$version = array(
				'label' => $version,
				'value' => $version,

			);

			$rollback_versions_options[] = $version;
		}

		return $rollback_versions_options;
	}
	/**
	 * Sort Rollback versions.
	 *
	 * @param string $prev Previous Version.
	 * @param string $next Next Version.
	 *
	 * @since 1.23.0
	 * @return array
	 * @access public
	 */
	public static function sort_rollback_versions( $prev, $next ) {

		if ( version_compare( $prev, $next, '==' ) ) {
			return 0;
		}

		if ( version_compare( $prev, $next, '>' ) ) {
			return -1;
		}

		return 1;
	}
}
