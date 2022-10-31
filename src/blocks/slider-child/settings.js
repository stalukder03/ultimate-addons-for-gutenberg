import React, {  useEffect } from 'react';

import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import ResponsiveSlider from '@Components/responsive-slider';
import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';
import SpacingControl from '@Components/spacing-control';
import Background from '@Components/background';
import ResponsiveBorder from '@Components/responsive-border';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGSelectControl from '@Components/select-control';
import { Icon, ToggleControl } from '@wordpress/components';
import renderCustomIcon from '@Controls/renderCustomIcon';
import UAGTabsControl from '@Components/tabs';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control';
import UAGPresets from '@Components/presets';

const Settings = ( props ) => {

	props = props.parentProps;
	const { attributes, setAttributes, deviceType } = props;
	const {
		block_id,
		widthDesktop,
		widthTablet,
		widthMobile,
		widthType,
		minHeightDesktop,
		minHeightTablet,
		minHeightMobile,
		minHeightType,
		directionDesktop,
		directionTablet,
		directionMobile,
		alignItemsDesktop,
		alignItemsTablet,
		alignItemsMobile,
		justifyContentDesktop,
		justifyContentTablet,
		justifyContentMobile,
		wrapDesktop,
		wrapTablet,
		wrapMobile,
		alignContentDesktop,
		alignContentTablet,
		alignContentMobile,

		backgroundType,
		backgroundImageDesktop,
		backgroundImageTablet,
		backgroundImageMobile,
		backgroundColor,
		backgroundPositionDesktop,
		backgroundPositionTablet,
		backgroundPositionMobile,
		backgroundAttachmentDesktop,
		backgroundAttachmentTablet,
		backgroundAttachmentMobile,
		backgroundRepeatDesktop,
		backgroundRepeatTablet,
		backgroundRepeatMobile,
		backgroundSizeDesktop,
		backgroundSizeTablet,
		backgroundSizeMobile,
		backgroundImageColor,
		gradientValue,

		topPaddingDesktop,
		bottomPaddingDesktop,
		leftPaddingDesktop,
		rightPaddingDesktop,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		paddingType,
		paddingTypeTablet,
		paddingTypeMobile,
		paddingLink,
		topMarginDesktop,
		bottomMarginDesktop,
		leftMarginDesktop,
		rightMarginDesktop,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		marginType,
		marginTypeTablet,
		marginTypeMobile,
		marginLink,
		rowGapDesktop,
		rowGapTablet,
		rowGapMobile,
		rowGapType,
		rowGapTypeTablet,
		rowGapTypeMobile,
		columnGapDesktop,
		columnGapTablet,
		columnGapMobile,
		columnGapType,
		columnGapTypeTablet,
		columnGapTypeMobile,
		contentWidth,
		isBlockRootParent,
		innerContentWidth,
		innerContentCustomWidthDesktop,
		innerContentCustomWidthTablet,
		innerContentCustomWidthMobile,
		innerContentCustomWidthType,
		backgroundCustomSizeDesktop,
		backgroundCustomSizeTablet,
		backgroundCustomSizeMobile,
		backgroundCustomSizeType,
		overlayType,
		customPosition,
		xPositionDesktop,
		xPositionTablet,
		xPositionMobile,
		xPositionType,
		xPositionTypeTablet,
		xPositionTypeMobile,
		yPositionDesktop,
		yPositionTablet,
		yPositionMobile,
		yPositionType,
		yPositionTypeTablet,
		yPositionTypeMobile,
		backgroundVideoColor,
		backgroundVideo,
		topInvert,
		bottomInvert,

		textColor,
		linkColor,
		linkHoverColor,

		// responsive
		innerContentCustomWidthTypeTablet,
		innerContentCustomWidthTypeMobile,
		widthTypeTablet,
		widthTypeMobile,
		minHeightTypeTablet,
		minHeightTypeMobile,
		topHeightType,
		topHeightTypeTablet,
		topHeightTypeMobile,
		bottomHeightType,
		bottomHeightTypeTablet,
		bottomHeightTypeMobile,

		overflow,
		topDividerWidthType,
		bottomDividerWidthType,
		topDividerHeightType,
		bottomDividerHeightType
	} = attributes;

	let currentDirection = directionDesktop?.split( '-' )?.[0];

	if ( attributes[ 'direction' + deviceType ] && attributes[ 'direction' + deviceType ].split( '-' )[0] ) {

		currentDirection = attributes[ 'direction' + deviceType ].split( '-' )[0];
	}

	const currentOppAxisDirection = 'row' === currentDirection ? 'column' : 'row';

	const verticalAlignmentHint = __( 'Define the vertical alignment inside this container', 'ultimate-addons-for-gutenberg' );
	const horizontalAlignmentHint = __( 'Define the horizontal alignment inside this container', 'ultimate-addons-for-gutenberg' );
	const alignContentHint = ( 'row' === currentDirection )
	? __( 'Define the vertical alignment of every line of blocks inside this flex container', 'ultimate-addons-for-gutenberg' )
	: __( 'Define the horizontal alignment of every line of blocks inside this flex container', 'ultimate-addons-for-gutenberg' );

	// This useEffect ensures that background size is set to cover, so as to ensure color takes up entire width and height,
	// in case bg type was set to Image before and given a custom width and height.
	useEffect( () => {
		if ( backgroundType === 'color' ) {
			setAttributes( {
				backgroundSizeDesktop: 'cover',
				backgroundSizeTablet: 'cover',
				backgroundSizeMobile: 'cover',
			} );
		}
	}, [backgroundType] );

	const generalSettings = () => {

		const directionOptions = [
			{
				value: 'row',
				tooltip: __( 'Row', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-direction-row' ) }
					/>
				),
			},
			{
				value: 'column',
				tooltip: __( 'Column', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-direction-column' ) }
					/>
				),
			},
			{
				value: 'row-reverse',
				tooltip: __( 'Row Reverse', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-direction-row-reverse' ) }
					/>
				),
			},
			{
				value: 'column-reverse',
				tooltip: __( 'Column Reverse', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-direction-column-reverse' ) }
					/>
				),
			},
		];

		const alignItemsOptions = [
			{
				value: 'flex-start',
				tooltip: __( 'Flex Start', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-start` ) }
					/>
				),
			},
			{
				value: 'center',
				tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-center` ) }
					/>
				),
			},
			{
				value: 'flex-end',
				tooltip: __( 'Flex End', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-end` ) }
					/>
				),
			},
			{
				value: 'stretch',
				tooltip: __( 'Stretch', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-strech` ) }
					/>
				),
			},
		];

		const justifyContentOptions = [
			{
				value: 'flex-start',
				tooltip: __( 'Flex Start', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-start` ) }
					/>
				),
			},
			{
				value: 'center',
				tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-center` ) }
					/>
				),
			},
			{
				value: 'flex-end',
				tooltip: __( 'Flex End', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-end` ) }
					/>
				),
			},
			{
				value: 'space-between',
				tooltip: __( 'Space Between', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-space-between` ) }
					/>
				),
			},
			{
				value: 'space-around',
				tooltip: __( 'Space Around', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-space-around` ) }
					/>
				),
			},
			{
				value: 'space-evenly',
				tooltip: __( 'Space Evenly', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentDirection}-space-evenly` ) }
					/>
				),
			},
		];

		const alignContentOptions = [
			{
				value: 'flex-start',
				tooltip: __( 'Flex Start', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-start` ) }
					/>
				),
			},
			{
				value: 'center',
				tooltip: __( 'Center', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-center` ) }
					/>
				),
			},
			{
				value: 'flex-end',
				tooltip: __( 'Flex End', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-end` ) }
					/>
				),
			},
			{
				value: 'space-between',
				tooltip: __( 'Space Between', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-space-between` ) }
					/>
				),
			},
			{
				value: 'space-around',
				tooltip: __( 'Space Around', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-space-around` ) }
					/>
				),
			},
			{
				value: 'space-evenly',
				tooltip: __( 'Space Evenly', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( `flex-${currentOppAxisDirection}-space-evenly` ) }
					/>
				),
			},
		];

		const wrapOptions = [
			{
				value: 'wrap',
				tooltip: __( 'Wrap', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-wrap' ) }
					/>
				),
			},
			{
				value: 'nowrap',
				tooltip: __( 'No Wrap', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-no-wrap' ) }
					/>
				),
			},
			{
				value: 'wrap-reverse',
				tooltip: __( 'Wrap Reverse', 'ultimate-addons-for-gutenberg' ),
				icon: (
					<Icon
						icon={ renderCustomIcon( 'flex-wrap-reverse' ) }
					/>
				),
			},
		];

		const contentWidthOptions = [
			{
				value: 'alignfull',
				label: __( 'Full Width', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'alignwide',
				label: __( 'Boxed', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'default',
				label: __( 'Custom', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const overflowOptions = [
			{
				value: 'visible',
				label: __( 'Visible', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'hidden',
				label: __( 'Hidden', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'auto',
				label: __( 'Auto', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const innerContentWidthOptions = [
			{
				value: 'alignwide',
				label: __( 'Boxed', 'ultimate-addons-for-gutenberg' ),
			},
			{
				value: 'alignfull',
				label: __( 'Full Width', 'ultimate-addons-for-gutenberg' ),
			},
		];

		const onWidthChange = () => {
			setAttributes( { widthSetByUser: true } );
		};

		return (
			<>
				<UAGAdvancedPanelBody
					title={ __( 'Container', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					{ isBlockRootParent &&
						<>
							<MultiButtonsControl
								setAttributes={ setAttributes }
								label={ __( 'Container Width', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									value: contentWidth,
									label: 'contentWidth',
								} }
								options={ contentWidthOptions }
								showIcons={ false }
								responsive={false}
							/>
							{ 'alignfull' === contentWidth &&
								<>
									<MultiButtonsControl
										setAttributes={ setAttributes }
										label={ __( 'Content Width', 'ultimate-addons-for-gutenberg' ) }
										data={ {
											value: innerContentWidth,
											label: 'innerContentWidth',
										} }
										options={ innerContentWidthOptions }
										showIcons={ false }
										responsive={false}
									/>
									{ 'alignwide' === innerContentWidth &&
										<ResponsiveSlider
											label={ __( 'Content Box Width', 'ultimate-addons-for-gutenberg' ) }
											data={ {
												desktop: {
													value: innerContentCustomWidthDesktop,
													label: 'innerContentCustomWidthDesktop',
													unit: {
														value: innerContentCustomWidthType,
														label: 'innerContentCustomWidthType',
													},
												},
												tablet: {
													value: innerContentCustomWidthTablet,
													label: 'innerContentCustomWidthTablet',
													unit: {
														value: innerContentCustomWidthTypeTablet,
														label: 'innerContentCustomWidthTypeTablet',
													},
												},
												mobile: {
													value: innerContentCustomWidthMobile,
													label: 'innerContentCustomWidthMobile',
													unit: {
														value: innerContentCustomWidthTypeMobile,
														label: 'innerContentCustomWidthTypeMobile',
													},
												},
											} }
											min={ 0 }
											limitMax={ { 'px': 1600, '%': 100, 'vw': 100 } }
											units={ [
												{
													name: __(
														'PX',
														'ultimate-addons-for-gutenberg'
													),
													unitValue: 'px',
												},
												{
													name: __( '%', 'ultimate-addons-for-gutenberg' ),
													unitValue: '%',
												},
												{
													name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
													unitValue: 'vw',
												},
											] }
											unit={ {
												value: innerContentCustomWidthType,
												label: 'innerContentCustomWidthType',
											} }
											setAttributes={ setAttributes }
										/>
									}
								</>
							}
						</>
					}
					{ ( ( isBlockRootParent && 'default' === contentWidth ) || ( ! isBlockRootParent ) ) &&
						<>
							<ResponsiveSlider
								label={ __( 'Custom Width', 'ultimate-addons-for-gutenberg' ) }
								data={ {
									desktop: {
										value: widthDesktop,
										label: 'widthDesktop',
										unit: {
											value: widthType,
											label: 'widthType',
										},
									},
									tablet: {
										value: widthTablet,
										label: 'widthTablet',
										unit: {
											value: widthTypeTablet,
											label: 'widthTypeTablet',
										},
									},
									mobile: {
										value: widthMobile,
										label: 'widthMobile',
										unit: {
											value: widthTypeMobile,
											label: 'widthTypeMobile',
										},
									},
								} }
								min={ 0 }
								unit={ {
									value: widthType,
									label: 'widthType',
								} }
								limitMax={ { 'px': 1600, '%': 100, 'vw': 100 } }
								units={ [
									{
										name: __(
											'PX',
											'ultimate-addons-for-gutenberg'
										),
										unitValue: 'px',
									},
									{
										name: __( '%', 'ultimate-addons-for-gutenberg' ),
										unitValue: '%',
									},
									{
										name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
										unitValue: 'vw',
									},
								] }
								setAttributes={ setAttributes }
								onChange={onWidthChange}
							/>
						</>
					}
					<ResponsiveSlider
						label={ __( 'Minimum Height', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							desktop: {
								value: minHeightDesktop,
								label: 'minHeightDesktop',
								unit: {
									value: minHeightType,
									label: 'minHeightType',
								},
							},
							tablet: {
								value: minHeightTablet,
								label: 'minHeightTablet',
								unit: {
									value: minHeightTypeTablet,
									label: 'minHeightTypeTablet',
								},
							},
							mobile: {
								value: minHeightMobile,
								label: 'minHeightMobile',
								unit: {
									value: minHeightTypeMobile,
									label: 'minHeightTypeMobile',
								},
							},
						} }
						min={ 0 }
						limitMax={ { px: 1000, vh: 100 } }
						unit={ {
							value: minHeightType,
							label: 'minHeightType',
						} }
						units={ [
							{
								name: __(
									'PX',
									'ultimate-addons-for-gutenberg'
								),
								unitValue: 'px',
							},
							{
								name: __( 'VH', 'ultimate-addons-for-gutenberg' ),
								unitValue: 'vh',
							},
						] }
						setAttributes={ setAttributes }
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __( 'Overflow', 'ultimate-addons-for-gutenberg' ) }
						data={ {
							value: overflow,
							label: 'overflow',
						} }
						options={ overflowOptions }
						showIcons={ false }
						responsive={false}
					/>
				</UAGAdvancedPanelBody>
			</>
		);
	};

	const backgroundSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<Background
					setAttributes={ setAttributes }
					backgroundGradient={ {
						value: gradientValue,
						label: 'gradientValue',
					} }
					backgroundImageColor={ {
						value: backgroundImageColor,
						label: 'backgroundImageColor',
					} }
					backgroundSize={{
						desktop: {
							value: backgroundSizeDesktop,
							label: 'backgroundSizeDesktop',
						},
						tablet: {
							value: backgroundSizeTablet,
							label: 'backgroundSizeTablet',
						},
						mobile: {
							value: backgroundSizeMobile,
							label: 'backgroundSizeMobile',
						},
					}}
					backgroundCustomSize={{
						desktop: {
							value: backgroundCustomSizeDesktop,
							label: 'backgroundCustomSizeDesktop',
						},
						tablet: {
							value: backgroundCustomSizeTablet,
							label: 'backgroundCustomSizeTablet',
						},
						mobile: {
							value: backgroundCustomSizeMobile,
							label: 'backgroundCustomSizeMobile',
						},
					}}
					backgroundCustomSizeType={{
						value: backgroundCustomSizeType,
						label: 'backgroundCustomSizeType'
					}}
					backgroundRepeat={{
						desktop: {
							value: backgroundRepeatDesktop,
							label: 'backgroundRepeatDesktop',
						},
						tablet: {
							value: backgroundRepeatTablet,
							label: 'backgroundRepeatTablet',
						},
						mobile: {
							value: backgroundRepeatMobile,
							label: 'backgroundRepeatMobile',
						},
					}}
					backgroundAttachment={{
						desktop: {
							value: backgroundAttachmentDesktop,
							label: 'backgroundAttachmentDesktop',
						},
						tablet: {
							value: backgroundAttachmentTablet,
							label: 'backgroundAttachmentTablet',
						},
						mobile: {
							value: backgroundAttachmentMobile,
							label: 'backgroundAttachmentMobile',
						},
					}}
					backgroundPosition={{
						desktop: {
							value: backgroundPositionDesktop,
							label: 'backgroundPositionDesktop',
						},
						tablet: {
							value: backgroundPositionTablet,
							label: 'backgroundPositionTablet',
						},
						mobile: {
							value: backgroundPositionMobile,
							label: 'backgroundPositionMobile',
						},
					}}
					backgroundImage={{
						desktop: {
							value: backgroundImageDesktop,
							label: 'backgroundImageDesktop',
						},
						tablet: {
							value: backgroundImageTablet,
							label: 'backgroundImageTablet',
						},
						mobile: {
							value: backgroundImageMobile,
							label: 'backgroundImageMobile',
						},
					}}
					imageResponsive={true}
					backgroundColor={ {
						value: backgroundColor,
						label: 'backgroundColor',
					} }
					backgroundType={ {
						value: backgroundType,
						label: 'backgroundType',
					} }
					overlayType={{
						value: overlayType,
						label: 'overlayType'
					}}
					gradientOverlay={{
						value: true,
					}}
					customPosition={{
						value: customPosition,
						label: 'customPosition'
					}}
					xPositionDesktop={{
						value: xPositionDesktop,
						label: 'xPositionDesktop'
					}}
					xPositionTablet={{
						value: xPositionTablet,
						label: 'xPositionTablet'
					}}
					xPositionMobile={{
						value: xPositionMobile,
						label: 'xPositionMobile'
					}}
					xPositionType={{
						value: xPositionType,
						label: 'xPositionType'
					}}
					xPositionTypeTablet={{
						value: xPositionTypeTablet,
						label: 'xPositionTypeTablet'
					}}
					xPositionTypeMobile={{
						value: xPositionTypeMobile,
						label: 'xPositionTypeMobile'
					}}
					yPositionDesktop={{
						value: yPositionDesktop,
						label: 'yPositionDesktop'
					}}
					yPositionTablet={{
						value: yPositionTablet,
						label: 'yPositionTablet'
					}}
					yPositionMobile={{
						value: yPositionMobile,
						label: 'yPositionMobile'
					}}
					yPositionType={{
						value: yPositionType,
						label: 'yPositionType'
					}}
					yPositionTypeTablet={{
						value: yPositionTypeTablet,
						label: 'yPositionTypeTablet'
					}}
					yPositionTypeMobile={{
						value: yPositionTypeMobile,
						label: 'yPositionTypeMobile'
					}}
					backgroundVideoType={ {
						value: true,
					} }
					backgroundVideo={ {
						value: backgroundVideo,
						label: 'backgroundVideo',
					} }
					backgroundVideoColor={ {
						value: backgroundVideoColor,
						label: 'backgroundVideoColor',
					} }
					onOpacityChange = { ( opacity ) => setAttributes( { backgroundVideoOpacity: opacity } ) }
					{ ...props }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const linkColorMarkup = (
		<AdvancedPopColorControl
			label={ __(
				'Link Color',
				'ultimate-addons-for-gutenberg'
			) }
			colorValue={ linkColor }
			data={ {
				value: linkColor,
				label: 'linkColor',
			} }
			setAttributes={ setAttributes }
		/>
	);

	const linkHoverColorMarkup = (
		<AdvancedPopColorControl
			label={ __(
				'Link Hover Color',
				'ultimate-addons-for-gutenberg'
			) }
			colorValue={ linkHoverColor }
			data={ {
				value: linkHoverColor,
				label: 'linkHoverColor',
			} }
			setAttributes={ setAttributes }
		/>
	);

	const colorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ textColor }
					data={ {
						value: textColor,
						label: 'textColor',
					} }
					setAttributes={ setAttributes }
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
						normal={ linkColorMarkup }
						hover={ linkHoverColorMarkup }
						disableBottomSeparator={ true }
					/>
			</UAGAdvancedPanelBody>
		);
	}

	const borderSettings = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'container' }
					attributes={ attributes }
					deviceType={ deviceType }
					disableBottomSeparator={ true }
					disabledBorderTitle= { true }
				/>
			</UAGAdvancedPanelBody>
		);
	}

	const spacingSettings = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveSlider
					label={ __( 'Row Gap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: rowGapDesktop,
							label: 'rowGapDesktop',
							unit:  {
								value: rowGapType,
								label: 'rowGapType',
							}
						},
						tablet: {
							value: rowGapTablet,
							label: 'rowGapTablet',
							unit:  {
								value: rowGapTypeTablet,
								label: 'rowGapTypeTablet',
							}
						},
						mobile: {
							value: rowGapMobile,
							label: 'rowGapMobile',
							unit: {
								value: rowGapTypeMobile,
								label: 'rowGapTypeMobile',
							},
						},
					} }
					min={ 0 }
					max={ 200 }
					units={ [
						{
							name: __(
								'PX',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
						{
							name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'vw',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __( 'Column Gap', 'ultimate	-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: columnGapDesktop,
							label: 'columnGapDesktop',
							unit:  {
								value: columnGapType,
								label: 'columnGapType',
							}
						},
						tablet: {
							value: columnGapTablet,
							label: 'columnGapTablet',
							unit:  {
								value: columnGapTypeTablet,
								label: 'columnGapTypeTablet',
							}
						},
						mobile: {
							value: columnGapMobile,
							label: 'columnGapMobile',
							unit:  {
								value: columnGapTypeMobile,
								label: 'columnGapTypeMobile',
							}
						},
					} }
					min={ 0 }
					max={ 200 }
					units={ [
						{
							name: __(
								'PX',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
						{
							name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'vw',
						},
					] }
					setAttributes={ setAttributes }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topPaddingDesktop,
						label: 'topPaddingDesktop',
					} }
					valueRight={ {
						value: rightPaddingDesktop,
						label: 'rightPaddingDesktop',
					} }
					valueBottom={ {
						value: bottomPaddingDesktop,
						label: 'bottomPaddingDesktop',
					} }
					valueLeft={ {
						value: leftPaddingDesktop,
						label: 'leftPaddingDesktop',
					} }
					valueTopTablet={ {
						value: topPaddingTablet,
						label: 'topPaddingTablet',
					} }
					valueRightTablet={ {
						value: rightPaddingTablet,
						label: 'rightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: bottomPaddingTablet,
						label: 'bottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: leftPaddingTablet,
						label: 'leftPaddingTablet',
					} }
					valueTopMobile={ {
						value: topPaddingMobile,
						label: 'topPaddingMobile',
					} }
					valueRightMobile={ {
						value: rightPaddingMobile,
						label: 'rightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: bottomPaddingMobile,
						label: 'bottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: leftPaddingMobile,
						label: 'leftPaddingMobile',
					} }
					unit={ {
						value: paddingType,
						label: 'paddingType',
					} }
					mUnit={ {
						value: paddingTypeMobile,
						label: 'paddingTypeMobile',
					} }
					tUnit={ {
						value: paddingTypeTablet,
						label: 'paddingTypeTablet',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: paddingLink,
						label: 'paddingLink',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topMarginDesktop,
						label: 'topMarginDesktop',
					} }
					valueRight={ {
						value: rightMarginDesktop,
						label: 'rightMarginDesktop',
					} }
					valueBottom={ {
						value: bottomMarginDesktop,
						label: 'bottomMarginDesktop',
					} }
					valueLeft={ {
						value: leftMarginDesktop,
						label: 'leftMarginDesktop',
					} }
					valueTopTablet={ {
						value: topMarginTablet,
						label: 'topMarginTablet',
					} }
					valueRightTablet={ {
						value: rightMarginTablet,
						label: 'rightMarginTablet',
					} }
					valueBottomTablet={ {
						value: bottomMarginTablet,
						label: 'bottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: leftMarginTablet,
						label: 'leftMarginTablet',
					} }
					valueTopMobile={ {
						value: topMarginMobile,
						label: 'topMarginMobile',
					} }
					valueRightMobile={ {
						value: rightMarginMobile,
						label: 'rightMarginMobile',
					} }
					valueBottomMobile={ {
						value: bottomMarginMobile,
						label: 'bottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: leftMarginMobile,
						label: 'leftMarginMobile',
					} }
					unit={ {
						value: marginType,
						label: 'marginType',
					} }
					mUnit={ {
						value: marginTypeMobile,
						label: 'marginTypeMobile',
					} }
					tUnit={ {
						value: marginTypeTablet,
						label: 'marginTypeTablet',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: marginLink,
						label: 'marginLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	}

	const presetSettings = () => {
		return <UAGAdvancedPanelBody
					title={ __( 'Inner Container Presets', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
				>
					<UAGPresets
						setAttributes = { setAttributes }
						presets = { innerContainerPresets }
						presetInputType = 'radioImage'
					/>
				</UAGAdvancedPanelBody>
	};

	return (

			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ isBlockRootParent && presetSettings() }
						{ generalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ backgroundSettings() }
						{ colorSettings() }
						{ borderSettings() }
						{ spacingSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>

	);
};
export default React.memo( Settings );
