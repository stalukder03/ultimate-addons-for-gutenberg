import React, { useEffect } from 'react';
import classnames from 'classnames';


const Render = ( props ) => {
	props = props.parentProps;
	const {
		attributes: {
			block_id,
            headlineTag,
			animateType,
			beforeText,
			highlightedText,
			rotatingText,
			afterText,
		},
		className,
		deviceType,
	} = props;

	useEffect( () => {
		window.UAGBAnimatedHeading.init( '.uagb-block-' + props.attributes.block_id, props.attributes );
	}, [props.attributes] )

	const beforeConent = beforeText && ( <span className="uagb-animated-headline__before-text">{beforeText}</span> )
	const afterContent = afterText && ( <span className="uagb-animated-headline__after-text">{afterText}</span> )
	const highlightedContent = highlightedText && ( <span className="uagb-animated-headline__text-highlighted">{highlightedText}</span> )
	const rotatingContent = rotatingText && ( <span className="uagb-animated-headline__text-rotating"></span> )
	const content = animateType === 'highlighted' ? highlightedContent : rotatingContent
	const CustomTag = `${headlineTag}`;
	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
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
};
export default React.memo( Render );
