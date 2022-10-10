import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import React, { useMemo } from 'react';
import { select } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/slider-child' ];


const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		deviceType,
		clientId,
		attributes: { slide_content, slideItem },
	} = props;

	const {
		block_id,
		htmlTag,
		htmlTagLink,
		backgroundType,
		backgroundVideo,
		isBlockRootParent,
		contentWidth
	} = attributes;

	const getSliderTemplate = useMemo( () => {
		return slide_content;
	}, [ slideItem, slide_content ] );

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
				<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ getSliderTemplate }
						templateLock={ false }
				/>
			</CustomTag>
		</>
	);
};
export default React.memo( Render );
