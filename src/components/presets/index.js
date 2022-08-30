import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { select, dispatch } from '@wordpress/data';
import classnames from 'classnames';
import UAGReset from '../reset';

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
        label,
		className
    } = props;

	const { getSelectedBlock } = select( 'core/block-editor' );
	const { name, attributes } = getSelectedBlock();

	const [availablePresets, setAvailablePresets] = useState( attributes.presets ? [...attributes.presets, ...presets] : presets );
	const [ selectedPresetState, setPreset ] = useState( '' );
	const resetAttributes = [];
	if ( presets ) {
		presets.map( ( preset ) => {
			if ( preset?.attributes ) {
				for ( const attribute of preset?.attributes ) {
					if ( ! resetAttributes.includes( attribute?.label ) ) {
						resetAttributes.push( attribute?.label );
					}
				}
			}

			return preset;
		} );
	}
	const onReset = () => {
		setPreset( '' );
		resetChildBlockAttributes();
	};


    const updatePresets = ( selectedPreset ) => {
        setPreset( selectedPreset );
        if ( availablePresets ) {
            availablePresets.map( ( preset ) => {
				if ( preset.value ) {
					if ( 'default' !== selectedPreset && 'default' === preset.value && preset.attributes ) {
						preset.attributes.map( ( presetItem ) => {
							setAttributes( { [presetItem.label]: presetItem.value } )
							return presetItem;
						} );
					}
					if ( preset.value && preset.value === selectedPreset && preset.attributes ) {

						availablePresets[1]?.defaultPresetAttributes?.map( ( presetItem ) => {
							setAttributes( { [presetItem.label]: availablePresets[0]?.defaultAttributes[presetItem.label]?.default } )
							return presetItem;
						} );
						preset.attributes.map( ( presetItem ) => {
							setAttributes( { [presetItem.label]: presetItem.value } )
							return presetItem;
						} );

						if ( preset.childAttributes ) {
							updateChildBlockAttributes( preset );
						}
					}
				}
				return preset;
            } );
        }
    }

	const deletePreset = ( key ) => {
		if( confirm( 'Are you sure?' ) ){
			apiFetch( {
				path: '/uagpro/v1/presets',
				method: 'DELETE',
				data: {
					block_name: name,
					preset_key: key,
				},
			} ).then( ( status ) => {
				if( status ){
					setAvailablePresets( availablePresets.reduce( ( acc, item ) => {
						if( item.value !== key ){
							acc.push( item )
						}
						return acc;
					}, [] ) )
				}
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

	const resetChildBlockAttributes = () => {
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

		presets.map( ( preset ) => {
			if ( preset?.childAttributes ) {
				preset?.childAttributes.map( ( attr ) => {
					if ( presets[1]?.defaultChildAttributes && presets[1]?.defaultChildAttributes[attr.label] && undefined !== presets[1]?.defaultChildAttributes[attr.label].default ) {
						childBlocksAttributes[attr.label] = presets[1]?.defaultChildAttributes[attr.label].default;
					}
					return attr;
				} );
			}
			return preset;
		} );

        childBlocksClientIds.map( ( clientId ) => {
            dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, childBlocksAttributes );
            return clientId;
        } );
	}
    const presetRadioImageOptions = availablePresets.map( ( preset ) => {
		if ( ! preset.value ) {
			return '';
		}

        const key = preset.value;
		const checked = selectedPresetState === key ? true : false;
		return (
            <>
                <input key={key} className="uag-presets-radio-input" type="radio" value={key} checked={checked} onChange={() => updatePresets( key )} onClick={() => updatePresets( key )}/>
				<label htmlFor={key} className="uag-presets-radio-input-label">
                    {
						preset.icon ? (
								<span dangerouslySetInnerHTML={{
								__html: preset.icon
									}}
								/>
							) : (
							<span className='custom-preset'>
								<span className='custom-preset__icon'>
									<span className="dashicons dashicons-trash" onClick={() => deletePreset( key )}></span>
								</span>
								<span className='custom-preset__text'>{preset.label}</span>
							</span>
						)
					}
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
            <div className='uagb-presets-radio-image-wrap'>
                {presetRadioImageOptions}
            </div>
        </>
    );

	const registerPresets = wp.hooks.applyFilters( 'uagb.registerPresets', '', defaultAttributes, setAvailablePresets, setAttributes )

    return (
		<div className={ classnames(
			className,
			'uagb-presets-main-wrap',
			'components-base-control'
		) }>
			<div className='uagb-presets-label-reset-wrap'>
				<label htmlFor="uag-presets-label" className="uag-presets-label">{label}</label>
				<UAGReset
					attributeNames = {resetAttributes}
					setAttributes={ setAttributes }
					onReset={onReset}
				/>
			</div>
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
