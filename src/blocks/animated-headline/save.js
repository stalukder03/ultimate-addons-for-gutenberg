/**
 * BLOCK: Animated Headline - save
 */

import React from 'react';
import classnames from 'classnames';

const save = ( props ) => {
    const {
		block_id,
		headlineTag,
		animateType,
		beforeText,
		afterText,
		highlightedText,
		rotatingText,
	} = props.attributes;

    const beforeConent = beforeText && ( <span className="uagb-animated-headline__before-text">{beforeText}</span> )
	const afterContent = afterText && ( <span className="uagb-animated-headline__after-text">{afterText}</span> )
	const highlightedContent = highlightedText && ( <span className="uagb-animated-headline__text-highlighted">{highlightedText}</span> )
	const rotatingContent = rotatingText && ( <span className="uagb-animated-headline__text-rotating"></span> )
	const content = animateType === 'highlighted' ? highlightedContent : rotatingContent
	const CustomTag = `${headlineTag}`;
    
	return (
        <div
            className={ classnames(
                props.className,
                `uagb-block-${ block_id }`
            ) }
        >
            <CustomTag className="uagb-animated-headline">
				{beforeConent}
				{' '}{content}{' '}
				{afterContent}
			</CustomTag>
        </div>
    );
}
export default save;