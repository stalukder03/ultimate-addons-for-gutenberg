/**
 * Advanced Color Control.
 *
 */
import cIcons from './uagb-color-icons';
import UAGBColorPicker from './uagb-color-picker';
import hexToRGBA from './hex-to-rgba';
import get from 'lodash/get';
import { __ } from '@wordpress/i18n';
import { Button, Popover, ColorIndicator, Tooltip, Dashicon } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
const { ColorPalette } = wp.blockEditor
import { useState, useEffect } from '@wordpress/element'
let cachedValue = 'initial';
let resetStateDisabled = true;

const AdvancedPopColorControl = props => {

    const [ value, setValue ] = useState( {
        alpha: false === props.alpha ? false : true,
        colors: [],
        classSat: 'first',
        currentColor: '',
        inherit: false,
        currentOpacity: props.opacityValue !== undefined ? props.opacityValue : 1,
        isPalette: ( ( props.colorValue && props.colorValue.startsWith( 'palette' ) ) || ( props.colorDefault && props.colorDefault.startsWith( 'palette' ) ) ? true : false ),
    } );

    const [ visible, setVisible ] = useState( { isVisible: false } );

    const onChangeState = ( color, palette ) => {
        
        let opacity = ( 100 === props.opacityUnit ? 100 : 1 );
        let newColor;
        if ( palette ) {
            newColor = palette;
        } else if ( undefined !== color.rgb && undefined !== color.rgb.a && 1 !== color.rgb.a ) {
            if ( props.onOpacityChange ) {
                newColor = color.hex;
                opacity = ( 100 === props.opacityUnit ? unConvertOpacity( color.rgb.a ) : color.rgb.a );
            } else {
                newColor = 'rgba(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ',' + color.rgb.a + ')';
            }
        } else if ( undefined !== color.hex ) {
            newColor = color.hex;
        } else {
            newColor = color;
        }
        setValue( { currentColor: newColor, currentOpacity: opacity, isPalette: ( palette ? true : false ) } );
        if ( undefined !== props.onChange ) {
            props.onChange( newColor );
        }
    }

    const onChangeComplete = ( color, palette ) => {
       
        let opacity = ( 100 === props.opacityUnit ? 100 : 1 );
        let newColor;
        if ( palette ) {
            newColor = palette;
        } else if ( undefined !== color.rgb && undefined !== color.rgb.a && 1 !== color.rgb.a ) {
            if ( props.onOpacityChange ) {
                newColor = color.hex;
                opacity = ( 100 === props.opacityUnit ? unConvertOpacity( color.rgb.a ) : color.rgb.a );
            } else {
                newColor = 'rgba(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ',' + color.rgb.a + ')';
            }
        } else if ( undefined !== color.hex ) {
            newColor = color.hex;
        } else {
            newColor = color;
        }
        setValue( { currentColor: newColor, currentOpacity: opacity, isPalette: ( palette ? true : false ) } );
        if ( undefined !== props.onArrayChange ) {
            props.onArrayChange( newColor, opacity );
        } else {
            props.onColorChange( newColor );
            if ( undefined !== props.onOpacityChange ) {
                setTimeout( () => {
                    props.onOpacityChange( opacity );
                }, 50 );
            }
        }
    }

    const toggleVisible = () => {
        setVisible( { isVisible: true } );
    };

    const toggleClose = () => {
        if ( visible.isVisible === true ) {
            setVisible( { isVisible: false } );
        }
    };

    useEffect(() => {
        cachedValue = props.colorValue;
        resetStateDisabled = true;
    }, []);

    const resetValues = () => {
        setValue( { cachedValue, currentColor: props.colorDefault, isPalette: ( props.colorDefault && props.colorDefault.startsWith( 'palette' ) ? true : false ) });
        resetStateDisabled = true;
        props.onColorChange( cachedValue, props.colorDefault ? props.colorDefault : undefined );
        if ( props.onColorClassChange ) {
            props.onColorClassChange( '' );
        }
	};
   
    const unConvertOpacity = ( value ) => {
        let val = 100;
        if ( value ) {
            val = value * 100;
        }
        return val;
    }

    const convertOpacity = ( value ) => {
        let val = 1;
        if ( value ) {
            val = value / 100;
        }
        return val;
    };

    const convertedOpacityValue = ( 100 === props.opacityUnit ? convertOpacity( props.opacityValue ) : props.opacityValue );
    const colorVal = ( value.currentColor ? value.currentColor : props.colorValue );
    
    let currentColorString = ( value.isPalette && props.colors && props.colors[ parseInt( colorVal.slice( -1 ), 10 ) - 1 ] ? props.colors[ parseInt( colorVal.slice( -1 ), 10 ) - 1 ].color : colorVal );
    
    if ( '' === currentColorString ) {
        currentColorString = props.colorDefault;
    }
    
    if ( props.onOpacityChange && ! value.isPalette ) {
        currentColorString = hexToRGBA( ( undefined === currentColorString ? '' : currentColorString ), ( convertedOpacityValue !== undefined && convertedOpacityValue !== '' ? convertedOpacityValue : 1 ) );
    }

    if ( 'initial' === cachedValue ) {
        cachedValue = props.colorValue;
    }

    if ( props.colorValue !== cachedValue ) {

        resetStateDisabled = false;
    }
         
    return (
    <div className="uagb-color-popover-container components-base-control new-uagb-advanced-colors">
        <div className="uagb-advanced-color-settings-container">
            { props.label && (
                <h2 className="uagb-beside-color-label">{ props.label }</h2>
            ) }
            <Button
                className='uagb-spacing-reset'
                disabled={ resetStateDisabled } 
                isSecondary
                isSmall
                onClick={ e => {
                e.preventDefault();
                resetValues();
            }}>
                <Dashicon icon='image-rotate'/>
            </Button>
            <div className="uagb-beside-color-click">
                { visible.isVisible && (
                <Popover position="top left" className="uagb-popover-color new-uagb-advanced-colors-pop" onClose={ toggleClose }>
                    { value.classSat === 'first' && ! props.disableCustomColors && (
                        <UAGBColorPicker
                            color={ currentColorString }
                            onChange={ ( color ) => onChangeState( color, '' ) }
                            onChangeComplete={ ( color ) => {
                                onChangeComplete( color, '' );
                                if ( props.onColorClassChange ) {
                                    props.onColorClassChange( '' );
                                }
                            } }
                        />
                    ) }
                    { value.classSat !== 'first' && ! props.disableCustomColors && (
                        <UAGBColorPicker
                            color={ currentColorString }
                            onChange={ ( color ) => onChangeState( color, '' ) }
                            onChangeComplete={ ( color ) => {
                                onChangeComplete( color, '' );
                                if ( props.onColorClassChange ) {
                                    props.onColorClassChange( '' );
                                }
                            } }
                        />
                    ) }
                    { props.colors && (
                    <ColorPalette
                        color={ currentColorString }
                        onChange={ ( color ) => onChangeState( color, '' ) }
                        onChangeComplete={ ( color ) => {
                            onChangeComplete( color, '' );
                            if ( props.onColorClassChange ) {
                                props.onColorClassChange( '' );
                            }
                        } }
                        clearable={false}
                        disableCustomColors={true}
                    />
                    ) }
                </Popover>
                ) }
                { visible.isVisible && (
                <Tooltip text={ __( 'Select Color' ) }>
                    <Button className={ `uagb-color-icon-indicate ${ ( value.alpha ? 'uagb-has-alpha' : 'uagb-no-alpha' ) }` } onClick={ toggleClose }>
                        <ColorIndicator className="uagb-advanced-color-indicate" colorValue={ currentColorString } />
                        { '' === currentColorString && value.inherit && (
                            <span className="color-indicator-icon">{ cIcons.inherit }</span>
                        ) }
                        { ( ( props.colorValue && props.colorValue.startsWith( 'palette' ) ) || ( props.colorDefault && props.colorDefault.startsWith( 'palette' ) ) ) && (
                            <span className="color-indicator-icon">{ <Dashicon icon="admin-site" /> }</span>
                        ) }
                    </Button>
                </Tooltip>
                ) }
                { ! visible.isVisible && (
                <Tooltip text={ __( 'Select Color' ) }>
                    <Button className={ `uagb-color-icon-indicate ${ ( value.alpha ? 'uagb-has-alpha' : 'uagb-no-alpha' ) }` } onClick={ toggleVisible }>
                        <ColorIndicator className="uagb-advanced-color-indicate" colorValue={ currentColorString } />
                        { '' === currentColorString && value.inherit && (
                            <span className="color-indicator-icon">{ cIcons.inherit }</span>
                        ) }
                        { ( ( props.colorValue && props.colorValue.startsWith( 'palette' ) ) || ( props.colorDefault && props.colorDefault.startsWith( 'palette' ) ) ) && (
                            <span className="color-indicator-icon">{ <Dashicon icon="admin-site" /> }</span>
                        ) }
                    </Button>
                </Tooltip>
                ) }
            </div>
        </div>
    </div>
    );
 }

 export default withSelect( ( select, ownProps ) => {
     const settings = select( 'core/block-editor' ).getSettings();
     const colors = get( settings, [ 'colors' ], [] );
     const disableCustomColors = ownProps.disableCustomColors === undefined ? settings.disableCustomColors : ownProps.disableCustomColors;
     return { colors, disableCustomColors };
 } )( AdvancedPopColorControl );