/**
 * BLOCK: Forms - Select - Edit
 */

import classnames from "classnames"
// import { clone, pullAt, set, assign } from "lodash";
const { __ } = wp.i18n

const {
	Component,
	Fragment
} = wp.element

const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ButtonGroup,
	Button,
	Dashicon,
	ToggleControl,
	
} = wp.components
const {
	InspectorControls,
	RichText,
} = wp.blockEditor

class UAGBFormsSelectEdit extends Component {

	constructor() {
		super( ...arguments )
		this.state = { optionsstate: null };
		
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-select-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
    }
	
	render() {

		const { attributes, setAttributes, isSelected } = this.props

        const {
			block_id,
			selectRequired,
			options,
			selectName
		} = attributes
			console.log(options);
		const selectInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" ) }
						checked={ selectRequired }
						onChange={ ( value ) => setAttributes( { selectRequired: ! selectRequired } ) }
					/>
				</PanelBody>
			)
		}

		const addSelect = () => {
			let newOption = "Option Name";
			
			options.push(newOption);
			console.log((options));
	
			setAttributes({ options:options });
			this.setState({optionsstate : options});
		};

		const optionChange = (e, index) => {
			options[index] =  e.target.value;
			setAttributes({ options: options });
			console.log(options);
			this.setState({optionsstate : this.state.optionsstate});

		};
		const handleDelete = index => {
		
			options.splice(index, 1);
			setAttributes({ options });
			
			console.log(options);
			this.setState({optionsstate : this.state.optionsstate});
		};

		const editView = options.map((s, index) => {
			return (
				<div className="uagb-form-select-option">
					<input
						aria-label={s}
						onChange={e => optionChange(e, index)}
						type="text"
						value={s}
						
					/>					
					<Button 
						className="uagb-form-select-option-delete"
        				icon="trash"
        				label="Remove" onClick={() => handleDelete(index)}
    				/>
				</div>
			);
		});
		const SelectView = () => {
			return (
				<select>
					<option value="" disabled selected>
						Select your option
					</option>
					{options.map((o, index) => {
						var optionvalue = o.replace(/\s+/g, '-').toLowerCase();
						return <option value={optionvalue}>{o}</option>;
					})}
				</select>
			);
		};
		

		return (
			<Fragment>
				<InspectorControls>
					{ selectInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-select-wrap",
					`uagb-block-${ block_id }`,
				) }>
					<RichText
						tagName="div"
						placeholder={ __( "Select Title" ) }
						value={ selectName }
						onChange={ ( value ) => setAttributes( { selectName: value } ) }
						className='uagb-forms-select-label'
						multiline={ false }
					/>
					{isSelected && (
						<Fragment>														
							{editView}
							<div className="uagb-forms-select-controls">
								<div>
									<Button isSecondary onClick={addSelect}>{ __(" + Add Option ") }</Button>									
								</div>								
							</div>
						</Fragment>
						)}
					
					{!isSelected && (<SelectView/>)}
					</div>
			</Fragment>
		)
	}
}

export default UAGBFormsSelectEdit
