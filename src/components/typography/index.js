/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Dashicon, SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import FontFamilyControl from './font-typography';
import RangeTypographyControl from './range-typography';
import TypographyStyles from './inline-styles';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';

// Export for ease of importing in individual blocks.
export { TypographyStyles };

const TypographyControl = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	const [ showAdvancedControls, toggleAdvancedControls ] = useState( false );

	let fontSize;
	let fontWeight;
	let fontFamily;
	let fontAdvancedControls;
	let resetFontAdvancedControls;
	let fontTypoAdvancedControls;
	let showAdvancedFontControls;
	let transform;
	let decoration;
	const activeClass = showAdvancedControls ? 'active' : '';

	const resetValues = () => {
		const { setAttributes } = props

		// Reset Font family to default.
		setAttributes( { [ props.fontFamily.label ]: 'Default' } )
		setAttributes( { [ props.fontWeight.label ]: '' } )
		setAttributes( { [ props.fontStyle.label ]: '' } )
		setAttributes( { [ props.transform.label ]: '' } )
		setAttributes( { [ props.decoration.label ]: '' } )

		// Reset Font Size to default.
		setAttributes( { [ props.fontSize.label ]: '' } )
		setAttributes( { [ props.fontSizeType.label ]: 'px' } )
		setAttributes( { [ props.fontSizeMobile.label ]: '' } )
		setAttributes( { [ props.fontSizeTablet.label ]: '' } )

		// Reset Line Height to default.
		setAttributes( { [ props.lineHeight.label ]: '' } )
		setAttributes( { [ props.lineHeightType.label ]: 'em' } )
		setAttributes( { [ props.lineHeightMobile.label ]: '' } )
		setAttributes( { [ props.lineHeightTablet.label ]: '' } )

		// Reset Google Fonts to default.
		setAttributes( { [ props.loadGoogleFonts.label ]: false } )
	};

	const {
		disableFontFamily,
		disableFontSize,
		disableLineHeight,
		disableTransform,
		disableDecoration,
		disableAdvancedOptions = false,
	} = props;

	if ( true !== disableFontFamily ) {
		fontFamily = <FontFamilyControl { ...props } />;
	}

	if ( true !== disableLineHeight ) {
		fontWeight = (
			<RangeTypographyControl
				type={ props.lineHeightType }
				typeLabel={ props.lineHeightType.label }
				sizeMobile={ props.lineHeightMobile }
				sizeMobileLabel={ props.lineHeightMobile.label }
				sizeTablet={ props.lineHeightTablet }
				sizeTabletLabel={ props.lineHeightTablet.label }
				size={ props.lineHeight }
				sizeLabel={ props.lineHeight.label }
				sizeMobileText={ __(
					'Line Height',
					'ultimate-addons-for-gutenberg'
				) }
				sizeTabletText={ __(
					'Line Height',
					'ultimate-addons-for-gutenberg'
				) }
				sizeText={ __(
					'Line Height',
					'ultimate-addons-for-gutenberg'
				) }
				steps={ 0.1 }
				{ ...props }
			/>
		);
	}

	if ( true !== disableFontSize ) {
		fontSize = (
			<RangeTypographyControl
				type={ props.fontSizeType }
				typeLabel={ props.fontSizeType.label }
				sizeMobile={ props.fontSizeMobile }
				sizeMobileLabel={ props.fontSizeMobile.label }
				sizeTablet={ props.fontSizeTablet }
				sizeTabletLabel={ props.fontSizeTablet.label }
				size={ props.fontSize }
				sizeLabel={ props.fontSize.label }
				sizeMobileText={
					! props.fontSizeLabel
						? __( 'Font Size', 'ultimate-addons-for-gutenberg' )
						: props.fontSizeLabel
				}
				sizeTabletText={
					! props.fontSizeLabel
						? __( 'Font Size', 'ultimate-addons-for-gutenberg' )
						: props.fontSizeLabel
				}
				sizeText={
					! props.fontSizeLabel
						? __( 'Font Size', 'ultimate-addons-for-gutenberg' )
						: props.fontSizeLabel
				}
				steps={ 0.1 }
				{ ...props }
			/>
		);
	}

	if ( ! disableTransform && props.transform ) {
		transform = (
			<div className="uag-typography-transform">
				<SelectControl
					label={ __( 'Transform', 'ultimate-addons-for-gutenberg' ) }
					value={ props.transform.value }
					onChange={ ( value ) =>
						props.setAttributes( {
							[ props.transform.label ]: value,
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
							value: 'capitalize',
							label: __(
								'Capitalize',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'uppercase',
							label: __(
								'Uppercase',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'lowercase',
							label: __(
								'Lowercase',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
			</div>
		);
	}
	if ( ! disableDecoration && props.decoration ) {
		decoration = (
			<div className="uag-typography-decoration">
				<SelectControl
					label={ __(
						'Decoration',
						'ultimate-addons-for-gutenberg'
					) }
					value={ props.decoration.value }
					onChange={ ( value ) =>
						props.setAttributes( {
							[ props.decoration.label ]: value,
						} )
					}
					options={ [
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'underline',
							label: __(
								'Underline',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'overline',
							label: __(
								'Overline',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'line-through',
							label: __(
								'Line Through',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
			</div>
		);
	}
	if ( true !== disableFontFamily && true !== disableFontSize ) {
		fontAdvancedControls = (
			<Button
				className="uag-typography-button"
				aria-pressed={ showAdvancedControls }
				onClick={ () =>
					toggleAdvancedControls( ! showAdvancedControls )
				}
			>
				<Dashicon icon="edit" />
			</Button>
		);
		resetFontAdvancedControls =  (
			<Button
				className="uagb-reset"
				isSecondary
				isSmall
				onClick={ ( e ) => {
					e.preventDefault();
					resetValues();
				} }
			>
				<Dashicon icon="image-rotate" />
			</Button>
		)
	} else {
		showAdvancedFontControls = (
			<>
				{ fontFamily }
				{ fontSize }
				{ fontWeight }
				<div className="uag-typography-transform-decoration-wrap">
					{ transform }
					{ decoration }
				</div>
			</>
		);
	}

	if ( showAdvancedControls === true ) {
		showAdvancedFontControls = (
			<div className="uagb-typography-advanced">
				{ fontFamily }
				{ fontSize }
				{ fontWeight }
				<div className="uag-typography-transform-decoration-wrap">
					{ transform }
					{ decoration }
				</div>
			</div>
		);
	}

	if ( true !== disableFontFamily && true !== disableFontSize ) {
		fontTypoAdvancedControls = (
			<div className="uag-typography-option-actions">
				<span className="uag-control-label">{ props.label }</span>
				<div className="uagb-range-control__actions">
				{ resetFontAdvancedControls }
				{ fontAdvancedControls }
				</div>
			</div>
		);
	}

	return (
		<div
			className={ `components-base-control uag-typography-options ${ activeClass }` }
		>
			{ ! disableAdvancedOptions && (
				<>
					{ fontTypoAdvancedControls }
					{ showAdvancedFontControls }
				</>
			) }
		</div>
	);
};

export default TypographyControl;
