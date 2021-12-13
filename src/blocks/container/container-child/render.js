import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

const Render = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, deviceType, className } = props;

	const { 
		block_id,
	} = attributes;

	return (
		<div
			className={ classnames(
				className,
				`uagb-block-${ block_id }`
			) }
		>
			<InnerBlocks />
		</div>
	);
};
export default React.memo( Render );
