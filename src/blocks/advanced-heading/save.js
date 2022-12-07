/**
 * BLOCK: Advanced Heading - Save Block
 */

import classnames from 'classnames';

import { RichText } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';

export default function save( props ) {

	const {
		block_id,
		headingTitleToggle,
		headingTitle,
		headingDesc,
		headingDescToggle,
		headingTag,
		seperatorStyle,
		headingId,
		globalBlockStyleName,
		spectraBlockName
	} = props.attributes;

	let seprator = '';
	if ( seperatorStyle !== 'none' ) {
		seprator = <div className="uagb-separator"></div>
	}
	let headingText = '';
	if ( headingTitle ) {
		headingText = (
			<RichText.Content
				tagName={ headingTag }
				value={ headingTitle }
				className="uagb-heading-text"
				id={ headingId }
			/>
		);
	}
	let descText = '';

	if ( headingDesc ) {
		descText = (
			<RichText.Content
				tagName="p"
				value={ headingDesc }
				className="uagb-desc-text"
			/>
		);
	}

	let blockNameClass = spectraBlockName?.split( '/' )?.pop();
	let htmlAttributes = {
		className: classnames( {
			[props.className]: true,
			[`uagb-block-${ block_id }`] : true,
			[`spectra-gbs-${blockNameClass}-${globalBlockStyleName}`] : true
		} ),
	};

	return (
		<div
			{...htmlAttributes}
		>
			{ headingTitleToggle && headingText }
			{ seprator }
			{ headingDescToggle && descText }
		</div>
	);
}
