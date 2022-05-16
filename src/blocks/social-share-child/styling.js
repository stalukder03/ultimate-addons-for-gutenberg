/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';

function styling( props ) {
	const {
		icon_color,
		icon_hover_color,
		icon_bg_color,
		icon_bg_hover_color,
	} = props.attributes;

	const selectors = {};

	if( icon_color ) {
		selectors['.uagb-ss-repeater a.uagb-ss__link'] = {
			'color': icon_color,
		};
		selectors['.uagb-ss-repeater a.uagb-ss__link svg'] = {
			'fill': icon_color,
		};
	} else {
		delete selectors['.uagb-ss-repeater a.uagb-ss__link'];
		delete selectors['.uagb-ss-repeater a.uagb-ss__link svg'];
	}

	if( icon_hover_color ) {
		selectors['.uagb-ss-repeater:hover a.uagb-ss__link'] = {
			'color': icon_hover_color,
		};
		selectors['.uagb-ss-repeater:hover a.uagb-ss__link svg'] = {
			'fill': icon_hover_color,
		};
	}

	if( icon_bg_color ) {
		selectors['.uagb-ss-repeater.uagb-ss__wrapper'] = {
			'color': icon_bg_color,
		};
	}

	if( icon_bg_hover_color ) {
		selectors['.uagb-ss-repeater.uagb-ss__wrapper:hover'] = {
			'fill': icon_bg_hover_color,
		};
	}

	let stylingCss = '';
	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	stylingCss = generateCSS( selectors, id );

	return stylingCss;
}

export default styling;
