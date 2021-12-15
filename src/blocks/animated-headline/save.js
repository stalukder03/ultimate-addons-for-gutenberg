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
		rotatingAnimation,
		beforeText,
		afterText,
		highlightedText,
		rotatingText,
	} = props.attributes;

	const getRotatingContent = () => {
		const rotatingTextArray = rotatingText.split( /\n|\\n/ );
		return (
			<span className={`uagb-animated-headline__text-rotating uagb-animated-headline__text-rotating--${rotatingAnimation}`}>
				{
					rotatingTextArray.length > 0 && rotatingTextArray.map((item, index) => (
						<span 
							className={`uagb-animated-headline-dynamic-text ${index === 0 ? `uagb-animated-headline-dynamic-text--active` : 'uagb-animated-headline-dynamic-text--inactive'}`} key={index}
						>
								{item}
						</span>
					))
				}
			</span>
		);
	}

    const beforeConent = beforeText && ( <span className="uagb-animated-headline__before-text">{beforeText}</span> )
	const afterContent = afterText && ( <span className="uagb-animated-headline__after-text">{afterText}</span> )
	const highlightedContent = highlightedText && ( <span className="uagb-animated-headline__text-highlighted">{highlightedText}</span> )
	const content = animateType === 'highlighted' ? highlightedContent : getRotatingContent()
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