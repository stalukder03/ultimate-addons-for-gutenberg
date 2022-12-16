import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import React , { useLayoutEffect, useEffect } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import styles from './editor.lazy.scss';

const Render = ( props ) => {
	props = props.parentProps;

	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const {
		attributes: {
			block_id,
			headingTitleToggle,
			headingTitle,
			headingDesc,
			headingDescToggle,
			headingTag,
			seperatorStyle,
			seperatorPosition,
			headingDescPosition,
			isEnableAnimation,
			beforeText,
			afterText,
			animateType,
			rotatingAnimation,
			highlightedText,
			rotatingText,
		},
		setAttributes,
		className,
	} = props;

	const deviceType = useDeviceType();

	useEffect( () => {
		UAGBAnimatedHeading.init( '.uagb-block-' + props.attributes.block_id, props.attributes ) // eslint-disable-line no-undef
	}, [props.attributes, deviceType] )



	const separator = seperatorStyle !== 'none' && (
		<div className="uagb-separator-wrap">
			<div className="uagb-separator"></div>
		</div>
	);

	const getRotatingContent = () => {
		if( !rotatingText ){
			return;
		}
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

	const beforeConent = beforeText && ( <span className="uagb-animated-headline__before-text">{beforeText}</span> )
	const afterContent = afterText && ( <span className="uagb-animated-headline__after-text">{afterText}</span> )
	const animatedContent = animateType === 'highlighted' ? getHightLightedContent() : getRotatingContent()
	const CustomTag = `${headingTag}`;

	const headingText = (
		<>

			{ seperatorPosition === 'above-heading' ? separator : '' }
			{
				isEnableAnimation
				?
					<CustomTag className="uagb-heading-text">
						{beforeConent}
						{' '}{animatedContent}{' '}
						{afterContent}
					</CustomTag>
				: <RichText
					tagName={ headingTag }
					placeholder={ __(
						'Write a Heading',
						'ultimate-addons-for-gutenberg'
					) }
					value={ headingTitle }
					className="uagb-heading-text"
					multiline={ false }
					onChange={ ( value ) => {
						setAttributes( { headingTitle: value } );
					} }
				/>
			}

			{ seperatorPosition === 'below-heading' ? separator : '' }
		</>
	);

	const descText = (
		<>
			{ seperatorPosition === 'above-sub-heading' ? separator : '' }
			<RichText
				tagName="p"
				placeholder={ __(
					'Write a Description',
					'ultimate-addons-for-gutenberg'
				) }
				value={ headingDesc }
				className="uagb-desc-text"
				onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
			/>
			{ seperatorPosition === 'below-sub-heading' ? separator : '' }
		</>
	);

	return (
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			{ headingDescToggle && 'above-heading' === headingDescPosition ? descText : '' }
			{ headingTitleToggle && headingText }
			{ headingDescToggle && 'below-heading' === headingDescPosition ? descText : '' }
		</div>
	);
};
export default React.memo( Render );
