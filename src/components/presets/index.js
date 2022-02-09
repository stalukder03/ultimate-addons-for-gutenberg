import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { select, dispatch } from '@wordpress/data';

const UAGPresets = ( props ) => {

    // Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

    const {
		defaultAttributes,
        setAttributes,
        presets,
        presetInputType,
        label
    } = props;

	const { getSelectedBlock } = select("core/block-editor");
	const { attributes } = getSelectedBlock();

	const [availablePresets, setAvailablePresets] = useState(attributes.presets ? [...attributes.presets, ...presets] : presets);
	const [ selectedPresetState, setPreset ] = useState( '' );



    const updatePresets = ( selectedPreset ) => {

        setPreset( selectedPreset );
        if ( availablePresets ) {
            availablePresets.map( ( preset ) => {
                if ( 'default' !== selectedPreset && 'default' === preset.value && preset.attributes ) {
                    preset.attributes.map( ( presetItem ) => {
                        setAttributes( { [presetItem.label]: presetItem.value } )
                        return presetItem;
                    } );
                }
                if ( preset.value && preset.value === selectedPreset && preset.attributes ) {
                    preset.attributes.map( ( presetItem ) => {
                        setAttributes( { [presetItem.label]: presetItem.value } )
                        return presetItem;
                    } );

                    if ( preset.childAttributes ) {
                        updateChildBlockAttributes( preset );
                    }
                }
                return preset;
            } );
        }
    }

    const updateChildBlockAttributes = ( preset ) => {

        const { getSelectedBlock } = select( 'core/block-editor' );

        let childBlocks = [];

        if ( getSelectedBlock().innerBlocks ) {
            childBlocks = getSelectedBlock().innerBlocks;
        }

        const childBlocksClientIds = [];

        childBlocks.map( ( childBlock ) => {
            if ( childBlock.clientId ) {
                childBlocksClientIds.push( childBlock.clientId );
            }
            return childBlock;
        } );

        const childBlocksAttributes = {};

        preset.childAttributes.map( ( attr ) => {
            childBlocksAttributes[attr.label] = attr.value;
            return attr;
        } );

        childBlocksClientIds.map( ( clientId ) => {
            dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, childBlocksAttributes );
            return clientId;
        } );
    }

    const presetRadioImageOptions = availablePresets.map( ( preset ) => {
        const key = preset.value;
		const checked = selectedPresetState === key ? true : false;
		return (
            <>
                <input key={key} className="uag-presets-radio-input" type="radio" value={key} checked={checked} onChange={() => updatePresets( key )} onClick={() => updatePresets( key )}/>
                <label htmlFor={key} className="uag-presets-radio-input-label">
                    <span dangerouslySetInnerHTML={{
                        __html: preset.icon
                    }}/>
                    <span className="uag-presets-radio-image-clickable" onClick={() => updatePresets( key )} title={preset.label}></span> { /* eslint-disable-line */ }
                </label>
            </>
        );
	} );

    const presetDropdown = (
        <SelectControl
            className='uagb-presets-dropdown'
            onChange={ updatePresets }
            options={ presets }
            label={ label }
        />
    );

    const presetRadioImage = (
        <>
            <label htmlFor="uag-presets-label" className="uag-presets-label">{label}</label>
            <div className='uagb-presets-radio-image-wrap'>
                {presetRadioImageOptions}
            </div>
        </>
    );

	let registerPresets = wp.hooks.applyFilters('uagb.registerPresets', '', defaultAttributes, setAvailablePresets, setAttributes)

    return (
        <div className="uagb-presets-main-wrap">
            { 'dropdown' === presetInputType && presetDropdown }
            { 'radioImage' === presetInputType && presetRadioImage }
			{registerPresets}
        </div>
    );
}

UAGPresets.defaultProps = {
	defaultAttribute: {},
	presetInputType: 'dropdown',
    label: __( 'Select Preset', 'ultimate-addons-for-gutenberg' )
};

export default React.memo( UAGPresets );
