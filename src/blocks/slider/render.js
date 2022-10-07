import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import React from 'react';
import { select } from '@wordpress/data';

const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		deviceType,
		clientId
	} = props;

	const {
		block_id,
		htmlTag,
		htmlTagLink,
		backgroundType,
		backgroundVideo,
		isBlockRootParent,
		contentWidth,
		innerContentWidth
	} = attributes;

	const direction = attributes[ 'direction' + deviceType ];

	const moverDirection = 'row' === direction ? 'horizontal' : 'vertical';

	const { getBlockOrder } = select( 'core/block-editor' );

	const hasChildBlocks = getBlockOrder( clientId ).length > 0;

	const CustomTag = `${htmlTag}`;
	const customTagLinkAttributes = {};
	if( htmlTag === 'a' ){
		customTagLinkAttributes.rel = 'noopener'
		customTagLinkAttributes.onClick = ( e ) => e.preventDefault()
		if( htmlTagLink?.url ){
			customTagLinkAttributes.href = htmlTagLink?.url;
		}
		if( htmlTagLink?.opensInNewTab ){
			customTagLinkAttributes.target = '_blank';
		}
		if( htmlTagLink?.noFollow ){
			customTagLinkAttributes.rel = 'nofollow noopener';
		}
	}

	const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length;
	const hasChildrenClass = hasChildren ? 'uagb-container-has-children' : '';
	const isRootContainerClass = isBlockRootParent ? 'uagb-is-root-container' : '';
	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id } ${contentWidth} ${hasChildrenClass} uagb-editor-preview-mode-${ deviceType.toLowerCase() } ${isRootContainerClass}`,
	} );

	return (
		<>
			<CustomTag
				{ ...blockProps }
				key = { block_id }
				{...customTagLinkAttributes}
			>
				{ 'video' === backgroundType && (
					<div className="uagb-container__video-wrap">
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
				{ isBlockRootParent && 'alignfull' === contentWidth && 'alignwide' === innerContentWidth
				?  (
					<div className='uagb-container-inner-blocks-wrap'>
						<InnerBlocks
							__experimentalMoverDirection={ moverDirection }
							renderAppender = { hasChildBlocks
							? undefined
							: InnerBlocks.ButtonBlockAppender }
						/>
					</div>
				)
				: <InnerBlocks
						__experimentalMoverDirection={ moverDirection }
						renderAppender = { hasChildBlocks
						? undefined
						: InnerBlocks.ButtonBlockAppender }
					/>
				}
			</CustomTag>
		</>
	);
};
export default React.memo( Render );
