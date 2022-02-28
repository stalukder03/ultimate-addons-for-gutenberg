/**
 * BLOCK: Columns - Editor Render.
 */

import classnames from 'classnames';
import shapes from './shapes';
import React, { useMemo } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
const ALLOWED_BLOCKS = [ 'uagb/column' ];
import { InnerBlocks } from '@wordpress/block-editor';

const Render = ( props ) => {

	const { attributes, isSelected, className } = props.parentProps;
	const deviceType = useDeviceType();
	const {
		isPreview,
		stack,
		align,
		vAlign,
		tag,
		columnGap,
		backgroundType,
		backgroundVideo,
		columns,
		bottomType,
		topType,
		bottomFlip,
		topFlip,
		reverseTablet,
		reverseMobile,
		topContentAboveShape,
		bottomContentAboveShape,
	} = attributes;

	const getColumnsTemplate = useMemo( () => {
		const childColumns = [];

		for ( let i = 0; i < columns; i++ ) {
			childColumns.push( [ 'uagb/column', { id: i + 1 } ] );
		}

		return childColumns;
	}, [ columns ] );

	const topDividerHtml = topType !== 'none' && (
		<div
			className={ classnames(
				'uagb-columns__shape',
				'uagb-columns__shape-top',
				{ 'uagb-columns__shape-flip': topFlip === true },
				{
					'uagb-columns__shape-above-content':
						topContentAboveShape === true,
				}
			) }
		>
			{ shapes[ topType ] }
		</div>
	);

	const bottomDividerHtml = bottomType !== 'none' && (
		<div
			className={ classnames(
				'uagb-columns__shape',
				'uagb-columns__shape-bottom',
				{ 'uagb-columns__shape-flip': bottomFlip === true },
				{
					'uagb-columns__shape-above-content':
						bottomContentAboveShape === true,
				}
			) }
			data-negative="false"
		>
			{ shapes[ bottomType ] }
		</div>
	);

	const reverseTabletClass = reverseTablet
		? 'uagb-columns__reverse-tablet'
		: '';

	const reverseMobileClass = reverseMobile
		? 'uagb-columns__reverse-mobile'
		: '';

	const CustomTag = `${ tag }`;

	const active = isSelected ? 'active' : 'not-active';

	const bgType = ( undefined !== backgroundType ) ? `uagb-columns__background-${ backgroundType }` : '';

	const verticalAlign = ( undefined !== vAlign ) ? `uagb-columns__valign-${ vAlign }` : '';

	const alignType = ( undefined !== align ) ? `align${ align }` : '';
	const previewImageData = '';

	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
		<CustomTag
			className={ classnames(
				className,
				'uagb-columns__wrap',
				`${ bgType }`,
				`uagb-columns__edit-${ active }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-columns__stack-${ stack }`,
				`${ verticalAlign }`,
				`uagb-columns__gap-${ columnGap }`,
				`${ alignType }`,
				reverseTabletClass,
				reverseMobileClass,
				`uagb-block-${ props.parentProps.clientId.substr( 0, 8 ) }`,
				`uagb-columns__columns-${ columns }`
			) }
		>
			<div className="uagb-columns__overlay"></div>
			{ topDividerHtml }
			{ 'video' === backgroundType && (
				<div className="uagb-columns__video-wrap">
					{ backgroundVideo && (
						<video autoPlay loop muted playsinline>
							<source
								src={ backgroundVideo.url }
								type="video/mp4"
							/>
						</video>
					) }
				</div>
			) }
			<InnerBlocks
				template={ getColumnsTemplate }
				templateLock="all"
				allowedBlocks={ ALLOWED_BLOCKS }
			/>
			{ bottomDividerHtml }
		</CustomTag>
	);
};

export default React.memo( Render );
