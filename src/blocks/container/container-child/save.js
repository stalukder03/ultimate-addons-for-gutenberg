/**
 * BLOCK: How To - Step - Save Block
 */

import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

	const { 
		block_id,
	} = attributes;

	return (
		<div
			className={ classnames(
				`uagb-block-${ block_id }`
			) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
