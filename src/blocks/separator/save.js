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
				`uagb-block-${ block_id }`,
				'wp-block-uagb-separator'
			) }
		>
			<div className='wp-block-uagb-separator__inner'></div>
		</div>
	);
}
