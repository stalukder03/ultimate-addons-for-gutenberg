/**
 * BLOCK: Post Grid - Settings.
 */

 import React, { Suspense } from 'react';
 import lazyLoader from '@Controls/lazy-loader';
 import WebfontLoader from '@Components/typography/fontloader';
 import TypographyControl from '@Components/typography';
 import { __ } from '@wordpress/i18n';
 import Border from "../../../components/border";
 import AdvancedPopColorControl from "../../../components/color-control/advanced-pop-color-control.js";
 import InspectorTabs from "../../../components/inspector-tabs/InspectorTabs.js";
 import InspectorTab from "../../../components/inspector-tabs/InspectorTab.js";
 import SpacingControl from "../../../components/spacing-control";
 import Range from "../../../components/range/Range.js";
 import ResponsiveSlider from "../../../components/responsive-slider";
 
 const MAX_POSTS_COLUMNS = 8;
 
 import {
	 PanelBody,
	 RangeControl,
	 SelectControl,
	 ToggleControl,
	 TabPanel,
	 ToolbarGroup,
	 TextControl,
	 RadioControl,
	 Button,
 } from '@wordpress/components';
 
 import {
	 InspectorControls,
	 BlockAlignmentToolbar,
	 BlockControls
 } from '@wordpress/block-editor';
 
 const Settings = ( props ) => {
	 // Caching all Props
	 const {
		 attributes,
		 setAttributes,
		 latestPosts,
		 categoriesList,
		 deviceType,
		 taxonomyList,
	 } = props.parentProps;
 
	 // Caching all attributes.
	 const {
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
		 borderWidth,
		 borderStyle,
		 borderColor,
		 borderHColor,
		 borderRadius,
		 btnVPadding,
		 btnHPadding,
		 align,
		 columns,
		 tcolumns,
		 mcolumns,
		 order,
		 orderBy,
		 categories,
		 postsToShow,
		 rowGap,
		 columnGap,
		 bgColor,
		 contentPadding,
		 contentPaddingMobile,
		 contentPaddingUnit,
		 contentPaddingTablet,
		 titleColor,
		 titleTag,
		 titleFontSize,
		 titleFontSizeType,
		 titleFontSizeMobile,
		 titleFontSizeTablet,
		 titleFontFamily,
		 titleFontWeight,
		 titleFontSubset,
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
		 metaFontSubset,
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
		 excerptFontSubset,
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
		 ctaFontSubset,
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
		 titleBottomSpace,
		 metaBottomSpace,
		 excerptBottomSpace,
		 excerptBottomSpaceUnit,
		 ctaBottomSpace,
		 equalHeight,
		 excerptLength,
		 overlayOpacity,
		 bgOverlayColor,
		 linkBox,
		 postType,
		 taxonomyType,
		 postPagination,
		 pageLimit,
		 paginationColor,
		 paginationBgColor,
		 paginationActiveColor,
		 paginationBgActiveColor,
		 paginationLayout,
		 paginationBorderSize,
		 paginationBorderRadius,
		 paginationBorderColor,
		 paginationBorderActiveColor,
		 paginationSpacing,
		 paginationAlignment,
		 paginationPrevText,
		 paginationNextText,
		 inheritFromTheme,
		 postDisplaytext,
		 displayPostContentRadio,
		 excludeCurrentPost,
		 rowGapUnit,
		 columnGapUnit,
		 imageBottomSpaceUnit,
		 titleBottomSpaceUnit,
		 metaBottomSpaceUnit,
		 ctaBottomSpaceUnit,
		 titleTransform,
		metaLinkTransform,
		excerptTransform,
		ctaTransform,
		titleDecoration,
		metaLinkDecoration,
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
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
	 } = attributes;
 
	 const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;
 
	 const onSelectPostType = ( value ) => {
		 setAttributes( { postType: value } );
		 setAttributes( { categories: '' } );
	 };
	 const onSelectTaxonomyType = ( value ) => {
		 setAttributes( { taxonomyType: value } );
		 setAttributes( { categories: '' } );
	 };
	 const onSelectPagination = ( value ) => {
		 setAttributes( { postPagination: value } );
		 setAttributes( { paginationMarkup: 'empty' } );
	 };
	 const onChangePostsPerPage = ( value ) => {
		 setAttributes( { postsToShow: value } );
		 setAttributes( { paginationMarkup: 'empty' } );
	 };
	 const onChangePageLimit = ( value ) => {
		 setAttributes( { pageLimit: value } );
		 setAttributes( { paginationMarkup: 'empty' } );
	 };
	 const onChangePrevText = ( value ) => {
		 setAttributes( { paginationPrevText: value } );
		 setAttributes( { paginationMarkup: 'empty' } );
	 };
	 const onChangeNextText = ( value ) => {
		 setAttributes( { paginationNextText: value } );
		 setAttributes( { paginationMarkup: 'empty' } );
	 };
 
	 const taxonomyListOptions = [];
 
	 const categoryListOptions = [
		 { value: '', label: __( 'All', 'ultimate-addons-for-gutenberg' ) },
	 ];
 
	 if ( '' != taxonomyList ) {
		 Object.keys( taxonomyList ).map( ( item ) => {
			 return taxonomyListOptions.push( {
				 value: taxonomyList[ item ].name,
				 label: taxonomyList[ item ].label,
			 } );
		 } );
	 }
 
	 if ( '' != categoriesList ) {
		 Object.keys( categoriesList ).map( ( item ) => {
			 return categoryListOptions.push( {
				 value: categoriesList[ item ].id,
				 label: categoriesList[ item ].name,
			 } );
		 } );
	 }
 
	 const blockControlsSettings = () => {
		 const { isEditing } = props.state;
 
		 return (
			 <BlockControls>
				 <BlockAlignmentToolbar
					 value={ align }
					 onChange={ ( value ) => {
						 setAttributes( { align: value } );
					 } }
					 controls={ [ 'left', 'center', 'right' ] }
				 />
				 <ToolbarGroup
					 controls={ [
						 {
							 icon: 'edit',
							 title: __( 'Edit' ),
							 onClick: () => props.togglePreview(),
							 isActive: isEditing,
						 },
					 ] }
				 />
			 </BlockControls>
		 );
	 };
 
	 let loadTitleGoogleFonts;
	 let loadMetaGoogleFonts;
	 let loadExcerptGoogleFonts;
	 let loadCtaGoogleFonts;
 
	 if ( titleLoadGoogleFonts == true ) {
		 const titleconfig = {
			 google: {
				 families: [
					 titleFontFamily +
						 ( titleFontWeight ? ':' + titleFontWeight : '' ),
				 ],
			 },
		 };
 
		 loadTitleGoogleFonts = (
			 <WebfontLoader config={ titleconfig }></WebfontLoader>
		 );
	 }
 
	 if ( metaLoadGoogleFonts == true ) {
		 const metaconfig = {
			 google: {
				 families: [
					 metaFontFamily +
						 ( metaFontWeight ? ':' + metaFontWeight : '' ),
				 ],
			 },
		 };
 
		 loadMetaGoogleFonts = (
			 <WebfontLoader config={ metaconfig }></WebfontLoader>
		 );
	 }
 
	 if ( excerptLoadGoogleFonts == true ) {
		 const excerptconfig = {
			 google: {
				 families: [
					 excerptFontFamily +
						 ( excerptFontWeight ? ':' + excerptFontWeight : '' ),
				 ],
			 },
		 };
 
		 loadExcerptGoogleFonts = (
			 <WebfontLoader config={ excerptconfig }></WebfontLoader>
		 );
	 }
 
	 if ( ctaLoadGoogleFonts == true ) {
		 const ctaconfig = {
			 google: {
				 families: [
					 ctaFontFamily +
						 ( ctaFontWeight ? ':' + ctaFontWeight : '' ),
				 ],
			 },
		 };
 
		 loadCtaGoogleFonts = (
			 <WebfontLoader config={ ctaconfig }></WebfontLoader>
		 );
	 }
	const generalSettings = () => {
		return (
			<PanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<SelectControl
					label={ __( 'Post Type', 'ultimate-addons-for-gutenberg' ) }
					value={ postType }
					onChange={ ( value ) => onSelectPostType( value ) }
					options={ uagb_blocks_info.post_types }
				/>
				{ '' != taxonomyList && (
					<SelectControl
						label={ __(
							'Taxonomy',
							'ultimate-addons-for-gutenberg'
						) }
						value={ taxonomyType }
						onChange={ ( value ) => onSelectTaxonomyType( value ) }
						options={ taxonomyListOptions }
					/>
				) }
				{ '' != categoriesList && (
					<>
						<SelectControl
							label={ taxonomyList[ taxonomyType ].label }
							value={ categories }
							onChange={ ( value ) =>
								setAttributes( { categories: value } )
							}
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
					label={__(
						'Posts Per Page',
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={postsToShow}
					onChange={ onChangePostsPerPage }
					min={0}
					max={500}
					displayUnit = { false }
				/>
				<SelectControl
					label={ __( 'Order By' ) }
					value={ orderBy }
					onChange={ ( value ) =>
						setAttributes( { orderBy: value } )
					}
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
				<SelectControl
					label={ __( 'Order' ) }
					value={ order }
					onChange={ ( value ) => setAttributes( { order: value } ) }
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
					label={__(
						'Columns',
						"ultimate-addons-for-gutenberg"
					)}
					data={{
						desktop: {
							value: columns,
							label: "columns",
						},
						tablet: {
							value: tcolumns,
							label: "tcolumns",
						},
						mobile: {
							value: mcolumns,
							label: "mcolumns",
						},
					}}
					min={0}
					max={! hasPosts
						? MAX_POSTS_COLUMNS
						: Math.min(
							MAX_POSTS_COLUMNS,
							latestPosts.length
						)}
					displayUnit={false}
					setAttributes={setAttributes}
				/>
				<ToggleControl
					label={ __(
						'Equal Height',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ equalHeight }
					onChange={ () =>
						setAttributes( { equalHeight: ! equalHeight } )
					}
				/>
				<ToggleControl
					label={ __(
						'Post Pagination',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ postPagination }
					onChange={ onSelectPagination }
				/>
				{ postPagination == true && (
					<Range
						label={__(
							'Page Limit',
							"ultimate-addons-for-gutenberg"
						)}
						setAttributes={setAttributes}
						value={pageLimit}
						onChange={ onChangePageLimit }
						min={0}
						max={100}
						displayUnit = { false }
					/>
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
				<ToggleControl
					label={ __(
						'Inherit Styling from Theme',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ inheritFromTheme }
					onChange={ () =>
						setAttributes( {
							inheritFromTheme: ! inheritFromTheme,
						} )
					}
					help={ __(
						'This will inherit all the Typography and colors for Title, Meta, Excerpt and Read More button from the theme.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
			</PanelBody>
		);
	};
	const paginationSettings = () => {
		if ( true !== postPagination ) {
			return;
		}
	
		return (
			<PanelBody
				title={ __( 'Pagination', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<>
					<SelectControl
						label={ __(
							'Pagination Layout',
							'ultimate-addons-for-gutenberg'
						) }
						value={ paginationLayout }
						onChange={ ( value ) =>
							setAttributes( { paginationLayout: value } )
						}
						options={ [
							{
								value: 'border',
								label: __(
									'Border',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'filled',
								label: __(
									'Filled',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
					<h2>
						{ ' ' }
						{ __(
							'Pagination Alignment',
							'ultimate-addons-for-gutenberg'
						) }
					</h2>
					<Button
						key={ 'left' }
						icon="editor-alignleft"
						label="Left"
						onClick={ () =>
							setAttributes( { paginationAlignment: 'left' } )
						}
						aria-pressed={ 'left' === paginationAlignment }
						isPrimary={ 'left' === paginationAlignment }
					/>
					<Button
						key={ 'center' }
						icon="editor-aligncenter"
						label="Right"
						onClick={ () =>
							setAttributes( { paginationAlignment: 'center' } )
						}
						aria-pressed={ 'center' === paginationAlignment }
						isPrimary={ 'center' === paginationAlignment }
					/>
					<Button
						key={ 'right' }
						icon="editor-alignright"
						label="Right"
						onClick={ () =>
							setAttributes( { paginationAlignment: 'right' } )
						}
						aria-pressed={ 'right' === paginationAlignment }
						isPrimary={ 'right' === paginationAlignment }
					/>
					
					{ paginationLayout == 'filled' && (
						<>
							<AdvancedPopColorControl
								label={__(
									'Background Color',
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={paginationBgColor}
								onColorChange={(value) =>
									setAttributes({ paginationBgColor: value })
								}
							/> 
							<AdvancedPopColorControl
								label={__(
									'Background Active Color',
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={paginationBgActiveColor}
								onColorChange={(value) =>
									setAttributes({ paginationBgActiveColor: value })
								}
							/> 
						</>
					) }
					{ paginationLayout == 'border' && (
						<Border
							setAttributes={setAttributes}
							borderWidth={{
								value: paginationBorderSize,
								label: 'paginationBorderSize',
								title: __(
									'Border Size',
									"ultimate-addons-for-gutenberg"
								),
							}}
							borderRadius={{
								value: paginationBorderRadius,
								label: 'paginationBorderRadius',
								title: __(
									"Radius",
									"ultimate-addons-for-gutenberg"
								),
							}}
							borderColor={{
								value: paginationBorderColor,
								label: 'paginationBorderColor',
								title: __(
									"Color",
									"ultimate-addons-for-gutenberg"
								),
							}}
							borderHoverColor={{
								value: paginationBorderActiveColor,
								label: 'paginationBorderActiveColor',
								title: __(
									"Hover Color",
									"ultimate-addons-for-gutenberg"
								),
							}}
						/>
					) }
					<AdvancedPopColorControl
								label={__(
									'Text Color',
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={paginationColor}
								onColorChange={(value) =>
									setAttributes({ paginationColor: value })
								}
							/> 
							<AdvancedPopColorControl
								label={__(
									'Text Active Color',
									"ultimate-addons-for-gutenberg"
								)}
								colorValue={paginationActiveColor}
								onColorChange={(value) =>
									setAttributes({ paginationActiveColor: value })
								}
							/>
							<Range
								label={__(
									'Spacing',
									"ultimate-addons-for-gutenberg"
								)}
								setAttributes={setAttributes}
								value={ paginationSpacing }
								onChange={ ( value ) =>
									setAttributes( { paginationSpacing: value } )
								}
								help={ __(
									'This spacing is between the Post Grid and the Pagination',
									'ultimate-addons-for-gutenberg'
								) }
								min={0}
								max={500}
							/>
					<TextControl
						label={ __(
							'Previous Text',
							'ultimate-addons-for-gutenberg'
						) }
						value={ paginationPrevText }
						onChange={ onChangePrevText }
					/>
					<TextControl
						label={ __(
							'Next Text',
							'ultimate-addons-for-gutenberg'
						) }
						value={ paginationNextText }
						onChange={ onChangeNextText }
					/>
				</>
			</PanelBody>
		);
	};
	const imageSettings = () => {
		return (
			<PanelBody
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
				{ displayPostImage == true && (
					<SelectControl
						label={ __(
							'Image Sizes',
							'ultimate-addons-for-gutenberg'
						) }
						value={ imgSize }
						onChange={ ( value ) =>
							setAttributes( { imgSize: value } )
						}
						options={ uagb_blocks_info.image_sizes }
					/>
				) }
				{ displayPostImage == true && (
					<SelectControl
						label={ __(
							'Image Position',
							'ultimate-addons-for-gutenberg'
						) }
						value={ imgPosition }
						onChange={ ( value ) =>
							setAttributes( { imgPosition: value } )
						}
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
				{ displayPostImage == true && imgPosition == 'background' && (
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
			</PanelBody>
		);
	};
	const contentSettings = () => {
		return (
			<PanelBody
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
					<RadioControl
						label={ __( 'Show:', 'ultimate-addons-for-gutenberg' ) }
						selected={ displayPostContentRadio }
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
						onChange={ ( value ) =>
							setAttributes( {
								displayPostContentRadio: value,
							} )
						}
					/>
				) }
				{ displayPostExcerpt &&
					displayPostContentRadio === 'excerpt' && (
						<Range
							label={__(
								'Max number of words in excerpt',
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={excerptLength}
							onChange={(value) =>
								setAttributes({ excerptLength: value })
							}
							min={1}
							max={100}
						/>
					) }
			</PanelBody>
		);
	};
	const readMoreLinkSettings = () => {
		return (
			<PanelBody
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
			</PanelBody>
		);
	};
	const spacingSettings = () => {
	return (
		<PanelBody
			title={ __( 'Blog Settings', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<AdvancedPopColorControl
				label={__(
					'Background Color',
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={bgColor}
				onColorChange={(value) =>
					setAttributes({ bgColor: value })
				}
			/> 
			<Range
				label={__(
					'Vertical Spacing',
					"ultimate-addons-for-gutenberg"
				)}
				setAttributes={setAttributes}
				value={rowGap}
				onChange={(value) =>
					setAttributes({ rowGap: value })
				}
				min={0}
				max={50}
				unit={{
					value: rowGapUnit,
					label: "rowGapUnit",
				}}
			/>
			<Range
				label={__(
					'Horizontal Spacing',
					"ultimate-addons-for-gutenberg"
				)}
				setAttributes={setAttributes}
				value={columnGap}
				onChange={(value) =>
					setAttributes({ columnGap: value })
				}
				min={0}
				max={50}
				unit={{
					value: columnGapUnit,
					label: "columnGapUnit",
				}}
			/>     
			<SpacingControl
				{...props}
				label={__(
					"Content Padding",
					"ultimate-addons-for-gutenberg"
				)}
				valueTop={{
					value: paddingTop,
					label: "paddingTop",
				}}
				valueRight={{
					value: paddingRight,
					label: "paddingRight",
				}}
				valueBottom={{
					value: paddingBottom,
					label: "paddingBottom",
				}}
				valueLeft={{
					value: paddingLeft,
					label: "paddingLeft",
				}}
				valueTopTablet={{
					value: paddingTopTablet,
					label: "paddingTopTablet",
				}}
				valueRightTablet={{
					value: paddingRightTablet,
					label: "paddingRightTablet",
				}}
				valueBottomTablet={{
					value: paddingBottomTablet,
					label: "paddingBottomTablet",
				}}
				valueLeftTablet={{
					value: paddingLeftTablet,
					label: "paddingLeftTablet",
				}}
				valueTopMobile={{
					value: paddingTopMobile,
					label: "paddingTopMobile",
				}}
				valueRightMobile={{
					value: paddingRightMobile,
					label: "paddingRightMobile",
				}}
				valueBottomMobile={{
					value: paddingBottomMobile,
					label: "paddingBottomMobile",
				}}
				valueLeftMobile={{
					value: paddingLeftMobile,
					label: "paddingLeftMobile",
				}}
				unit={{
					value: contentPaddingUnit,
					label: "contentPaddingUnit",
				}}
				mUnit={{
					value: mobilePaddingUnit,
					label: "mobilePaddingUnit",
				}}
				tUnit={{
					value: tabletPaddingUnit,
					label: "tabletPaddingUnit",
				}}
				deviceType={deviceType}
				attributes={attributes}
				setAttributes={setAttributes}
				link={{
					value: spacingLinkPadding,
					label: "spacingLinkPadding",
				}}
			/>
		</PanelBody>
	);
	};

	const imageStyle = () => {
	return displayPostImage == true && imgPosition == 'background' && (
		<>
			<AdvancedPopColorControl
				label={__(
					'Background Overlay Color',
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={bgOverlayColor}
				onColorChange={(value) =>
					setAttributes({ bgOverlayColor: value })
				}
			/> 
			<Range
				label={__(
					'Overlay Opacity',
					"ultimate-addons-for-gutenberg"
				)}
				setAttributes={setAttributes}
				value={overlayOpacity}
				onChange={(value) =>
					setAttributes({ overlayOpacity: value })
				}
				min={0}
				max={100}
			/>
			<Range
				label={__(
					'Image Bottom Spacing',
					"ultimate-addons-for-gutenberg"
				)}
				setAttributes={setAttributes}
				value={imageBottomSpace}
				onChange={(value) =>
					setAttributes({ imageBottomSpace: value })
				}
				min={0}
				max={50}
				unit={{
					value: imageBottomSpaceUnit,
					label: "imageBottomSpaceUnit",
				}}
			/>
		</>
	)
	};
	const titleStyle = () => {
	return  <PanelBody
				title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SelectControl
					label={ __( 'Html Tag', 'ultimate-addons-for-gutenberg' ) }
					value={ titleTag }
					onChange={ ( value ) =>
						setAttributes( { titleTag: value } )
					}
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
								'span',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'p',
							label: __( 'p', 'ultimate-addons-for-gutenberg' ),
						},
					] }
				/>
				{ ! inheritFromTheme && (
					<>
						<AdvancedPopColorControl
							label={__(
								'Color',
								"ultimate-addons-for-gutenberg"
							)}
							colorValue={titleColor}
							onColorChange={(value) =>
								setAttributes({ titleColor: value })
							}
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
							fontSubset={ {
								value: titleFontSubset,
								label: 'titleFontSubset',
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
							transform={{
								value: titleTransform,
								label: "titleTransform",
							}}
							decoration={{
								value: titleDecoration,
								label: "titleDecoration",
							}}
						/>
						<Range
							label={__(
								'Bottom Spacing',
								"ultimate-addons-for-gutenberg"
							)}
							setAttributes={setAttributes}
							value={titleBottomSpace}
							onChange={(value) =>
								setAttributes({ titleBottomSpace: value })
							}
							min={0}
							max={50}
							unit={{
								value: titleBottomSpaceUnit,
								label: "titleBottomSpaceUnit",
							}}
						/>
					</>
				)}
			</PanelBody>
	}
	const metaStyle = () => {
	return  <PanelBody
					title={ __( 'Meta', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
				<AdvancedPopColorControl
					label={__(
						'Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={metaColor}
					onColorChange={(value) =>
						setAttributes({ metaColor: value })
					}
				/>
			
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
					fontSubset={ {
						value: metaFontSubset,
						label: 'metaFontSubset',
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
					transform={{
						value: metaLinkTransform,
						label: "metaLinkTransform",
					}}
					decoration={{
						value: metaLinkDecoration,
						label: "metaLinkDecoration",
					}}
				/>
					
				<Range
					label={__(
					'Bottom Spacing',
					"ultimate-addons-for-gutenberg"
				)}
				setAttributes={setAttributes}
				value={metaBottomSpace}
				onChange={(value) =>
					setAttributes({ metaBottomSpace: value })
				}
				min={0}
				max={50}
				unit={{
					value: metaBottomSpaceUnit,
					label: "metaBottomSpaceUnit",
				}}
				/>
			</PanelBody>
	}
	const excerptStyle = () => {
	return <PanelBody
				title={ __( 'Excerpt', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
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
					fontSubset={ {
						value: excerptFontSubset,
						label: 'excerptFontSubset',
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
					transform={{
						value: excerptTransform,
						label: "excerptTransform",
					}}
					decoration={{
						value: excerptDecoration,
						label: "excerptDecoration",
					}}
				/>
				<AdvancedPopColorControl
					label={__(
						'Color',
						"ultimate-addons-for-gutenberg"
					)}
					colorValue={excerptColor}
					onColorChange={(value) =>
						setAttributes({ excerptColor: value })
					}
				/>
				<Range
					label={__(
						'Bottom Spacing',
						"ultimate-addons-for-gutenberg"
					)}
					setAttributes={setAttributes}
					value={excerptBottomSpace}
					onChange={(value) =>
						setAttributes({ excerptBottomSpace: value })
					}
					min={0}
					max={50}
					unit={{
						value: excerptBottomSpaceUnit,
						label: "excerptBottomSpaceUnit",
					}}
				/>
				
			</PanelBody>
	}
	const readMoreLinkStyleSettings = () => {

	return (
		<PanelBody
			title={ __(
				'Read More Link',
				'ultimate-addons-for-gutenberg'
			) }
			initialOpen={ false }
		>
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
				fontSubset={ {
					value: ctaFontSubset,
					label: 'ctaFontSubset',
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
				transform={{
					value: ctaTransform,
					label: "ctaTransform",
				}}
				decoration={{
					value: ctaDecoration,
					label: "ctaDecoration",
				}}
			/>
				<Range
				label={__(
					'Bottom Spacing',
					"ultimate-addons-for-gutenberg"
				)}
				setAttributes={setAttributes}
				value={ctaBottomSpace}
				onChange={(value) =>
					setAttributes({ ctaBottomSpace: value })
				}
				min={0}
				max={500}
				unit={{
					value: ctaBottomSpaceUnit,
					label: "ctaBottomSpaceUnit",
				}}
			/>
			<Border
					setAttributes={setAttributes}
					borderStyle={{
						value: borderStyle,
						label: 'borderStyle',
						title: __(
							"Border Style",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderWidth={{
						value: borderWidth,
						label: 'borderWidth',
						title: __(
							"Border Width",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderRadius={{
						value: borderRadius,
						label: 'borderRadius',
						title: __(
							"Border Radius",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderColor={{
						value: borderColor,
						label: 'borderColor',
						title: __(
							"Border Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
					borderHoverColor={{
						value: borderHColor,
						label: 'borderHColor',
						title: __(
							"Border Hover Color",
							"ultimate-addons-for-gutenberg"
						),
					}}
				/>
			<SpacingControl
				{...props}
				label={__(
					"Button Padding",
					"ultimate-addons-for-gutenberg"
				)}
				valueTop={{
					value: paddingBtnTop,
					label: "paddingBtnTop",
				}}
				valueRight={{
					value: paddingBtnRight,
					label: "paddingBtnRight",
				}}
				valueBottom={{
					value: paddingBtnBottom,
					label: "paddingBtnBottom",
				}}
				valueLeft={{
					value: paddingBtnLeft,
					label: "paddingBtnLeft",
				}}
				valueTopTablet={{
					value: paddingBtnTopTablet,
					label: "paddingBtnTopTablet",
				}}
				valueRightTablet={{
					value: paddingBtnRightTablet,
					label: "paddingBtnRightTablet",
				}}
				valueBottomTablet={{
					value: paddingBtnBottomTablet,
					label: "paddingBtnBottomTablet",
				}}
				valueLeftTablet={{
					value: paddingBtnLeftTablet,
					label: "paddingBtnLeftTablet",
				}}
				valueTopMobile={{
					value: paddingBtnTopMobile,
					label: "paddingBtnTopMobile",
				}}
				valueRightMobile={{
					value: paddingBtnRightMobile,
					label: "paddingBtnRightMobile",
				}}
				valueBottomMobile={{
					value: paddingBtnBottomMobile,
					label: "paddingBtnBottomMobile",
				}}
				valueLeftMobile={{
					value: paddingBtnLeftMobile,
					label: "paddingBtnLeftMobile",
				}}
				unit={{
					value: paddingBtnUnit,
					label: "paddingBtnUnit",
				}}
				mUnit={{
					value: mobilePaddingBtnUnit,
					label: "mobilePaddingBtnUnit",
				}}
				tUnit={{
					value: tabletPaddingBtnUnit,
					label: "tabletPaddingBtnUnit",
				}}
				deviceType={deviceType}
				attributes={attributes}
				setAttributes={setAttributes}
				link={{
					value: spacingLink,
					label: "spacingLink",
				}}
			/>
			<AdvancedPopColorControl
				label={__(
					'Color',
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={ctaColor}
				onColorChange={(value) =>
					setAttributes({ ctaColor: value })
				}
			/>	
			<AdvancedPopColorControl
				label={__(
					'Hover Color',
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={ctaHColor}
				onColorChange={(value) =>
					setAttributes({ ctaHColor: value })
				}
			/>   
			<AdvancedPopColorControl
				label={__(
					'Background Color',
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={ctaBgColor}
				onColorChange={(value) =>
					setAttributes({ ctaBgColor: value })
				}
			/>	
			<AdvancedPopColorControl
				label={__(
					'Background Hover Color',
					"ultimate-addons-for-gutenberg"
				)}
				colorValue={ctaBgHColor}
				onColorChange={(value) =>
					setAttributes({ ctaBgHColor: value })
				}
			/>								
		</PanelBody>
	);
	};

	const inspectorControlsSettings = () => {
		return <InspectorControls>
					<InspectorTabs>
						<InspectorTab key={"general"}>
							{ generalSettings() }
							{ paginationSettings() }
							{ imageSettings() }
							{ contentSettings() }
							{ readMoreLinkSettings() }
						</InspectorTab>
						<InspectorTab key={"style"}>
						{ ! inheritFromTheme && (
							<>
								{ displayPostTitle && (
									titleStyle() 
								)}
								{ ( displayPostAuthor ||
								displayPostDate ||
								displayPostComment ||
								displayPostTaxonomy ) && (
									metaStyle() 	
								)}	
								{ displayPostExcerpt && (
									excerptStyle()
								)}
								{ displayPostLink && (
									readMoreLinkStyleSettings()
								)}
								</>
							)}
							{displayPostImage && (
								imageStyle() 
							)}
							{ spacingSettings() }
						</InspectorTab>
						<InspectorTab key={"advance"}></InspectorTab>
					</InspectorTabs>
				</InspectorControls>
	}

	 if ( ! hasPosts ) {
		 return <>{ inspectorControlsSettings() }</>;
	 }
	 
	 return (
		 <Suspense fallback={ lazyLoader() }>
			 { blockControlsSettings() }
			 { inspectorControlsSettings() }
			 { loadTitleGoogleFonts }
			 { loadMetaGoogleFonts }
			 { loadExcerptGoogleFonts }
			 { loadCtaGoogleFonts }
		 </Suspense>
	 );
 };
 
 export default React.memo( Settings );
 