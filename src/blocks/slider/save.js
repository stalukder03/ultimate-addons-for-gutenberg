import { InnerBlocks } from '@wordpress/block-editor';

import classnames from 'classnames';
import UAGB_Block_Icons from '@Controls/block-icons';

export default function save( props ) {

	const {
		attributes,
	} = props;

	const {
		block_id,
		arrowDots,
		className
	} = attributes;
	
    return (
		<div
			key = { block_id }
			className={ classnames(
				 className,
				`uagb-block-${ block_id }`,
				'uagb-slider-container'
			) }
		>			
			<div className='uagb-slides uagb-swiper'>	
				<div 
				className='swiper-wrapper'
				>
					<InnerBlocks.Content />
				</div>
				
				{  'arrows' !== arrowDots && 
						<div className="swiper-pagination"></div>
					}	

					{ 'dots' !== arrowDots && 
						<>
						<button 
							aria-label="Previous" 
							data-role="none" 
							className="swiper-button-prev swiper-navigation-icons"
						>
							{ UAGB_Block_Icons.carousel_left }
						</button>
						<button 
							aria-label="Next" 
							data-role="none" 
							className="swiper-button-next swiper-navigation-icons"
						>
							{ UAGB_Block_Icons.carousel_right }
						</button>
						</>
					}
			</div>
		</div>
	);    
}