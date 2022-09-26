import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const { className } = props;

	const { block_id, social_layout } = props.attributes;

	return (
		<div
			className={ classnames(
				className,
				'uagb-social-profile__outer-wrap',
				`uagb-social-profile__layout-${ social_layout }`,
				`uagb-block-${ block_id }`
			) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
