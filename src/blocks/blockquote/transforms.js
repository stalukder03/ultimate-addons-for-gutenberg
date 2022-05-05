/**
 * WordPress dependencies
 */
 import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/quote' ],
			transform: ( attribute ) => {
				return createBlock( 'uagb/blockquote', {
					descriptionText: attribute.value,
					author: attribute.citation,
					align: attribute.align,
					isPreview: true,
				} );
			},
		},
		{
			type: 'block',
			blocks: [ 'core/heading' ],
			transform: ( attribute ) => {
				return createBlock( 'uagb/blockquote', {
					descriptionText: attribute.content,
					align: attribute.align,
					isPreview: true,
				} );
			},
		},
	],
	to: [
		{
			type: 'block',
			blocks: [ 'core/quote' ],
			transform: ( attribute ) => {
				return createBlock( 'core/quote', {
					value: `<p>${ attribute.descriptionText }</p>`,
					citation: attribute.author,
					align: attribute.align,
				} );
			},
		},
		{
			type: 'block',
			blocks: [ 'core/heading' ],
			transform: ( attribute ) => {
				return createBlock( 'core/heading', {
					content: attribute.descriptionText,
					align: attribute.align,
				} );
			},
		},
	],
};

export default transforms;
