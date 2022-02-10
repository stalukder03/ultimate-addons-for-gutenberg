import { useEffect, useState } from '@wordpress/element';
import { Button, Modal, TextControl, FormFileUpload } from '@wordpress/components';
import {__} from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { select, useDispatch } from '@wordpress/data';

import {exportPresets, getChangeAttributes, importPresets} from './utils'
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
			if(typeof res === 'object'){
				setPresets( ( prevState ) => [...prevState, res] )
				createNotice(
					'success',
					__( 'Preset created successfully.', 'uag-pro' ),
					{
						type: 'snackbar'
					}
				);
			} else {
				createNotice( 'error', res, {
					type: 'snackbar'
				} );
			}
			setPresetName( '' )
			closeModal();
		} );
	}

	const onExportPresetHandler = () => {
		exportPresets( name, createNotice );
	}

	const onUploadPresetHandler = (files) => {
		importPresets( name, files, createNotice, setPresets )
	}

	return (
		<>
			<Button variant="secondary" onClick={ openModal }>
                {__( 'Create Preset', 'uag' )}
            </Button>

			<Button variant="secondary" onClick={ onExportPresetHandler }>
                {__( 'Export Preset', 'uag' )}
            </Button>

			<FormFileUpload
				accept="text/json"
				onChange={ ( e ) => onUploadPresetHandler(e.target.files) }
				isSecondary
			>
				{ __( 'Upload Preset' ) }
			</FormFileUpload>

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
