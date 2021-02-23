/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor, 
		mobilePaddingType,
        topPaddingMobile,
        bottomPaddingMobile,
        leftPaddingMobile,
        rightPaddingMobile,
        topPaddingTablet,
        bottomPaddingTablet,
        leftPaddingTablet,
        rightPaddingTablet,
        topPadding,
        bottomPadding,
        leftPadding,
        rightPadding,
        topMarginMobile,
        bottomMarginMobile,
        leftMarginMobile,
        rightMarginMobile,
        topMarginTablet,
        bottomMarginTablet,
        leftMarginTablet,
        rightMarginTablet,
        topMargin,
        bottomMargin,
        leftMargin,
        rightMargin,
        desktopMarginType,
        desktopPaddingType,
        dateFontFamily,
		dateFontWeight,
		dateFontSize,
		dateFontSizeType,
		dateFontSizeMobile,
		dateFontSizeTablet,
		dateLineHeight,
		dateLineHeightType,
		dateLineHeightMobile,
		dateLineHeightTablet,
		dateColor,
		mobileMarginType,
		tabletPaddingType,
		tabletMarginType,
		align
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}
	var boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}
	selectors = {
		".uagb-post-date__wrap" : {
			"padding-left" : generateCSSUnit( leftPadding, desktopPaddingType ),
			"padding-right" : generateCSSUnit( rightPadding, desktopPaddingType ),
			"padding-top" : generateCSSUnit( topPadding, desktopPaddingType ),
			"padding-bottom" : generateCSSUnit( bottomPadding, desktopPaddingType ),
			"border-style": borderStyle,
			"border-width": generateCSSUnit( borderWidth, "px" ),
			"border-color": borderColor,
			"border-radius": generateCSSUnit( borderRadius, "px" ),
			'text-align':align,
			'color':dateColor,
            "margin-left" : generateCSSUnit( leftMargin, desktopMarginType ),
			"margin-right" : generateCSSUnit( rightMargin, desktopMarginType ),
			"margin-top" : generateCSSUnit( topMargin, desktopMarginType ),
			"margin-bottom" : generateCSSUnit( bottomMargin, desktopMarginType ),
			"box-shadow": generateCSSUnit( boxShadowHOffset, "px" ) + ' ' + generateCSSUnit( boxShadowVOffset, "px" ) + ' ' + generateCSSUnit( boxShadowBlur, "px" ) + ' ' + generateCSSUnit( boxShadowSpread, "px" ) + ' ' + boxShadowColor + ' ' + boxShadowPositionCSS,
			"font-family": dateFontFamily,
			"font-weight": dateFontWeight,
			"font-size": generateCSSUnit( dateFontSize, dateFontSizeType ),
			"line-height": generateCSSUnit( dateLineHeight, dateLineHeightType ),
		},
		".uagb-post-date__wrap > time > span" : {
			"font-size": generateCSSUnit( dateFontSize, dateFontSizeType ),
			"width": generateCSSUnit( dateFontSize, 'px' ),
		}
	}
	mobile_selectors = {
		".uagb-post-date__wrap" : {
			"padding-top": generateCSSUnit( topPaddingMobile, mobilePaddingType ),
			"padding-bottom": generateCSSUnit( bottomPaddingMobile, mobilePaddingType ),
			"padding-left": generateCSSUnit( leftPaddingMobile, mobilePaddingType ),
			"padding-right": generateCSSUnit( rightPaddingMobile, mobilePaddingType ),
			"margin-top": generateCSSUnit( topMarginMobile, mobileMarginType ),
			"margin-bottom": generateCSSUnit( bottomMarginMobile, mobileMarginType ),
			"margin-left": generateCSSUnit( leftMarginMobile, mobileMarginType ),
			"margin-right": generateCSSUnit( rightMarginMobile, mobileMarginType ),
			"font-size": generateCSSUnit( dateFontSizeMobile, dateFontSizeType ),
			"line-height": generateCSSUnit( dateLineHeightMobile, dateLineHeightType ),
		},
		".uagb-post-date__wrap > time > span" : {
			"font-size": generateCSSUnit( dateFontSizeMobile, 'px' ),
			"width": generateCSSUnit( dateFontSizeMobile, 'px' ),
		}
	}
	tablet_selectors = {
		".uagb-post-date__wrap" : {
			"padding-top": generateCSSUnit( topPaddingTablet, tabletPaddingType ),
			"padding-bottom": generateCSSUnit( bottomPaddingTablet, tabletPaddingType ),
			"padding-left": generateCSSUnit( leftPaddingTablet, tabletPaddingType ),
			"padding-right": generateCSSUnit( rightPaddingTablet, tabletPaddingType ),
			"margin-top": generateCSSUnit( topMarginTablet, tabletMarginType ),
			"margin-bottom": generateCSSUnit( bottomMarginTablet, tabletMarginType ),
			"margin-left": generateCSSUnit( leftMarginTablet, tabletMarginType ),
			"margin-right": generateCSSUnit( rightMarginTablet, tabletMarginType ),
			"font-size": generateCSSUnit( dateFontSizeTablet, dateFontSizeType ),
			"line-height": generateCSSUnit( dateLineHeightTablet, dateLineHeightType ),
		},
		".uagb-post-date__wrap > time > span" : {
			"font-size": generateCSSUnit( dateFontSizeTablet, 'px' ),
			"width": generateCSSUnit( dateFontSizeTablet, 'px' ),
		}
	}
	var id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`

	var styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
