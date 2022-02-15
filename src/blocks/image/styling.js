/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';



export default function styling(props) {
	const {
		width,
		height,
	} = props.attributes;

	const selectors = {
		'.wp-block-uagb-image img ':{
			'width': width || 'inherit',
			'height': height || 'inherit',
		},
	}

	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	let styling_css = generateCSS( selectors, base_selector );


	const tablet_selectors = {};
	const mobile_selectors = {};
	return styling_css;
}
