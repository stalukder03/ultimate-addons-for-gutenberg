import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import React, { useMemo, useState } from 'react';
import { select } from '@wordpress/data';
const ALLOWED_BLOCKS = [ 'uagb/slider-child' ];


const Render = ( props ) => {

	props = props.parentProps;
	const {
		attributes,
		clientId,
		attributes: { slide_content, slideItem },
	} = props;

	const [slideIndex, setSlideIndex] = useState( 1 );

	const nextSlide = () => {
        if( slideIndex !== slideItem ){
            setSlideIndex( slideIndex + 1 )
        } 
        else if ( slideIndex === slideItem ){
            setSlideIndex( 1 )
        }
    }

    const prevSlide = () => {
        if( slideIndex !== 1 ){
            setSlideIndex( slideIndex - 1 )
        }
        else if ( slideIndex === 1 ){
            setSlideIndex( slideItem )
        }
    }

	const {
		block_id,
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

	const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length;
	const hasChildrenClass = hasChildren ? 'uagb-container-has-children' : '';
	const isRootContainerClass = isBlockRootParent ? 'uagb-is-root-container' : '';
	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id } ${contentWidth} ${hasChildrenClass} ${isRootContainerClass}`,
	} );

	return (
		<>
			<div
				{ ...blockProps }
				key = { block_id }
			>
				<div className='uagb-slider'
				>	
					<div className='uagb-slides'>
						<InnerBlocks
								allowedBlocks={ ALLOWED_BLOCKS }
								template={ getSliderTemplate }
								templateLock={ false }
						/>
					</div>
					<div className='uagb-slide-navigation-wrap uagb-slide-prev'>
						<i aria-hidden="true" className="eicon-chevron-left" onClick={prevSlide} direction={'prev'} ></i>
					</div>
					<div className='uagb-slide-navigation-wrap uagb-slide-next'>
						<i aria-hidden="true" className="eicon-chevron-right" onClick={nextSlide} direction={'next'}></i>
					</div>
				</div>
			</div>
		</>
	);
};
export default React.memo( Render );
