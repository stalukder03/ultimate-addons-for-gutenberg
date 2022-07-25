/**
 * External dependencies
 */
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { __ } from '@wordpress/i18n';
import lazyLoader from '@Controls/lazy-loader';
import styling from '.././styling';
import { compose } from '@wordpress/compose';
import TypographyControl from '@Components/typography';
import ResponsiveBorder from '@Components/responsive-border';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import SpacingControl from '@Components/spacing-control';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import UAGTabsControl from '@Components/tabs';
import renderSVG from '@Controls/renderIcon';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGSelectControl from '@Components/select-control';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import {buttonsPresets} from './presets';
import UAGPresets from '@Components/presets';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import { decodeEntities } from '@wordpress/html-entities';

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/post-masonry/settings" */ './settings'
	)
);

const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/post-masonry/render" */ './render' )
);

const MAX_POSTS_COLUMNS = 8;

import {
	Placeholder,
	Spinner,
	ToggleControl,
	TextControl,
	Icon
} from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';

import { withSelect, withDispatch } from '@wordpress/data';

const UAGBPostMasonry = ( props ) => {

	const [ state, setState ] = useState( {
		isEditing: false,
		innerBlocks: [],
	} );

	useEffect( () => {
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		const {
			btnVPadding,
			btnHPadding,
			paddingBtnTop,
			paddingBtnBottom,
			paddingBtnRight,
			paddingBtnLeft,
			contentPadding,
			contentPaddingMobile,
			contentPaddingTablet,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTopTablet,
			paddingRightTablet,
			paddingBottomTablet,
			paddingLeftTablet,
			paddingTopMobile,
			paddingRightMobile,
			paddingBottomMobile,
			paddingLeftMobile,
			vpaginationButtonPaddingMobile,
			vpaginationButtonPaddingTablet,
			vpaginationButtonPaddingDesktop,
			hpaginationButtonPaddingMobile,
			hpaginationButtonPaddingTablet,
			hpaginationButtonPaddingDesktop,
			paginationButtonPaddingTopTablet,
			paginationButtonPaddingRightTablet,
			paginationButtonPaddingBottomTablet,
			paginationButtonPaddingLeftTablet,
			paginationButtonPaddingTopMobile,
			paginationButtonPaddingRightMobile,
			paginationButtonPaddingBottomMobile,
			paginationButtonPaddingLeftMobile,
			paginationButtonPaddingTop,
			paginationButtonPaddingRight,
			paginationButtonPaddingBottom,
			paginationButtonPaddingLeft,
		} = props.attributes;
		if ( vpaginationButtonPaddingDesktop ) {
			if ( ! paginationButtonPaddingTop ) {
				props.setAttributes( {
					paginationButtonPaddingTop: vpaginationButtonPaddingDesktop,
				} );
			}
			if ( ! paginationButtonPaddingBottom ) {
				props.setAttributes( {
					paginationButtonPaddingBottom: vpaginationButtonPaddingDesktop,
				} );
			}
		}
		if ( hpaginationButtonPaddingDesktop ) {
			if ( ! paginationButtonPaddingRight ) {
				props.setAttributes( {
					paginationButtonPaddingRight: hpaginationButtonPaddingDesktop,
				} );
			}
			if ( ! paginationButtonPaddingLeft ) {
				props.setAttributes( {
					paginationButtonPaddingLeft: hpaginationButtonPaddingDesktop,
				} );
			}
		}
		if ( vpaginationButtonPaddingTablet ) {
			if ( ! paginationButtonPaddingTopTablet ) {
				props.setAttributes( {
					paginationButtonPaddingTopTablet: vpaginationButtonPaddingTablet,
				} );
			}
			if ( ! paginationButtonPaddingBottomTablet ) {
				props.setAttributes( {
					paginationButtonPaddingBottomTablet: vpaginationButtonPaddingTablet,
				} );
			}
		}
		if ( hpaginationButtonPaddingTablet ) {
			if ( ! paginationButtonPaddingRightTablet ) {
				props.setAttributes( {
					paginationButtonPaddingRightTablet: hpaginationButtonPaddingTablet,
				} );
			}
			if ( ! paginationButtonPaddingLeftTablet ) {
				props.setAttributes( {
					paginationButtonPaddingLeftTablet: hpaginationButtonPaddingTablet,
				} );
			}
		}
		if ( vpaginationButtonPaddingMobile ) {
			if ( ! paginationButtonPaddingTopMobile ) {
				props.setAttributes( {
					paginationButtonPaddingTopMobile: vpaginationButtonPaddingMobile,
				} );
			}
			if ( ! paginationButtonPaddingBottomMobile ) {
				props.setAttributes( {
					paginationButtonPaddingBottomMobile: vpaginationButtonPaddingMobile,
				} );
			}
		}
		if ( hpaginationButtonPaddingMobile ) {
			if ( ! paginationButtonPaddingRightMobile ) {
				props.setAttributes( {
					paginationButtonPaddingRightMobile: hpaginationButtonPaddingMobile,
				} );
			}
			if ( ! paginationButtonPaddingLeftMobile ) {
				props.setAttributes( {
					paginationButtonPaddingLeftMobile: hpaginationButtonPaddingMobile,
				} );
			}
		}
		if ( btnVPadding ) {
			if ( undefined === paddingBtnTop ) {
				props.setAttributes( { paddingBtnTop: btnVPadding } );
			}
			if ( undefined === paddingBtnBottom ) {
				props.setAttributes( { paddingBtnBottom: btnVPadding } );
			}
		}
		if ( btnHPadding ) {
			if ( undefined === paddingBtnRight ) {
				props.setAttributes( { paddingBtnRight: btnHPadding } );
			}
			if ( undefined === paddingBtnLeft ) {
				props.setAttributes( { paddingBtnLeft: btnHPadding } );
			}
		}
		if ( contentPadding ) {
			if ( undefined === paddingTop ) {
				props.setAttributes( { paddingTop: contentPadding } );
			}
			if ( undefined === paddingBottom ) {
				props.setAttributes( { paddingBottom: contentPadding } );
			}
			if ( undefined === paddingRight ) {
				props.setAttributes( { paddingRight: contentPadding } );
			}
			if ( undefined === paddingLeft ) {
				props.setAttributes( { paddingLeft: contentPadding } );
			}
		}
		if ( contentPaddingTablet ) {
			if ( undefined === paddingTopTablet ) {
				props.setAttributes( {
					paddingTopTablet: contentPaddingTablet,
				} );
			}
			if ( undefined === paddingBottomTablet ) {
				props.setAttributes( {
					paddingBottomTablet: contentPaddingTablet,
				} );
			}
			if ( undefined === paddingRightTablet ) {
				props.setAttributes( {
					paddingRightTablet: contentPaddingTablet,
				} );
			}
			if ( undefined === paddingLeftTablet ) {
				props.setAttributes( {
					paddingLeftTablet: contentPaddingTablet,
				} );
			}
		}
		if ( contentPaddingMobile ) {
			if ( undefined === paddingTopMobile ) {
				props.setAttributes( {
					paddingTopMobile: contentPaddingMobile,
				} );
			}
			if ( undefined === paddingBottomMobile ) {
				props.setAttributes( {
					paddingBottomMobile: contentPaddingMobile,
				} );
			}
			if ( undefined === paddingRightMobile ) {
				props.setAttributes( {
					paddingRightMobile: contentPaddingMobile,
				} );
			}
			if ( undefined === paddingLeftMobile ) {
				props.setAttributes( {
					paddingLeftMobile: contentPaddingMobile,
				} );
			}
		}
	}, [] );

	useEffect( () => {
		const {
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			borderHColor,
			btnBorderTopWidth,
			btnBorderLeftWidth,
			btnBorderRightWidth,
			btnBorderBottomWidth,
			btnBorderTopLeftRadius,
			btnBorderTopRightRadius,
			btnBorderBottomLeftRadius,
			btnBorderBottomRightRadius,
			btnBorderColor,
			btnBorderHColor,
			btnBorderStyle,
		} = props.attributes;

		if( borderWidth ){
			if( undefined === btnBorderTopWidth ) {
				props.setAttributes( {
					btnBorderTopWidth: borderWidth,
				} );
			}
			if( undefined === btnBorderLeftWidth ) {
				props.setAttributes( { btnBorderLeftWidth : borderWidth} );
			}
			if( undefined === btnBorderRightWidth ) {
				props.setAttributes( { btnBorderRightWidth : borderWidth} );
			}
			if( undefined === btnBorderBottomWidth ) {
				props.setAttributes( { btnBorderBottomWidth : borderWidth} );
			}
		}

		if( borderRadius ){

			if( undefined === btnBorderTopLeftRadius ) {
				props.setAttributes( { btnBorderTopLeftRadius : borderRadius} );
			}
			if( undefined === btnBorderTopRightRadius ) {
				props.setAttributes( { btnBorderTopRightRadius : borderRadius} );
			}
			if( undefined === btnBorderBottomLeftRadius ) {
				props.setAttributes( { btnBorderBottomLeftRadius : borderRadius} );
			}
			if( undefined === btnBorderBottomRightRadius ) {
				props.setAttributes( { btnBorderBottomRightRadius : borderRadius} );
			}
		}

		if( borderColor ){
			if( undefined === btnBorderColor ) {
				props.setAttributes( { btnBorderColor : borderColor} );
			}
		}

		if( borderHColor ){
			if( undefined === btnBorderHColor ) {
				props.setAttributes( { btnBorderHColor : borderHColor} );
			}
		}

		if( borderStyle ){
			if( undefined === btnBorderStyle ) {
				props.setAttributes( { btnBorderStyle : borderStyle} );
			}
		}

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-post-masonry-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-post-masonry-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ props.deviceType ] );

	const togglePreview = () => {
		setState( { isEditing: ! state.isEditing } );
		if ( ! state.isEditing ) {
			__( 'Showing All Post Masonry Layout.' );
		}
	};

	const onSelectPostType = ( value ) => {
		const { setAttributes } = props;

		setAttributes( { postType: value } );
		setAttributes( { categories: '' } );
		setAttributes( { taxonomyType: 'category' } );
	};

	const onSelectTaxonomyType = ( value ) => {
		const { setAttributes } = props;

		setAttributes( { taxonomyType: value } );
		setAttributes( { categories: '' } );
	};

	const {
		attributes,
		categoriesList,
		setAttributes,
		latestPosts,
		deviceType,
		taxonomyList,
	} = props;

	const {
		align,
		displayPostTitle,
		displayPostDate,
		displayPostComment,
		displayPostExcerpt,
		displayPostAuthor,
		displayPostImage,
		displayPostTaxonomy,
		imgSize,
		imgPosition,
		displayPostLink,
		newTab,
		ctaText,
		columns,
		tcolumns,
		mcolumns,
		order,
		orderBy,
		categories,
		postsToShow,
		rowGap,
		rowGapTablet,
		rowGapMobile,
		columnGap,
		columnGapTablet,
		columnGapMobile,
		bgColor,
		titleColor,
		titleTag,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleFontFamily,
		titleFontWeight,
		titleFontStyle,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		titleLoadGoogleFonts,
		metaFontSize,
		metaFontSizeType,
		metaFontSizeMobile,
		metaFontSizeTablet,
		metaFontFamily,
		metaFontWeight,
		metaFontStyle,
		metaLineHeightType,
		metaLineHeight,
		metaLineHeightTablet,
		metaLineHeightMobile,
		metaLoadGoogleFonts,
		excerptFontSize,
		excerptFontSizeType,
		excerptFontSizeTablet,
		excerptFontSizeMobile,
		excerptFontFamily,
		excerptFontWeight,
		excerptFontStyle,
		excerptLineHeightType,
		excerptLineHeight,
		excerptLineHeightTablet,
		excerptLineHeightMobile,
		excerptLoadGoogleFonts,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeTablet,
		ctaFontSizeMobile,
		ctaFontFamily,
		ctaFontWeight,
		ctaFontStyle,
		ctaLineHeightType,
		ctaLineHeight,
		ctaLineHeightTablet,
		ctaLineHeightMobile,
		ctaLoadGoogleFonts,
		metaColor,
		excerptColor,
		ctaColor,
		ctaBgColor,
		ctaHColor,
		ctaBgHColor,
		imageBottomSpace,
		imageBottomSpaceTablet,
		imageBottomSpaceMobile,
		titleBottomSpace,
		titleBottomSpaceTablet,
		titleBottomSpaceMobile,
		metaBottomSpace,
		metaBottomSpaceTablet,
		metaBottomSpaceMobile,
		excerptBottomSpace,
		excerptBottomSpaceTablet,
		excerptBottomSpaceMobile,
		ctaBottomSpace,
		ctaBottomSpaceTablet,
		ctaBottomSpaceMobile,
		excerptLength,
		overlayOpacity,
		bgOverlayColor,
		linkBox,
		postType,
		taxonomyType,
		postDisplaytext,
		paginationType,
		paginationEventType,
		buttonText,
		paginationAlign,
		paginationTextColor,
		paginationTextHoverColor,
		paginationMasonryBgColor,
		paginationBgHoverColor,
		paginationFontSize,
		loaderColor,
		loaderSize,
		paginationButtonPaddingTop,
		paginationButtonPaddingRight,
		paginationButtonPaddingBottom,
		paginationButtonPaddingLeft,
		paginationButtonPaddingTopTablet,
		paginationButtonPaddingRightTablet,
		paginationButtonPaddingBottomTablet,
		paginationButtonPaddingLeftTablet,
		paginationButtonPaddingTopMobile,
		paginationButtonPaddingRightMobile,
		paginationButtonPaddingBottomMobile,
		paginationButtonPaddingLeftMobile,
		mobilepaginationButtonPaddingType,
		tabletpaginationButtonPaddingType,
		paginationButtonPaddingType,
		displayPostContentRadio,
		excludeCurrentPost,
		rowGapUnit,
		columnGapUnit,
		imageBottomSpaceUnit,
		titleBottomSpaceUnit,
		metaBottomSpaceUnit,
		ctaBottomSpaceUnit,
		titleTransform,
		metaTransform,
		excerptTransform,
		ctaTransform,
		titleDecoration,
		metaDecoration,
		excerptDecoration,
		ctaDecoration,
		paddingBtnTop,
		paddingBtnBottom,
		paddingBtnLeft,
		paddingBtnRight,
		paddingBtnTopTablet,
		paddingBtnRightTablet,
		paddingBtnBottomTablet,
		paddingBtnLeftTablet,
		paddingBtnTopMobile,
		paddingBtnRightMobile,
		paddingBtnBottomMobile,
		paddingBtnLeftMobile,
		paddingBtnUnit,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,
		spacingLink,
		spacingLinkPadding,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTopTablet,
		paddingRightTablet,
		paddingBottomTablet,
		paddingLeftTablet,
		paddingTopMobile,
		paddingRightMobile,
		paddingBottomMobile,
		paddingLeftMobile,
		mobilePaddingUnit,
		tabletPaddingUnit,
		excerptBottomSpaceUnit,
		contentPaddingUnit,
		postsOffset,
		taxStyle,
		taxDivider,
		displayPostTaxonomyAboveTitle,
		hideTaxonomyIcon,
		highlightedTextColor,
		highlightedTextBgColor,
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		metaLetterSpacing,
		metaLetterSpacingTablet,
		metaLetterSpacingMobile,
		metaLetterSpacingType,
		excerptLetterSpacing,
		excerptLetterSpacingTablet,
		excerptLetterSpacingMobile,
		excerptLetterSpacingType,
		ctaLetterSpacing,
		ctaLetterSpacingTablet,
		ctaLetterSpacingMobile,
		ctaLetterSpacingType,
	} = attributes;

	const taxonomyListOptions = [];

	const categoryListOptions = [
		{ value: '', label: __( 'All', 'ultimate-addons-for-gutenberg' ) },
	];

	if ( '' !== taxonomyList ) {
		Object.keys( taxonomyList ).map( ( item ) => {
			return taxonomyListOptions.push( {
				value: taxonomyList[ item ].name,
				label: decodeEntities( taxonomyList[ item ].label ),
			} );
		} );
	}

	if ( '' !== categoriesList ) {
		Object.keys( categoriesList ).map( ( item ) => {
			return categoryListOptions.push( {
				value: categoriesList[ item ].id,
				label: decodeEntities( categoriesList[ item ].name ),
			} );
		} );
	}
	const onChangePostsOffset = ( value ) => {
		setAttributes( { postsOffset: value } );
	};
	const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;

	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Text Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: align,
						label: 'align',
					} }
					className="uagb-multi-button-alignment-control"
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
				/>
				<UAGSelectControl
					label={ __(
						'Post Type',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: postType,
					} }
					onChange={ onSelectPostType }
					options={ uagb_blocks_info.post_types }
				/>
				{ '' !== taxonomyList && (
					<UAGSelectControl
						label={ __(
							'Taxonomy',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: taxonomyType,
						} }
						onChange={ onSelectTaxonomyType }
						options={ taxonomyListOptions }
					/>
				) }
				{ '' != categoriesList && ( // eslint-disable-line eqeqeq
					<>
						<UAGSelectControl
							label={ taxonomyList[ taxonomyType ].label }
							data={ {
								value: categories,
								label: 'categories',
							} }
							setAttributes={ setAttributes }
							options={ categoryListOptions }
						/>
					</>
				) }
				<ToggleControl
					label={ __(
						'Exclude Current Post',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ excludeCurrentPost }
					onChange={ () =>
						setAttributes( {
							excludeCurrentPost: ! excludeCurrentPost,
						} )
					}
				/>
				<Range
					label={ __(
						'Posts Per Page',
						'ultimate-addons-for-gutenberg'
					) }
					value={ postsToShow }
					data={ {
						value: postsToShow,
						label: 'postsToShow',
					} }
					setAttributes={ setAttributes }
					displayUnit={ false }
					min={ 1 }
					max={ 100 }
				/>
				<Range
					label={ __(
						'Offset Starting Post',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ postsOffset }
					data={ {
						value: postsOffset,
						label: 'postsOffset',
					} }
					onChange={ onChangePostsOffset }
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
				 	help= {__(
					'P.S. Note that We need to add Offset Starting Post to start post loading from specific post order.',
					'ultimate-addons-for-gutenberg' )}
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Order By', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: orderBy,
						label: 'orderBy',
					} }
					options={ [
						{
							value: 'date',
							label: __(
								'Date',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'title',
							label: __(
								'Title',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'rand',
							label: __(
								'Random',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'menu_order',
							label: __(
								'Menu Order',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Order', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: order,
						label: 'order',
					} }
					options={ [
						{
							value: 'desc',
							label: __(
								'Descending',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'asc',
							label: __(
								'Ascending',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				<ResponsiveSlider
					label={ __( 'Columns', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: columns,
							label: 'columns',
						},
						tablet: {
							value: tcolumns,
							label: 'tcolumns',
						},
						mobile: {
							value: mcolumns,
							label: 'mcolumns',
						},
					} }
					min={ 0 }
					max={
						! hasPosts
							? MAX_POSTS_COLUMNS
							: Math.min( MAX_POSTS_COLUMNS, latestPosts.length )
					}
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Pagination',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: paginationType,
						label: 'paginationType',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'none',
							label: 'None',
						},
						{
							value: 'infinite',
							label: 'Infinite',
						},
					] }
					showIcons={ false }
				/>
				{ 'infinite' === paginationType && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Infinite Load Event',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: paginationEventType,
							label: 'paginationEventType',
						} }
						className="uagb-multi-button-alignment-control"
						options={ [
							{
								value: 'button',
								label: 'Button',
							},
							{
								value: 'scroll',
								label: 'Scroll',
							},
						] }
						showIcons={ false }
					/>
				) }
				{ 'infinite' === paginationType &&
					'button' === paginationEventType && (
						<>
						<TextControl
							autoComplete="off"
							label={ __(
								'Button Text',
								'ultimate-addons-for-gutenberg'
							) }
							value={ buttonText }
							onChange={ ( value ) =>
								setAttributes( { buttonText: value } )
							}
						/>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Pagination Button Alignment',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: paginationAlign,
								label: 'paginationAlign',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'left',
									icon: (
										<Icon
											icon={ renderSVG(
												'fa fa-align-left'
											) }
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
											icon={ renderSVG(
												'fa fa-align-center'
											) }
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
											icon={ renderSVG(
												'fa fa-align-right'
											) }
										/>
									),
									tooltip: __(
										'Right',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
							showIcons={ true }
						/>
						</>
					) }
				<h2>
					{ __(
						'If Posts Not Found',
						'ultimate-addons-for-gutenberg'
					) }
				</h2>
				<TextControl
					autoComplete="off"
					label={ __(
						'Display Message',
						'ultimate-addons-for-gutenberg'
					) }
					value={ postDisplaytext }
					onChange={ ( value ) =>
						setAttributes( { postDisplaytext: value } )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const paginationSettings = () => {
		if ( 'infinite' === paginationType ) {
			return (
				<UAGAdvancedPanelBody
					title={ __(
						'Pagination',
						'ultimate-addons-for-gutenberg'
					) }
					initialOpen={ false }
					className="uagb__url-panel-body"
				>
					{ 'button' === paginationEventType && (
						<>
							<Range
								label={ __(
									'Font Size',
									'ultimate-addons-for-gutenberg'
								) }
								value={ paginationFontSize }
								data={ {
									value: paginationFontSize,
									label: 'paginationFontSize',
								} }
								setAttributes={ setAttributes }
								min={ 0 }
								max={ 100 }
								displayUnit={ false }
							/>
							<SpacingControl
								{ ...props }
								label={ __(
									'Padding',
									'ultimate-addons-for-gutenberg'
								) }
								valueTop={ {
									value: paginationButtonPaddingTop,
									label: 'paginationButtonPaddingTop',
								} }
								valueRight={ {
									value: paginationButtonPaddingRight,
									label: 'paginationButtonPaddingRight',
								} }
								valueBottom={ {
									value: paginationButtonPaddingBottom,
									label: 'paginationButtonPaddingBottom',
								} }
								valueLeft={ {
									value: paginationButtonPaddingLeft,
									label: 'paginationButtonPaddingLeft',
								} }
								valueTopTablet={ {
									value: paginationButtonPaddingTopTablet,
									label: 'paginationButtonPaddingTopTablet',
								} }
								valueRightTablet={ {
									value: paginationButtonPaddingRightTablet,
									label: 'paginationButtonPaddingRightTablet',
								} }
								valueBottomTablet={ {
									value: paginationButtonPaddingBottomTablet,
									label:
										'paginationButtonPaddingBottomTablet',
								} }
								valueLeftTablet={ {
									value: paginationButtonPaddingLeftTablet,
									label: 'paginationButtonPaddingLeftTablet',
								} }
								valueTopMobile={ {
									value: paginationButtonPaddingTopMobile,
									label: 'paginationButtonPaddingTopMobile',
								} }
								valueRightMobile={ {
									value: paginationButtonPaddingRightMobile,
									label: 'paginationButtonPaddingRightMobile',
								} }
								valueBottomMobile={ {
									value: paginationButtonPaddingBottomMobile,
									label:
										'paginationButtonPaddingBottomMobile',
								} }
								valueLeftMobile={ {
									value: paginationButtonPaddingLeftMobile,
									label: 'paginationButtonPaddingLeftMobile',
								} }
								unit={ {
									value: paginationButtonPaddingType,
									label: 'paginationButtonPaddingType',
								} }
								mUnit={ {
									value: mobilepaginationButtonPaddingType,
									label: 'mobilepaginationButtonPaddingType',
								} }
								tUnit={ {
									value: tabletpaginationButtonPaddingType,
									label: 'tabletpaginationButtonPaddingType',
								} }
								deviceType={ deviceType }
								attributes={ attributes }
								setAttributes={ setAttributes }
								link={ {
									value: spacingLink,
									label: 'spacingLink',
								} }
							/>
							<UAGTabsControl
								tabs={ [
									{
										name: 'normal',
										title: __(
											'Normal',
											'ultimate-addons-for-gutenberg'
										),
									},
									{
										name: 'hover',
										title: __(
											'Hover',
											'ultimate-addons-for-gutenberg'
										),
									},
								] }
								normal={
									<>
										<AdvancedPopColorControl
											label={ __(
												'Text Color',
												'ultimate-addons-for-gutenberg'
											) }
											colorValue={ paginationTextColor }
											data={ {
												value: paginationTextColor,
												label: 'paginationTextColor',
											} }
											setAttributes={ setAttributes }
										/>
										<AdvancedPopColorControl
											label={ __(
												'Background Color',
												'ultimate-addons-for-gutenberg'
											) }
											colorValue={
												paginationMasonryBgColor
											}
											data={ {
												value: paginationMasonryBgColor,
												label: 'paginationMasonryBgColor',
											} }
											setAttributes={ setAttributes }
										/>
									</>
								}
								hover={
									<>
										<AdvancedPopColorControl
											label={ __(
												'Text Color',
												'ultimate-addons-for-gutenberg'
											) }
											colorValue={
												paginationTextHoverColor
											}
											data={ {
												value: paginationTextHoverColor,
												label: 'paginationTextHoverColor',
											} }
											setAttributes={ setAttributes }
										/>
										<AdvancedPopColorControl
											label={ __(
												'Background Color',
												'ultimate-addons-for-gutenberg'
											) }
											colorValue={
												paginationBgHoverColor
											}
											data={ {
												value: paginationBgHoverColor,
												label: 'paginationBgHoverColor',
											} }
											setAttributes={ setAttributes }
										/>
									</>
								}
								disableBottomSeparator={ false }
							/>
							<ResponsiveBorder
								setAttributes={ setAttributes }
								prefix={ 'paginationMasonry' }
								attributes={ attributes }
								deviceType={ deviceType }
								disableBottomSeparator={ true }
								disabledBorderTitle= { true }
							/>
						</>
					) }
					{ 'scroll' === paginationEventType && (
						<>
							<AdvancedPopColorControl
								label={ __(
									'Loader Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ loaderColor }
								data={ {
									value: loaderColor,
									label: 'loaderColor',
								} }
								setAttributes={ setAttributes }
							/>
							<Range
								label={ __(
									'Loader Size',
									'ultimate-addons-for-gutenberg'
								) }
								setAttributes={ setAttributes }
								value={ loaderSize }
								data={ {
									value: loaderSize,
									label: 'loaderSize',
								} }
								min={ 1 }
								max={ 50 }
								displayUnit={ false }
							/>
						</>
					) }
				</UAGAdvancedPanelBody>
			);
		}

		return '';
	};
	const imageSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Show Featured Image',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostImage }
					onChange={ () =>
						setAttributes( {
							displayPostImage: ! displayPostImage,
						} )
					}
				/>
				{ displayPostImage === true && (
					<UAGSelectControl
						label={ __(
							'Sizes',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: imgSize,
							label: 'imgSize',
						} }
						setAttributes={ setAttributes }
						options={ uagb_blocks_info.image_sizes }
					/>
				) }
				{ displayPostImage === true && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Position',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: imgPosition,
							label: 'imgPosition',
						} }
						options={ [
							{
								value: 'top',
								label: __(
									'Top',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'background',
								label: __(
									'Background',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
				) }
				{ displayPostImage === true && imgPosition === 'background' && (
					<ToggleControl
						label={ __(
							'Link Complete Box',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ linkBox }
						onChange={ () =>
							setAttributes( { linkBox: ! linkBox } )
						}
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const contentSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Show Title',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostTitle }
					onChange={ () =>
						setAttributes( {
							displayPostTitle: ! displayPostTitle,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Show Author',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostAuthor }
					onChange={ () =>
						setAttributes( {
							displayPostAuthor: ! displayPostAuthor,
						} )
					}
				/>
				<ToggleControl
					label={ __( 'Show Date', 'ultimate-addons-for-gutenberg' ) }
					checked={ displayPostDate }
					onChange={ () =>
						setAttributes( { displayPostDate: ! displayPostDate } )
					}
				/>
				<ToggleControl
					label={ __(
						'Show Comment',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostComment }
					onChange={ () =>
						setAttributes( {
							displayPostComment: ! displayPostComment,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Show Taxonomy',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostTaxonomy }
					onChange={ () =>
						setAttributes( {
							displayPostTaxonomy: ! displayPostTaxonomy,
						} )
					}
				/>
				{ displayPostTaxonomy && (
				<>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Taxonomy Position',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: displayPostTaxonomyAboveTitle,
						label: 'displayPostTaxonomyAboveTitle',
					} }
					options={ [
						{
							value: 'withMeta',
							label: __(
								'With Meta',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'aboveTitle',
							label: __(
								'Above Title',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
				{ 'aboveTitle' === displayPostTaxonomyAboveTitle && (
				<>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Taxonomy Style',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: taxStyle,
							label: 'taxStyle',
						} }
						options={ [
							{
								value: 'default',
								label: __(
									'Normal',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'highlighted',
								label: __(
									'Highlighted',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
				{ 'default' === taxStyle && (
					<TextControl
						label={ __( 'Taxonomy Divider', 'ultimate-addons-for-gutenberg' ) }
						value={ taxDivider }
						onChange={ ( value ) =>
							setAttributes( {
								taxDivider: value,
							} )
						}
					/>
				) }
				</>
				) }
				</>
				) }
				<ToggleControl
					label={ __(
						'Show Meta Icon',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ hideTaxonomyIcon }
					onChange={ () =>
						setAttributes( {
							hideTaxonomyIcon: ! hideTaxonomyIcon,
						} )
					}
				/>
				<ToggleControl
					label={ __(
						'Show Excerpt',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostExcerpt }
					onChange={ () =>
						setAttributes( {
							displayPostExcerpt: ! displayPostExcerpt,
						} )
					}
				/>
				{ displayPostExcerpt && (
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Show:', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: displayPostContentRadio,
							label: 'displayPostContentRadio',
						} }
						options={ [
							{
								label: __(
									'Excerpt',
									'ultimate-addons-for-gutenberg'
								),
								value: 'excerpt',
							},
							{
								label: __(
									'Full post',
									'ultimate-addons-for-gutenberg'
								),
								value: 'full_post',
							},
						] }
					/>
				) }
				{ displayPostExcerpt &&
					displayPostContentRadio === 'excerpt' && (
						<Range
							label={ __(
								'Max number of words in excerpt',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ excerptLength }
							data={ {
								value: excerptLength,
								label: 'excerptLength',
							} }
							min={ 1 }
							max={ 100 }
							displayUnit={ false }
						/>
					) }
			</UAGAdvancedPanelBody>
		);
	};
	const readMoreLinkSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __(
					'Read More Link',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<ToggleControl
					label={ __(
						'Show Read More Link',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayPostLink }
					onChange={ () =>
						setAttributes( { displayPostLink: ! displayPostLink } )
					}
				/>
				{ displayPostLink && (
					<>
						<ToggleControl
							label={ __(
								'Open links in New Tab',
								'ultimate-addons-for-gutenberg'
							) }
							checked={ newTab }
							onChange={ () =>
								setAttributes( { newTab: ! newTab } )
							}
						/>
						<TextControl
							label={ __(
								'Text',
								'ultimate-addons-for-gutenberg'
							) }
							value={ ctaText }
							onChange={ ( value ) =>
								setAttributes( { ctaText: value } )
							}
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const spacingSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<AdvancedPopColorControl
					label={ __(
						'Background Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ bgColor }
					data={ {
						value: bgColor,
						label: 'bgColor',
					} }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Column Gap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: columnGap,
							label: 'columnGap',
						},
						tablet: {
							value: columnGapTablet,
							label: 'columnGapTablet',
						},
						mobile: {
							value: columnGapMobile,
							label: 'columnGapMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: columnGapUnit,
						label: 'columnGapUnit',
					} }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Row Gap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: rowGap,
							label: 'rowGap',
						},
						tablet: {
							value: rowGapTablet,
							label: 'rowGapTablet',
						},
						mobile: {
							value: rowGapMobile,
							label: 'rowGapMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: rowGapUnit,
						label: 'rowGapUnit',
					} }
					setAttributes={ setAttributes }
				/>
				<SpacingControl
					{ ...props }
					label={ __(
						'Content Padding',
						'ultimate-addons-for-gutenberg'
					) }
					valueTop={ {
						value: paddingTop,
						label: 'paddingTop',
					} }
					valueRight={ {
						value: paddingRight,
						label: 'paddingRight',
					} }
					valueBottom={ {
						value: paddingBottom,
						label: 'paddingBottom',
					} }
					valueLeft={ {
						value: paddingLeft,
						label: 'paddingLeft',
					} }
					valueTopTablet={ {
						value: paddingTopTablet,
						label: 'paddingTopTablet',
					} }
					valueRightTablet={ {
						value: paddingRightTablet,
						label: 'paddingRightTablet',
					} }
					valueBottomTablet={ {
						value: paddingBottomTablet,
						label: 'paddingBottomTablet',
					} }
					valueLeftTablet={ {
						value: paddingLeftTablet,
						label: 'paddingLeftTablet',
					} }
					valueTopMobile={ {
						value: paddingTopMobile,
						label: 'paddingTopMobile',
					} }
					valueRightMobile={ {
						value: paddingRightMobile,
						label: 'paddingRightMobile',
					} }
					valueBottomMobile={ {
						value: paddingBottomMobile,
						label: 'paddingBottomMobile',
					} }
					valueLeftMobile={ {
						value: paddingLeftMobile,
						label: 'paddingLeftMobile',
					} }
					unit={ {
						value: contentPaddingUnit,
						label: 'contentPaddingUnit',
					} }
					mUnit={ {
						value: mobilePaddingUnit,
						label: 'mobilePaddingUnit',
					} }
					tUnit={ {
						value: tabletPaddingUnit,
						label: 'tabletPaddingUnit',
					} }
					deviceType={ deviceType }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: spacingLinkPadding,
						label: 'spacingLinkPadding',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const imageStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Image', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				{imgPosition === 'background' &&
					<>
						<AdvancedPopColorControl
							label={ __(
								'Background Overlay Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ bgOverlayColor }
							data={ {
								value: bgOverlayColor,
								label: 'bgOverlayColor',
							} }
							setAttributes={ setAttributes }
						/>
						<Range
							label={ __(
								'Overlay Opacity',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ overlayOpacity }
							data={ {
								value: overlayOpacity,
								label: 'overlayOpacity',
							} }
							min={ 0 }
							max={ 100 }
							displayUnit={ false }
						/>
					</>
				}
				{imgPosition === 'top' &&
					<ResponsiveSlider
						label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: imageBottomSpace,
								label: 'imageBottomSpace',
							},
							tablet: {
								value: imageBottomSpaceTablet,
								label: 'imageBottomSpaceTablet',
							},
							mobile: {
								value: imageBottomSpaceMobile,
								label: 'imageBottomSpaceMobile',
							},
						} }
						min={ 0 }
						max={ 50 }
						unit={ {
							value: imageBottomSpaceUnit,
							label: 'imageBottomSpaceUnit',
						} }
						setAttributes={ setAttributes }
					/>
				}
			</UAGAdvancedPanelBody>
		);
	};
	const titleStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'HTML Tag', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: titleTag,
						label: 'titleTag',
					} }
					options={ [
						{
							value: 'h1',
							label: __( 'H1', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h2',
							label: __( 'H2', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h3',
							label: __( 'H3', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h4',
							label: __( 'H4', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h5',
							label: __( 'H5', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'h6',
							label: __( 'H6', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'span',
							label: __(
								'Span',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'p',
							label: __( 'P', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ titleColor }
					data={ {
						value: titleColor,
						label: 'titleColor',
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
						value: titleLoadGoogleFonts,
						label: 'titleLoadGoogleFonts',
					} }
					fontFamily={ {
						value: titleFontFamily,
						label: 'titleFontFamily',
					} }
					fontWeight={ {
						value: titleFontWeight,
						label: 'titleFontWeight',
					} }
					fontStyle={ {
						value: titleFontStyle,
						label: 'titleFontStyle',
					} }
					fontSizeType={ {
						value: titleFontSizeType,
						label: 'titleFontSizeType',
					} }
					fontSize={ {
						value: titleFontSize,
						label: 'titleFontSize',
					} }
					fontSizeMobile={ {
						value: titleFontSizeMobile,
						label: 'titleFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: titleFontSizeTablet,
						label: 'titleFontSizeTablet',
					} }
					lineHeightType={ {
						value: titleLineHeightType,
						label: 'titleLineHeightType',
					} }
					lineHeight={ {
						value: titleLineHeight,
						label: 'titleLineHeight',
					} }
					lineHeightMobile={ {
						value: titleLineHeightMobile,
						label: 'titleLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: titleLineHeightTablet,
						label: 'titleLineHeightTablet',
					} }
					letterSpacing={ {
						value: titleLetterSpacing,
						label: 'titleLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: titleLetterSpacingTablet,
						label: 'titleLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: titleLetterSpacingMobile,
						label: 'titleLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: titleLetterSpacingType,
						label: 'titleLetterSpacingType',
					} }
					transform={ {
						value: titleTransform,
						label: 'titleTransform',
					} }
					decoration={ {
						value: titleDecoration,
						label: 'titleDecoration',
					} }
				/>
				<ResponsiveSlider
					label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: titleBottomSpace,
							label: 'titleBottomSpace',
						},
						tablet: {
							value: titleBottomSpaceTablet,
							label: 'titleBottomSpaceTablet',
						},
						mobile: {
							value: titleBottomSpaceMobile,
							label: 'titleBottomSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: titleBottomSpaceUnit,
						label: 'titleBottomSpaceUnit',
					} }
					setAttributes={ setAttributes }
				/>

			</UAGAdvancedPanelBody>
		);
	};
	const metaStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Meta', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ metaColor }
					data={ {
						value: metaColor,
						label: 'metaColor',
					} }
					setAttributes={ setAttributes }
				/>
				{ ( 'aboveTitle' === displayPostTaxonomyAboveTitle && 'highlighted' === taxStyle ) && (
					<>
					<AdvancedPopColorControl
						label={ __( 'Taxonomy Text Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ highlightedTextColor }
						data={ {
							value: highlightedTextColor,
							label: 'highlightedTextColor',
						} }
						setAttributes={ setAttributes }
					/>
					<AdvancedPopColorControl
						label={ __( 'Highlighted Color', 'ultimate-addons-for-gutenberg' ) }
						colorValue={ highlightedTextBgColor }
						data={ {
							value: highlightedTextBgColor,
							label: 'highlightedTextBgColor',
						} }
						setAttributes={ setAttributes }
					/>
					</>
				)}
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: metaLoadGoogleFonts,
						label: 'metaLoadGoogleFonts',
					} }
					fontFamily={ {
						value: metaFontFamily,
						label: 'metaFontFamily',
					} }
					fontWeight={ {
						value: metaFontWeight,
						label: 'metaFontWeight',
					} }
					fontStyle={ {
						value: metaFontStyle,
						label: 'metaFontStyle',
					} }
					fontSizeType={ {
						value: metaFontSizeType,
						label: 'metaFontSizeType',
					} }
					fontSize={ {
						value: metaFontSize,
						label: 'metaFontSize',
					} }
					fontSizeMobile={ {
						value: metaFontSizeMobile,
						label: 'metaFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: metaFontSizeTablet,
						label: 'metaFontSizeTablet',
					} }
					lineHeightType={ {
						value: metaLineHeightType,
						label: 'metaLineHeightType',
					} }
					lineHeight={ {
						value: metaLineHeight,
						label: 'metaLineHeight',
					} }
					lineHeightMobile={ {
						value: metaLineHeightMobile,
						label: 'metaLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: metaLineHeightTablet,
						label: 'metaLineHeightTablet',
					} }
					letterSpacing={ {
						value: metaLetterSpacing,
						label: 'metaLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: metaLetterSpacingTablet,
						label: 'metaLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: metaLetterSpacingMobile,
						label: 'metaLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: metaLetterSpacingType,
						label: 'metaLetterSpacingType',
					} }
					transform={ {
						value: metaTransform,
						label: 'metaTransform',
					} }
					decoration={ {
						value: metaDecoration,
						label: 'metaDecoration',
					} }
				/>
				<ResponsiveSlider
					label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: metaBottomSpace,
							label: 'metaBottomSpace',
						},
						tablet: {
							value: metaBottomSpaceTablet,
							label: 'metaBottomSpaceTablet',
						},
						mobile: {
							value: metaBottomSpaceMobile,
							label: 'metaBottomSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: metaBottomSpaceUnit,
						label: 'metaBottomSpaceUnit',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const excerptStyle = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Excerpt', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ excerptColor }
					data={ {
						value: excerptColor,
						label: 'excerptColor',
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
						value: excerptLoadGoogleFonts,
						label: 'excerptLoadGoogleFonts',
					} }
					fontFamily={ {
						value: excerptFontFamily,
						label: 'excerptFontFamily',
					} }
					fontWeight={ {
						value: excerptFontWeight,
						label: 'excerptFontWeight',
					} }
					fontStyle={ {
						value: excerptFontStyle,
						label: 'excerptFontStyle',
					} }
					fontSizeType={ {
						value: excerptFontSizeType,
						label: 'excerptFontSizeType',
					} }
					fontSize={ {
						value: excerptFontSize,
						label: 'excerptFontSize',
					} }
					fontSizeMobile={ {
						value: excerptFontSizeMobile,
						label: 'excerptFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: excerptFontSizeTablet,
						label: 'excerptFontSizeTablet',
					} }
					lineHeightType={ {
						value: excerptLineHeightType,
						label: 'excerptLineHeightType',
					} }
					lineHeight={ {
						value: excerptLineHeight,
						label: 'excerptLineHeight',
					} }
					lineHeightMobile={ {
						value: excerptLineHeightMobile,
						label: 'excerptLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: excerptLineHeightTablet,
						label: 'excerptLineHeightTablet',
					} }
					letterSpacing={ {
						value: excerptLetterSpacing,
						label: 'excerptLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: excerptLetterSpacingTablet,
						label: 'excerptLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: excerptLetterSpacingMobile,
						label: 'excerptLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: excerptLetterSpacingType,
						label: 'excerptLetterSpacingType',
					} }
					transform={ {
						value: excerptTransform,
						label: 'excerptTransform',
					} }
					decoration={ {
						value: excerptDecoration,
						label: 'excerptDecoration',
					} }
				/>
				<ResponsiveSlider
					label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: excerptBottomSpace,
							label: 'excerptBottomSpace',
						},
						tablet: {
							value: excerptBottomSpaceTablet,
							label: 'excerptBottomSpaceTablet',
						},
						mobile: {
							value: excerptBottomSpaceMobile,
							label: 'excerptBottomSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 50 }
					unit={ {
						value: excerptBottomSpaceUnit,
						label: 'excerptBottomSpaceUnit',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const readMoreLinkStyleSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __(
					'Read More Link',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<UAGPresets
					setAttributes = { setAttributes }
					presets = { buttonsPresets }
					presetInputType = 'radioImage'
				/>
				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __(
								'Normal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							name: 'hover',
							title: __(
								'Hover',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ ctaColor }
								data={ {
									value: ctaColor,
									label: 'ctaColor',
								} }
								setAttributes={ setAttributes }
							/>
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ ctaBgColor }
								data={ {
									value: ctaBgColor,
									label: 'ctaBgColor',
								} }
								setAttributes={ setAttributes }
							/>
						</>
					}
					hover={
						<>
							<AdvancedPopColorControl
								label={ __(
									'Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ ctaHColor }
								data={ {
									value: ctaHColor,
									label: 'ctaHColor',
								} }
								setAttributes={ setAttributes }
							/>
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ ctaBgHColor }
								data={ {
									value: ctaBgHColor,
									label: 'ctaBgHColor',
								} }
								setAttributes={ setAttributes }
							/>
						</>
					}
					disableBottomSeparator={ false }
				/>
				<TypographyControl
					label={ __(
						'Typography',
						'ultimate-addons-for-gutenberg'
					) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: ctaLoadGoogleFonts,
						label: 'ctaLoadGoogleFonts',
					} }
					fontFamily={ {
						value: ctaFontFamily,
						label: 'ctaFontFamily',
					} }
					fontWeight={ {
						value: ctaFontWeight,
						label: 'ctaFontWeight',
					} }
					fontStyle={ {
						value: ctaFontStyle,
						label: 'ctaFontStyle',
					} }
					fontSizeType={ {
						value: ctaFontSizeType,
						label: 'ctaFontSizeType',
					} }
					fontSize={ {
						value: ctaFontSize,
						label: 'ctaFontSize',
					} }
					fontSizeMobile={ {
						value: ctaFontSizeMobile,
						label: 'ctaFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: ctaFontSizeTablet,
						label: 'ctaFontSizeTablet',
					} }
					lineHeightType={ {
						value: ctaLineHeightType,
						label: 'ctaLineHeightType',
					} }
					lineHeight={ {
						value: ctaLineHeight,
						label: 'ctaLineHeight',
					} }
					lineHeightMobile={ {
						value: ctaLineHeightMobile,
						label: 'ctaLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: ctaLineHeightTablet,
						label: 'ctaLineHeightTablet',
					} }
					letterSpacing={ {
						value: ctaLetterSpacing,
						label: 'ctaLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: ctaLetterSpacingTablet,
						label: 'ctaLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: ctaLetterSpacingMobile,
						label: 'ctaLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: ctaLetterSpacingType,
						label: 'ctaLetterSpacingType',
					} }
					transform={ {
						value: ctaTransform,
						label: 'ctaTransform',
					} }
					decoration={ {
						value: ctaDecoration,
						label: 'ctaDecoration',
					} }
				/>
				<ResponsiveSlider
					label={ __( 'Bottom Spacing', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: ctaBottomSpace,
							label: 'ctaBottomSpace',
						},
						tablet: {
							value: ctaBottomSpaceTablet,
							label: 'ctaBottomSpaceTablet',
						},
						mobile: {
							value: ctaBottomSpaceMobile,
							label: 'ctaBottomSpaceMobile',
						},
					} }
					min={ 0 }
					max={ 300 }
					unit={ {
						value: ctaBottomSpaceUnit,
						label: 'ctaBottomSpaceUnit',
					} }
					setAttributes={ setAttributes }
				/>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'btn' }
					attributes={ attributes }
					deviceType={ deviceType }
					disabledBorderTitle= { true }
				/>
				<SpacingControl
					{ ...props }
					label={ __(
						'Button Padding',
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
						value: spacingLink,
						label: 'spacingLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const inspectorControls = (
		<InspectorControls>
			<InspectorTabs>
				<InspectorTab { ...UAGTabs.general }>
					{ generalSettings() }
					{ imageSettings() }
					{ contentSettings() }
					{ readMoreLinkSettings() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.style }>
					{ spacingSettings() }
					{ displayPostTitle && titleStyle() }
					{ ( displayPostAuthor ||
						displayPostDate ||
						displayPostComment ||
						displayPostTaxonomy ) &&
						metaStyle() }
					{ displayPostExcerpt && excerptStyle() }
					{ displayPostLink && readMoreLinkStyleSettings() }
					{ paginationSettings() }
					{ displayPostImage === true &&
						imageStyle() }
				</InspectorTab>
				<InspectorTab { ...UAGTabs.advance } parentProps={props}></InspectorTab>
			</InspectorTabs>
		</InspectorControls>
	);

	if ( ! hasPosts ) {
		return (
			<>
				{ inspectorControls }
				<Placeholder
					icon="admin-post"
					label={
						uagb_blocks_info.blocks[ 'uagb/post-masonry' ].title
					}
				>
					{ ! Array.isArray( latestPosts ) ? (
						<Spinner />
					) : (
						postDisplaytext
					) }
				</Placeholder>
			</>
		);
	}

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings
				parentProps={ props }
				state={ state }
				inspectorControls={ inspectorControls }
				togglePreview={ togglePreview }
			/>
			<Render
				parentProps={ props }
				state={ state }
				setState={ setState }
				togglePreview={ togglePreview }
			/>
		</Suspense>
	);
};

export default compose(
	withSelect( ( select, props ) => {
		const {
			blockName,
			categories,
			postsToShow,
			postsOffset,
			order,
			orderBy,
			postType,
			taxonomyType,
			excludeCurrentPost,
		} = props.attributes;
		const { getEntityRecords } = select( 'core' );

		const allTaxonomy = uagb_blocks_info.all_taxonomy;
		const currentTax = allTaxonomy[ postType ];
		let categoriesList = [];
		let rest_base = '';

		if ( 'undefined' !== typeof currentTax ) {
			if ( 'undefined' !== typeof currentTax.taxonomy[ taxonomyType ] ) {
				rest_base =
					currentTax.taxonomy[ taxonomyType ].rest_base === false ||
					currentTax.taxonomy[ taxonomyType ].rest_base === null
						? currentTax.taxonomy[ taxonomyType ].name
						: currentTax.taxonomy[ taxonomyType ].rest_base;
			}

			if ( '' !== taxonomyType ) {
				if (
					'undefined' !== typeof currentTax.terms &&
					'undefined' !== typeof currentTax.terms[ taxonomyType ]
				) {
					categoriesList = currentTax.terms[ taxonomyType ];
				}
			}
		}

		const latestPostsQuery = {
			order,
			orderby: orderBy,
			per_page: getFallbackNumber( postsToShow, 'postsToShow', blockName ),
			offset: getFallbackNumber( postsOffset, 'postsOffset', blockName ),
		};

		if ( excludeCurrentPost ) {
			latestPostsQuery.exclude = select(
				'core/editor'
			).getCurrentPostId();
		}
		const category = [];
		const temp = parseInt( categories );
		category.push( temp );
		const catlenght = categoriesList.length;
		for ( let i = 0; i < catlenght; i++ ) {
			if ( categoriesList[ i ].id === temp ) {
				if ( categoriesList[ i ].child.length !== 0 ) {
					categoriesList[ i ].child.forEach( ( element ) => {
						category.push( element );
					} );
				}
			}
		}
		const { getBlocks } = select( 'core/block-editor' );
		if ( undefined !== categories && '' !== categories ) {
			latestPostsQuery[ rest_base ] =
				undefined === categories || '' === categories
					? categories
					: category;
		}
		return {
			latestPosts: getEntityRecords(
				'postType',
				postType,
				latestPostsQuery
			),
			categoriesList,
			taxonomyList:
				'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
			block: getBlocks( props.clientId ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { replaceInnerBlocks } = dispatch( 'core/block-editor' );
		return {
			replaceInnerBlocks,
		};
	} )
)( UAGBPostMasonry );
