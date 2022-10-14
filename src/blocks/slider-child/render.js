import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import React from 'react';
import { select } from '@wordpress/data';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	props = props.parentProps;
	const {
		attributes,
		deviceType,
		clientId
	} = props;

	const {
		block_id,
		backgroundType,
		backgroundVideo,
		isBlockRootParent,
		contentWidth,
	} = attributes;

	const { getBlockOrder } = select( 'core/block-editor' );

	const hasChildBlocks = getBlockOrder( clientId ).length > 0;

	const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length;
	const hasChildrenClass = hasChildren ? 'uagb-container-has-children' : '';
	const isRootContainerClass = isBlockRootParent ? 'uagb-is-root-container' : '';
	const blockProps = useBlockProps( {
		className: `uagb-slider-child-wrap uagb-block-${ block_id } ${contentWidth} ${hasChildrenClass} uagb-editor-preview-mode-${ deviceType.toLowerCase() } ${isRootContainerClass}`,
	} );

	return (
		<>
			<div
				{ ...blockProps }
				key = { block_id }
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
						renderAppender = { hasChildBlocks
						? undefined
						: InnerBlocks.ButtonBlockAppender }
					/>
			</div>
		</>
	);
};

export default React.memo( Render );
