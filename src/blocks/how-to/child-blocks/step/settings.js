import React from 'react';
import { __ } from '@wordpress/i18n';
import InspectorTabs from "@Components/inspector-tabs/InspectorTabs.js";
import InspectorTab, { UAGTabs } from "@Components/inspector-tabs/InspectorTab.js";

import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import UAGImage from "@Components/image";

import { InspectorControls } from '@wordpress/block-editor';

let imageSizeOptions = [
	{
		value: "thumbnail",
		label: __("Thumbnail", "ultimate-addons-for-gutenberg"),
	},
	{ value: "medium", label: __("Medium", "ultimate-addons-for-gutenberg") },
	{ value: "full", label: __("Large", "ultimate-addons-for-gutenberg") },
];

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { block_id, name, description, url, image, imageSize } = attributes;
	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = (media) => {
		if (!media || !media.url) {
			setAttributes({ image: null });
			return;
		}

		if (!media.type || "image" !== media.type) {
			setAttributes({ image: null });
			return;
		}
		if (media.sizes) {
			imageSizeOptions = getImageSize(media.sizes);
		}
		setAttributes({ image: media });
	};
	const getImageSize = (sizes) => {
		const sizeArr = [];
		$.each(sizes, function (index) {
			const name = index;
			const p = { value: name, label: name };
			sizeArr.push(p);
		});
		return sizeArr;
	};
	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes({ image: "" });
	};

	imageSizeOptions.map((item) => {
		item.label = item.label.replace(/\w/, firstLetter => firstLetter.toUpperCase());
		 
	});
	const stepInspectorControls = () => {
		return (
			<PanelBody
				initialOpen={ true }
			>
				<UAGImage
					onSelectImage={onSelectImage}
					backgroundImage={image}
					onRemoveImage={onRemoveImage}
				/>
				{image &&
					image.url !== "null" &&
					image.url !== "" && (
						<SelectControl
							label={__(
								"Image Size",
								"ultimate-addons-for-gutenberg"
							)}
							options={imageSizeOptions}
							value={imageSize}
							onChange={(value) =>
								setAttributes({
									imageSize: value,
								})
							}
						/>
					)
				}
			</PanelBody>
		);
	};

	return (
			<InspectorControls>
				<InspectorTabs tabs={["general", "advance"]}>
					<InspectorTab {...UAGTabs.general}>
					{ stepInspectorControls() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
	);
};
export default React.memo( Settings );
