/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBorderCSS from '@Controls/generateBorderCSS';

function styling( props ) {
	const {
		block_id,
		columns,
		tcolumns,
		mcolumns,
		bgColor,
		titleColor,
		countColor,
		rowGap,
		rowGapTablet,
		rowGapMobile,
		columnGap,
		columnGapTablet,
		columnGapMobile,
		contentTopPadding,
		contentRightPadding,
		contentBottomPadding,
		contentLeftPadding,
		contentTopPaddingTablet,
		contentRightPaddingTablet,
		contentBottomPaddingTablet,
		contentLeftPaddingTablet,
		contentTopPaddingMobile,
		contentRightPaddingMobile,
		contentBottomPaddingMobile,
		contentLeftPaddingMobile,
		contentPaddingUnit,
		mobileContentPaddingUnit,
		tabletContentPaddingUnit,
		titleBottomSpace,
		titleBottomSpaceTablet,
		titleBottomSpaceMobile,
		alignment,
		listStyle,
		seperatorBorderHColor,
		listTextColor,
		hoverlistTextColor,
		listBottomMargin,
		listStyleColor,
		hoverlistStyleColor,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleFontFamily,
		titleFontWeight,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		countFontSize,
		countFontSizeType,
		countFontSizeMobile,
		countFontSizeTablet,
		countFontFamily,
		countFontWeight,
		countLineHeightType,
		countLineHeight,
		countLineHeightTablet,
		countLineHeightMobile,
		listFontSize,
		listFontSizeType,
		listFontSizeMobile,
		listFontSizeTablet,
		listFontFamily,
		listFontWeight,
		listLineHeightType,
		listLineHeight,
		listLineHeightTablet,
		listLineHeightMobile,
		overallBorderHColor,
		titleFontStyle,
		countFontStyle,
		listFontStyle,
		titleTransform,
		countTransform,
		listTransform,
		titleDecoration,
		countDecoration,
		listDecoration,
		// letter spacing
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		countLetterSpacing,
		countLetterSpacingTablet,
		countLetterSpacingMobile,
		countLetterSpacingType,
		listLetterSpacing,
		listLetterSpacingTablet,
		listLetterSpacingMobile,
		listLetterSpacingType,
	} = props.attributes;

	const borderCSS = generateBorderCSS( props.attributes, 'separator', '' );
	const borderCSSTablet = generateBorderCSS( props.attributes,'separator', 'tablet' );
	const borderCSSMobile = generateBorderCSS( props.attributes,'separator', 'mobile' );

	const overallBorderCSS = generateBorderCSS( props.attributes, 'overall', '' );
	const overallBorderCSSTablet = generateBorderCSS( props.attributes,'overall', 'tablet' );
	const overallBorderCSSMobile = generateBorderCSS( props.attributes,'overall', 'mobile' );

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	selectors = {
		//grid layout styling
		'.uagb-taxonomy__outer-wrap.uagb-layout-grid': {
			'display': 'grid',
			'grid-template-columns': 'repeat(' + columns + ', 1fr)',
			'grid-column-gap': generateCSSUnit( columnGap, 'px' ),
			'grid-row-gap': generateCSSUnit( rowGap, 'px' ),
		},

		'.uagb-layout-grid .uagb-taxomony-box': {
			'padding-top': generateCSSUnit(
				contentTopPadding,
				contentPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				contentBottomPadding,
				contentPaddingUnit
			),
			'padding-left': generateCSSUnit(
				contentLeftPadding,
				contentPaddingUnit
			),
			'padding-right': generateCSSUnit(
				contentRightPadding,
				contentPaddingUnit
			),
			'background-color': bgColor,
			'text-align': alignment,
			'box-shadow':
				generateCSSUnit( boxShadowHOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowVOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowBlur, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowSpread, 'px' ) +
				' ' +
				boxShadowColor +
				' ' +
				boxShadowPositionCSS,
		},
		'.uagb-layout-grid .uagb-tax-link': {
			'color': countColor,
			'font-size': generateCSSUnit( countFontSize, countFontSizeType ),
			'font-family': countFontFamily,
			'font-weight': countFontWeight,
			'line-height': generateCSSUnit(
				countLineHeight,
				countLineHeightType
			),
			'font-style': countFontStyle,
			'text-decoration': countDecoration,
			'text-transform': countTransform,
			'letter-spacing': generateCSSUnit( countLetterSpacing, countLetterSpacingType ),
		},
		'.uagb-layout-grid .uagb-tax-title': {
			'color': titleColor,
			'margin-top': '0',
			'margin-bottom': generateCSSUnit( titleBottomSpace, 'px' ),
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'font-family': titleFontFamily,
			'font-weight': titleFontWeight,
			'line-height': generateCSSUnit(
				titleLineHeight,
				titleLineHeightType
			),
			'font-style': titleFontStyle,
			'text-decoration': titleDecoration,
			'text-transform': titleTransform,
			'letter-spacing': generateCSSUnit( titleLetterSpacing, titleLetterSpacingType ),
		},
		'.uagb-layout-list .uagb-tax-list': {
			'list-style': listStyle,
			'color': listStyleColor,
			'font-size': generateCSSUnit( listFontSize, listFontSizeType ),
			'font-family': listFontFamily,
			'font-weight': listFontWeight,
			'line-height': generateCSSUnit(
				listLineHeight,
				listLineHeightType
			),
			'font-style': listFontStyle,
			'text-decoration': listDecoration,
			'text-transform': listTransform,
			'letter-spacing': generateCSSUnit( listLetterSpacing, listLetterSpacingType ),
		},
		'.uagb-layout-list .uagb-tax-list:hover': { // For Bullets.
			'color': hoverlistStyleColor,
		},
		'.uagb-layout-list .uagb-tax-link-wrap:hover': { // For Numbers.
			'color': hoverlistStyleColor,
		},
		'.uagb-layout-list .uagb-tax-list a.uagb-tax-link': {
			'color': listTextColor,
		},
		'.uagb-layout-list .uagb-tax-list a.uagb-tax-link:hover': {
			'color': hoverlistTextColor,
		},
		'.uagb-layout-list .uagb-tax-list .uagb-tax-link-wrap': {
			'margin-bottom': generateCSSUnit( listBottomMargin, 'px' ),
		},
		/* start Backword */
		//grid layout styling
		' .uagb-taxonomy-wrap.uagb-layout-grid': {
			'display': 'grid',
			'grid-template-columns': 'repeat(' + columns + ', 1fr)',
			'grid-column-gap': generateCSSUnit( columnGap, 'px' ),
			'grid-row-gap': generateCSSUnit( rowGap, 'px' ),
		},
		' .uagb-layout-grid .uagb-taxomony-box': {
			'padding-top': generateCSSUnit(
				contentTopPadding,
				contentPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				contentBottomPadding,
				contentPaddingUnit
			),
			'padding-left': generateCSSUnit(
				contentLeftPadding,
				contentPaddingUnit
			),
			'padding-right': generateCSSUnit(
				contentRightPadding,
				contentPaddingUnit
			),
			'background-color': bgColor,
			'text-align': alignment,
			'box-shadow':
				generateCSSUnit( boxShadowHOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowVOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowBlur, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowSpread, 'px' ) +
				' ' +
				boxShadowColor +
				' ' +
				boxShadowPositionCSS,
		},
		' .uagb-layout-grid .uagb-tax-title': {
			'color': titleColor,
			'margin-top': '0',
			'margin-bottom': generateCSSUnit( titleBottomSpace, 'px' ),
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'font-family': titleFontFamily,
			'font-weight': titleFontWeight,
			'line-height': generateCSSUnit(
				titleLineHeight,
				titleLineHeightType
			),
			'font-style': titleFontStyle,
			'text-decoration': titleDecoration,
			'text-transform': titleTransform,
		},
		' .uagb-layout-grid .uagb-tax-link': {
			'color': countColor,
			'font-size': generateCSSUnit( countFontSize, countFontSizeType ),
			'font-family': countFontFamily,
			'font-weight': countFontWeight,
			'line-height': generateCSSUnit(
				countLineHeight,
				countLineHeightType
			),
			'font-style': countFontStyle,
			'text-decoration': countDecoration,
			'text-transform': countTransform,
		},
		//List layout styling.
		' .uagb-layout-list .uagb-tax-list': {
			'list-style': listStyle,
			'color': listStyleColor,
			'font-size': generateCSSUnit( listFontSize, listFontSizeType ),
			'font-family': listFontFamily,
			'font-weight': listFontWeight,
			'line-height': generateCSSUnit(
				listLineHeight,
				listLineHeightType
			),
			'font-style': listFontStyle,
			'text-decoration': listDecoration,
			'text-transform': listTransform,
		},
		' .uagb-layout-list .uagb-tax-list:hover': {
			'color': hoverlistStyleColor,
		},
		' .uagb-layout-list .uagb-tax-list a.uagb-tax-link': {
			'color': listTextColor,
		},
		' .uagb-layout-list .uagb-tax-list a.uagb-tax-link:hover': {
			'color': hoverlistTextColor,
		},
		' .uagb-layout-list .uagb-tax-list .uagb-tax-link-wrap': {
			'margin-bottom': generateCSSUnit( listBottomMargin, 'px' ),
		},
		/* End Backword */
	};

	/* start Backword */
	selectors[ ' .uagb-layout-list .uagb-tax-separator' ] = borderCSS;
	selectors[ ' .uagb-layout-list .uagb-tax-separator:hover' ] = {
		'border-top-color': seperatorBorderHColor,
	};
	/* End Backword */
	selectors[ '.uagb-layout-list .uagb-tax-separator' ] = borderCSS;
	selectors[ '.uagb-layout-list .uagb-tax-separator:hover' ] = {
		'border-top-color': seperatorBorderHColor,
	};


	selectors[ ' .uagb-taxomony-box' ] = overallBorderCSS;
	selectors[ ' .uagb-taxomony-box:hover' ] = {
		'border-color': overallBorderHColor,
	};

	mobileSelectors = {
		'.uagb-taxonomy__outer-wrap.uagb-layout-grid': {
			'grid-template-columns': 'repeat(' + mcolumns + ', 1fr)',
			'grid-column-gap': generateCSSUnit( columnGapMobile , 'px' ),
			'grid-row-gap': generateCSSUnit( rowGapMobile , 'px' ),
		},
		'.uagb-layout-grid .uagb-taxomony-box': {
			'padding-top': generateCSSUnit(
				contentTopPaddingMobile,
				mobileContentPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				contentBottomPaddingMobile,
				mobileContentPaddingUnit
			),
			'padding-left': generateCSSUnit(
				contentLeftPaddingMobile,
				mobileContentPaddingUnit
			),
			'padding-right': generateCSSUnit(
				contentRightPaddingMobile,
				mobileContentPaddingUnit
			),
			...overallBorderCSSMobile
		},
		'.uagb-layout-grid .uagb-tax-title': {
			'font-size': generateCSSUnit(
				titleFontSizeMobile,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightMobile,
				titleLineHeightType
			),
			'margin-bottom': generateCSSUnit( titleBottomSpaceMobile, 'px' ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingMobile, titleLetterSpacingType ),
		},
		'.uagb-layout-grid .uagb-tax-link': {
			'font-size': generateCSSUnit(
				countFontSizeMobile,
				countFontSizeType
			),
			'line-height': generateCSSUnit(
				countLineHeightMobile,
				countLineHeightType
			),
			'letter-spacing': generateCSSUnit( countLetterSpacingMobile, countLetterSpacingType ),
		},
		'.uagb-layout-list .uagb-tax-list': {
			'font-size': generateCSSUnit(
				listFontSizeMobile,
				listFontSizeType
			),
			'line-height': generateCSSUnit(
				listLineHeightMobile,
				listLineHeightType
			),
			'letter-spacing': generateCSSUnit( listLetterSpacingMobile, listLetterSpacingType ),
		},
		/* For Backword */
		' .uagb-taxonomy-wrap.uagb-layout-grid': {
			'grid-template-columns': 'repeat(' + mcolumns + ', 1fr)',
		},
		' .uagb-layout-grid .uagb-taxomony-box': {
			'padding-top': generateCSSUnit(
				contentTopPaddingMobile,
				mobileContentPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				contentBottomPaddingMobile,
				mobileContentPaddingUnit
			),
			'padding-left': generateCSSUnit(
				contentLeftPaddingMobile,
				mobileContentPaddingUnit
			),
			'padding-right': generateCSSUnit(
				contentRightPaddingMobile,
				mobileContentPaddingUnit
			),
		},
		' .uagb-layout-grid .uagb-tax-title': {
			'font-size': generateCSSUnit(
				titleFontSizeMobile,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightMobile,
				titleLineHeightType
			),
		},
		' .uagb-layout-grid .uagb-tax-link': {
			'font-size': generateCSSUnit(
				countFontSizeMobile,
				countFontSizeType
			),
			'line-height': generateCSSUnit(
				countLineHeightMobile,
				countLineHeightType
			),
		},
		' .uagb-layout-list .uagb-tax-list': {
			'font-size': generateCSSUnit(
				listFontSizeMobile,
				listFontSizeType
			),
			'line-height': generateCSSUnit(
				listLineHeightMobile,
				listLineHeightType
			),
		},
		/* End Backword */
	};

	tabletSelectors = {
		'.uagb-taxonomy__outer-wrap.uagb-layout-grid': {
			'grid-template-columns': 'repeat(' + tcolumns + ', 1fr)',
			'grid-column-gap': generateCSSUnit( columnGapTablet , 'px' ),
			'grid-row-gap': generateCSSUnit( rowGapTablet , 'px' ),
		},
		'.uagb-layout-grid .uagb-taxomony-box': {
			'padding-top': generateCSSUnit(
				contentTopPaddingTablet,
				tabletContentPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				contentBottomPaddingTablet,
				tabletContentPaddingUnit
			),
			'padding-left': generateCSSUnit(
				contentLeftPaddingTablet,
				tabletContentPaddingUnit
			),
			'padding-right': generateCSSUnit(
				contentRightPaddingTablet,
				tabletContentPaddingUnit
			),
			...overallBorderCSSTablet
		},
		'.uagb-layout-grid .uagb-tax-title': {
			'font-size': generateCSSUnit(
				titleFontSizeTablet,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightTablet,
				titleLineHeightType
			),

			'margin-bottom': generateCSSUnit( titleBottomSpaceTablet, 'px' ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingTablet, titleLetterSpacingType ),
		},
		'.uagb-layout-grid .uagb-tax-link': {
			'font-size': generateCSSUnit(
				countFontSizeTablet,
				countFontSizeType
			),
			'line-height': generateCSSUnit(
				countLineHeightTablet,
				countLineHeightType
			),
			'letter-spacing': generateCSSUnit( countLetterSpacingTablet, countLetterSpacingType ),
		},
		'.uagb-layout-list .uagb-tax-list': {
			'font-size': generateCSSUnit(
				listFontSizeTablet,
				listFontSizeType
			),
			'line-height': generateCSSUnit(
				listLineHeightTablet,
				listLineHeightType
			),
			'letter-spacing': generateCSSUnit( listLetterSpacingTablet, listLetterSpacingType ),
		},
		/* For Backword. */
		' .uagb-taxonomy-wrap.uagb-layout-grid': {
			'grid-template-columns': 'repeat(' + tcolumns + ', 1fr)',
		},
		' .uagb-layout-grid .uagb-taxomony-box': {
			'padding-top': generateCSSUnit(
				contentTopPaddingTablet,
				tabletContentPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				contentBottomPaddingTablet,
				tabletContentPaddingUnit
			),
			'padding-left': generateCSSUnit(
				contentLeftPaddingTablet,
				tabletContentPaddingUnit
			),
			'padding-right': generateCSSUnit(
				contentRightPaddingTablet,
				tabletContentPaddingUnit
			),
		},
		' .uagb-layout-grid .uagb-tax-title': {
			'font-size': generateCSSUnit(
				titleFontSizeTablet,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightTablet,
				titleLineHeightType
			),
		},
		' .uagb-layout-grid .uagb-tax-link': {
			'font-size': generateCSSUnit(
				countFontSizeTablet,
				countFontSizeType
			),
			'line-height': generateCSSUnit(
				countLineHeightTablet,
				countLineHeightType
			),
		},
		' .uagb-layout-list .uagb-tax-list': {
			'font-size': generateCSSUnit(
				listFontSizeTablet,
				listFontSizeType
			),
			'line-height': generateCSSUnit(
				listLineHeightTablet,
				listLineHeightType
			),
		},
		/* End Backword */
	};

	tabletSelectors[ ' .uagb-layout-list .uagb-tax-separator' ] = borderCSSTablet;

	mobileSelectors[ ' .uagb-layout-list .uagb-tax-separator' ] = borderCSSMobile;

	let stylingCss = '';
	const id = `.uagb-block-${ block_id }`;

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

export default styling;
