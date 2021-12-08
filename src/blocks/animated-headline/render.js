import React from 'react';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


const Render = ( props ) => {
	props = props.parentProps;
	const {
		attributes: {
			block_id,
			headingTitle,
            headingTag
		},
		setAttributes,
		className,
		deviceType,
	} = props;

	const headingText = (
		<RichText
			tagName={ headingTag }
			placeholder={ __(
				'Write a Heading',
				'ultimate-addons-for-gutenberg'
			) }
			value={ headingTitle }
			className="uagb-animated-heading-text"
			multiline={ false }
			onChange={ ( value ) => {
				setAttributes( { headingTitle: value } );
			} }
		/>
	);
	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			{ headingText }
		</div>
	);
};
export default React.memo( Render );
