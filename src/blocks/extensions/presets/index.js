import { Button, Modal, TextControl } from '@wordpress/components';
import {__} from '@wordpress/i18n';
import { select } from '@wordpress/data';
import { useState } from '@wordpress/element';
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
	const { attributes } = getSelectedBlock();

    const openModal = () => setOpen( true );
    const closeModal = () => setOpen( false );
	const onPresetSaveHandler = () => {
		const preset = {
			value: presetName.toLowerCase().replace(/ /g, '-'),
			label: presetName,
			attributes: getChangeAttributes(defaultAttributes, attributes),
			icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="44" width="20" height="6" rx="2" /><path d="M6 30.5C6 30.2239 6.22386 30 6.5 30H65.5C65.7761 30 66 30.2239 66 30.5C66 30.7761 65.7761 31 65.5 31H6.5C6.22386 31 6 30.7761 6 30.5Z" /><path d="M6 34.5C6 34.2239 6.22386 34 6.5 34H65.5C65.7761 34 66 34.2239 66 34.5C66 34.7761 65.7761 35 65.5 35H6.5C6.22386 35 6 34.7761 6 34.5Z" /><path d="M6 38.5C6 38.2239 6.22386 38 6.5 38H49.5C49.7761 38 50 38.2239 50 38.5C50 38.7761 49.7761 39 49.5 39H6.5C6.22386 39 6 38.7761 6 38.5Z" /><path d="M6 23C6 22.4477 6.44772 22 7 22H49C49.5523 22 50 22.4477 50 23C50 23.5523 49.5523 24 49 24H7C6.44771 24 6 23.5523 6 23Z" /></svg>',
		};
		setPresets((prevState) => [...prevState, preset])
		setAttributes({presets:  [
			...attributes.presets,
			preset
		]})
		closeModal();
	}

	return (
		<>
			{
				console.log(attributes)
			}
			<Button variant="secondary" onClick={ openModal }>
                Open Modal
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
