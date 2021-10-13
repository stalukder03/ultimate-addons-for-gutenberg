import { addFilter } from '@wordpress/hooks';
const { enableMasonryGallery } = uagb_blocks_info;

// From attributes.js file.
function addMasonryAttribute( settings ) {
	const blockType = [ 'core/gallery' ];
	if ( blockType.includes( settings.name ) ) {
		if ( settings.attributes ) {
			settings.attributes = Object.assign( settings.attributes, {
				masonry: {
					type: 'boolean',
					default: false,
				},
				masonryGutter: {
					type: 'number',
				},
				block_id: {
					type: 'string',
				},
			} );
		}
	}
	return settings;
}

if ( 'enabled' === enableMasonryGallery || true === enableMasonryGallery ) {
	addFilter(
		'blocks.registerBlockType',
		'uagb/masonry-gallery',
		addMasonryAttribute
	);
}
