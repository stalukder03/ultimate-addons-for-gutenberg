/**
 * BLOCK: Separator - Save Block
 */

import classnames from 'classnames';

export default function save( props ) {
	const {
		block_id
	} = props.attributes;

	return (
		<div
			className={ classnames(
				props.className,
				`uagb-block-${ block_id }`
			) }
		>
			Separator Saved
		</div>
	);
}
