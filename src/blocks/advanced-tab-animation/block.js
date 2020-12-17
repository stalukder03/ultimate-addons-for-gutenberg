const {
	SelectControl
} = wp.components

const { __ } = wp.i18n

const AdvancedAnimationControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
	
	return (props) => {
		const { Fragment } = wp.element;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;
		const blocks_name = props.name;
		const block_type = ['uagb/buttons-child','uagb/faq-child', 'uagb/icon-list-child', 'uagb/social-share-child','uagb/restaurant-menu-child' ];

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected &&  ! block_type.includes(blocks_name) &&
					<InspectorAdvancedControls>
						<SelectControl
							label={ __( "Animation" ) }
							value={ attributes.animationfield }
							onChange={ ( value ) => setAttributes( { animationfield: value } ) }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "fadeInDown", label: __( "Fade In Down" ) },
								{ value: "fadeInUp", label: __( "Fade In Up" ) },
								{ value: "fadeIn", label: __( "Fade In" ) },
								{ value: "fadeInLeft", label: __( "Fade In Left" ) },
								{ value: "fadeInRight", label: __( "Fade In Right" ) },
								{ value: "lightSpeedIn", label: __( "Light Speed In" ) },
								{ value: "slideInDown", label: __( "Slide In Down" ) },
								{ value: "slideInLeft", label: __( "Slide In Left" ) },
								{ value: "slideInRight", label: __( "Slide In Right" ) },
								{ value: "slideInUp", label: __( "Slide In Up" ) },
								{ value: "bounceIn", label: __( "Bounce In" ) },
								{ value: "bounceDown", label: __( "Bounce Down" ) },
								{ value: "bounceLeft", label: __( "Bounce Left" ) },
								{ value: "bounceInRight", label: __( "Bounce In Right" ) },
								{ value: "bounceInUp", label: __( "Bounce In Up" ) },
								{ value: "rotateIn", label: __( "Rotate In" ) },
								{ value: "rotateInDownLeft", label: __( "Rotate In Down Left" ) },
							] }
							help={ __( "This settings will only take effect once you are on the live page, and not while you're editing in Gutenberg." ) } 
						/>
						<SelectControl
							label={ __( "Hover Animation" ) }
							value={ attributes.animationhoverfield }
							onChange={ ( value ) => setAttributes( { animationhoverfield: value } ) }
							options={ [
								{ value: "none", label: __( "None" ) },
								{ value: "push", label: __( "Push" ) },
								{ value: "pulse", label: __( "Pulse" ) },
								{ value: "bounce", label: __( "Bounce" ) },
								{ value: "pop", label: __( "Pop" ) },
								{ value: "grow", label: __( "Grow" ) },
								{ value: "pulse-grow", label: __( "Pulse Grow" ) },
								{ value: "pulse-shrink", label: __( "Pulse Shrink" ) },
							] }
							help={ __( "This settings will only take effect once you are on the live page, and not while you're editing in Gutenberg." ) }
						/>
					</InspectorAdvancedControls>
				}
			</Fragment>
		);
	};
}, 'AdvancedAnimationControls');
 
wp.hooks.addFilter(
	'editor.BlockEdit',
	'uagb/advanced-animation-control',
	AdvancedAnimationControls
);

function ApplyAnimateClass(extraProps, blockType, attributes) {
	
	const { 
		animationfield,
		animationhoverfield
	} = attributes;
	
	if ( animationfield && 'none' !== animationfield) {	
		extraProps.className = extraProps.className + ' uag-animation-' + animationfield;
		extraProps.className = extraProps.className + '  uag-animation-speed';
	}
	
	if ( animationhoverfield && 'none' !== animationhoverfield) {	
		extraProps.className = extraProps.className + ' uag-hover-animation-' + animationhoverfield;
	}

	return extraProps;
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'uagb/apply-animation-class',
	ApplyAnimateClass,
);
