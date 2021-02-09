/**
 * External dependencies
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
const { Component, Fragment } = wp.element
const { __ } = wp.i18n

const {
	PanelBody,
	Placeholder,
	RangeControl,
	SelectControl,
	Spinner,
	ToggleControl,
	TabPanel,
	Dashicon,
	Toolbar,
	TextControl,
	RadioControl,
	Button,
	Tip,
	Disabled
} = wp.components

const {
	InspectorControls,
	ColorPalette,
	ButtonGroup
} = wp.blockEditor

const { withSelect } = wp.data


class UAGBFeaturedImage extends Component {
	
	constructor() {
		super( ...arguments )
	}
	
	render() {

		const {
			attributes,
			setAttributes,
			latestPosts,
		} = this.props

		const {
			block_id,
			imgSize,
			vPadding,
			hPadding,
			borderStyle,
			borderWidth ,
			borderRadius,
			borderColor,
			vMargin,
			hMargin,
			backgroundColor
		} = attributes

		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( "Image" ) } initialOpen={ false }>
					<SelectControl
						label={ __( "Image Sizes" ) }
						value={ imgSize }
						onChange={ ( value ) => setAttributes( { imgSize: value } ) }
						options={ uagb_blocks_info.image_sizes }
					/>
					<p className="uagb-setting-label">{ __( "Background Color" ) }</p>
						<ColorPalette
							value={ backgroundColor }
							onChange={ ( colorValue ) => setAttributes( { backgroundColor: colorValue } ) }
							allowReset
						/>
				</PanelBody>
				<PanelBody title={ __( "Spacing" ) } initialOpen={ false }>
					<h2>{ __( "Padding (px)" ) }</h2>
					<RangeControl
						label={ UAGB_Block_Icons.vertical_spacing }
						className={ "uagb-margin-control" }
						value={ vPadding }
						onChange={ value => {
							setAttributes( { vPadding: value } )
						} }
						min={ 0 }
						max={ 100 }
					/>
					<RangeControl
						label={ UAGB_Block_Icons.horizontal_spacing }
						className={ "uagb-margin-control" }
						value={ hPadding }
						onChange={ value => {
							setAttributes( { hPadding: value } )
						} }
						min={ 0 }
						max={ 100 }
					/>
					
					<h2>{ __( "Margin" ) }</h2>
					<RangeControl
						label={ UAGB_Block_Icons.vertical_spacing }
						className={ "uagb-margin-control" }
						value={ vMargin }
						onChange={ ( value ) => setAttributes( { vMargin: value } ) }
						min={ 0 }
						max={ 100 }
						allowReset
					/>
					<RangeControl
						label={ UAGB_Block_Icons.horizontal_spacing }
						className={ "uagb-margin-control" }
						value={ hMargin }
						onChange={ ( value ) => setAttributes( { hMargin: value } ) }
						min={ 0 }
						max={ 100 }
						allowReset
					/>
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
					{ "none" != borderStyle &&
							<Fragment>
								<RangeControl
									label={ __( "Border Width" ) }
									value={ borderWidth }
									onChange={ ( value ) => setAttributes( { borderWidth: value } ) }
									min={ 0 }
									max={ 50 }
									allowReset
								/>
								<Fragment>
									<p className="uagb-setting-label">{ __( "Border Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: borderColor }} ></span></span></p>
									<ColorPalette
										value={ borderColor }
										onChange={ ( colorValue ) => setAttributes( { borderColor: colorValue } ) }
										allowReset
									/>
								</Fragment>
							</Fragment>
					}
					<RangeControl
						label={ __( "Border Radius" ) }
						value={ borderRadius }
						onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
						min={ 0 }
						max={ 1000 }
						allowReset
					/>
				</PanelBody>
			</InspectorControls>
		)
		
		if (
			undefined !== latestPosts.uagb_featured_image_src &&
			attributes.imgSize &&
			latestPosts.uagb_featured_image_src[attributes.imgSize]
		) {
			var src = latestPosts.uagb_featured_image_src[attributes.imgSize]

			return (
				<Fragment>
					{ inspectorControls }
					<div className='uagb-post__featured-img'>
						<img src={ src }/>
					</div>
				</Fragment>	
			)
		} else {

			return null
		}
	}
}

export default withSelect( ( select, props ) => {
	return {
		latestPosts: select("core/editor").getCurrentPost(),
	}
})( UAGBFeaturedImage );