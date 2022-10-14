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
				{ 'video' === backgroundType && (
					<div className="uagb-container__video-wrap">
						{ backgroundVideo && (
							<video autoPlay loop muted playsinline>
								<source
									src={ backgroundVideo.url }
									type="video/mp4"
								/>
							</video>
						) }
					</div>
				) }
				<InnerBlocks
						renderAppender = { hasChildBlocks
						? undefined
						: InnerBlocks.ButtonBlockAppender }
					/>
			</div>
		</>
	);
}
