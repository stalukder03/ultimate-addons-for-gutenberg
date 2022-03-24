import classnames from 'classnames';

import { RichText } from '@wordpress/block-editor';

export default function save(props) {
	const {
		block_id,
		priceCardHeadingTitle,
		priceCardDesc,
		priceCardHeadingTag,
		seperatorStyle,
		image
	} = props.attributes

	let seprator = '';
	if (seperatorStyle !== 'none') {
		seprator = <div className="uagb-separator"></div>
	}

	let headingText = '';
	if (priceCardHeadingTitle !== '') {
		headingText = (
			<RichText.Content
				tagName={priceCardHeadingTag}
				value={priceCardHeadingTitle}
				className="uagb-heading-text"
			// id={ headingId }
			/>
		);
	}

	let pCardDesc = '';
	if (priceCardDesc !== '') {
		pCardDesc = (
			<RichText.Content
				tagName="p"
				value={priceCardDesc}
				className="uagb-desc-text"
			/>
		)
	}

	let img_url = '';
	if (image) {
		img_url = image.url;
	}

	let image_html = '';

	if ( '' !== img_url ) {
		image_html = (
				<img
					className={`uagb-team__image-crop-`}
					src={ img_url }
					alt={ image.alt ? image.alt : '' }
				/>
		);
	}

	return (
		<div
			className={classnames(
				props.className,
				`uagb-block-${block_id}`
			)}
		>
			{headingText}
			{seprator}
			{pCardDesc}
			{image_html}
		</div>
	);
}
