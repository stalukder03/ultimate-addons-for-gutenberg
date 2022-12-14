/**
 * BLOCK: UAGB separator Attributes
 */
const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'column-align'
		},
	},
};

export default attributes;
