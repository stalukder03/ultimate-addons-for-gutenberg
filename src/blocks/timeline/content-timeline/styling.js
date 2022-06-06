/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function contentTimelineStyle( props ) {

	const blockName = props.name.replace( 'uagb/', '' );

	const {
		dateBottomspace,
		dateBottomspaceTablet,
		dateBottomspaceMobile,
		backgroundColor,
		separatorColor,
		separatorFillColor,
		separatorBg,
		separatorBorder,
		borderFocus,
		separatorwidth,
		borderwidth,
		connectorBgsize,
		borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
		iconColor,
		dateFontsizeType,
		dateFontsize,
		dateFontsizeTablet,
		dateFontsizeMobile,
		dateFontFamily,
		dateFontWeight,
		dateLineHeightType,
		dateLineHeight,
		dateLineHeightTablet,
		dateLineHeightMobile,
		dateColor,
		iconSize,
		iconBgFocus,
		headFontSizeType,
		headFontSize,
		headFontSizeTablet,
		headFontSizeMobile,
		headFontFamily,
		headFontWeight,
		headLineHeightType,
		headLineHeight,
		headLineHeightTablet,
		headLineHeightMobile,
		align,
		headingColor,
		headSpace,
		headSpaceTablet,
		headSpaceMobile,
		subHeadFontSizeType,
		subHeadFontSize,
		subHeadFontSizeTablet,
		subHeadFontSizeMobile,
		subHeadFontFamily,
		subHeadFontWeight,
		subHeadLineHeightType,
		subHeadLineHeight,
		subHeadLineHeightTablet,
		subHeadLineHeightMobile,
		subHeadingColor,
		topMargin,
		rightMargin,
		bottomMargin,
		leftMargin,
		topMarginTablet,
		rightMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		topMarginMobile,
		rightMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		marginUnit,
		mobileMarginUnit,
		tabletMarginUnit,
		topPadding,
		rightPadding,
		bottomPadding,
		leftPadding,
		topPaddingTablet,
		rightPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		topPaddingMobile,
		rightPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
		headFontStyle,
		subHeadFontStyle,
		dateFontStyle,
		headTransform,
		subHeadTransform,
		dateTransform,
		headDecoration,
		subHeadDecoration,
		dateDecoration,
		iconFocus,
		stack,
		timelinAlignment,
	} = props.attributes;

	const iconSizeFallback = getFallbackNumber( iconSize, 'iconSize', blockName );
	const connectorBgSizeFallback = getFallbackNumber( connectorBgsize, 'connectorBgsize', blockName );
	const borderWidthFallback = getFallbackNumber( borderwidth, 'borderwidth', blockName );
	const separatorWidthFallback = getFallbackNumber( separatorwidth, 'separatorwidth', blockName );
	const headSpaceFallback = getFallbackNumber( headSpace, 'headSpace', blockName );
	const borderRadiusFallback = getFallbackNumber( borderRadius, 'borderRadius', blockName );
	const dateBottomSpaceFallback = getFallbackNumber( dateBottomspace, 'dateBottomspace', blockName );

	const respSelectors = 'left';

	const selectors = {
		' .uagb-timeline__heading.rich-text': {
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'font-family': headFontFamily,
			'font-weight': headFontWeight,
			'line-height': generateCSSUnit(
				headLineHeight,
				headLineHeightType
			),
			'text-align': align,
			'color': headingColor,
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
		},
		' .uagb-timeline__heading a': {
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'font-family': headFontFamily,
			'font-weight': headFontWeight,
			'line-height': generateCSSUnit(
				headLineHeight,
				headLineHeightType
			),
			'text-align': align,
			'color': headingColor,
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
		},
		' .uagb-timeline__heading': {
			'margin-bottom': generateCSSUnit( headSpaceFallback, 'px' ),
		},
		' p.uagb-timeline-desc-content': {
			'font-size': generateCSSUnit(
				subHeadFontSize,
				subHeadFontSizeType
			),
			'font-family': subHeadFontFamily,
			'font-weight': subHeadFontWeight,
			'line-height': generateCSSUnit(
				subHeadLineHeight,
				subHeadLineHeightType
			),
			'text-align': align,
			'color': subHeadingColor,
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
		},
		' .uagb-timeline__day-new': {
			'text-align': align,
		},
		' .uagb-timeline__date-inner': {
			'text-align': align,
		},
		' .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-left-color': backgroundColor,
			'border-right-color': backgroundColor,
		},
		' .uagb-timeline__day-left .uagb-timeline__arrow:after': {
			'border-left-color': backgroundColor,
			'border-right-color': backgroundColor,
		},
		' .uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-left-color': backgroundColor,
		},
		' .uagb-timeline__right-block .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-left-color': backgroundColor,
		},
		' .uagb-timeline__right-block .uagb-timeline__day-left .uagb-timeline__arrow:after': {
			'border-left-color': backgroundColor,
		},
		' .uagb-timeline__center-block .uagb-timeline__day-left .uagb-timeline__arrow:after': {
			'border-right-color': backgroundColor,
		},
		' .uagb-timeline__left-block .uagb-timeline__day-left .uagb-timeline__arrow:after': {
			'border-right-color': backgroundColor,
		},
		' .uagb-timeline__line__inner': {
			'background-color': separatorFillColor,
		},
		' .uagb-timeline__line': {
			'background-color': separatorColor,
			'width': generateCSSUnit( separatorWidthFallback, 'px' ),
		},
		'.uagb-timeline__right-block .uagb-timeline__line': {
			'right': 'calc( ' + connectorBgSizeFallback + 'px / 2 )',
		},
		'.uagb-timeline__left-block .uagb-timeline__line': {
			'left': 'calc( ' + connectorBgSizeFallback + 'px / 2 )',
		},
		'.uagb-timeline__center-block .uagb-timeline__line': {
			'right': 'calc( ' + connectorBgSizeFallback + 'px / 2 )',
		},
		' .uagb-timeline__marker': {
			'background-color': separatorBg,
			'min-height': generateCSSUnit( connectorBgSizeFallback, 'px' ),
			'min-width': generateCSSUnit( connectorBgSizeFallback, 'px' ),
			'line-height': generateCSSUnit( connectorBgSizeFallback, 'px' ),
			'border': borderWidthFallback + 'px solid' + separatorBorder,
		},
		'.uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgSizeFallback, 'px' ),
		},
		'.uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgSizeFallback, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgSizeFallback, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgSizeFallback, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__marker': {
			'margin-left': generateCSSUnit( leftMargin + 3, marginUnit ),
			'margin-right': generateCSSUnit( rightMargin, marginUnit ),
		},
		'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__marker': {
			'margin-left': generateCSSUnit( leftMargin, marginUnit ),
			'margin-right': generateCSSUnit( rightMargin + 3, marginUnit ),
		},
		' .uagb-timeline__field': {
			'margin-top': generateCSSUnit( topMargin, marginUnit ),
			'margin-bottom': generateCSSUnit( bottomMargin, marginUnit ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new': {
			'margin-bottom': generateCSSUnit( dateBottomSpaceFallback, 'px' ),
			'color': dateColor,
			'font-size': generateCSSUnit( dateFontsize, dateFontsizeType ),
			'font-family': dateFontFamily,
			'font-weight': dateFontWeight,
			'line-height': generateCSSUnit(
				dateLineHeight,
				dateLineHeightType
			),
			'text-align': align,
			'font-style': dateFontStyle,
			'text-decoration': dateDecoration,
			'text-transform': dateTransform,
		},
		' .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'margin-bottom': generateCSSUnit( dateBottomSpaceFallback, 'px' ),
			'color': dateColor,
			'font-size': generateCSSUnit( dateFontsize, dateFontsizeType ),
			'font-family': dateFontFamily,
			'font-weight': dateFontWeight,
			'line-height': generateCSSUnit(
				dateLineHeight,
				dateLineHeightType
			),
			'text-align': align,
			'font-style': dateFontStyle,
			'text-decoration': dateDecoration,
			'text-transform': dateTransform,
		},
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-right': generateCSSUnit( rightMargin, marginUnit ),
		},
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-left': generateCSSUnit( leftMargin, marginUnit ),
		},
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-left': generateCSSUnit( leftMargin, marginUnit ),
		},
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-right': generateCSSUnit( rightMargin, marginUnit ),
		},
		' .uagb-timeline__date-new': {
			'color': dateColor,
			'font-size': generateCSSUnit( dateFontsize, dateFontsizeType ),
			'font-family': dateFontFamily,
			'font-weight': dateFontWeight,
			'line-height': generateCSSUnit(
				dateLineHeight,
				dateLineHeightType
			),
			'font-style': dateFontStyle,
			'text-decoration': dateDecoration,
			'text-transform': dateTransform,
		},
		' .uagb-timeline__events-inner-new': {
			'background-color': backgroundColor,
			'border-radius': generateCSSUnit( borderRadiusFallback, 'px' ),
			'padding-left': generateCSSUnit( leftPadding, paddingUnit ),
			'padding-right': generateCSSUnit( rightPadding, paddingUnit ),
			'padding-top': generateCSSUnit( topPadding, paddingUnit ),
			'padding-bottom': generateCSSUnit( bottomPadding, paddingUnit ),
		},
		' svg': {
			'fill': iconColor,
			'font-size': generateCSSUnit( iconSizeFallback, 'px' ),
			'width': generateCSSUnit( iconSizeFallback, 'px' ),
		},
		' .uagb-timeline__marker.uagb-timeline__in-view-icon': {
			'background': iconBgFocus,
			'border-color': borderFocus,
		},
		' .uagb-timeline__marker.uagb-timeline__in-view-icon svg': {
			'fill': iconFocus,
		},
	};

	/* Generate Responsive CSS for timeline */
	const tabletSelectors = {
		' .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'font-size': generateCSSUnit(
				dateFontsizeTablet,
				dateFontsizeType
			),
			'line-height': generateCSSUnit(
				dateLineHeightTablet,
				dateLineHeightType
			),
			'margin-bottom': generateCSSUnit( dateBottomspaceTablet, 'px' ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new': {
			'font-size': generateCSSUnit(
				dateFontsizeTablet,
				dateFontsizeType
			),
			'line-height': generateCSSUnit(
				dateLineHeightTablet,
				dateLineHeightType
			),
			'margin-bottom': generateCSSUnit( dateBottomspaceTablet, 'px' ),
		},
		' .uagb-timeline__date-new': {
			'font-size': generateCSSUnit(
				dateFontsizeTablet,
				dateFontsizeType
			),
			'line-height': generateCSSUnit(
				dateLineHeightTablet,
				dateLineHeightType
			),
			'margin-bottom': generateCSSUnit( dateBottomspaceTablet, 'px' ),
		},
		' .uagb-timeline__heading': {
			'font-size': generateCSSUnit(
				headFontSizeTablet,
				headFontSizeType
			),
			'line-height': generateCSSUnit(
				headLineHeightTablet,
				headLineHeightType
			),
			'margin-bottom': generateCSSUnit( headSpaceTablet, 'px' ),
		},
		' .uagb-timeline__heading a': {
			'font-size': generateCSSUnit(
				headFontSizeTablet,
				headFontSizeType
			),
			'line-height': generateCSSUnit(
				headLineHeightTablet,
				headLineHeightType
			),
		},
		' p.uagb-timeline-desc-content': {
			'font-size': generateCSSUnit(
				subHeadFontSizeTablet,
				subHeadFontSizeType
			),
			'line-height': generateCSSUnit(
				subHeadLineHeightTablet,
				subHeadLineHeightType
			),
		},
		'.uagb-timeline__center-block .uagb-timeline__marker': {
			'margin-left': ( stack === 'tablet' && timelinAlignment === 'center' ) ?
			0 : generateCSSUnit( leftMargin + 3, marginUnit ),
			'margin-right': ( stack === 'tablet' && timelinAlignment === 'center' ) ?
			0 : generateCSSUnit( rightMargin, marginUnit ),
		},
		'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-left': generateCSSUnit(
				leftMarginTablet,
				tabletMarginUnit
			),
			'margin-right': generateCSSUnit(
				rightMarginTablet,
				tabletMarginUnit
			),
			'margin-top': generateCSSUnit( topMarginTablet, tabletMarginUnit ),
			'margin-bottom': generateCSSUnit(
				bottomMarginTablet,
				tabletMarginUnit
			),
		},
		'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-left': generateCSSUnit(
				leftMarginTablet,
				tabletMarginUnit
			),
			'margin-right': generateCSSUnit(
				rightMarginTablet,
				tabletMarginUnit
			),
			'margin-top': generateCSSUnit( topMarginTablet, tabletMarginUnit ),
			'margin-bottom': generateCSSUnit(
				bottomMarginTablet,
				tabletMarginUnit
			),
		},
		' .uagb-timeline__center-block .uagb-timeline__heading': {
			'text-align': respSelectors,
		},
		' .uagb-timeline__center-block p.uagb-timeline-desc-content': {
			'text-align': respSelectors,
		},
		' .uagb-timeline__center-block .uagb-timeline__day-new': {
			'text-align': respSelectors,
		},
		' .uagb-timeline__center-block .uagb-timeline__date-inner': {
			'text-align': respSelectors,
		},
		' .uagb-timeline__center-block .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'text-align': respSelectors,
		},
		' .uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-right-color': backgroundColor,
		},
		' .uagb-timeline__center-block .uagb-timeline__author-link': {
			'text-align': respSelectors,
		},
		' .uagb-timeline__center-block .uagb-timeline__link_parent': {
			'text-align': respSelectors,
		},
		' .uagb-timeline__center-block .uagb-timeline__image a': {
			'text-align': respSelectors,
		},
		' .uagb-timeline__center-block a.uagb-timeline__image': {
			'text-align': respSelectors,
		},
		' .uagb-timeline__events-inner-new': {
			'padding-left': generateCSSUnit(
				leftPaddingTablet,
				tabletPaddingUnit
			),
			'padding-right': generateCSSUnit(
				rightPaddingTablet,
				tabletPaddingUnit
			),
			'padding-top': generateCSSUnit(
				topPaddingTablet,
				tabletPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				bottomPaddingTablet,
				tabletPaddingUnit
			),
			'border-radius': generateCSSUnit( borderRadiusTablet, 'px' ),
		},
	};

	const mobileSelectors = {
		' .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'font-size': generateCSSUnit(
				dateFontsizeMobile,
				dateFontsizeType
			),
			'line-height': generateCSSUnit(
				dateLineHeightMobile,
				dateLineHeightType
			),
			'margin-bottom': generateCSSUnit( dateBottomspaceMobile, 'px' ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new': {
			'font-size': generateCSSUnit(
				dateFontsizeMobile,
				dateFontsizeType
			),
			'line-height': generateCSSUnit(
				dateLineHeightMobile,
				dateLineHeightType
			),
			'margin-bottom': generateCSSUnit( dateBottomspaceMobile, 'px' ),
		},
		' .uagb-timeline__date-new': {
			'font-size': generateCSSUnit(
				dateFontsizeMobile,
				dateFontsizeType
			),
			'line-height': generateCSSUnit(
				dateLineHeightMobile,
				dateLineHeightType
			),
			'margin-bottom': generateCSSUnit( dateBottomspaceMobile, 'px' ),
		},
		' .uagb-timeline__heading': {
			'font-size': generateCSSUnit(
				headFontSizeMobile,
				headFontSizeType
			),
			'line-height': generateCSSUnit(
				headLineHeightMobile,
				headLineHeightType
			),
			'margin-bottom': generateCSSUnit( headSpaceMobile, 'px' ),
		},
		' .uagb-timeline__heading a': {
			'font-size': generateCSSUnit(
				headFontSizeMobile,
				headFontSizeType
			),
			'line-height': generateCSSUnit(
				headLineHeightMobile,
				headLineHeightType
			),
		},
		' p.uagb-timeline-desc-content': {
			'font-size': generateCSSUnit(
				subHeadFontSizeMobile,
				subHeadFontSizeType
			),
			'line-height': generateCSSUnit(
				subHeadLineHeightMobile,
				subHeadLineHeightType
			),
		},
		'.uagb-timeline__center-block .uagb-timeline__marker': {
			'margin-left': 0,
			'margin-right': 0,
		},
		'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-left': generateCSSUnit(
				leftMarginMobile,
				mobileMarginUnit
			),
			'margin-right': generateCSSUnit(
				rightMarginMobile,
				mobileMarginUnit
			),
			'margin-top': generateCSSUnit( topMarginMobile, mobileMarginUnit ),
			'margin-bottom': generateCSSUnit(
				bottomMarginMobile,
				mobileMarginUnit
			),
		},
		'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-left': generateCSSUnit(
				leftMarginMobile,
				mobileMarginUnit
			),
			'margin-right': generateCSSUnit(
				rightMarginMobile,
				mobileMarginUnit
			),
			'margin-top': generateCSSUnit( topMarginMobile, mobileMarginUnit ),
			'margin-bottom': generateCSSUnit(
				bottomMarginMobile,
				mobileMarginUnit
			),
		},
		'.uagb-timeline__center-block .uagb-timeline__heading': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block p.uagb-timeline-desc-content': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block .uagb-timeline__day-new': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block .uagb-timeline__date-inner': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-right-color': backgroundColor,
		},
		'.uagb-timeline__center-block .uagb-timeline__author-link': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block .uagb-timeline__link_parent': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block .uagb-timeline__image a': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block a.uagb-timeline__image': {
			'text-align': respSelectors,
		},
		' .uagb-timeline__events-inner-new': {
			'padding-left': generateCSSUnit(
				leftPaddingMobile,
				mobilePaddingUnit
			),
			'padding-right': generateCSSUnit(
				rightPaddingMobile,
				mobilePaddingUnit
			),
			'padding-top': generateCSSUnit(
				topPaddingMobile,
				mobilePaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				bottomPaddingMobile,
				mobilePaddingUnit
			),
			'border-radius': generateCSSUnit( borderRadiusMobile, 'px' ),
		},
	};

	let stylingCss = '';
	const id = `.editor-styles-wrapper .uagb-block-${ props.clientId }.uagb-timeline__outer-wrap`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default contentTimelineStyle;
