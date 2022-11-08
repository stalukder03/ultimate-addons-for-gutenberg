import {
	ButtonGroup,
	Button,
	Tooltip,
    TextControl,
} from '@wordpress/components';
import ResponsiveToggle from '../responsive-toggle';
import { __, sprintf } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import UAGReset from '../reset';

const UAGTextControl = ( props ) => {

    const handleOnChange = ( newValue ) => {

		if ( props?.setAttributes ) {
			props?.setAttributes( {
				[ props.data.label ]: newValue,
			} )
		}
		if ( props?.onChange ) {
			props.onChange( newValue );
		}
	};

    const resetValues = ( defaultValues ) => {

		if ( props?.onChange ) {
			props?.onChange( defaultValues[props?.data?.label] )
		}
	};

    const HeaderControls = () => {

        return(
            <div className="uagb-control__header">
                <ResponsiveToggle
					label= { props.label }
				/>
				<div className="uagb-number-control__actions uagb-control__actions">
					<UAGReset
						onReset={resetValues}
						attributeNames = {[
							props.data.label
						]}
						setAttributes={ props.setAttributes }
					/>
				</div>
			</div>
        );
    };

    return(
        <>
            <div className="components-base-control uagb-text-control uagb-size-type-field-tabs">
                <HeaderControls />
                <div className="uagb-text-control__controls">
                    <TextControl
                        value= { props?.value }
                        onChange={ handleOnChange }
                    />
                </div>
                { props.help && (
                    <p className="uag-control-help-notice">{ props.help }</p>
                ) }
            </div>
        </>
    );
};

UAGTextControl.defaultProps = {
	label: __( 'Spectra Text Control', 'ultimate-addons-for-gutenberg' ),
	className: '',
	allowReset: true,
	resetFallbackValue: '',
	placeholder: null,
};

export default UAGTextControl;