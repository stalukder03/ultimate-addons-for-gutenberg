/**
 * BLOCK: Animated Headline - save
 */

import React from 'react';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

const save = (props) => {
    const {
		block_id,
		headingTitle,
		headingTag,
		headingId,
	} = props.attributes;
    let headingText = '';
	if ( headingTitle !== '' ) {
		headingText = (
			<RichText.Content
				tagName={ headingTag }
				value={ headingTitle }
				className="uagb-animated-heading-text"
				id={ headingId }
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
        </div>
    );
}
export default save;