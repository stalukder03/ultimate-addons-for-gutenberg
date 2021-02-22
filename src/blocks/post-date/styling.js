/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import hexToRgba from "../../../dist/blocks/uagb-controls/hexToRgba"
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
        authorFontFamily,
		authorFontWeight,
		authorFontSize,
		authorFontSizeType,
		authorFontSizeMobile,
		authorFontSizeTablet,
		authorLineHeight,
		authorLineHeightType,
		authorLineHeightMobile,
		authorLineHeightTablet,
		authorColor,
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
            "margin-left" : generateCSSUnit( leftMargin, desktopMarginType ),
			"margin-right" : generateCSSUnit( rightMargin, desktopMarginType ),
			"margin-top" : generateCSSUnit( topMargin, desktopMarginType ),
			"margin-bottom" : generateCSSUnit( bottomMargin, desktopMarginType ),
			"box-shadow": generateCSSUnit( boxShadowHOffset, "px" ) + ' ' + generateCSSUnit( boxShadowVOffset, "px" ) + ' ' + generateCSSUnit( boxShadowBlur, "px" ) + ' ' + generateCSSUnit( boxShadowSpread, "px" ) + ' ' + boxShadowColor + ' ' + boxShadowPositionCSS,
			"font-family": authorFontFamily,
			"font-weight": authorFontWeight,
			"font-size": generateCSSUnit( authorFontSize, authorFontSizeType ),
			"line-height": generateCSSUnit( authorLineHeight, authorLineHeightType ),
			"color": authorColor,
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
			"font-size": generateCSSUnit( authorFontSizeMobile, authorFontSizeType ),
			"line-height": generateCSSUnit( authorLineHeightMobile, authorLineHeightType ),
		},
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
			"font-size": generateCSSUnit( authorFontSizeTablet, authorFontSizeType ),
			"line-height": generateCSSUnit( authorLineHeightTablet, authorLineHeightType ),
		}
	}
	var id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`

	var styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
