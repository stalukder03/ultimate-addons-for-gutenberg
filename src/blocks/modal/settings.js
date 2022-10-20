import React from 'react';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import { __ } from '@wordpress/i18n';
import {InspectorControls} from '@wordpress/block-editor';
import { Icon, SelectControl, ToggleControl } from '@wordpress/components';
import UAGMediaPicker from '@Components/image';
import UAGIconPicker from '@Components/icon-picker';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { getImageSize } from '@Utils/Helpers';
import UAGSelectControl from '@Components/select-control';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import Range from '@Components/range/Range.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';

let imageSizeOptions = [
	{
		value: 'thumbnail',
		label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
	},
	{ value: 'medium', label: __( 'Medium', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'full', label: __( 'Large', 'ultimate-addons-for-gutenberg' ) },
];

export default function Settings( props ) {
	const { attributes, setAttributes, deviceType } = props.parentProps;
	const { 
		modalTrigger, 
		previewModal, 
		iconImage, 
		icon, 
		imageSize,
		imageWidth,
		imageWidthMobile,
		imageWidthTablet,
		imageWidthType,
		imageWidthUnit,
		imageWidthUnitTablet,
		imageWidthUnitMobile,
		iconimgBorderRadius,
		iconimgBorderRadiusUnit,
		buttonIcon,
		buttonIconPosition,
		buttonIconSpace,
		buttonIconSpaceTablet,
		buttonIconSpaceMobile,
		buttonIconSpaceType,
		modalAlign,
		modalAlignTablet,
		modalAlignMobile,
		modalWidth,
		modalWidthTablet,
		modalWidthMobile,
		modalWidthType,
		modalHeight,
		modalHeightTablet,
		modalHeightMobile,
		modalHeightType,
		appearEffect,
		closeIconSize,
		closeIconPosition,
		overlayColor,
		closeIconColor,
		paddingModalTop,
		paddingModalBottom,
		paddingModalLeft,
		paddingModalRight,
		paddingModalTopTablet,
		paddingModalRightTablet,
		paddingModalBottomTablet,
		paddingModalLeftTablet,
		paddingModalTopMobile,
		paddingModalRightMobile,
		paddingModalBottomMobile,
		paddingModalLeftMobile,
		paddingModalUnit,
		modalSpacingLink,
		mobilePaddingModalUnit,
		tabletPaddingModalUnit,
		//Trigger style controls
		iconColor,
		iconSize,
		textColor,
		textFontFamily,
		textFontWeight,
		textFontStyle,
		textFontSizeType,
		textFontSize,
		textFontSizeMobile,
		textFontSizeTablet,
		textLineHeightType,
		textLineHeight,
		textLineHeightMobile,
		textLineHeightTablet,
		textLetterSpacing,
		textLetterSpacingTablet,
		textLetterSpacingMobile,
		textLetterSpacingType,
		textTransform,
		textDecoration,
		textLoadGoogleFonts,
		// paddingBtnTop,
		// paddingBtnBottom,
		// paddingBtnLeft,
		// paddingBtnRight,
		// paddingBtnTopTablet,
		// paddingBtnRightTablet,
		// paddingBtnBottomTablet,
		// paddingBtnLeftTablet,
		// paddingBtnTopMobile,
		// paddingBtnRightMobile,
		// paddingBtnBottomMobile,
		// paddingBtnLeftMobile,
		// paddingBtnUnit,
		// btnSpacingLink,
		// mobilePaddingBtnUnit,
		// tabletPaddingBtnUnit,
	} = attributes;

	let loadTextGoogleFonts;

	if ( textLoadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [
					textFontFamily +
						( textFontWeight ? ':' + textFontWeight : '' ),
				],
			},
		};

		loadTextGoogleFonts = (
			<WebfontLoader config={ hconfig }></WebfontLoader>
		);
	}

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		
		if ( ! media || ! media.url ) {
			setAttributes( { iconImage: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			setAttributes( { iconImage: null } );
			return;
		}

		if ( media.sizes ) {
			const new_img = getImageSize( media.sizes );
			imageSizeOptions = new_img;
		}
		
		setAttributes( { iconImage: media } );
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { iconImage: '' } );
	};

	if ( iconImage && iconImage.sizes ) {
		imageSizeOptions = getImageSize( iconImage.sizes );
	}
	
	const modalTriggerPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Modal Trigger', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<SelectControl
				label={ __( 'Display Modal On', 'ultimate-addons-for-gutenberg' ) }
				value={ modalTrigger }
				onChange={ ( value ) => {
					setAttributes( { modalTrigger: value } )
				} }
				options={ [
					{ value: 'text', label: 'Text' },
					{ value: 'icon', label: 'Icon' },
					{ value: 'image', label: 'Image' },
					{ value: 'button', label: 'Button' },
				] }
			/>
				{ modalTrigger === 'icon' && (
					<>
						<UAGIconPicker
							label={ __(
								'Icon',
								'ultimate-addons-for-gutenberg'
							) }
							value={ icon }
							onChange={ ( value ) =>
								setAttributes( { icon: value } )
							}
						/>
					</>
				) }
				{ modalTrigger === 'image' && (
					<>
						<UAGMediaPicker
							onSelectImage={ onSelectImage }
							backgroundImage={ iconImage }
							onRemoveImage={ onRemoveImage }
						/>
						{ iconImage &&
							iconImage.url !== 'null' &&
							iconImage.url !== '' && (
								<UAGSelectControl
									label={ __(
										'Image Size',
										'ultimate-addons-for-gutenberg'
									) }
									data={ {
										value: imageSize,
										label: 'imageSize',
									} }
									setAttributes={ setAttributes }
									options={ imageSizeOptions }
								/>
							) }
					</>
				) }
				{ modalTrigger === 'button' && (
					<>
						<UAGIconPicker
							label={ __(
								'Button Icon',
								'ultimate-addons-for-gutenberg'
							) }
							value={ buttonIcon }
							onChange={ ( value ) =>
								setAttributes( { buttonIcon: value } )
							}
						/>
						<UAGSelectControl
							label={ __(
								'Icon Position',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: buttonIconPosition,
								label: 'buttonIconPosition',
							} }
							setAttributes={ setAttributes }
							options={ [
								{
									value: 'before',
									label: __(
										'Before Text',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'after',
									label: __(
										'After Text',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
						/>
						<ResponsiveSlider
							label={ __(
								'Icon Spacing',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: buttonIconSpace,
									label: 'buttonIconSpace',
								},
								tablet: {
									value: buttonIconSpaceTablet,
									label: 'buttonIconSpaceTablet',
								},
								mobile: {
									value: buttonIconSpaceMobile,
									label: 'buttonIconSpaceMobile',
								},
							} }
							min={ 0 }
							max={ 50 }
							unit={ {
								value: buttonIconSpaceType,
								label: 'buttonIconSpaceType',
							} }
							units={ [
								{
									name: __(
										'Pixel',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'px',
								},
								{
									name: __(
										'EM',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'em',
								},
							] }
							setAttributes={ setAttributes }
						/>
					</>
				) }
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: modalAlign,
							label: 'modalAlign',
						},
						tablet: {
							value: modalAlignTablet,
							label: 'modalAlignTablet',
						},
						mobile: {
							value: modalAlignMobile,
							label: 'modalAlignMobile',
						},
					} }
					options={ [
						{
							value: 'left',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-left' ) }
								/>
							),
							tooltip: __(
								'Left',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'center',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-center' ) }
								/>
							),
							tooltip: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'right',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-right' ) }
								/>
							),
							tooltip: __(
								'Right',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ true }
					responsive={true}
				/>
		</UAGAdvancedPanelBody>
	)

	const modalContentPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Modal Content', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<ToggleControl
				label={ __(
					'Preview Modal',
					'ultimate-addons-for-gutenberg'
				) }
				checked={ previewModal }
				onChange={ () =>
					setAttributes( { previewModal: ! previewModal } )
				}
				help={ __(
					'Note: Enable this option to open the modal inside editor on click of a trigger.',
					'ultimate-addons-for-gutenberg'
				) }
			/>

			<ResponsiveSlider
				label={ __(
					'Width',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: modalWidth,
						label: 'modalWidth',
					},
					tablet: {
						value: modalWidthTablet,
						label: 'modalWidthTablet',
					},
					mobile: {
						value: modalWidthMobile,
						label: 'modalWidthMobile',
					},
				} }
				min={ '%' === modalWidthType ? 10 : 300 }
				max={ '%' === modalWidthType ? 100 : 1500 }
				unit={ {
					value: modalWidthType,
					label: 'modalWidthType',
				} }
				units={ [
					{
						name: __(
							'Pixel',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: 'px',
					},
					{
						name: __(
							'%',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: '%',
					},
				] }
				setAttributes={ setAttributes }
			/>
			<ResponsiveSlider
				label={ __(
					'Minimum Height',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: modalHeight,
						label: 'modalHeight',
					},
					tablet: {
						value: modalHeightTablet,
						label: 'modalHeightTablet',
					},
					mobile: {
						value: modalHeightMobile,
						label: 'modalHeightMobile',
					},
				} }
				min={ '%' === modalHeightType ? 10 : 130 }
				max={ '%' === modalHeightType ? 100 : 1500 }
				unit={ {
					value: modalHeightType,
					label: 'modalHeightType',
				} }
				units={ [
					{
						name: __(
							'Pixel',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: 'px',
					},
					{
						name: __(
							'%',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: '%',
					},
				] }
				setAttributes={ setAttributes }
			/>
			<UAGSelectControl
				label={ __(
					'Appear Effect',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: appearEffect,
					label: 'appearEffect',
				} }
				setAttributes={ setAttributes }
				options={ [
					{
						value: 'uagb-effect-default',
						label: __(
							'Default',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'uagb-effect-1',
						label: __(
							'Fade in & Scale',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'uagb-effect-2',
						label: __(
							'Slide in (right)',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'uagb-effect-3',
						label: __(
							'Slide in (bottom)',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'uagb-effect-4',
						label: __(
							'Super Scaled',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'uagb-effect-5',
						label: __(
							'Slip from top',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
			/>
		</UAGAdvancedPanelBody>
	)

	const modalClosePanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Close Button', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<Range
				label={ __(
					'Icon Size',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ closeIconSize }
				data={ {
					value: closeIconSize,
					label: 'closeIconSize',
				} }
				min={ 0 }
				max={ 50 }
				displayUnit={ false }
			/>

			<UAGSelectControl
				label={ __(
					'Icon Position',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: closeIconPosition,
					label: 'closeIconPosition',
				} }
				setAttributes={ setAttributes }
				options={ [
					{
						value: 'popup-top-left',
						label: __(
							'Top Left',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'popup-top-right',
						label: __(
							'Top Right',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
			/>
		</UAGAdvancedPanelBody>
	)

	const triggerStylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Modal Trigger', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>

			{ modalTrigger === 'icon' && (
				<>
					<Range
						label={ __(
							'Icon Size',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ iconSize }
						data={ {
							value: iconSize,
							label: 'iconSize',
						} }
						min={ 0 }
						max={ 150 }
						displayUnit={ false }
					/>
					<AdvancedPopColorControl
						label={ __(
							'Icon Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={
							iconColor
								? iconColor
								: ''
						}
						data={ {
							value: iconColor,
							label: 'iconColor',
						} }
						setAttributes={ setAttributes }
					/>
				</>
			)}

			{ modalTrigger === 'text' && (
				<>
					<AdvancedPopColorControl
						label={ __(
							'Text Color',
							'ultimate-addons-for-gutenberg'
						) }
						colorValue={
							textColor
								? textColor
								: ''
						}
						data={ {
							value: textColor,
							label: 'textColor',
						} }
						setAttributes={ setAttributes }
					/>

					<TypographyControl
						label={ __(
							'Typography',
							'ultimate-addons-for-gutenberg'
						) }
						attributes={ attributes }
						setAttributes={ setAttributes }
						loadGoogleFonts={ {
							value: textLoadGoogleFonts,
							label: 'textLoadGoogleFonts',
						} }
						fontFamily={ {
							value: textFontFamily,
							label: 'textFontFamily',
						} }
						fontWeight={ {
							value: textFontWeight,
							label: 'textFontWeight',
						} }
						fontStyle={ {
							value: textFontStyle,
							label: 'textFontStyle',
						} }
						transform={ {
							value: textTransform,
							label: 'textTransform',
						} }
						decoration={ {
							value: textDecoration,
							label: 'textDecoration',
						} }
						fontSizeType={ {
							value: textFontSizeType,
							label: 'textFontSizeType',
						} }
						fontSize={ {
							value: textFontSize,
							label: 'textFontSize',
						} }
						fontSizeMobile={ {
							value: textFontSizeMobile,
							label: 'textFontSizeMobile',
						} }
						fontSizeTablet={ {
							value: textFontSizeTablet,
							label: 'textFontSizeTablet',
						} }
						lineHeightType={ {
							value: textLineHeightType,
							label: 'textLineHeightType',
						} }
						lineHeight={ {
							value: textLineHeight,
							label: 'textLineHeight',
						} }
						lineHeightMobile={ {
							value: textLineHeightMobile,
							label: 'textLineHeightMobile',
						} }
						lineHeightTablet={ {
							value: textLineHeightTablet,
							label: 'textLineHeightTablet',
						} }
						letterSpacing={ {
							value: textLetterSpacing,
							label: 'textLetterSpacing',
						} }
						letterSpacingTablet={ {
							value: textLetterSpacingTablet,
							label: 'textLetterSpacingTablet',
						} }
						letterSpacingMobile={ {
							value: textLetterSpacingMobile,
							label: 'textLetterSpacingMobile',
						} }
						letterSpacingType={ {
							value: textLetterSpacingType,
							label: 'textLetterSpacingType',
						} }
					/>
				</>
			)}

			{ modalTrigger === 'image' &&
				iconImage &&
				iconImage.url !== 'null' &&
				iconImage.url !== '' && (
				<>
					<ToggleControl
						checked={ imageWidthType }
						onChange={ () =>
							setAttributes( {
								imageWidthType: ! imageWidthType,
							} )
						}
						label={ __(
							'Custom Width',
							'ultimate-addons-for-gutenberg'
						) }
						help={ __(
							'Turn this off to inherit the natural width of Image.',
							'ultimate-addons-for-gutenberg'
						) }
					/>

					{ imageWidthType && (
						<ResponsiveSlider
							label={ __(
								'Width',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								desktop: {
									value: imageWidth,
									label: 'imageWidth',
									unit: {
										value: imageWidthUnit,
										label: 'imageWidthUnit',
									},
								},
								tablet: {
									value: imageWidthTablet,
									label: 'imageWidthTablet',
									unit: {
										value: imageWidthUnitTablet,
										label: 'imageWidthUnitTablet',
									},

								},
								mobile: {
									value: imageWidthMobile,
									label: 'imageWidthMobile',
									unit: {
										value: imageWidthUnitMobile,
										label: 'imageWidthUnitMobile',
									},
								},
							} }
							min={ 0 }
							limitMax={ { 'px': 500, '%': 100, 'em': 100 } } // eslint-disable-line quote-props
							units={ [
								{
									name: __(
										'Pixel',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'px',
								},
								{
									name: __(
										'%',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: '%',
								},
								{
									name: __(
										'EM',
										'ultimate-addons-for-gutenberg'
									),
									unitValue: 'em',
								},
							] }
							setAttributes={ setAttributes }
						/>
					) }
					<Range
						label={ __(
							'Border Radius',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ iconimgBorderRadius }
						data={ {
							value: iconimgBorderRadius,
							label: 'iconimgBorderRadius',
						} }
						min={ 0 }
						max={ 100 }
						unit={ {
							value: iconimgBorderRadiusUnit,
							label:
								'iconimgBorderRadiusUnit',
						} }
						units={ [
							{
								name: __(
									'Pixel',
									'ultimate-addons-for-gutenberg'
								),
								unitValue: 'px',
							},
							{
								name: __(
									'EM',
									'ultimate-addons-for-gutenberg'
								),
								unitValue: 'em',
							},
						] }
					/>
				</>
			) }

			{/* <SpacingControl
				{ ...props }
				label={ __(
					'Padding',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: paddingBtnTop,
					label: 'paddingBtnTop',
				} }
				valueRight={ {
					value: paddingBtnRight,
					label: 'paddingBtnRight',
				} }
				valueBottom={ {
					value: paddingBtnBottom,
					label: 'paddingBtnBottom',
				} }
				valueLeft={ {
					value: paddingBtnLeft,
					label: 'paddingBtnLeft',
				} }
				valueTopTablet={ {
					value: paddingBtnTopTablet,
					label: 'paddingBtnTopTablet',
				} }
				valueRightTablet={ {
					value: paddingBtnRightTablet,
					label: 'paddingBtnRightTablet',
				} }
				valueBottomTablet={ {
					value: paddingBtnBottomTablet,
					label: 'paddingBtnBottomTablet',
				} }
				valueLeftTablet={ {
					value: paddingBtnLeftTablet,
					label: 'paddingBtnLeftTablet',
				} }
				valueTopMobile={ {
					value: paddingBtnTopMobile,
					label: 'paddingBtnTopMobile',
				} }
				valueRightMobile={ {
					value: paddingBtnRightMobile,
					label: 'paddingBtnRightMobile',
				} }
				valueBottomMobile={ {
					value: paddingBtnBottomMobile,
					label: 'paddingBtnBottomMobile',
				} }
				valueLeftMobile={ {
					value: paddingBtnLeftMobile,
					label: 'paddingBtnLeftMobile',
				} }
				unit={ {
					value: paddingBtnUnit,
					label: 'paddingBtnUnit',
				} }
				mUnit={ {
					value: mobilePaddingBtnUnit,
					label: 'mobilePaddingBtnUnit',
				} }
				tUnit={ {
					value: tabletPaddingBtnUnit,
					label: 'tabletPaddingBtnUnit',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: btnSpacingLink,
					label: 'btnSpacingLink',
				} }
				units={ [
					{
						name: __(
							'Pixel',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: 'px',
					},
					{
						name: __( '%', 'ultimate-addons-for-gutenberg' ),
						unitValue: '%',
					},
				] }
			/> */}
		</UAGAdvancedPanelBody>
	)

	const contentStylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Modal Content', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<AdvancedPopColorControl
				label={ __(
					'Overlay Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={
					overlayColor
						? overlayColor
						: ''
				}
				data={ {
					value: overlayColor,
					label: 'overlayColor',
				} }
				setAttributes={ setAttributes }
			/>

			<SpacingControl
				{ ...props }
				label={ __(
					'Padding',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: paddingModalTop,
					label: 'paddingModalTop',
				} }
				valueRight={ {
					value: paddingModalRight,
					label: 'paddingModalRight',
				} }
				valueBottom={ {
					value: paddingModalBottom,
					label: 'paddingModalBottom',
				} }
				valueLeft={ {
					value: paddingModalLeft,
					label: 'paddingModalLeft',
				} }
				valueTopTablet={ {
					value: paddingModalTopTablet,
					label: 'paddingModalTopTablet',
				} }
				valueRightTablet={ {
					value: paddingModalRightTablet,
					label: 'paddingModalRightTablet',
				} }
				valueBottomTablet={ {
					value: paddingModalBottomTablet,
					label: 'paddingModalBottomTablet',
				} }
				valueLeftTablet={ {
					value: paddingModalLeftTablet,
					label: 'paddingModalLeftTablet',
				} }
				valueTopMobile={ {
					value: paddingModalTopMobile,
					label: 'paddingModalTopMobile',
				} }
				valueRightMobile={ {
					value: paddingModalRightMobile,
					label: 'paddingModalRightMobile',
				} }
				valueBottomMobile={ {
					value: paddingModalBottomMobile,
					label: 'paddingModalBottomMobile',
				} }
				valueLeftMobile={ {
					value: paddingModalLeftMobile,
					label: 'paddingModalLeftMobile',
				} }
				unit={ {
					value: paddingModalUnit,
					label: 'paddingModalUnit',
				} }
				mUnit={ {
					value: mobilePaddingModalUnit,
					label: 'mobilePaddingModalUnit',
				} }
				tUnit={ {
					value: tabletPaddingModalUnit,
					label: 'tabletPaddingModalUnit',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: modalSpacingLink,
					label: 'modalSpacingLink',
				} }
				units={ [
					{
						name: __(
							'Pixel',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: 'px',
					},
					{
						name: __( '%', 'ultimate-addons-for-gutenberg' ),
						unitValue: '%',
					},
				] }
			/>

			{/* <SpacingControl
				{ ...props }
				label={ __(
					'Padding',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: paddingBtnTop,
					label: 'paddingBtnTop',
				} }
				valueRight={ {
					value: paddingBtnRight,
					label: 'paddingBtnRight',
				} }
				valueBottom={ {
					value: paddingBtnBottom,
					label: 'paddingBtnBottom',
				} }
				valueLeft={ {
					value: paddingBtnLeft,
					label: 'paddingBtnLeft',
				} }
				valueTopTablet={ {
					value: paddingBtnTopTablet,
					label: 'paddingBtnTopTablet',
				} }
				valueRightTablet={ {
					value: paddingBtnRightTablet,
					label: 'paddingBtnRightTablet',
				} }
				valueBottomTablet={ {
					value: paddingBtnBottomTablet,
					label: 'paddingBtnBottomTablet',
				} }
				valueLeftTablet={ {
					value: paddingBtnLeftTablet,
					label: 'paddingBtnLeftTablet',
				} }
				valueTopMobile={ {
					value: paddingBtnTopMobile,
					label: 'paddingBtnTopMobile',
				} }
				valueRightMobile={ {
					value: paddingBtnRightMobile,
					label: 'paddingBtnRightMobile',
				} }
				valueBottomMobile={ {
					value: paddingBtnBottomMobile,
					label: 'paddingBtnBottomMobile',
				} }
				valueLeftMobile={ {
					value: paddingBtnLeftMobile,
					label: 'paddingBtnLeftMobile',
				} }
				unit={ {
					value: paddingBtnUnit,
					label: 'paddingBtnUnit',
				} }
				mUnit={ {
					value: mobilePaddingBtnUnit,
					label: 'mobilePaddingBtnUnit',
				} }
				tUnit={ {
					value: tabletPaddingBtnUnit,
					label: 'tabletPaddingBtnUnit',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: btnSpacingLink,
					label: 'btnSpacingLink',
				} }
				units={ [
					{
						name: __(
							'Pixel',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: 'px',
					},
					{
						name: __( '%', 'ultimate-addons-for-gutenberg' ),
						unitValue: '%',
					},
				] }
			/> */}
		</UAGAdvancedPanelBody>
	)

	const closeStylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Close Button', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<AdvancedPopColorControl
				label={ __(
					'Icon Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={
					closeIconColor
						? closeIconColor
						: ''
				}
				data={ {
					value: closeIconColor,
					label: 'closeIconColor',
				} }
				setAttributes={ setAttributes }
			/>

		</UAGAdvancedPanelBody>
	)

	return (
		<>
			<InspectorControls>
				<InspectorTabs>

					<InspectorTab { ...UAGTabs.general }>
						{modalContentPanel}
						{modalTriggerPanel}
						{modalClosePanel}
					</InspectorTab>

					<InspectorTab { ...UAGTabs.style }>
						{contentStylePanel}
						{triggerStylePanel}
						{closeStylePanel}
					</InspectorTab>
					
				</InspectorTabs>
			</InspectorControls>
			{ loadTextGoogleFonts }
		</>
	);
}
