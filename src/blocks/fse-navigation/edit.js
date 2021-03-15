/**
 * BLOCK: Fse Post Navigation Block
 */

const { __ } = wp.i18n
import styling from "./styling"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

import Select from "react-select"
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
} = wp.components

const { select , withSelect} = wp.data;

class UAGBPostNavigationEdit extends Component {
    
    constructor() {
		super( ...arguments )
	}
	
	componentDidMount() {
		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-post-category-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )

	}
	componentDidUpdate( prevProps ) {
		const {menu_items} = this.props
		this.props.setAttributes({menuitem : menu_items});
		var element = document.getElementById( "uagb-style-post-category-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}
	}
	
    render() {
       	const { setAttributes, attributes ,navigation , menu_items} = this.props
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
			navigationFontFamily,
			navigationFontWeight,
			navigationColor,
			navigationFontSize,
			navigationFontSizeType,
			navigationFontSizeMobile,
			navigationFontSizeTablet,
			navigationFontSubset,
			navigationLineHeight,
			navigationLineHeightType,
			navigationLineHeightMobile,
			navigationLineHeightTablet,
			menu_id,
			layout
		} = attributes

		if (  navigation === undefined || navigation === null) {
			return __('No Data Found', 'ultimate-addons-for-gutenberg')
		}else if(navigation.length === 0){
			return __('No Data Found', 'ultimate-addons-for-gutenberg')
		}
		var menu_item =[];
		navigation.map( ( cat, v ) => {
			menu_item.push(
				{ value: cat.id, label: cat.name, }
			)
		});
		
		if (  menu_items === undefined || menu_items === null) {
			return __('No Data Found', 'ultimate-addons-for-gutenberg')
		}else if(menu_items.length === 0){
			return __('No Data Found', 'ultimate-addons-for-gutenberg')
		}
		// Load Google fonts for navigation.
		let loadnavigationGoogleFonts
		if( loadnavigationGoogleFonts == true ) {

			const navigationconfig = {
				google: {
					families: [ navigationFontFamily + ( navigationFontWeight ? ":" + navigationFontWeight : "" ) ],
				},
			}

			loadnavigationGoogleFonts = (
				<WebfontLoader config={ navigationconfig }>
				</WebfontLoader>
			)
		}
		var menu = select('core').getMenuItems();
		if (  menu === undefined || menu === null) {
			return __('No Data Found', 'ultimate-addons-for-gutenberg')
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
						 <PanelBody title={ __( "Design" , 'ultimate-addons-for-gutenberg') } initialOpen={ false }>
						 	<SelectControl
							  label={ __( "Select Navigation Menu", 'ultimate-addons-for-gutenberg' ) }
								value={ menu_id }
								onChange = { ( value ) => setAttributes( { menu_id: value } ) }
								options= { menu_item }
							/>
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
								 label={ __( "Navigation Typography", 'ultimate-addons-for-gutenberg' ) }
								 attributes = { attributes }
								 setAttributes = { setAttributes }
								 loadGoogleFonts = { { value: loadnavigationGoogleFonts, label:__( "loadnavigationGoogleFonts", 'ultimate-addons-for-gutenberg') } }
								 fontFamily = { { value: navigationFontFamily, label:__('navigationFontFamily' , 'ultimate-addons-for-gutenberg') } }	
								 fontSubset = { { value: navigationFontSubset, label:__( "navigationFontSubset", 'ultimate-addons-for-gutenberg') } }
								 fontWeight = { { value: navigationFontWeight, label:__('navigationFontWeight' , 'ultimate-addons-for-gutenberg') } }
								 fontSizeType = { { value: navigationFontSizeType, label:__( 'navigationFontSizeType', 'ultimate-addons-for-gutenberg') } }
								 fontSize = { { value: navigationFontSize, label:__('navigationFontSize' , 'ultimate-addons-for-gutenberg') } }
								 fontSizeMobile = { { value: navigationFontSizeMobile, label:__('navigationFontSizeMobile' , 'ultimate-addons-for-gutenberg') } }
								 fontSizeTablet= { { value: navigationFontSizeTablet, label:__('navigationFontSizeTablet' , 'ultimate-addons-for-gutenberg') } }
								 lineHeightType = { { value: navigationLineHeightType, label:__( 'navigationLineHeightType', 'ultimate-addons-for-gutenberg') } }
								 lineHeight = { { value: navigationLineHeight, label:__('navigationLineHeight' , 'ultimate-addons-for-gutenberg') } }
								 lineHeightMobile = { { value: navigationLineHeightMobile, label:__('navigationLineHeightMobile' , 'ultimate-addons-for-gutenberg') } }
								 lineHeightTablet= { { value: navigationLineHeightTablet, label:__('navigationLineHeightTablet' , 'ultimate-addons-for-gutenberg') } }
							 />
							 <p className="uagb-setting-label">{ __( "Navigation Name Color", 'ultimate-addons-for-gutenberg' ) }</p>
							 <ColorPalette
								 value={ navigationColor }
								 onChange={ ( value ) => setAttributes( { navigationColor: value } ) }
								 allowReset
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
					
					<div className={`uagb-fse-navigation__wrap uagb-block-${ block_id } uagb-fse-navigation-${layout}`}>
					{menu_id === undefined || menu_id === null ? __('Please Select Navigation', 'ultimate-addons-for-gutenberg')
					: menu_items.map((item, index) => {
							if(menu_id == item.menus[0]){
								return <li className="uagb-menu-list"><a href={item.url}>{item.title.raw}</a></li>
							}
						})
					}
					
					</div>
				{ loadnavigationGoogleFonts }
            </Fragment>
        );
		
    }
}
export default withSelect( ( select, props ) => {
	
	return {
		navigation: select('core').getMenus(),
		menu_items: select('core').getMenuItems(),
	}
})( UAGBPostNavigationEdit );