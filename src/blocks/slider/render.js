import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import React, { useMemo } from 'react';
import { select } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/slider-child' ];


const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		clientId,
		attributes: { slide_content, slideItem },
	} = props;

	const {
		block_id,
		htmlTag,
		htmlTagLink,
		isBlockRootParent,
		contentWidth
	} = attributes;

	const getSliderTemplate = useMemo( () => {
		const childSlide = [];

		for ( let i = 0; i < slideItem; i++ ) {
			childSlide.push( [
				'uagb/slider-child',
				slide_content[ i ],
			] );
		}
		return childSlide;
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
		className: `uagb-block-${ block_id } ${contentWidth} ${hasChildrenClass} ${isRootContainerClass}`,
	} );

	return (
		<>
			<CustomTag
				{ ...blockProps }
				key = { block_id }
				{...customTagLinkAttributes}
			>
				<div className='uagb-slides'
				>
					<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
							template={ getSliderTemplate }
							templateLock={ false }
					/>
					<div className='uagb-slider-button-prev'>
						<i aria-hidden="true" className="eicon-chevron-left"></i>
					</div>
					<div className='uagb-slider-button-next'>
						<i aria-hidden="true" className="eicon-chevron-right"></i>
					</div>
				</div>
			</CustomTag>
		</>
	);
};
export default React.memo( Render );
