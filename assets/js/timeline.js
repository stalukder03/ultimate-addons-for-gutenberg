// Listen for events.
window.addEventListener( 'load', uagbTimelineInit );
window.addEventListener( 'resize', uagbTimelineInit );
window.addEventListener( 'scroll', uagbTimelineInit );

// Callback function for all event listeners.
function uagbTimelineInit() {
	const timeline = document.querySelectorAll( '.uagb-timeline' );
	if ( timeline.length === 0 ) {
		return;
	}
	for ( let i = 0; i < timeline.length; i++ ) {

		const line_inner = timeline[i].querySelector( '.uagb-timeline__line__inner' );
		const line_outer = timeline[i].querySelector( '.uagb-timeline__line' );

		const $icon_class = timeline[i].querySelectorAll( '.uagb-timeline__marker' );
		const $card_last = timeline[i].querySelector( '.uagb-timeline__field:last-child' );

		const timeline_start_icon = $icon_class[0];
		const timeline_end_icon = $icon_class[$icon_class.length - 1];

		line_outer.style.top = timeline_start_icon.offsetTop + 'px';
		const timeline_card_height = $card_last.offsetHeight;

		const last_item_top = $card_last.offsetTop;

		let $last_item, parent_top;

		if ( timeline[i].classList.contains( 'uagb-timeline__arrow-center' ) ) {

			line_outer.style.bottom = timeline_end_icon.offsetTop + 'px';
			parent_top = last_item_top - timeline_start_icon.offsetTop;
			$last_item = parent_top + timeline_end_icon.offsetTop;

		} else if ( timeline[i].classList.contains( 'uagb-timeline__arrow-top' ) ) {

			const top_height = timeline_card_height - timeline_end_icon.offsetTop;
			line_outer.style.bottom = top_height + 'px';
			$last_item = last_item_top;

		} else if ( timeline[i].classList.contains( 'uagb-timeline__arrow-bottom' ) ) {

			const bottom_height = timeline_card_height - timeline_end_icon.offsetTop;
			line_outer.style.bottom = bottom_height + 'px';
			parent_top = last_item_top - timeline_start_icon.offsetTop;
			$last_item = parent_top + timeline_end_icon.offsetTop;
		}
		const elementEnd = $last_item + 20;

		const connectorHeight = 3 * $icon_class[0].offsetHeight;

		const viewportHeight = document.documentElement.clientHeight;

		const viewportHeightHalf = viewportHeight / 2 + connectorHeight;
		const elementPos = timeline[i].offsetTop;

		const new_elementPos = elementPos + timeline_start_icon.offsetTop;

		let photoViewportOffsetTop = new_elementPos - window.screenY;

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
				line_inner.style.height = viewportHeightHalf + photoViewportOffsetTop;

			} else if (
				photoViewportOffsetTop + viewportHeightHalf >=
				elementEnd
			) {
				line_inner.style.height = elementEnd;
			}
		} else if (
			photoViewportOffsetTop + viewportHeightHalf <
			elementEnd
		) {
			if ( 0 > photoViewportOffsetTop ) {
				line_inner.style.height = viewportHeightHalf - Math.abs( photoViewportOffsetTop );
			} else {
				line_inner.style.height = viewportHeightHalf + photoViewportOffsetTop;
			}
		} else if (
			photoViewportOffsetTop + viewportHeightHalf >= elementEnd
		) {
			line_inner.style.height = elementEnd;
		}

		// Icon bg color and icon color
		let timeline_icon_pos, timeline_card_pos;
		let timeline_icon_top, timeline_card_top;
		const timeline_icon = timeline[i].querySelectorAll( '.uagb-timeline__marker' );

		let animate_border = timeline[i].querySelectorAll( '.uagb-timeline__field-wrap' );

		if ( animate_border.length === 0 ) {
			animate_border = timeline[i].querySelectorAll( '.uagb-timeline__animate-border' );
		}

		for ( let j = 0; j < timeline_icon.length; j++ ) {
			timeline_icon_pos = timeline_icon[j].offsetTop;

			timeline_card_pos = animate_border[j].offsetTop;

			timeline_icon_top = timeline_icon_pos;
			timeline_card_top = timeline_card_pos;

			if ( timeline_card_top < viewportHeightHalf ) {
				animate_border[j].classList.remove( 'out-view' );
				animate_border[j].classList.add( 'in-view' );
			} else {
				// Remove classes if element is below than half of viewport.
				animate_border[j].classList.add( 'out-view' );
				animate_border[j].classList.remove( 'in-view' );
			}

			if ( timeline_icon_top < viewportHeightHalf ) {
				// Add classes if element is above than half of viewport.
				timeline_icon[j].classList.remove(
					'uagb-timeline__out-view-icon'
				);
				timeline_icon[j].classList.add(
					'uagb-timeline__in-view-icon'
				);
			} else {
				// Remove classes if element is below than half of viewport.
				timeline_icon[j].classList.add(
					'uagb-timeline__out-view-icon'
				);
				timeline_icon[j].classList.remove(
					'uagb-timeline__in-view-icon'
				);
			}
		}
	}
}
