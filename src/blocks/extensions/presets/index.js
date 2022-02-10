import { useEffect, useState } from '@wordpress/element';
import { Button, Modal, TextControl } from '@wordpress/components';
import {__} from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { select, useDispatch } from '@wordpress/data';

import {exportPresets, getChangeAttributes} from './utils'
import './attributes'



const UAGPRORegisterPresets = ( content, defaultAttributes, setPresets ) => {
	const [ isOpen, setOpen ] = useState( false );
	const [ presetName, setPresetName ] = useState( '' );
	const { createNotice } = useDispatch( 'core/notices' );
	const { getSelectedBlock } = select( 'core/block-editor' );
	const { name, attributes } = getSelectedBlock();
	useEffect( () => {
		apiFetch( { path: '/uagpro/v1/presets?block_name=' + name } ).then( ( presets ) => {
			setPresets( ( prevState ) => [...prevState, ...presets] )
		} );
	}, [] )

    const openModal = () => setOpen( true );
    const closeModal = () => setOpen( false );
	const onPresetSaveHandler = () => {
		const preset = {
			value: presetName.toLowerCase().replace( / /g, '-' ),
			label: presetName,
			attributes: getChangeAttributes( defaultAttributes, attributes ),
		};
		apiFetch( {
			path: '/uagpro/v1/presets',
			method: 'POST',
			data: {
				block_name: name,
				...preset
			},
		} ).then( ( res ) => {
			setPresets( ( prevState ) => [...prevState, res] )
			setPresetName( '' )
			closeModal();
		} );
	}

	const exportPresetHandler = () => {
		exportPresets( name, createNotice );
	}

	return (
		<>
			<Button variant="secondary" onClick={ openModal }>
                {__( 'Create Preset', 'uag' )}
            </Button>

			<Button variant="secondary" onClick={ exportPresetHandler }>
                {__( 'Export Preset', 'uag' )}
            </Button>

            { isOpen && (
                <Modal title="Create Preset" onRequestClose={ closeModal }>
                    <TextControl
						label="Preset Name"
						value={ presetName }
						onChange={ ( value ) => setPresetName( value ) }
					/>
					<Button isPrimary={true} onClick={onPresetSaveHandler}>Save Preset</Button>
                </Modal>
            ) }
		</>
	)
}

wp.hooks.addFilter(
	'uagb.registerPresets',
	'uagpro/customPresets',
	UAGPRORegisterPresets
);
