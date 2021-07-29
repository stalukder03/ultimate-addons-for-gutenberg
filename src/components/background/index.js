import { __ } from "@wordpress/i18n";
import Range from "../../components/range/Range.js";
import AdvancedPopColorControl from "../../components/color-control/advanced-pop-color-control.js";
import { SelectControl, BaseControl, Button } from "@wordpress/components";
import { MediaUpload } from "@wordpress/block-editor";
import styles from "./editor.lazy.scss";
import GradientSettings from "../../components/gradient-settings";
import React, { useLayoutEffect } from "react";

const Background = (props) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect(() => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, []);

	const {
		setAttributes,
		backgroundImageColor,
		overlayType,
		backgroundSize,
		backgroundRepeat,
		backgroundAttachment,
		backgroundPosition,
		backgroundImage,
		backgroundColor,
		backgroundVideoType,
		backgroundType,
		backgroundOpacity,
		backgroundVideo,
		backgroundVideoOpacity,
		backgroundVideoColor,
	} = props;

	const onRemoveImage = () => {
		const { setAttributes } = props;

		setAttributes({ [backgroundImage.label]: null });
	};

	const onSelectImage = (media) => {
		const { setAttributes } = props;

		if (!media || !media.url) {
			setAttributes({ [backgroundImage.label]: null });
			return;
		}

		if (!media.type || "image" != media.type) {
			return;
		}

		setAttributes({ [backgroundImage.label]: media });
	};

	const onRemoveVideo = () => {
		setAttributes({ [backgroundVideo.label]: null });
	};

	const onSelectVideo = (media) => {
		if (!media || !media.url) {
			setAttributes({ [backgroundVideo.label]: null });
			return;
		}
		if (!media.type || "video" != media.type) {
			return;
		}
		setAttributes({ [backgroundVideo.label]: media });
	};

	let bgOptions = [];

	bgOptions = [
		{
			value: "none",
			label: __("None", "ultimate-addons-for-gutenberg"),
		},
		{
			value: "color",
			label: __("Color", "ultimate-addons-for-gutenberg"),
		},
		{
			value: "gradient",
			label: __("Gradient", "ultimate-addons-for-gutenberg"),
		},
		{
			value: "image",
			label: __("Image", "ultimate-addons-for-gutenberg"),
		},
	];

	if (backgroundVideoType.value) {
		bgOptions.push({
			value: "video",
			label: __("Video", "ultimate-addons-for-gutenberg"),
		});
	}

	let advancedControls = (
		<>
			<div className="uag-background-wrap">
				<SelectControl
					value={backgroundType.value}
					onChange={(value) =>
						setAttributes({ [backgroundType.label]: value })
					}
					options={bgOptions}
					label={__(
						"Background Type",
						"ultimate-addons-for-gutenberg"
					)}
				/>
			</div>
			{"color" === backgroundType.value && (
				<AdvancedPopColorControl
					label={__(
						"Background Color",
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={
						backgroundColor.value ? backgroundColor.value : ""
					}
					onColorChange={(value) =>
						setAttributes({ [backgroundColor.label]: value })
					}
				/>
			)}
			{"image" === backgroundType.value && (
				<>
					<BaseControl
						className="editor-bg-image-control"
						label={__(
							"Background Image",
							"ultimate-addons-for-gutenberg"
						)}
					>
						<div className="uagb-bg-image">
							<MediaUpload
								title={__(
									"Select Background Image",
									"ultimate-addons-for-gutenberg"
								)}
								onSelect={onSelectImage}
								allowedTypes={["image"]}
								value={backgroundImage.value}
								render={({ open }) => (
									<Button isSecondary onClick={open}>
										{!backgroundImage.value
											? __(
													"Select Background Image",
													"ultimate-addons-for-gutenberg"
											  )
											: __(
													"Replace image",
													"ultimate-addons-for-gutenberg"
											  )}
									</Button>
								)}
							/>
							{backgroundImage.value && (
								<Button
									className="uagb-rm-btn"
									onClick={onRemoveImage}
									isLink
									isDestructive
								>
									{__(
										"Remove Image",
										"ultimate-addons-for-gutenberg"
									)}
								</Button>
							)}
						</div>
					</BaseControl>
					{backgroundImage.value && (
						<>
							<SelectControl
								label={__(
									"Image Position",
									"ultimate-addons-for-gutenberg"
								)}
								value={backgroundPosition.value}
								onChange={(value) =>
									setAttributes({
										[backgroundPosition.label]: value,
									})
								}
								options={[
									{
										value: "top-left",
										label: __(
											"Top Left",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "top-center",
										label: __(
											"Top Center",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "top-right",
										label: __(
											"Top Right",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "center-left",
										label: __(
											"Center Left",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "center-center",
										label: __(
											"Center Center",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "center-right",
										label: __(
											"Center Right",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "bottom-left",
										label: __(
											"Bottom Left",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "bottom-center",
										label: __(
											"Bottom Center",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "bottom-right",
										label: __(
											"Bottom Right",
											"ultimate-addons-for-gutenberg"
										),
									},
								]}
							/>
							<SelectControl
								label={__(
									"Attachment",
									"ultimate-addons-for-gutenberg"
								)}
								value={backgroundAttachment.value}
								onChange={(value) =>
									setAttributes({
										[backgroundAttachment.label]: value,
									})
								}
								options={[
									{
										value: "fixed",
										label: __(
											"Fixed",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "scroll",
										label: __(
											"Scroll",
											"ultimate-addons-for-gutenberg"
										),
									},
								]}
							/>
							<SelectControl
								label={__(
									"Repeat",
									"ultimate-addons-for-gutenberg"
								)}
								value={backgroundRepeat.value}
								onChange={(value) =>
									setAttributes({
										[backgroundRepeat.label]: value,
									})
								}
								options={[
									{
										value: "no-repeat",
										label: __(
											"No Repeat",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "repeat",
										label: __(
											"Repeat",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "repeat-x",
										label: __(
											"Repeat-x",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "repeat-y",
										label: __(
											"Repeat-y",
											"ultimate-addons-for-gutenberg"
										),
									},
								]}
							/>
							<SelectControl
								label={__(
									"Size",
									"ultimate-addons-for-gutenberg"
								)}
								value={backgroundSize.value}
								onChange={(value) =>
									setAttributes({
										[backgroundSize.label]: value,
									})
								}
								options={[
									{
										value: "auto",
										label: __(
											"Auto",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "cover",
										label: __(
											"Cover",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "contain",
										label: __(
											"Contain",
											"ultimate-addons-for-gutenberg"
										),
									},
								]}
							/>
							<SelectControl
								label={__(
									"Overlay Type",
									"ultimate-addons-for-gutenberg"
								)}
								value={overlayType.value}
								onChange={(value) =>
									setAttributes({
										[overlayType.label]: value,
									})
								}
								options={[
									{
										value: "color",
										label: __(
											"Color",
											"ultimate-addons-for-gutenberg"
										),
									},
									{
										value: "gradient",
										label: __(
											"Gradient",
											"ultimate-addons-for-gutenberg"
										),
									},
								]}
							/>
							{"color" == overlayType.value && (
								<>
									<AdvancedPopColorControl
										label={__(
											"Image Overlay Color",
											"ultimate-addons-for-gutenberg"
										)}
										colorValue={backgroundImageColor.value}
										onColorChange={(value) =>
											setAttributes({
												[backgroundImageColor.label]: value,
											})
										}
									/>
								</>
							)}
							{"gradient" == overlayType.value && (
								<>
									<GradientSettings
										backgroundGradient={
											props.backgroundGradient
										}
										setAttributes={setAttributes}
									/>
								</>
							)}
						</>
					)}
				</>
			)}
			{"gradient" === backgroundType.value && (
				<>
					<GradientSettings
						backgroundGradient={props.backgroundGradient}
						setAttributes={props.setAttributes}
					/>
				</>
			)}
			{("color" == backgroundType.value ||
				("image" == backgroundType.value && backgroundImage.value) ||
				"gradient" == backgroundType.value) && (
				<Range
					label={__("Opacity", "ultimate-addons-for-gutenberg")}
					value={backgroundOpacity.value}
					onChange={(val) =>
						setAttributes({
							[backgroundOpacity.label]: parseInt(val),
						})
					}
					min={0}
					max={100}
					displayUnit={false}
				/>
			)}
			{"video" === backgroundType.value && backgroundVideoType.value && (
				<BaseControl
					className="editor-bg-image-control"
					label={__(
						"Background Video",
						"ultimate-addons-for-gutenberg"
					)}
				>
					<div className="uagb-bg-image">
						<MediaUpload
							title={__(
								"Select Background Video",
								"ultimate-addons-for-gutenberg"
							)}
							onSelect={onSelectVideo}
							allowedTypes={["video"]}
							value={backgroundVideo.value}
							render={({ open }) => (
								<Button isSecondary onClick={open}>
									{!backgroundVideo.value
										? __(
												"Select Background video",
												"ultimate-addons-for-gutenberg"
										  )
										: __(
												"Replace video",
												"ultimate-addons-for-gutenberg"
										  )}
								</Button>
							)}
						/>
						{backgroundVideo.value && (
							<Button
								className="uagb-rm-btn"
								onClick={onRemoveVideo}
								isLink
								isDestructive
							>
								{__(
									"Remove Video",
									"ultimate-addons-for-gutenberg"
								)}
							</Button>
						)}
					</div>
				</BaseControl>
			)}
			{"video" == backgroundType.value &&
				backgroundVideo.value &&
				backgroundVideoType.value && (
					<>
						<AdvancedPopColorControl
							label={__(
								"Video Overlay Color",
								"ultimate-addons-for-gutenberg"
							)}
							colorValue={backgroundVideoColor.value}
							onColorChange={(value) =>
								setAttributes({
									[backgroundVideoColor.label]: value,
								})
							}
						/>
					</>
				)}
			{"video" == backgroundType.value &&
				backgroundVideo.value &&
				backgroundVideoType.value && (
					<Range
						label={__("Opacity", "ultimate-addons-for-gutenberg")}
						value={backgroundVideoOpacity.value}
						onChange={(val) =>
							setAttributes({
								[backgroundVideoOpacity.label]: parseInt(val),
							})
						}
						min={0}
						max={100}
						displayUnit={false}
					/>
				)}
		</>
	);

	return (
		<div className="uag-typography-option-actions">{advancedControls}</div>
	);
};

export default Background;
