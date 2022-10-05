<?php

// require_once plugin_dir_path( __DIR__ ) . 'lib/wp-background-processing/class-spectra-wp-background-process.php';

class UAGB_Background_Process extends \Spectra_WP_Background_Process {

	/**
	 * @var string
	 */
	protected $action = 'collect_spectra_blocks_count';

	public $pages_parsed = array();

	/**
	 * Task
	 *
	 * Override this method to perform any actions required on each
	 * queue item. Return the modified item for further processing
	 * in the next pass through. Or, return false to remove the
	 * item from the queue.
	 *
	 * @param mixed $item Queue item to iterate over
	 *
	 * @return mixed
	 */
	public function task( $item ) {

		error_log( "This is task function" );
		error_log( $item['data'] );

		$post_id = $item['data'];
		$list_blocks = $item['list_blocks'];

		$spectra_block_count = 0;
		$blocks_count        = array();
		$new_blocks_count        = array();
		$all_blocks_data     = array();

		$saved_block_count = get_option( 'get_spectra_block_count', 0 );

		// Update block list count.
		foreach ( $list_blocks as $slug => $value ) {
			$_slug                                       = str_replace( 'uagb/', '', $slug );
			$all_blocks_data[ '<!-- wp:' . $slug . ' ' ] = array(
				'name' => $_slug,
			);
			$new_blocks_count[ $_slug ]                      = array(
				'name'  => $_slug,
				'count' => 0,
			);
		}

		// Check if already block count is saved.
		if ( ! $saved_block_count ) {
			$blocks_count = $new_blocks_count;
		} elseif ( is_array( $saved_block_count ) && count( $saved_block_count ) !== 0 ) {
			$blocks_count = $saved_block_count;
		}

		// Get post content and parse for block count.
		$current_post = get_post( $post_id );
		$post_content = $current_post->post_content;
		
		if( $current_post ) {
			// $all_blocks_data this is set dependently, make sure it works correctly.
			foreach ( $all_blocks_data as $block_key => $block ) {
				if ( false !== strpos( $post_content, $block_key ) ) {
					$block_slug = str_replace( '<!-- wp:uagb/', '', $block_key );
					$block_slug = str_replace( ' ', '', $block_slug );
	
					$usage_count                          = $blocks_count[ $block_slug ]['count'];
					$latest_count                         = substr_count( $post_content, $block_key );
					$blocks_count[ $block_slug ]['count'] = $usage_count + $latest_count;
					$spectra_block_count++;
				}
			}
		}

		if ( $spectra_block_count > 0 ) {
			update_option( 'get_spectra_block_count', $blocks_count );
		}

		return false;
	}

	/**
	 * Complete
	 *
	 * Override if applicable, but ensure that the below actions are
	 * performed, or, call parent::complete().
	 */
	public function complete() {
		parent::complete();

		// Show notice to user or perform some other arbitrary task...
	}

	public function is_queue_empty() {
		return parent::is_queue_empty();
	}

	/**
	 * Is process running
	 *
	 * Check whether the current process is already running
	 * in a background process.
	 */
	public function is_process_running() {
		return parent::is_process_running();
	}

}
