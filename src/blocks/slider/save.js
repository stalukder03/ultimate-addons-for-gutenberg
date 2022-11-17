import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import classnames from 'classnames';

export default function save( props ) {

	const {
		attributes,
	} = props;

	const {
		block_id,
		arrowDots,
	} = attributes;

	const blockProps = useBlockProps.save();
	
    return (
		<div
			key = { block_id }
			className={ classnames(
				blockProps.className,
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
			</div>
			{  'arrows' !== arrowDots && 
						<div className="swiper-pagination"></div>
					}	

					{ 'dots' !== arrowDots && 
						<>
						<div className="swiper-button-prev"></div>
						<div className="swiper-button-next"></div>
						</>
					}
		</div>
	);    
}