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

	const [activeSlide, setActiveSlide] = useState( 0 );

	const nextSlide = () => {
        if( activeSlide !== slideItem ){
            setActiveSlide( activeSlide + 1 )
        } 
        else if ( activeSlide === slideItem ){
            setActiveSlide( 1 )
        }
    }

    const prevSlide = () => {
        if( activeSlide !== 0 ){
            setActiveSlide( activeSlide - 1 )
        }
        else if ( activeSlide === 0 ){
            setActiveSlide( slideItem )
        }
    }

	const {
		block_id,
		contentWidth
	} = attributes;

	const getSliderTemplate = useMemo( () => {
		const childSlide = [];

		for ( let i = 0; i < slideItem; i++ ) {
			childSlide.push( [
				'uagb/slider-child',
				slide_content[ i ],
				activeSlide
			] );
		}
		return childSlide;
	}, [ slideItem, slide_content ] );

	const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length;
	const hasChildrenClass = hasChildren ? 'uagb-slider-has-children' : '';
	const blockProps = useBlockProps( {
		className: `uagb-block-${ block_id } ${contentWidth} ${hasChildrenClass}`,
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
