/**
 * BLOCK: Container - Save Block
 */

import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		block_id,
	} = props.attributes;

	return (
		<>
			<div
				className='uagb-slider-child-wrap swiper-slide'
				key = { block_id }
			>
				<div className='swiper-content' >
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}
