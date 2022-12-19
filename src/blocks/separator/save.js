/**
 * BLOCK: Separator - Save Block
 */

import classnames from 'classnames';

export default function save( props ) {
	const {
		block_id,
		elementType,
		separatorText,
		separatorTextTag,
		separatorIcon
	} = props.attributes;

	return (
		<div
			className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
				'wp-block-uagb-separator',
				`${elementType !== 'none' ? 'wp-block-uagb-separator--' + elementType : ''}`
			) }
		>
			<div className='wp-block-uagb-separator__inner'>
				{
					elementType !== 'none' && (
						<div className='wp-block-uagb-separator-element'>{separatorText}</div>
					)
				}
			</div>
		</div>
	);
}
