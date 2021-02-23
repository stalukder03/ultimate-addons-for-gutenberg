
/**
 * BLOCK: Post Date Block
 */

const { __ } = wp.i18n

import classnames from "classnames"
import BoxShadowControl from "../../components/box-shadow"
import styling from "./styling"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"
const {
	Component,
	Fragment,
    RawHTML
} = wp.element

const { dateI18n, format ,__experimentalGetSettings} = wp.date

const {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	RichText,
	PanelColorSettings,
	ColorPalette
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ButtonGroup,
	Button,
	Dashicon,
} = wp.components

const { select,withSelect } = wp.data;


class UAGBPostDateEdit extends Component {
    
    constructor() {
		super( ...arguments )
	}
	
	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-post-date-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )

	}
	componentDidUpdate( prevProps ) {
		var element = document.getElementById( "uagb-style-post-date-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}
	}
    render() {
        
       	const { setAttributes, attributes } = this.props
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
			desktopPaddingType,
			tabletPaddingType,
			mobilePaddingType,
			tabletMarginType,
			mobileMarginType,
			align,
			dateColor,
			dateFontFamily,
			dateFontWeight,
			dateFontSize,
			dateFontSizeType,
			dateFontSizeMobile,
			dateFontSizeTablet,
			dateFontSubset,
			dateLineHeight,
			dateLineHeightType,
			dateLineHeightMobile,
			dateLineHeightTablet,
		} = attributes
		
		var post_date = select("core/editor").getCurrentPost();
		
		const dateFormat = __experimentalGetSettings().formats.date

		const date_data = (
			post_date.date_gmt ? (
			<div className={ `uagb-post-date__wrap uagb-block-${ this.props.clientId.substr( 0, 8 )}`}>
				 <time dateTime={ format( "c", post_date.date_gmt ) }>
                    <span className="dashicons-calendar dashicons"></span>
                    { dateI18n( dateFormat, post_date.date_gmt ) }
				</time>
			</div>
			): __('No Data Found')
		);
		// Load Google fonts for date.
		let loaddateGoogleFonts
		if( loaddateGoogleFonts == true ) {

			const dateconfig = {
				google: {
					families: [ dateFontFamily + ( dateFontWeight ? ":" + dateFontWeight : "" ) ],
				},
			}

			loaddateGoogleFonts = (
				<WebfontLoader config={ dateconfig }>
				</WebfontLoader>
			)
		}
        return (
                <Fragment>
					<BlockControls key='controls'>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ ( value ) => {
							setAttributes( { align: value } )
						} }
						controls={ [ "left", "center", "right" ] }
					/>
					</BlockControls>
                    <InspectorControls>
						<PanelBody title={ __( "Design" ) } initialOpen={ false }>
						<p className="uagb-setting-label">{ __( "Date" ) }</p>
							<TypographyControl
								label={ __( "Typography" ) }
								attributes = { attributes }
								setAttributes = { setAttributes }
								loadGoogleFonts = { { value: loaddateGoogleFonts, label: "loaddateGoogleFonts" } }
								fontFamily = { { value: dateFontFamily, label:'dateFontFamily'  } }	
								fontSubset = { { value: dateFontSubset, label: "dateFontSubset" } }
								fontWeight = { { value: dateFontWeight, label:'dateFontWeight'  } }
								fontSizeType = { { value: dateFontSizeType, label: 'dateFontSizeType' } }
								fontSize = { { value: dateFontSize, label:'dateFontSize'  } }
								fontSizeMobile = { { value: dateFontSizeMobile, label:'dateFontSizeMobile'  } }
								fontSizeTablet= { { value: dateFontSizeTablet, label:'dateFontSizeTablet'  } }
								lineHeightType = { { value: dateLineHeightType, label: 'dateLineHeightType' } }
								lineHeight = { { value: dateLineHeight, label:'dateLineHeight'  } }
								lineHeightMobile = { { value: dateLineHeightMobile, label:'dateLineHeightMobile'  } }
								lineHeightTablet= { { value: dateLineHeightTablet, label:'dateLineHeightTablet'  } }
							/>
							<p className="uagb-setting-label">{ __( "Date Text Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: dateColor }} ></span></span></p>
							<ColorPalette
								value={ dateColor }
								onChange={ ( colorValue ) => setAttributes( { dateColor: colorValue } ) }
								allowReset
							/>
						</PanelBody>
						<PanelBody title={ __( "Spacing" ) } initialOpen={ false }>
							<TabPanel className="uagb-size-type-field-tabs uagb-size-type-field__common-tabs uagb-inline-margin" activeClass="active-tab"
								tabs={ [
									{
										name: "desktop",
										title: <Dashicon icon="desktop" />,
										className: "uagb-desktop-tab uagb-responsive-tabs",
									},
									{
										name: "tablet",
										title: <Dashicon icon="tablet" />,
										className: "uagb-tablet-tab uagb-responsive-tabs",
									},
									{
										name: "mobile",
										title: <Dashicon icon="smartphone" />,
										className: "uagb-mobile-tab uagb-responsive-tabs",
									},
								] }>
								{
									( tab ) => {
										let tabout

										if ( "mobile" === tab.name ) {
											tabout = (
												<Fragment>
													<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
														<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ mobilePaddingType === "px" } aria-pressed={ mobilePaddingType === "px" } onClick={ () => setAttributes( { mobilePaddingType: "px" } ) }>{ "px" }</Button>
														<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ mobilePaddingType === "%" } aria-pressed={ mobilePaddingType === "%" } onClick={ () => setAttributes( { mobilePaddingType: "%" } ) }>{ "%" }</Button>
													</ButtonGroup>
													<h2>{ __( "Padding Mobile" ) }</h2>
													<RangeControl
														label={ UAGB_Block_Icons.top_margin }
														className={ "uagb-margin-control" }
														value={ topPaddingMobile }
														onChange={ ( value ) => setAttributes( { topPaddingMobile: value } ) }
														min={ 0 }
														max={ ( "%" == mobilePaddingType ) ? 100 : 2000 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.bottom_margin }
														className={ "uagb-margin-control" }
														value={ bottomPaddingMobile }
														onChange={ ( value ) => setAttributes( { bottomPaddingMobile: value } ) }
														min={ 0 }
														max={ ( "%" == mobilePaddingType ) ? 100 : 2000 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.left_margin }
														className={ "uagb-margin-control" }
														value={ leftPaddingMobile }
														onChange={ ( value ) => setAttributes( { leftPaddingMobile: value } ) }
														min={ 0 }
														max={ ( "%" == mobilePaddingType ) ? 100 : 2000 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.right_margin }
														className={ "uagb-margin-control" }
														value={ rightPaddingMobile }
														onChange={ ( value ) => setAttributes( { rightPaddingMobile: value } ) }
														min={ 0 }
														max={ ( "%" == mobilePaddingType ) ? 100 : 2000 }
														allowReset
													/>
												</Fragment>
											)
										} else if ( "tablet" === tab.name ) {
											tabout = (
												<Fragment>
													<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
														<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ tabletPaddingType === "px" } aria-pressed={ tabletPaddingType === "px" } onClick={ () => setAttributes( { tabletPaddingType: "px" } ) }>{ "px" }</Button>
														<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ tabletPaddingType === "%" } aria-pressed={ tabletPaddingType === "%" } onClick={ () => setAttributes( { tabletPaddingType: "%" } ) }>{ "%" }</Button>
													</ButtonGroup>
													<h2>{ __( "Padding Tablet" ) }</h2>
													<RangeControl
														label={ UAGB_Block_Icons.top_margin }
														className={ "uagb-margin-control" }
														value={ topPaddingTablet }
														onChange={ ( value ) => setAttributes( { topPaddingTablet: value } ) }
														min={ 0 }
														max={ ( "%" == tabletPaddingType ) ? 100 : 2000 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.bottom_margin }
														className={ "uagb-margin-control" }
														value={ bottomPaddingTablet }
														onChange={ ( value ) => setAttributes( { bottomPaddingTablet: value } ) }
														min={ 0 }
														max={ ( "%" == tabletPaddingType ) ? 100 : 2000 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.left_margin }
														className={ "uagb-margin-control" }
														value={ leftPaddingTablet }
														onChange={ ( value ) => setAttributes( { leftPaddingTablet: value } ) }
														min={ 0 }
														max={ ( "%" == tabletPaddingType ) ? 100 : 2000 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.right_margin }
														className={ "uagb-margin-control" }
														value={ rightPaddingTablet }
														onChange={ ( value ) => setAttributes( { rightPaddingTablet: value } ) }
														min={ 0 }
														max={ ( "%" == tabletPaddingType ) ? 100 : 2000 }
														allowReset
													/>
												</Fragment>
											)
										} else {
											tabout = (
												<Fragment>
													<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
														<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ desktopPaddingType === "px" } aria-pressed={ desktopPaddingType === "px" } onClick={ () => setAttributes( { desktopPaddingType: "px" } ) }>{ "px" }</Button>
														<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ desktopPaddingType === "%" } aria-pressed={ desktopPaddingType === "%" } onClick={ () => setAttributes( { desktopPaddingType: "%" } ) }>{ "%" }</Button>
													</ButtonGroup>
													<h2>{ __( "Padding" ) }</h2>
													<RangeControl
														label={ UAGB_Block_Icons.top_margin }
														className={ "uagb-margin-control" }
														value={ topPadding }
														onChange={ ( value ) => setAttributes( { topPadding: value } ) }
														min={ 0 }
														max={ ( "%" == desktopPaddingType ) ? 100 : 2000 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.bottom_margin }
														className={ "uagb-margin-control" }
														value={ bottomPadding }
														onChange={ ( value ) => setAttributes( { bottomPadding: value } ) }
														min={ 0 }
														max={ ( "%" == desktopPaddingType ) ? 100 : 2000 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.left_margin }
														className={ "uagb-margin-control" }
														value={ leftPadding }
														onChange={ ( value ) => setAttributes( { leftPadding: value } ) }
														min={ 0 }
														max={ ( "%" == desktopPaddingType ) ? 100 : 2000 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.right_margin }
														className={ "uagb-margin-control" }
														value={ rightPadding }
														onChange={ ( value ) => setAttributes( { rightPadding: value } ) }
														min={ 0 }
														max={ ( "%" == desktopPaddingType ) ? 100 : 2000 }
														allowReset
													/>
												</Fragment>
											)
										}

										return <div>{ tabout }</div>
									}
								}
							</TabPanel>
							<hr className="uagb-editor__separator" />
							<TabPanel className="uagb-size-type-field-tabs uagb-size-type-field__common-tabs uagb-inline-margin" activeClass="active-tab"
								tabs={ [
									{
										name: "desktop",
										title: <Dashicon icon="desktop" />,
										className: "uagb-desktop-tab uagb-responsive-tabs",
									},
									{
										name: "tablet",
										title: <Dashicon icon="tablet" />,
										className: "uagb-tablet-tab uagb-responsive-tabs",
									},
									{
										name: "mobile",
										title: <Dashicon icon="smartphone" />,
										className: "uagb-mobile-tab uagb-responsive-tabs",
									},
								] }>
								{
									( tab ) => {
										let tabout

										if ( "mobile" === tab.name ) {
											tabout = (
												<Fragment>
													<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
														<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ mobileMarginType === "px" } aria-pressed={ mobileMarginType === "px" } onClick={ () => setAttributes( { mobileMarginType: "px" } ) }>{ "px" }</Button>
														<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ mobileMarginType === "%" } aria-pressed={ mobileMarginType === "%" } onClick={ () => setAttributes( { mobileMarginType: "%" } ) }>{ "%" }</Button>
													</ButtonGroup>
													<h2>{ __( "Margin Mobile" ) }</h2>
													<RangeControl
														label={ UAGB_Block_Icons.top_margin }
														className={ "uagb-margin-control" }
														value={ topMarginMobile }
														onChange={ ( value ) => setAttributes( { topMarginMobile: value } ) }
														min={ 0 }
														max={ 500 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.bottom_margin }
														className={ "uagb-margin-control" }
														value={ bottomMarginMobile }
														onChange={ ( value ) => setAttributes( { bottomMarginMobile: value } ) }
														min={ 0 }
														max={ 500 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.left_margin }
														className={ "uagb-margin-control" }
														value={ leftMarginMobile }
														onChange={ ( value ) => setAttributes( { leftMarginMobile: value } ) }
														min={ 0 }
														max={ 500 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.right_margin }
														className={ "uagb-margin-control" }
														value={ rightMarginMobile }
														onChange={ ( value ) => setAttributes( { rightMarginMobile: value } ) }
														min={ 0 }
														max={ 500 }
														allowReset
													/>
												</Fragment>
											)
										} else if ( "tablet" === tab.name ) {
											tabout = (
												<Fragment>
													<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
														<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ tabletMarginType === "px" } aria-pressed={ tabletMarginType === "px" } onClick={ () => setAttributes( { tabletMarginType: "px" } ) }>{ "px" }</Button>
														<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ tabletMarginType === "%" } aria-pressed={ tabletMarginType === "%" } onClick={ () => setAttributes( { tabletMarginType: "%" } ) }>{ "%" }</Button>
													</ButtonGroup>
													<h2>{ __( "Margin Tablet" ) }</h2>
													<RangeControl
														label={ UAGB_Block_Icons.top_margin }
														className={ "uagb-margin-control" }
														value={ topMarginTablet }
														onChange={ ( value ) => setAttributes( { topMarginTablet: value } ) }
														min={ 0 }
														max={ 500 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.bottom_margin }
														className={ "uagb-margin-control" }
														value={ bottomMarginTablet }
														onChange={ ( value ) => setAttributes( { bottomMarginTablet: value } ) }
														min={ 0 }
														max={ 500 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.left_margin }
														className={ "uagb-margin-control" }
														value={ leftMarginTablet }
														onChange={ ( value ) => setAttributes( { leftMarginTablet: value } ) }
														min={ 0 }
														max={ 500 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.right_margin }
														className={ "uagb-margin-control" }
														value={ rightMarginTablet }
														onChange={ ( value ) => setAttributes( { rightMarginTablet: value } ) }
														min={ 0 }
														max={ 500 }
														allowReset
													/>
												</Fragment>
											)
										} else {
											tabout = (
												<Fragment>
													<ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" ) }>
														<Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ desktopMarginType === "px" } aria-pressed={ desktopMarginType === "px" } onClick={ () => setAttributes( { desktopMarginType: "px" } ) }>{ "px" }</Button>
														<Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ desktopMarginType === "%" } aria-pressed={ desktopMarginType === "%" } onClick={ () => setAttributes( { desktopMarginType: "%" } ) }>{ "%" }</Button>
													</ButtonGroup>
													<h2>{ __( "Margin" ) }</h2>
													<RangeControl
														label={ UAGB_Block_Icons.top_margin }
														className={ "uagb-margin-control" }
														value={ topMargin }
														onChange={ ( value ) => setAttributes( { topMargin: value } ) }
														min={ 0 }
														max={ 500 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.bottom_margin }
														className={ "uagb-margin-control" }
														value={ bottomMargin }
														onChange={ ( value ) => setAttributes( { bottomMargin: value } ) }
														min={ 0 }
														max={ 500 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.left_margin }
														className={ "uagb-margin-control" }
														value={ leftMargin }
														onChange={ ( value ) => setAttributes( { leftMargin: value } ) }
														min={ 0 }
														max={ 500 }
														allowReset
													/>
													<RangeControl
														label={ UAGB_Block_Icons.right_margin }
														className={ "uagb-margin-control" }
														value={ rightMargin }
														onChange={ ( value ) => setAttributes( { rightMargin: value } ) }
														min={ 0 }
														max={ 500 }
														allowReset
													/>
												</Fragment>
											)
										}

										return <div>{ tabout }</div>
									}
								}
							</TabPanel>
						</PanelBody>
						<PanelBody title={ __( "Border" ) } initialOpen={ false }>
							<SelectControl
								label={ __( "Border Style" ) }
								value={ borderStyle }
								onChange={ ( value ) => setAttributes( { borderStyle: value } ) }
								options={ [
									{ value: "none", label: __( "None" ) },
									{ value: "solid", label: __( "Solid" ) },
									{ value: "dotted", label: __( "Dotted" ) },
									{ value: "dashed", label: __( "Dashed" ) },
									{ value: "double", label: __( "Double" ) },
									{ value: "groove", label: __( "Groove" ) },
									{ value: "inset", label: __( "Inset" ) },
									{ value: "outset", label: __( "Outset" ) },
									{ value: "ridge", label: __( "Ridge" ) },
								] }
							/>
							{ "none" != borderStyle && (
								<RangeControl
									label={ __( "Border Width" ) }
									value={ borderWidth }
									onChange={ ( value ) => setAttributes( { borderWidth: value } ) }
									min={ 0 }
									max={ 50 }
									allowReset
								/>
							) }
							{ "none" != borderStyle && (
								<Fragment>
									<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: borderColor }} ></span></span></p>
									<ColorPalette
										value={ borderColor }
										onChange={ ( colorValue ) => setAttributes( { borderColor: colorValue } ) }
										allowReset
									/>
								</Fragment>
							) }
							<RangeControl
								label={ __( "Border Radius" ) }
								value={ borderRadius }
								onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
								min={ 0 }
								max={ 1000 }
								allowReset
							/>
							<BoxShadowControl
								setAttributes = { setAttributes }
								label = { __( "Box Shadow" ) }
								boxShadowColor = { { value: boxShadowColor, label: __( "Color" ) } }
								boxShadowHOffset = { { value: boxShadowHOffset, label: __( "Horizontal" ) } }
								boxShadowVOffset = { { value: boxShadowVOffset, label: __( "Vertical" ) } }
								boxShadowBlur = { { value: boxShadowBlur, label: __( "Blur" ) } }
								boxShadowSpread = { { value: boxShadowSpread, label: __( "Spread" ) } }
								boxShadowPosition = { { value: boxShadowPosition, label: __( "Position" ) } }
								
							/>
						</PanelBody>
					</InspectorControls>	
					{date_data}
					{loaddateGoogleFonts}
            </Fragment>
        );
    }
}

export default UAGBPostDateEdit;