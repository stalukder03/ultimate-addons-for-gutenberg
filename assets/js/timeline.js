/**
 * Common js file for timeline.
 */
( function ( $ ) {
	// Listen for events.
	window.addEventListener( 'load', uagbTimelineInit );
	window.addEventListener( 'resize', uagbTimelineInit );
	window.addEventListener( 'scroll', uagbTimelineInit );

	// Callback function for all event listeners.
	function uagbTimelineInit() {
		const timeline = $( '.uagb-timeline' );
		if ( timeline.parents( '.wp-block' ).length === 0 ) {
			timeline.each( function () {
				const line_inner = $( this ).find(
					'.uagb-timeline__line__inner'
				);
				const line_outer = $( this ).find( '.uagb-timeline__line' );
				const $icon_class = $( this ).find( '.uagb-timeline__marker' );
				const $card_last = $( this ).find(
					'.uagb-timeline__field:last-child'
				);
				const $document = $( document );
				// Set top and bottom for line.
				const timeline_start_icon = $icon_class.first().position();
				const timeline_end_icon = $icon_class.last().position();
				line_outer.css( 'top', timeline_start_icon.top );

				const timeline_card_height = $card_last.height();
				const last_item_top =
					$card_last.offset().top - $( this ).offset().top;
				let $last_item, parent_top;

				if ( $( this ).hasClass( 'uagb-timeline__arrow-center' ) ) {
					line_outer.css( 'bottom', timeline_end_icon.top );

					parent_top = last_item_top - timeline_start_icon.top;
					$last_item = parent_top + timeline_end_icon.top;
				} else if ( $( this ).hasClass( 'uagb-timeline__arrow-top' ) ) {
					const top_height =
						timeline_card_height - timeline_end_icon.top;
					line_outer.css( 'bottom', top_height );

					$last_item = last_item_top;
				} else if (
					$( this ).hasClass( 'uagb-timeline__arrow-bottom' )
				) {
					const bottom_height =
						timeline_card_height - timeline_end_icon.top;
					line_outer.css( 'bottom', bottom_height );

					parent_top = last_item_top - timeline_start_icon.top;
					$last_item = parent_top + timeline_end_icon.top;
				}

				const elementEnd = $last_item + 20;
				const connectorHeight =
					3 *
					$( this ).find( '.uagb-timeline__marker:first' ).height();
				const viewportHeight = document.documentElement.clientHeight;
				const viewportHeightHalf = viewportHeight / 2 + connectorHeight;
				let elementPos = $( this ).offset().top;
				const new_elementPos = elementPos + timeline_start_icon.top;
				let photoViewportOffsetTop =
					new_elementPos - $document.scrollTop();

				if ( photoViewportOffsetTop < 0 ) {
					photoViewportOffsetTop = Math.abs( photoViewportOffsetTop );
				} else {
					photoViewportOffsetTop = -Math.abs(
						photoViewportOffsetTop
					);
				}

				if ( elementPos < viewportHeightHalf ) {
					if (
						viewportHeightHalf +
							Math.abs( photoViewportOffsetTop ) <
						elementEnd
					) {
						line_inner.height(
							viewportHeightHalf + photoViewportOffsetTop
						);
					} else if (
						photoViewportOffsetTop + viewportHeightHalf >=
						elementEnd
					) {
						line_inner.height( elementEnd );
					}
				} else if (
					photoViewportOffsetTop + viewportHeightHalf <
					elementEnd
				) {
					if ( 0 > photoViewportOffsetTop ) {
						line_inner.height(
							viewportHeightHalf -
								Math.abs( photoViewportOffsetTop )
						);
					} else {
						line_inner.height(
							viewportHeightHalf + photoViewportOffsetTop
						);
					}
				} else if (
					photoViewportOffsetTop + viewportHeightHalf >=
					elementEnd
				) {
					line_inner.height( elementEnd );
				}

				//Icon bg color and icon color
				let timeline_icon_pos, timeline_card_pos;
				let timeline_icon_top, timeline_card_top;
				const timeline_icon = $( this ).find( '.uagb-timeline__marker' );
				let	animate_border = $( this ).find(
						'.uagb-timeline__field-wrap'
					);

				if ( animate_border.length === 0 ) {
					animate_border = $( this ).find(
						'.uagb-timeline__animate-border'
					);
				}

				for ( let i = 0; i < timeline_icon.length; i++ ) {
					timeline_icon_pos = $( timeline_icon[ i ] ).offset().top;
					timeline_card_pos = $( animate_border[ i ] ).offset().top;
					elementPos = $( this ).offset().top;

					timeline_icon_top =
						timeline_icon_pos - $document.scrollTop();
					timeline_card_top =
						timeline_card_pos - $document.scrollTop();

					if ( timeline_card_top < viewportHeightHalf ) {
						animate_border[ i ].classList.remove( 'out-view' );
						animate_border[ i ].classList.add( 'in-view' );
					} else {
						// Remove classes if element is below than half of viewport.
						animate_border[ i ].classList.add( 'out-view' );
						animate_border[ i ].classList.remove( 'in-view' );
					}

					if ( timeline_icon_top < viewportHeightHalf ) {
						// Add classes if element is above than half of viewport.
						timeline_icon[ i ].classList.remove(
							'uagb-timeline__out-view-icon'
						);
						timeline_icon[ i ].classList.add(
							'uagb-timeline__in-view-icon'
						);
					} else {
						// Remove classes if element is below than half of viewport.
						timeline_icon[ i ].classList.add(
							'uagb-timeline__out-view-icon'
						);
						timeline_icon[ i ].classList.remove(
							'uagb-timeline__in-view-icon'
						);
					}
				}
			} );
		}
	}
} )( jQuery );
