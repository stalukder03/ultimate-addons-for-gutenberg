import classnames from 'classnames';
import { RichText, MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import React from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import UAGImage from '@Components/image';
import { getOnDemandLazySlides } from 'react-slick/lib/utils/innerSliderUtils';

const render = (props) => {
	props = props.parentProps;
	const {
		attributes: {
			block_id,
			priceCardHeadingTitle,
			priceCardDesc,
			priceCardHeadingTag,
			seperatorStyle,
			image
		},
		setAttributes,
		className,
	} = props;
	// console.log(props)

	const deviceType = useDeviceType();
	const headingText = (
		<RichText
			tagName={priceCardHeadingTag}
			placeholder={__(
				'Write a Heading for Price Card',
				'ultimate-addons-for-gutenberg'
			)}
			value={priceCardHeadingTitle}
			className="uagb-heading-text"
			multiline={false}
			onChange={(value) => {
				setAttributes({ priceCardHeadingTitle: value });
			}}
		/>
	);

	const separator = seperatorStyle !== 'none' && (
		<div className="uagb-separator-wrap">
			<div className="uagb-separator"></div>
		</div>
	);

	const descText = (
		<RichText
			tagName="p"
			placeholder={__(
				'Write a Description for Price Card',
				'ultimate-addons-for-gutenberg'
			)}
			value={priceCardDesc}
			className="uagb-desc-text"
			onChange={(value) => setAttributes({ priceCardDesc: value })}
		/>
	);

	const onSelectImage = ( media ) => {
		let imageUrl = null;
		if ( ! media || ! media.url ) {
			imageUrl = null;
		} else {
			imageUrl = media;
		}

		if ( ! media.type || 'image' !== media.type ) {
			imageUrl = null;
		}

		setAttributes( {
			image: imageUrl,
		} );
	};

	const onRemoveImage = () => {
		setAttributes( {
			image: null,
		} );
	};

	return (
		<div
			className={classnames(
				className,
				`uagb-editor-preview-mode-${deviceType.toLowerCase()}`,
				`uagb-block-${block_id}`
			)}
		>
			{headingText}
			{separator}
			{descText}
			<UAGImage
				onSelectImage={onSelectImage}
				backgroundImage={image}
				onRemoveImage={onRemoveImage}
			/>
		</div>
	)
}

export default render
