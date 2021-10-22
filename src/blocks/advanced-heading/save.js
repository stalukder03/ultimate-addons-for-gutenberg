/**
 * BLOCK: Advanced Heading - Save Block
 */

import classnames from 'classnames';

import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		block_id,
		headingTitle,
		headingDesc,
		headingTag,
		seperatorStyle,
		headingId,
		showheading,
		showseprator,
		showdesc
	} = props.attributes;

	let seprator = '';
	if ( showseprator && seperatorStyle !== 'none' ) {
		seprator = (
			<div className="uagb-separator-wrap">
				<div className="uagb-separator"></div>
			</div>
		);
	}
	let headingText = '';
	if ( headingTitle !== '' ) {
		headingText = showheading && (
			<RichText.Content
				tagName={ headingTag }
				value={ headingTitle }
				className="uagb-heading-text"
				id={ headingId }
			/>
		);
	}
	let descText = '';

	if ( showdesc && headingDesc !== '' ) {
		descText = (
			<RichText.Content
				tagName="p"
				value={ headingDesc }
				className="uagb-desc-text"
			/>
		);
	}

	return (
		<div
			className={ classnames(
				props.className,
				`uagb-block-${ block_id }`
			) }
		>
			{ headingText }
			{ seprator }
			{ descText }
		</div>
	);
}
