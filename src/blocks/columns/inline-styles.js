/**
 * Returns Dynamic Generated CSS
 */
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBorderCSS from '@Controls/generateBorderCSS';
import generateBackgroundCSS from '@Controls/generateBackgroundCSS';
import attributes from './attributes';

function inlineStyles( props ) {
	const {
		leftPadding,
		rightPadding,
		topPadding,
		bottomPadding,
		topMarginDesktop,
		bottomMarginDesktop,
		backgroundPosition,
		backgroundSize,
		backgroundAttachment,
		backgroundImage,
		backgroundRepeat,
		backgroundType,
		desktopMarginType,
		desktopPaddingType,
		backgroundColor,
		gradientValue,
		backgroundImageColor,
		overlayType,
		backgroundVideo,
		backgroundVideoColor,
	} = props.attributes;

	const borderCSS = generateBorderCSS( props.attributes, 'columns' );

	const backgroundWrapperAttributes = {
        'backgroundType': backgroundType,
        'backgroundImage': backgroundImage,
        'backgroundColor': backgroundColor,
        'gradientValue': gradientValue,
		'backgroundImageColor' : backgroundImageColor,
		'overlayType' : overlayType,
		'backgroundVideo' : backgroundVideo,
		'backgroundVideoColor' : backgroundVideoColor,
    };

	const backgroundWrapperCSS = generateBackgroundCSS( backgroundWrapperAttributes );

	const style = {
		'padding-top': generateCSSUnit( topPadding, desktopPaddingType ),
		'padding-bottom': generateCSSUnit( bottomPadding, desktopPaddingType ),
		'padding-left': generateCSSUnit( leftPadding, desktopPaddingType ),
		'padding-right': generateCSSUnit( rightPadding, desktopPaddingType ),
		'margin-top': generateCSSUnit( topMarginDesktop, desktopMarginType ),
		'margin-bottom': generateCSSUnit( bottomMarginDesktop, desktopMarginType ),
		...borderCSS,
		...backgroundWrapperCSS,
	};

	const position = backgroundPosition.replace( '-', ' ' );

	if ( 'image' === backgroundType ) {

		style[ 'background-image' ] = backgroundImage
			? 'url(' + backgroundImage.url + ')'
			: null;

		if( !( 'background-image' in backgroundWrapperCSS ) && backgroundImageColor ) {
			style[ 'background-image' ] = backgroundImage
				? 'linear-gradient(to right,' + backgroundImageColor + ',' + backgroundImageColor + '), url(' + backgroundImage.url + ')'
				: null;
		}
		if( !( 'background-image' in backgroundWrapperCSS ) && overlayType === 'color' && backgroundImageColor === '' ) {
			style[ 'background-image' ] = backgroundImage
				? 'linear-gradient(to right,' + attributes.backgroundImageColor.default + ',' + attributes.backgroundImageColor.default + '), url(' + backgroundImage.url + ')'
				: null;
		}

		style[ 'background-position' ] = position;
		style[ 'background-attachment' ] = backgroundAttachment;
		style[ 'background-repeat' ] = backgroundRepeat;
		style[ 'background-size' ] = backgroundSize;
	}

	return style;
}

export default inlineStyles;
