/**
 * BLOCK: Advanced Heading - Save Block
 */

import classnames from 'classnames';

import { RichText } from '@wordpress/block-editor';

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
		seperatorPosition,
		headingDescPosition,
		animateType,
		rotatingAnimation,
		highlightedText,
		rotatingText,
	} = props.attributes;

	let seprator = '';
	if ( seperatorStyle !== 'none' ) {
		seprator = <div className="uagb-separator"></div>
	}
	let headingText = '';
	if ( headingTitle ) {
		headingText = (
			<>
				{ seperatorPosition === 'above-heading' ? seprator : '' }
				<RichText.Content
					tagName={ headingTag }
					value={ headingTitle }
					className="uagb-heading-text"
					id={ headingId }
				/>
				{ seperatorPosition === 'below-heading' ? seprator : '' }
			</>
		);
	}
	let descText = '';

	if ( headingDesc ) {
		descText = (
			<>
				{ seperatorPosition === 'above-sub-heading' ? seprator : '' }
				<RichText.Content
					tagName="p"
					value={ headingDesc }
					className="uagb-desc-text"
				/>
				{ seperatorPosition === 'below-sub-heading' ? seprator : '' }
			</>
		);
	}

	const getRotatingContent = () => {
		const rotatingTextArray = rotatingText.split( /\n|\\n/ );
		const dynamicLetterAnimationLists = ['typing', 'swirl', 'blinds', 'wave']
		return (
			<span className={`uagb-animated-headline__text-rotating uagb-animated-headline__text-rotating--${rotatingAnimation}`}>
				{
					rotatingTextArray.length > 0 && rotatingTextArray.map( ( item, index ) => (
						<span
							className={`uagb-animated-headline-dynamic-text uagb-animated-headline-dynamic-text--${index === 0 ? `active` : 'inactive'}`} key={index}
						>
								{
									dynamicLetterAnimationLists.indexOf( rotatingAnimation )  !== -1 ? (
									<>
										{
											item.split( '' ).map( ( ChildItem, ChildItemIndex ) => (
												<span className="uagb-animated-headline-dynamic-letter" key={ChildItemIndex}>{ChildItem}</span>
											) )
										}
									</>
									) : item
								}
						</span>
					) )
				}
			</span>
		);
	}

	const getHightLightedContent = () => {
		if( !highlightedText ){
			return;
		}
		return (
			<span className="uagb-animated-headline__text-highlighted">
				<span className='uagb-animated-headline-dynamic-text'>{highlightedText}</span>
				<span className='uagb-animated-headline-dynamic-svg'></span>
			</span>
		)
	}

	const animatedContent = animateType === 'highlighted' ? getHightLightedContent() : getRotatingContent()

	return (
		<div
			className={ classnames(
				props.className,
				`uagb-block-${ block_id }`
			) }
		>
			{ headingDescToggle && 'above-heading' === headingDescPosition ? descText : '' }
			{ headingTitleToggle && headingText }
			{animatedContent}
			{ headingDescToggle && 'below-heading' === headingDescPosition ? descText : '' }
		</div>
	);
}
