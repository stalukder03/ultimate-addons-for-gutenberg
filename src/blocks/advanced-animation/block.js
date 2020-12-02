const {
	PanelBody,
	SelectControl,
	RangeControl,
	Button,
	ToggleControl,
	Placeholder,
	Spinner,
	ButtonGroup,
	TabPanel
} = wp.components

const { __ } = wp.i18n

const coverAdvancedControls = wp.compose.createHigherOrderComponent((BlockEdit) => {

	return (props) => {
		const { Fragment } = wp.element;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected &&  
					<InspectorAdvancedControls>
						<SelectControl
							label={ __( "Animation" ) }
							value={ attributes.animationfield }
							onChange={ ( value ) => setAttributes( { animationfield: value } ) }
							options={ [
								{ value: "box", label: __( "Box" ) },
								{ value: "underline", label: __( "Underline" ) },							
							] }
						/>
					</InspectorAdvancedControls>
				}
			</Fragment>
		);
	};
}, 'coverAdvancedControls');
 
wp.hooks.addFilter(
	'editor.BlockEdit',
	'uagb/cover-advanced-control',
	coverAdvancedControls
);

function coverApplyExtraClass(extraProps, blockType, attributes) {
	
	const { 
		animationfield
	 } = attributes;

	if ( typeof animationfield !== 'undefined' && animationfield) {
		
		classes = extraProps.className.split(" ");
 
		for( let i=0; i<classes.length; i++ ) {
			
			if ( 'uag-adv-animation__' === classes[i].substr( 0, 19 ) ) {
				delete classes[i];
			}		 
		}

		extraProps.className = 	`${classes.join(' ')}uag-adv-animation__${animationfield}`;
	}
	return extraProps;
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'uagb/apply-animation-class',
	coverApplyExtraClass,
);