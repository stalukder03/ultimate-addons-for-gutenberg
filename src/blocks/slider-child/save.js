/**
 * BLOCK: Container - Save Block
 */

import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		block_id,
		contentWidth,
		isBlockRootParent,
		backgroundType,
		backgroundVideo,
	} = props.attributes;

	const blockProps = useBlockProps.save();

	return (
		<div
			id={ blockProps.id }
			className={ classnames(
				blockProps.className,
				`uagb-block-${ block_id }`,
				isBlockRootParent ?  `${contentWidth} uagb-is-root-container` : '',
			) }
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
			<InnerBlocks.Content />
		</div>
	);
}
