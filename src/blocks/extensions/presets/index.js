import { useEffect, useState } from '@wordpress/element';
import { Button, Modal, TextControl } from '@wordpress/components';
import {__} from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { select } from '@wordpress/data';
import './attributes'

const getChangeAttributes = (defaultAttributes, attributes) => {
	const excludeAttributeList = ['block_id', 'presets', 'dynamicContent']
	return Object.entries(attributes).reduce((acc, entry) => {
		if(!excludeAttributeList.includes(entry[0])){
			const currentValue = defaultAttributes[entry[0]]
			if(currentValue){
				if(currentValue.default === undefined || (currentValue.default !== undefined && currentValue.default !== entry[1])){
					acc.push({label: entry[0], value: entry[1]})
				}
			}
		}
		return acc;
	}, []);
}

const UAGPRORegisterPresets = (content, defaultAttributes, setPresets, setAttributes) => {
	const [ isOpen, setOpen ] = useState( false );
	const [ presetName, setPresetName ] = useState( '' );
	const { getSelectedBlock } = select("core/block-editor");
	const { name, attributes } = getSelectedBlock();
	useEffect(() => {
		apiFetch( { path: '/uagpro/v1/presets?block_name=' + name } ).then( ( presets ) => {
			setPresets((prevState) => [...prevState, ...presets])
		} );
	}, [])

    const openModal = () => setOpen( true );
    const closeModal = () => setOpen( false );
	const onPresetSaveHandler = () => {
		const preset = {
			value: presetName.toLowerCase().replace(/ /g, '-'),
			label: presetName,
			attributes: getChangeAttributes(defaultAttributes, attributes),
		};
		apiFetch( {
			path: '/uagpro/v1/presets',
			method: 'POST',
			data: {
				block_name: name,
				...preset
			},
		} ).then( ( preset ) => {
			setPresets((prevState) => [...prevState, preset])
			closeModal();
		} );
	}

	return (
		<>
			<Button variant="secondary" onClick={ openModal }>
                {__('Create Preset', 'uag')}
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
	"uagb.registerPresets",
	"uagpro/customPresets",
	UAGPRORegisterPresets
);
