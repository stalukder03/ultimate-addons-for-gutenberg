const UAGPROPresetsAttribute = (settings, name) => {
	if (name.match(/uagb/)) {
		settings.attributes = Object.assign(settings.attributes, {
			defaultPreset: {
				type: 'string',
				default: ''
			}
		});
	}
	return settings;
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'uagpro/customPresets',
    UAGPROPresetsAttribute
);
