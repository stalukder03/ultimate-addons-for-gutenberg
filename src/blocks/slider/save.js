import { InnerBlocks } from '@wordpress/block-editor';

import classnames from 'classnames';

export default function save( props ) {

	const {
		attributes,
	} = props;

	const {
		block_id,
		arrowDots
	} = attributes;
	
    return (
		<div
			key = { block_id }
			className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
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
						<div className="swiper-button-prev"></div>
						<div className="swiper-button-next"></div>
						</>
					}
			</div>
		</div>
	);    
}