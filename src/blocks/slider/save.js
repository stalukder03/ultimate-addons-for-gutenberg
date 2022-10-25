import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save( props ) {

	const { block_id } = props.attributes;
	
    return (
		<div
			key = { block_id }
			className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
			) }
		>			
			<div className='uagb-slides uagb-swiper'>	
				<InnerBlocks.Content />
				
				<div className="swiper-pagination"></div>

				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</div>
		</div>
	);    
}