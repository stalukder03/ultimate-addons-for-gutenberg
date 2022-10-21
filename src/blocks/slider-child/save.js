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

	props = props.parentProps;
	const {
		clientId
	} = props;

	const blockProps = useBlockProps.save();
	const { getBlockOrder } = select( 'core/block-editor' );
	const hasChildBlocks = getBlockOrder( clientId ).length > 0;

	return (
		<>
			<div
				className='uagb-slider-child-wrap'
				{ ...blockProps }
				key = { block_id }
			>
				<InnerBlocks
						renderAppender = { hasChildBlocks
						? undefined
						: InnerBlocks.ButtonBlockAppender }
					/>
			</div>
		</>
	);
}
