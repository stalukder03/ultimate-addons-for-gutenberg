import React from 'react';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';

export default function Save( props ) {
	const {
		block_id,
		layout,
		url,
		alt,
		caption,
		href,
		linkClass,
		width,
		height,
		align,
		id,
		linkTarget,
		rel,
		title,
		heading,
		overlayContentPosition,
		seperatorStyle,
		seperatorPosition
	} = props.attributes;
	const image = (
		<img
			src={ url }
			alt={ alt }
			className={ id ? `uag-image-${ id }` : null }
			width={ width }
			height={ height }
			title={ title }
		/>
	);
	// block validation issue fixing - ImageURLInputUI components automatic provide "noopener"
	const getRel = () => {
		if( rel ){
			return rel + ' noopener';
		}
		return 'noopener';
	}
	const figureImage = (
		<>
			{ href ? (
				<a
					className={ linkClass }
					href={ href }
					target={ linkTarget }
					rel={getRel()}
				>
					{ image }
				</a>
			) : (
				image
			) }
		</>
	);

	const imageHeading = (
		<>
			{ ( ! RichText.isEmpty( heading ) ) && (
				<RichText.Content tagName="h2" className='uagb-image-heading' value={ heading } />
			) }
		</>
	)

	const imageCaption = (
		<>
			{ ! RichText.isEmpty( caption ) && (
				<RichText.Content tagName="figcaption" className='uagb-image-caption' value={ caption } />
			) }
		</>
	)

	const separator = 'none' !== seperatorStyle && (
		<div className="uagb-image-separator"></div>
	)

	return (
		<>
			<figure className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
				'wp-block-uagb-image',
				`wp-block-uagb-image--layout-${ layout }`,
				`${align ? 'wp-block-uagb-image--align-' + align : ''}`
			) }>
				{ figureImage }
				{
					layout === 'overlay' ? (
						<>
							<div className='wp-block-uagb-image--layout-overlay__color-wrapper'></div>
							<div className={`wp-block-uagb-image--layout-overlay__inner ${overlayContentPosition.replace( ' ', '-' )}`}>
								{ 'before_title' === seperatorPosition && separator}
								{imageHeading}
								{ 'after_title' === seperatorPosition && separator}
								{imageCaption}
								{ 'after_sub_title' === seperatorPosition && separator}
							</div>
						</>
					) : (
						imageCaption
					)
				}
			</figure>
		</>
	);
}
