
const { __ } = wp.i18n

const { select } = wp.data;

const { Component, Fragment } = wp.element
// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

// Import block dependencies and components.
import classnames from "classnames"

const {
	PanelBody,
	SelectControl,
} = wp.components

const {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	ColorPalette,
} = wp.blockEditor

class UAGBPostTitleEdit extends Component {

	constructor() {
		super( ...arguments )
		this.onTagChange = this.onTagChange.bind( this );
	}

	/*
	 * Title Tag Change
	 */
	onTagChange( value ) {
		const { setAttributes } = this.props

		let level_val = parseInt( value.replace( 'h' , '' ) )

		setAttributes( { level: level_val } )
		setAttributes( { titleTag: value } )
	}

	render() {
		// Setup the attributes
		const {
			className,
			attributes,
			setAttributes,
			attributes: {
				titleAlign,
				titleColor,
				titleTag,
				titleFontFamily,
				titleFontWeight,
				titleFontSubset,
				titleFontSizeType,
				titleFontSize,
				titleFontSizeMobile,
				titleFontSizeTablet,
				titleLineHeightType,
				titleLineHeight,
				titleLineHeightMobile,
				titleLineHeightTablet,
				titleLoadGoogleFonts,
			},
		} = this.props

		const title = select("core/editor").getEditedPostAttribute( 'title' );
		
		var Tag = titleTag;

		let loadTitleGoogleFonts;

		if( titleLoadGoogleFonts == true ) {
			
			const hconfig = {
				google: {
					families: [ titleFontFamily + ( titleFontWeight ? ':' + titleFontWeight : '' ) ],
				},
			};

			loadTitleGoogleFonts = (
				<WebfontLoader config={ hconfig }>
				</WebfontLoader>
			)
		}
		return (
			<Fragment>
				<BlockControls key='controls'>
					<AlignmentToolbar
						value={ titleAlign }
						onChange={ ( value ) => setAttributes( { titleAlign: value } ) }
					/>
				</BlockControls>
				<InspectorControls>
				<PanelBody title={ __( "Post Title" ) }>
						<h2>{ __( "Title" ) }</h2>
					<SelectControl
						label={ __( "Title Tag" ) }
						value={ titleTag }
						onChange={ value => {
							this.onTagChange( value )
						} }
						options={ [
							{ value: "h1", label: __( "H1" ) },
							{ value: "h2", label: __( "H2" ) },
							{ value: "h3", label: __( "H3" ) },
							{ value: "h4", label: __( "H4" ) },
							{ value: "h5", label: __( "H5" ) },
							{ value: "h6", label: __( "H6" ) },
						] }
					/>
					<TypographyControl
						label={ __( "Typography" ) }
						attributes = { attributes }
						setAttributes = { setAttributes }
						loadGoogleFonts = { { value: titleLoadGoogleFonts, label:'titleLoadGoogleFonts'  } }
						fontFamily = { { value: titleFontFamily, label:'titleFontFamily'  } }
						fontWeight = { { value: titleFontWeight, label:'titleFontWeight'  } }
						fontSubset = { { value: titleFontSubset, label:'titleFontSubset'  } }
						fontSizeType = { { value: titleFontSizeType, label: 'titleFontSizeType' } }
						fontSize = { { value: titleFontSize, label:'titleFontSize'  } }
						fontSizeMobile = { { value: titleFontSizeMobile, label:'titleFontSizeMobile'  } }
						fontSizeTablet= { { value: titleFontSizeTablet, label:'titleFontSizeTablet'  } }
						lineHeightType = { { value: titleLineHeightType, label: 'titleLineHeightType' } }
						lineHeight = { { value: titleLineHeight, label:'titleLineHeight'  } }
						lineHeightMobile = { { value: titleLineHeightMobile, label:'titleLineHeightMobile'  } }
						lineHeightTablet= { { value: titleLineHeightTablet, label:'titleLineHeightTablet'  } }
					/>
					<p className="uagb-setting-label">{ __( "Title Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: titleColor }} ></span></span></p>
						<ColorPalette
							value={ titleColor }
							onChange={ ( value ) => setAttributes( { titleColor: value } ) }
							allowReset
						/>
					</PanelBody>
				</InspectorControls>
				<div
					className={ classnames(
						className,
						`uagb-block-${this.props.clientId.substr( 0, 8 )}`,					
					) }
				>
					<div className="uagb-post-title__wrap">
						<Tag className="uagb-post-title">
							{ title }
						</Tag>
					</div>
				</div>
				{ loadTitleGoogleFonts }
			</Fragment>
		);
	}
}

export default UAGBPostTitleEdit;

