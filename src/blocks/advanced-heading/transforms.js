/**
 * WordPress dependencies
 */
 import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/heading' ],
			transform: ( attribute ) => {
				return createBlock( 'uagb/advanced-heading', {
					headingTitle: attribute.content,
					headingAlign: attribute.align,
					className: 'uagb-heading-text',
					isPreview: true,
				} );
			},
		},
		{
			type: 'block',
			blocks: [ 'core/quote' ],
			transform: ( attribute ) => {
				return createBlock( 'uagb/advanced-heading', {
					headingTitle: attribute.value,
					headingDesc: attribute.citation,
					className: 'uagb-heading-text',
					isPreview: true,
				} );
			},
		},
	],
	to: [
		{
			type: 'block',
			blocks: [ 'core/heading' ],
			transform: ( attribute ) => {
				return createBlock( 'core/heading', {
					content: attribute.headingTitle,
					align: attribute.headingAlign,
					className: 'uagb-heading-text',
				} );
			},
		},
		{
			type: 'block',
			blocks: [ 'core/quote' ],
			transform: ( attribute ) => {
				return createBlock( 'core/quote', {
					value: `<p>${ attribute.headingTitle }</p>`,
					citation: attribute.headingDesc,
					className: 'uagb-heading-text',
				} );
			},
		},
	],
};

export default transforms;
