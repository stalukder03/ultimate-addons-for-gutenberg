/**
 * BLOCK: Container - Save Block
 */

import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { select } from '@wordpress/data';

export default function save( props ) {
	const {
		block_id,
		backgroundType,
		backgroundVideo,
	} = props.attributes;

	const {
		clientId
	} = props;

	const blockProps = useBlockProps.save();

	return (
		<>
			<div
				className='uagb-slider-child-wrap swiper-slide'
				key = { block_id }
			>
				<InnerBlocks.Content />
			</div>
		</>
	);
}
