/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import googleFonts from '@Controls/fonts';
import Select from 'react-select';

const { uag_select_font_globally , uag_load_select_font_globally } = uagb_blocks_info;

function FontFamilyControl( props ) {

	const fonts = [];

	let fontWeight = '';
	let fontVariant = '';

	//Push Google Fonts into stytem fonts object
	Object.keys( googleFonts ).map( ( k ) => {  // eslint-disable-line array-callback-return
		fonts.push( { value: k, label: k, weight: googleFonts[ k ].weight, v: googleFonts[ k ].v } );

		if ( k === props.fontFamily.value ) {
			fontWeight = googleFonts[ k ].weight;
			fontVariant = googleFonts[ k ].v;
		}
	} );

	// check if the font is a system font and then apply the font weight accordingly.
	if ( fontWeight === '' ) {
		fontWeight = fonts[ 0 ].weight;
	}

	const fontWeightObj = [];

	fontWeight.forEach( function ( item ) {
		fontWeightObj.push( { value: item, label: item } );
	} );


	const fontVariantObj = [];

	const defaultVariantValues = [
		{ value: '100'       , label : 'Thin 100' },
		{ value: '100italic' , label : '100 Italic' },
		{ value: '200'       , label :  'Extra-Light 200'  },
		{ value: '200italic' , label : '200 Italic' },
		{ value: '300'       , label : 'Light 300' },
		{ value: '300italic' , label : '300 Italic' },
		{ value: 'regular'   , label : 'Normal 400' },
		{ value: 'italic'    , label : '400 Italic' },
		{ value: '500'       , label : 'Medium 500' },
		{ value: '500italic' , label : '500 Italic' },
		{ value: '600'       , label :  'Semi-Bold 600'  },
		{ value: '600italic' , label : '600 Italic' },
		{ value: '700'       , label : 'Bold 700' },
		{ value: '700italic' , label : '700 Italic' },
		{ value: '800'       , label : 'Extra-Bold 800'  },
		{ value: '800italic' , label : '800 Italic' },
		{ value: '900'       , label :  'Ultra-Bold 900'  },
		{ value: '900italic' , label : '900 Italic' }
	]

	if( fontVariant !== undefined ){
		fontVariant.forEach( function ( item ) {
			defaultVariantValues.forEach( function ( i ){
				if( item == i.value ){
					fontVariantObj.push( { value: item, label: i.label } );
				}
			})
		} );
	}

	const onFontfamilyChange = ( value ) => {
		const font = value.value;
		const { loadGoogleFonts, fontFamily, fontWeight, fontVariant } = props; // eslint-disable-line no-shadow
		props.setAttributes( { [ fontFamily.label ]: font } );
		props.setAttributes( { [ fontVariant.label ]: [] } );
		onLoadGoogleFonts( loadGoogleFonts, font );
		onFontChange( fontWeight, font );
	};

	const onFontChange = ( fontWeight, fontFamily ) => { // eslint-disable-line no-shadow
		let font_flag;  // eslint-disable-line no-unused-vars
		let new_value;

		if ( typeof googleFonts[ fontFamily ] === 'object' ) {
			const gfontsObj = googleFonts[ fontFamily ].weight;

			if ( typeof gfontsObj === 'object' ) {
				gfontsObj.forEach( function ( item ) {
					if ( fontWeight.value === item ) {
						font_flag = false;
					} else {
						new_value = item;
						font_flag = true;
						props.setAttributes( {
							[ props.fontWeight.label ]: new_value,
						} );
					}
				} );
			}
		}
	};

	const onLoadGoogleFonts = ( loadGoogleFonts, fontFamily ) => {
		let value;

		if (
			fontFamily !== '' &&
			typeof googleFonts[ fontFamily ] !== 'object'
		) {
			value = false;
		} else {
			value = true;
		}

		props.setAttributes( { [ loadGoogleFonts.label ]: value } );
	};

	const gFonts = uag_load_select_font_globally === 'enabled' && uag_select_font_globally !== 0 ? uag_select_font_globally : fonts;

	const customSelectStyles = {
		container: ( provided ) => ( {
			...provided,
			width: '100%',
		} ),
		control: ( provided ) => ( {
			...provided,
			border: '1px solid #757575',
			boxShadow: 'none',
			height: '30px',
			minHeight: '30px',
			borderRadius: '2px',
		} ),
		placeholder: ( provided ) => ( {
			...provided,
			color: '#000',
		} ),
		menu: ( provided ) => ( {
			...provided,
			color: '#000',
		} ),
		singleValue: ( provided ) => ( {
			...provided,
			color: '#000',
			top: '50%',
			transform: 'translateY(-61%);',
		} ),
		indicatorSeparator: ( provided ) => ( {
			...provided,
			display: 'none',
		} ),
		dropdownIndicator: ( provided ) => ( {
			...provided,
			color: '#000',
		} ),
		valueContainer: ( provided ) => ( {
			...provided,
			height: '30px',
		} ),
	}
	const customSelectVariant = {
		container: ( provided ) => ( {
			...provided,
			width: '100%',
		} ),
		control: ( provided ) => ( {
			...provided,
			border: '1px solid #757575',
			boxShadow: 'none',
			borderRadius: '2px',
		} ),
		placeholder: ( provided ) => ( {
			...provided,
			color: '#000',
		} ),
		menu: ( provided ) => ( {
			...provided,
			color: '#000',
		} ),
		singleValue: ( provided ) => ( {
			...provided,
			color: '#000',
			top: '50%',
			transform: 'translateY(-61%);',
		} ),
		indicatorSeparator: ( provided ) => ( {
			...provided,
			display: 'none',
		} ),
		dropdownIndicator: ( provided ) => ( {
			...provided,
			color: '#000',
		} ),
	}
	let fontFamilyValue;
	//Push Google Fonts into stytem fonts object
	if ( gFonts ) {
		gFonts.map( ( font ) => {  // eslint-disable-line array-callback-return

			if ( ! props.fontFamily.weight && font.value === props.fontFamily.value ) {
				fontFamilyValue = { ...props.fontFamily, weight: font.weight, label: font.value, v: font.v };
			}
		} );
	}

	return (
		<div className="uag-typography-font-family-options">
			<div className="uag-typography-font-family">
				<label htmlFor="font-family">{ __( 'Font Family' ) }</label>
				<Select
					styles={customSelectStyles}
					placeholder={ __( 'Select the Font Family' ) }
					onChange={ onFontfamilyChange }
					options={ gFonts }
					value={ fontFamilyValue }
					defaultValue = { fontFamilyValue }
					isSearchable={true}
					className="uag-font-family-searchable-select"
					classNamePrefix="uag-font-family-select"
				/>
			</div>
			<div className="uag-typography-weight-style-wrap">
				<div className="uag-typography-font-family-weight">
					<SelectControl
						label={ __(
							'Weight',
							'ultimate-addons-for-gutenberg'
						) }
						value={ props.fontWeight.value }
						onChange={ ( value ) =>
							props.setAttributes( {
								[ props.fontWeight.label ]: value,
							} )
						}
						options={ fontWeightObj }
						className="react-select-container"
					/>
				</div>
				{ props.fontStyle &&
					<div className="uag-typography-style">
						<SelectControl
							label={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
							value={ props.fontStyle.value }
							onChange={ ( value ) =>
								props.setAttributes( {
									[ props.fontStyle.label ]: value,
								} )
							}
							options={ [
								{
									value: 'normal',
									label: __(
										'Normal',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'italic',
									label: __(
										'Italic',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'oblique',
									label: __(
										'Oblique',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
						/>
					</div>
				}
			</div>
			{ props.fontVariant && 0 !== fontVariantObj.length &&
				<>
					<SelectControl
					 	label={ __( 'Variant', 'ultimate-addons-for-gutenberg' ) }
						onChange={ ( value ) => props.setAttributes( {
							[ props.fontVariant.label ]: value,
						} )}
						value = { props.fontVariant.value }
						options={ fontVariantObj }
					/>
				</>
			}
		</div>
	);
}

export default FontFamilyControl;
