import React from 'react';
import { __ } from '@wordpress/i18n';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, { UAGTabs } from '@Components/inspector-tabs/InspectorTab.js';
import UAGImage from '@Components/image';
import { InspectorControls } from '@wordpress/block-editor';
import jQuery from 'jquery';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';

import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
} from '@wordpress/components';
let imageSizeOptions = [
	{
		value: 'thumbnail',
		label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
	},
	{ value: 'medium', label: __( 'Medium', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'full', label: __( 'Large', 'ultimate-addons-for-gutenberg' ) },
];

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const {
		url,
		urlType,
		image,
		imageSize,
		urlText,
		urlFontSize,
		urlFontSizeType,
		urlFontSizeMobile,
		urlFontSizeTablet,
		urlFontFamily,
		urlFontWeight,
		urlFontSubset,
		urlLoadGoogleFonts,

		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleFontFamily,
		titleFontWeight,
		titleFontSubset,
		titleLoadGoogleFonts,

		descriptionFontSize,
		descriptionFontSizeType,
		descriptionFontSizeMobile,
		descriptionFontSizeTablet,
		descriptionFontFamily,
		descriptionFontWeight,
		descriptionFontSubset,
		descriptionLoadGoogleFonts,

		urlTarget,
		imgPosition,
		titleColor,
		descriptionColor,
		urlColor,
	} = attributes;
	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		if ( !media || !media.url ) {
			setAttributes( { image: null } );
			return;
		}

		if ( !media.type || 'image' !== media.type ) {
			setAttributes( { image: null } );
			return;
		}
		if ( media.sizes ) {
			imageSizeOptions = getImageSize( media.sizes );
		}
		setAttributes( { image: media } );
	};
	const getImageSize = ( sizes ) => {
		const sizeArr = [];
		jQuery.each( sizes, function ( index ) {
			const name = index;
			const p = { value: name, label: name };
			sizeArr.push( p );
		} );
		return sizeArr;
	};
	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { image: '' } );
	};

	imageSizeOptions.map( ( item ) => {
		item.label = item.label.replace( /\w/, firstLetter => firstLetter.toUpperCase() );
		return item;
	} );

	let loadUrlGoogleFonts;
	let loadTitleGoogleFonts;
	let loadDescriptionGoogleFonts;

	if ( true === urlLoadGoogleFonts ) {
		const uconfig = {
			google: {
				families: [
					urlFontFamily +
						( urlFontWeight ? ':' + urlFontWeight : '' ),
				],
			},
		};

		loadUrlGoogleFonts = (
			<WebfontLoader config={ uconfig }></WebfontLoader>
		);
	}

	if ( true === titleLoadGoogleFonts ) {
		const tconfig = {
			google: {
				families: [
					titleFontFamily +
						( titleFontWeight ? ':' + titleFontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ tconfig }></WebfontLoader>
		);
	}

	if ( true === descriptionLoadGoogleFonts ) {
		const dconfig = {
			google: {
				families: [
					descriptionFontFamily +
						( descriptionFontWeight ? ':' + descriptionFontWeight : '' ),
				],
			},
		};

		loadDescriptionGoogleFonts = (
			<WebfontLoader config={ dconfig }></WebfontLoader>
		);
	}

	const imageControls = () => {
		return (
			<PanelBody
				initialOpen={ true }
				title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) }
			>
				<UAGImage
					onSelectImage={onSelectImage}
					backgroundImage={image}
					onRemoveImage={onRemoveImage}
				/>
				{image &&
					image.url !== 'null' &&
					image.url !== '' && (
						<>
						<SelectControl
							label={__(
								'Image Size',
								'ultimate-addons-for-gutenberg'
							)}
							options={imageSizeOptions}
							value={imageSize}
							onChange={( value ) =>
								setAttributes( {
									imageSize: value,
								} )
							}
						/>
						<SelectControl
							label={__( 'Select Position' )}
							value={imgPosition}
							onChange={( value ) =>
								setAttributes( { imgPosition: value } )
							}
							options={[
								{ value: 'above-title', label: __( 'Above Title' ) },
								{ value: 'left-title', label: __( 'Left of Title' ) },
								{ value: 'right-title', label: __( 'Right of Title' ) }
							]}
						/>
					</>
					)
					
				}
			</PanelBody>
		);
	};
	const urlControls = () => {

		return (
			<PanelBody title={__( 'Add Link' )} initialOpen={false}>
				<SelectControl
					label={__( 'Type' )}
					value={urlType}
					onChange={( value ) => setAttributes( { urlType: value } )}
					options={[
						{ value: 'text', label: __( 'Text' ) },
						{ value: 'all', label: __( 'Complete Box' ) },
					]}
				/>
				{urlType === 'text' && (
					<>
						<TextControl
							label={__( 'Text' )}
							value={urlText}
							onChange={( value ) =>
								setAttributes( { urlText: value } )
							}
						/>
					</>
				)}
				{urlType !== 'none' && (
					<>
						<TextControl
							label={__( 'Link' )}
							value={url}
							onChange={( value ) =>
								setAttributes( { url: value } )
							}
						/>
						<ToggleControl
							label={__( 'Open in new Window' )}
							checked={urlTarget}
							onChange={() =>
								setAttributes( { urlTarget: !urlTarget } )
							}
						/>
					</>
				)}
			</PanelBody>
		);
	}
	const linkStyle = () => {

		return (
			<PanelBody title={__( 'Link' )} initialOpen={true}>
				<TypographyControl
					label={__( 'Typography' )}
					attributes={attributes}
					setAttributes={setAttributes}
					loadGoogleFonts={{
						value: urlLoadGoogleFonts,
						label: 'urlLoadGoogleFonts',
					}}
					fontFamily={{
						value: urlFontFamily,
						label: 'urlFontFamily',
					}}
					fontWeight={{
						value: urlFontWeight,
						label: 'urlFontWeight',
					}}
					fontSubset={{
						value: urlFontSubset,
						label: 'urlFontSubset',
					}}
					fontSizeType={{
						value: urlFontSizeType,
						label: 'urlFontSizeType',
					}}
					fontSize={{
						value: urlFontSize,
						label: 'urlFontSize',
					}}
					fontSizeMobile={{
						value: urlFontSizeMobile,
						label: 'urlFontSizeMobile',
					}}
					fontSizeTablet={{
						value: urlFontSizeTablet,
						label: 'urlFontSizeTablet',
					}}
					disableLineHeight={true}
				/>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ urlColor ? urlColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { urlColor: value } )
					}
				/>
			</PanelBody>
		);
	}
	const titleStyle = () => {

		return (
			<PanelBody title={__( 'Title' )} initialOpen={true}>
				<TypographyControl
					label={__( 'Typography' )}
					attributes={attributes}
					setAttributes={setAttributes}
					loadGoogleFonts={{
						value: titleLoadGoogleFonts,
						label: 'titleLoadGoogleFonts',
					}}
					fontFamily={{
						value: titleFontFamily,
						label: 'titleFontFamily',
					}}
					fontWeight={{
						value: titleFontWeight,
						label: 'titleFontWeight',
					}}
					fontSubset={{
						value: titleFontSubset,
						label: 'titleFontSubset',
					}}
					fontSizeType={{
						value: titleFontSizeType,
						label: 'titleFontSizeType',
					}}
					fontSize={{
						value: titleFontSize,
						label: 'titleFontSize',
					}}
					fontSizeMobile={{
						value: titleFontSizeMobile,
						label: 'titleFontSizeMobile',
					}}
					fontSizeTablet={{
						value: titleFontSizeTablet,
						label: 'titleFontSizeTablet',
					}}
					disableLineHeight={true}
				/>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ titleColor ? titleColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { titleColor: value } )
					}
				/>
			</PanelBody>
		);
	}

	const descriptionStyle = () => {

		return (
			<PanelBody title={__( 'Description' )} initialOpen={true}>
				<TypographyControl
					label={__( 'Typography' )}
					attributes={attributes}
					setAttributes={setAttributes}
					loadGoogleFonts={{
						value: descriptionLoadGoogleFonts,
						label: 'descriptionLoadGoogleFonts',
					}}
					fontFamily={{
						value: descriptionFontFamily,
						label: 'descriptionFontFamily',
					}}
					fontWeight={{
						value: descriptionFontWeight,
						label: 'descriptionFontWeight',
					}}
					fontSubset={{
						value: descriptionFontSubset,
						label: 'descriptionFontSubset',
					}}
					fontSizeType={{
						value: descriptionFontSizeType,
						label: 'descriptionFontSizeType',
					}}
					fontSize={{
						value: descriptionFontSize,
						label: 'descriptionFontSize',
					}}
					fontSizeMobile={{
						value: descriptionFontSizeMobile,
						label: 'descriptionFontSizeMobile',
					}}
					fontSizeTablet={{
						value: descriptionFontSizeTablet,
						label: 'descriptionFontSizeTablet',
					}}
					disableLineHeight={true}
				/>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ descriptionColor ? descriptionColor : '' }
					onColorChange={ ( value ) =>
						setAttributes( { descriptionColor: value } )
					}
				/>
			</PanelBody>
		);
	}

	return (
		<>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab {...UAGTabs.general}>
					{ imageControls() }
					{ urlControls() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ titleStyle() }
						{ descriptionStyle() }
						{ urlType === 'text' && linkStyle() }
					</InspectorTab>
					<InspectorTab {...UAGTabs.advance}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadUrlGoogleFonts }
			{ loadTitleGoogleFonts }
			{ loadDescriptionGoogleFonts }
		</>
	);
};
export default React.memo( Settings );
