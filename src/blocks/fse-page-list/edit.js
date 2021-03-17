/**
 * BLOCK: Fse Page List Block
 */

const { __ } = wp.i18n
import styling from "./styling"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"
// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"
const {
	Component,
	Fragment
} = wp.element

const {
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	ColorPalette,
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ButtonGroup,
	Button,
	Dashicon,
	Spinner
} = wp.components

const { select , withSelect} = wp.data;

class UAGBPageListEdit extends Component {
    
    constructor() {
		super( ...arguments )
	}
	
	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
		
		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-page-list-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )

	}
	componentDidUpdate( prevProps ) {
		const { pageList } = this.props;
		this.props.setAttributes( { page_list: pageList } )
		var element = document.getElementById( "uagb-style-page-list-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}
	}
	
    render() {
       	const { setAttributes, attributes ,pageList} = this.props
        const { 
			block_id,
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
			desktopPaddingType,
			tabletPaddingType,
			mobilePaddingType,
			align,
			pageListFontFamily,
			pageListFontWeight,
			pageListColor,
			pageListBgColor,
			pageListFontSize,
			pageListFontSizeType,
			pageListFontSizeMobile,
			pageListFontSizeTablet,
			pageListFontSubset,
			pageListLineHeight,
			pageListLineHeightType,
			pageListLineHeightMobile,
			pageListLineHeightTablet,
			layout,
			navMobilePaddingType,
			navDesktopPaddingType,
			navTabletPaddingType,
			navTopPaddingMobile,
			navBottomPaddingMobile,
			navLeftPaddingMobile,
			navRightPaddingMobile,
			navTopPaddingTablet,
			navBottomPaddingTablet,
			navLeftPaddingTablet,
			navRightPaddingTablet,
			navTopPadding,
			navBottomPadding,
			navLeftPadding,
			navRightPadding,
			borderWidth,
			borderRadius,
			borderStyle,
			borderColor,
		} = attributes

		const hasPage = Array.isArray( pageList ) && pageList.length

		if(!hasPage){
			return ! Array.isArray( pageList ) && (
				<Spinner /> )
		}

		// Load Google fonts for pageList.
		let loadpageListGoogleFonts
		if( loadpageListGoogleFonts == true ) {

			const pageListconfig = {
				google: {
					families: [ pageListFontFamily + ( pageListFontWeight ? ":" + pageListFontWeight : "" ) ],
				},
			}

			loadpageListGoogleFonts = (
				<WebfontLoader config={ pageListconfig }>
				</WebfontLoader>
			)
		}
		const page_data = pageList.map((item, index) => {
			return <li className="uagb-menu-list"><a href={item.link}>{item.title.raw}</a></li>
		});
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
						 <PanelBody title={ __( "Design" , 'ultimate-addons-for-gutenberg') } initialOpen={ false }>
							<SelectControl
								label={ __( "Select Layout", 'ultimate-addons-for-gutenberg' ) }
								value={ layout }
								onChange = { ( value ) => setAttributes( { layout: value } ) }
								options={ [
									{ value: "vertical", label: __( "Vertical", 'ultimate-addons-for-gutenberg' ) },
									{ value: "horizontal", label: __( "Horizontal", 'ultimate-addons-for-gutenberg' ) },
								] }
							/>
							 <TypographyControl
								 label={ __( "Page List Typography", 'ultimate-addons-for-gutenberg' ) }
								 attributes = { attributes }
								 setAttributes = { setAttributes }
								 loadGoogleFonts = { { value: loadpageListGoogleFonts, label:__( "loadpageListGoogleFonts", 'ultimate-addons-for-gutenberg') } }
								 fontFamily = { { value: pageListFontFamily, label:__('pageListFontFamily' , 'ultimate-addons-for-gutenberg') } }	
								 fontSubset = { { value: pageListFontSubset, label:__( "pageListFontSubset", 'ultimate-addons-for-gutenberg') } }
								 fontWeight = { { value: pageListFontWeight, label:__('pageListFontWeight' , 'ultimate-addons-for-gutenberg') } }
								 fontSizeType = { { value: pageListFontSizeType, label:__( 'pageListFontSizeType', 'ultimate-addons-for-gutenberg') } }
								 fontSize = { { value: pageListFontSize, label:__('pageListFontSize' , 'ultimate-addons-for-gutenberg') } }
								 fontSizeMobile = { { value: pageListFontSizeMobile, label:__('pageListFontSizeMobile' , 'ultimate-addons-for-gutenberg') } }
								 fontSizeTablet= { { value: pageListFontSizeTablet, label:__('pageListFontSizeTablet' , 'ultimate-addons-for-gutenberg') } }
								 lineHeightType = { { value: pageListLineHeightType, label:__( 'pageListLineHeightType', 'ultimate-addons-for-gutenberg') } }
								 lineHeight = { { value: pageListLineHeight, label:__('pageListLineHeight' , 'ultimate-addons-for-gutenberg') } }
								 lineHeightMobile = { { value: pageListLineHeightMobile, label:__('pageListLineHeightMobile' , 'ultimate-addons-for-gutenberg') } }
								 lineHeightTablet= { { value: pageListLineHeightTablet, label:__('pageListLineHeightTablet' , 'ultimate-addons-for-gutenberg') } }
							 />
							 <p className="uagb-setting-label">{ __( "Page List Text Color", 'ultimate-addons-for-gutenberg' ) }</p>
							 <ColorPalette
								 value={ pageListColor }
								 onChange={ ( value ) => setAttributes( { pageListColor: value } ) }
								 allowReset
							 />
							 <p className="uagb-setting-label">{ __( "Page List Background Color", 'ultimate-addons-for-gutenberg' ) }</p>
							 <ColorPalette
								 value={ pageListBgColor }
								 onChange={ ( value ) => setAttributes( { pageListBgColor: value } ) }
								 allowReset
							 />
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
													 <ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" , 'ultimate-addons-for-gutenberg') }>
														 <Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ navMobilePaddingType === "px" } aria-pressed={ navMobilePaddingType === "px" } onClick={ () => setAttributes( { navMobilePaddingType: "px" } ) }>{ "px" }</Button>
														 <Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ navMobilePaddingType === "%" } aria-pressed={ navMobilePaddingType === "%" } onClick={ () => setAttributes( { navMobilePaddingType: "%" } ) }>{ "%" }</Button>
													 </ButtonGroup>
													 <h2>{ __( "Padding Mobile" , 'ultimate-addons-for-gutenberg') }</h2>
													 <RangeControl
														 label={ UAGB_Block_Icons.top_margin }
														 className={ "uagb-margin-control" }
														 value={ navTopPaddingMobile }
														 onChange={ ( value ) => setAttributes( { navTopPaddingMobile: value } ) }
														 min={ 0 }
														 max={ ( "%" == navMobilePaddingType ) ? 100 : 2000 }
														 allowReset
													 />
													 <RangeControl
														 label={ UAGB_Block_Icons.bottom_margin }
														 className={ "uagb-margin-control" }
														 value={ navBottomPaddingMobile }
														 onChange={ ( value ) => setAttributes( { navBottomPaddingMobile: value } ) }
														 min={ 0 }
														 max={ ( "%" == navMobilePaddingType ) ? 100 : 2000 }
														 allowReset
													 />
													 <RangeControl
														 label={ UAGB_Block_Icons.left_margin }
														 className={ "uagb-margin-control" }
														 value={ navLeftPaddingMobile }
														 onChange={ ( value ) => setAttributes( { navLeftPaddingMobile: value } ) }
														 min={ 0 }
														 max={ ( "%" == navMobilePaddingType ) ? 100 : 2000 }
														 allowReset
													 />
													 <RangeControl
														 label={ UAGB_Block_Icons.right_margin }
														 className={ "uagb-margin-control" }
														 value={ navRightPaddingMobile }
														 onChange={ ( value ) => setAttributes( { navRightPaddingMobile: value } ) }
														 min={ 0 }
														 max={ ( "%" == navMobilePaddingType ) ? 100 : 2000 }
														 allowReset
													 />
												 </Fragment>
											 )
										 } else if ( "tablet" === tab.name ) {
											 tabout = (
												 <Fragment>
													 <ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" , 'ultimate-addons-for-gutenberg') }>
														 <Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ navtabletPaddingType === "px" } aria-pressed={ navtabletPaddingType === "px" } onClick={ () => setAttributes( { navtabletPaddingType: "px" } ) }>{ "px" }</Button>
														 <Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ navtabletPaddingType === "%" } aria-pressed={ navtabletPaddingType === "%" } onClick={ () => setAttributes( { navtabletPaddingType: "%" } ) }>{ "%" }</Button>
													 </ButtonGroup>
													 <h2>{ __( "Padding Tablet", 'ultimate-addons-for-gutenberg' ) }</h2>
													 <RangeControl
														 label={ UAGB_Block_Icons.top_margin }
														 className={ "uagb-margin-control" }
														 value={ navTopPaddingTablet }
														 onChange={ ( value ) => setAttributes( { navTopPaddingTablet: value } ) }
														 min={ 0 }
														 max={ ( "%" == navTabletPaddingType ) ? 100 : 2000 }
														 allowReset
													 />
													 <RangeControl
														 label={ UAGB_Block_Icons.bottom_margin }
														 className={ "uagb-margin-control" }
														 value={ navBottomPaddingTablet }
														 onChange={ ( value ) => setAttributes( { navBottomPaddingTablet: value } ) }
														 min={ 0 }
														 max={ ( "%" == navTabletPaddingType ) ? 100 : 2000 }
														 allowReset
													 />
													 <RangeControl
														 label={ UAGB_Block_Icons.left_margin }
														 className={ "uagb-margin-control" }
														 value={ navLeftPaddingTablet }
														 onChange={ ( value ) => setAttributes( { navLeftPaddingTablet: value } ) }
														 min={ 0 }
														 max={ ( "%" == navTabletPaddingType ) ? 100 : 2000 }
														 allowReset
													 />
													 <RangeControl
														 label={ UAGB_Block_Icons.right_margin }
														 className={ "uagb-margin-control" }
														 value={ navRightPaddingTablet }
														 onChange={ ( value ) => setAttributes( { navRightPaddingTablet: value } ) }
														 min={ 0 }
														 max={ ( "%" == navTabletPaddingType ) ? 100 : 2000 }
														 allowReset
													 />
												 </Fragment>
											 )
										 } else {
											 tabout = (
												 <Fragment>
													 <ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" , 'ultimate-addons-for-gutenberg') }>
														 <Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ navDesktopPaddingType === "px" } aria-pressed={ navDesktopPaddingType === "px" } onClick={ () => setAttributes( { navDesktopPaddingType: "px" } ) }>{ "px" }</Button>
														 <Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ navDesktopPaddingType === "%" } aria-pressed={ navDesktopPaddingType === "%" } onClick={ () => setAttributes( { navDesktopPaddingType: "%" } ) }>{ "%" }</Button>
													 </ButtonGroup>
													 <h2>{ __( "Padding" , 'ultimate-addons-for-gutenberg') }</h2>
													 <RangeControl
														 label={ UAGB_Block_Icons.top_margin }
														 className={ "uagb-margin-control" }
														 value={ navTopPadding }
														 onChange={ ( value ) => setAttributes( { navTopPadding: value } ) }
														 min={ 0 }
														 max={ ( "%" == navDesktopPaddingType ) ? 100 : 2000 }
														 allowReset
													 />
													 <RangeControl
														 label={ UAGB_Block_Icons.bottom_margin }
														 className={ "uagb-margin-control" }
														 value={ navBottomPadding }
														 onChange={ ( value ) => setAttributes( { navBottomPadding: value } ) }
														 min={ 0 }
														 max={ ( "%" == navDesktopPaddingType ) ? 100 : 2000 }
														 allowReset
													 />
													 <RangeControl
														 label={ UAGB_Block_Icons.left_margin }
														 className={ "uagb-margin-control" }
														 value={ navLeftPadding }
														 onChange={ ( value ) => setAttributes( { navLeftPadding: value } ) }
														 min={ 0 }
														 max={ ( "%" == navDesktopPaddingType ) ? 100 : 2000 }
														 allowReset
													 />
													 <RangeControl
														 label={ UAGB_Block_Icons.right_margin }
														 className={ "uagb-margin-control" }
														 value={ navRightPadding }
														 onChange={ ( value ) => setAttributes( { navRightPadding: value } ) }
														 min={ 0 }
														 max={ ( "%" == navDesktopPaddingType ) ? 100 : 2000 }
														 allowReset
													 />
												 </Fragment>
											 )
										 }
 
										 return <div>{ tabout }</div>
									 }
								 }
							 </TabPanel>
							 <h2>{ __( "Border", 'ultimate-addons-for-gutenberg' ) }</h2>
							<SelectControl
								label={ __( "Style", 'ultimate-addons-for-gutenberg' ) }
								value={ borderStyle }
								options={ [
									{ value: "none", label: __( "None", 'ultimate-addons-for-gutenberg' ) },
									{ value: "solid", label: __( "Solid", 'ultimate-addons-for-gutenberg' ) },
									{ value: "dotted", label: __( "Dotted", 'ultimate-addons-for-gutenberg' ) },
									{ value: "dashed", label: __( "Dashed", 'ultimate-addons-for-gutenberg' ) },
									{ value: "double", label: __( "Double", 'ultimate-addons-for-gutenberg' ) },
								] }
								onChange={ value => {
									setAttributes( { borderStyle: value } )
								} }
							/>
							<RangeControl
								label={ __( "Thickness", 'ultimate-addons-for-gutenberg' ) }
								value={ borderWidth }
								onChange={ value => {
									setAttributes( { borderWidth: value } )
								} }
								min={ 0 }
								max={ 20 }
							/>
								
							<p className="uagb-setting-label">{ __( "Border Color", 'ultimate-addons-for-gutenberg' ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: borderColor }} ></span></span></p>
								<ColorPalette
									value={ borderColor }
									onChange={ ( colorValue ) => setAttributes( { borderColor: colorValue } ) }
									allowReset
								/>
							<RangeControl
								label={ __( "Rounded Corners", 'ultimate-addons-for-gutenberg' ) }
								value={ borderRadius }
								onChange={ value => {
									setAttributes( { borderRadius: value } )
								} }
								min={ 0 }
								max={ 50 }
							/>
						 </PanelBody>
						 <PanelBody title={ __( "Spacing" , 'ultimate-addons-for-gutenberg') } initialOpen={ false }>
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
													 <ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" , 'ultimate-addons-for-gutenberg') }>
														 <Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ mobilePaddingType === "px" } aria-pressed={ mobilePaddingType === "px" } onClick={ () => setAttributes( { mobilePaddingType: "px" } ) }>{ "px" }</Button>
														 <Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ mobilePaddingType === "%" } aria-pressed={ mobilePaddingType === "%" } onClick={ () => setAttributes( { mobilePaddingType: "%" } ) }>{ "%" }</Button>
													 </ButtonGroup>
													 <h2>{ __( "Padding Mobile" , 'ultimate-addons-for-gutenberg') }</h2>
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
													 <ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" , 'ultimate-addons-for-gutenberg') }>
														 <Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ tabletPaddingType === "px" } aria-pressed={ tabletPaddingType === "px" } onClick={ () => setAttributes( { tabletPaddingType: "px" } ) }>{ "px" }</Button>
														 <Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ tabletPaddingType === "%" } aria-pressed={ tabletPaddingType === "%" } onClick={ () => setAttributes( { tabletPaddingType: "%" } ) }>{ "%" }</Button>
													 </ButtonGroup>
													 <h2>{ __( "Padding Tablet", 'ultimate-addons-for-gutenberg' ) }</h2>
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
													 <ButtonGroup className="uagb-size-type-field" aria-label={ __( "Size Type" , 'ultimate-addons-for-gutenberg') }>
														 <Button key={ "px" } className="uagb-size-btn" isSmall isPrimary={ desktopPaddingType === "px" } aria-pressed={ desktopPaddingType === "px" } onClick={ () => setAttributes( { desktopPaddingType: "px" } ) }>{ "px" }</Button>
														 <Button key={ "%" } className="uagb-size-btn" isSmall isPrimary={ desktopPaddingType === "%" } aria-pressed={ desktopPaddingType === "%" } onClick={ () => setAttributes( { desktopPaddingType: "%" } ) }>{ "%" }</Button>
													 </ButtonGroup>
													 <h2>{ __( "Padding" , 'ultimate-addons-for-gutenberg') }</h2>
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
						 </PanelBody>
					</InspectorControls>	
					
					<div className={`uagb-fse-page-list__wrap uagb-block-${ block_id } uagb-fse-page-list-${layout}`}>			 
						{page_data}
					</div>
				{ loadpageListGoogleFonts }
            </Fragment>
        );
		
    }
}
export default withSelect( ( select, props ) => {
	const { getEntityRecords } = select( "core" );
	return {
		pageList: getEntityRecords( "postType", 'page' ),
	}
})(UAGBPageListEdit);