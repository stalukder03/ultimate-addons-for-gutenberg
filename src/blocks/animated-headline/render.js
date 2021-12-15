import React, { useEffect } from 'react';
import classnames from 'classnames';


const Render = ( props ) => {
	props = props.parentProps;
	const {
		attributes: {
			block_id,
            headlineTag,
			animateType,
			rotatingAnimation,
			beforeText,
			highlightedText,
			rotatingText,
			afterText,
		},
		className,
		deviceType,
	} = props;

	useEffect( () => {
		UAGBAnimatedHeading.init( '.uagb-block-' + props.attributes.block_id, props.attributes );
	}, [props.attributes] )

	const getRotatingContent = () => {
		if(!rotatingText){
			return;
		}
		const rotatingTextArray = rotatingText.split( /\n|\\n/ );

		return (
			<span className={`uagb-animated-headline__text-rotating uagb-animated-headline__text-rotating--${rotatingAnimation}`}>
				{
					rotatingTextArray.length > 0 && rotatingTextArray.map((item, index) => (
						<span 
							className={`uagb-animated-headline-dynamic-text ${index === 0 ? `uagb-animated-headline-dynamic-text--active` : ''}`} key={index}
						>
								{
									rotatingAnimation === 'typing' ? (
									<>
										{
											item.split('').map((ChildItem, ChildItemIndex) => (
												<span className="uagb-animated-headline-dynamic-letter" key={ChildItemIndex}>{ChildItem}</span>
											))
										}
									</>
									) : item
								}
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
// remove React.memo for caching related issue ignore
export default Render;
