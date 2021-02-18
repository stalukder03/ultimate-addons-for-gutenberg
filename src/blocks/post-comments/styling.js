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
        desktopPaddingType 
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	selectors = {
		
		" .uagb-post-comments__wrap" : {
			"padding-left" : generateCSSUnit( leftPadding, desktopPaddingType ),
			"padding-right" : generateCSSUnit( rightPadding, desktopPaddingType ),
			"padding-top" : generateCSSUnit( topPadding, desktopPaddingType ),
			"padding-bottom" : generateCSSUnit( bottomPadding, desktopPaddingType ),
			"border-style": borderStyle,
			"border-width": generateCSSUnit( borderWidth, "px" ),
			"border-color": borderColor,
			"border-radius": generateCSSUnit( borderRadius, "px" ),
            "margin-left" : generateCSSUnit( leftMargin, desktopMarginType ),
			"margin-right" : generateCSSUnit( rightMargin, desktopMarginType ),
			"margin-top" : generateCSSUnit( topMargin, desktopMarginType ),
			"margin-bottom" : generateCSSUnit( bottomMargin, desktopMarginType ),
			
		},
	}

	var id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`

	var styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
