/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */
__webpack_public_path__ = uagb_blocks_info.uagb_url + 'dist/';


const { enableConditions, enableMasonryGallery } = uagb_blocks_info;

if ( 'enabled' === enableMasonryGallery ) {
	import( /* webpackChunkName: "chunks/extensions/masonry-gallery" */  './blocks/extensions/masonry-gallery' );
}

if ( 'enabled' === enableConditions ) {
	import( /* webpackChunkName: "chunks/extensions/display-conditions" */  './blocks/extensions/condition-block');
}



const allBlocks = [
	'uagb/advanced-heading',
	'uagb/blockquote',
	'uagb/buttons',
	'uagb/call-to-action',
	'uagb/columns',
	'uagb/content-timeline',
	'uagb/faq',
	'uagb/forms-accept',
	'uagb/forms',
	'uagb/google-map',
	'uagb/how-to-step',
	'uagb/how-to',
	'uagb/icon-list',
	'uagb/info-box',
	'uagb/inline-notice',
	'uagb/lottie',
	'uagb/marketing-button',
	'uagb/masonry-gallery',
	'uagb/post-carousel',
	'uagb/post-grid',
	'uagb/post-masonry',
	'uagb/post-timeline',
	'uagb/restaurant-menu',
	'uagb/review',
	'uagb/section',
	'uagb/social-share',
	'uagb/star-rating',
	'uagb/table-of-contents',
	'uagb/tabs',
	'uagb/taxonomy-list',
	'uagb/team',
	'uagb/testimonial',
	'uagb/wp-search'
];

let deactivatedBlocks = [];

if ( Array.isArray( uagb_blocks_info.deactivated_blocks ) ) {
	deactivatedBlocks = uagb_blocks_info.deactivated_blocks;
}

const activatedBlocks = allBlocks.filter( block => ! deactivatedBlocks.includes( block ) );

console.log( activatedBlocks );

activatedBlocks.forEach( function (item) {
	console.log( item );

	switch ( item ) {
		case 'uagb/advanced-heading':
			import( /* webpackChunkName: "blocks/advanced-heading/block" */  './blocks/advanced-heading/block.js');
			break;
		case 'uagb/blockquote':
			break;
		case 'uagb/buttons':
			break;
		case 'uagb/call-to-action':
			break;
		case 'uagb/columns':
			break;
		case 'uagb/content-timeline':
			break;
		case 'uagb/faq':
			break;
		case 'uagb/forms-accept':
			break;
		case 'uagb/forms':
			break;
		case 'uagb/google-map':
			break;
		case 'uagb/how-to-step':
			break;
		case 'uagb/how-to':
			break;
		case 'uagb/icon-list':
			break;
		case 'uagb/info-box':
			break;
		case 'uagb/inline-notice':
			break;
		case 'uagb/lottie':
			break;
		case 'uagb/marketing-button':
			break;
		case 'uagb/masonry-gallery':
			break;
		case 'uagb/post-carousel':
			break;
		case 'uagb/post-grid':
			break;
		case 'uagb/post-masonry':
			break;
		case 'uagb/post-timeline':
			break;
		case 'uagb/restaurant-menu':
			break;
		case 'uagb/review':
			break;
		case 'uagb/section':
			break;
		case 'uagb/social-share':
			break;
		case 'uagb/star-rating':
			break;
		case 'uagb/table-of-contents':
			break;
		case 'uagb/tabs':
			break;
		case 'uagb/taxonomy-list':
			break;
		case 'uagb/team':
			break;
		case 'uagb/testimonial':
			break;
		case 'uagb/wp-search':
			break;
		default:
			break;
	}
});

// if ( activatedBlocks ) {
// 	import './blocks/advanced-heading/block.js';
// }




// import './blocks/advanced-heading/block.js';
import './blocks/post/block.js';
import './blocks/section/block.js';
import './blocks/buttons/block.js';
import './blocks/buttons-child/block.js';
import './blocks/info-box/block.js';
import './blocks/testimonial/block.js';
import './blocks/team/block.js';
import './blocks/social-share/block.js';
import './blocks/social-share-child/block.js';
import './blocks/google-map/block.js';
import './blocks/icon-list/block.js';
import './blocks/icon-list-child/block.js';
import './blocks/price-list/block.js';
import './blocks/price-list-child/block.js';
import './blocks/timeline/block.js';
import './blocks/call-to-action/block.js';
import './blocks/column/block.js';
import './blocks/columns/block.js';
import './blocks/gf-designer/block.js';
import './blocks/cf7-designer/block.js';
import './blocks/blockquote/block.js';
import './blocks/marketing-button/block.js';
import './blocks/table-of-contents/block.js';
import './blocks/how-to/block.js';
import './blocks/how-to/child-blocks/step/block.js';
import './blocks/faq/block.js';
import './blocks/faq-child/block.js';
import './blocks/inline-notice/block.js';
import './blocks/taxonomy-list/block.js';
import './blocks/review/block.js';
import './blocks/wp-search/block.js';
import './blocks/forms/block.js';
import './blocks/forms/child-blocks/name/block.js';
import './blocks/forms/child-blocks/email/block.js';
import './blocks/forms/child-blocks/hidden/block.js';
import './blocks/forms/child-blocks/phone/block.js';
import './blocks/forms/child-blocks/textarea/block.js';
import './blocks/forms/child-blocks/checkbox/block.js';
import './blocks/forms/child-blocks/radio/block.js';
import './blocks/forms/child-blocks/url/block.js';
import './blocks/forms/child-blocks/select/block.js';
import './blocks/forms/child-blocks/toggle/block.js';
import './blocks/forms/child-blocks/date/block.js';
import './blocks/forms/child-blocks/accept/block.js';
import './blocks/tabs/block.js';
import './blocks/tabs-child/block.js';
import './blocks/lottie/block.js';
import './blocks/star-rating/block.js';

wp.UAGBSvgIcons = Object.keys( uagb_blocks_info.uagb_svg_icons );

import UAGB_Block_Icons from '@Controls/block-icons';

import { updateCategory } from '@wordpress/blocks';

updateCategory( 'uagb', {
	icon: UAGB_Block_Icons.logo,
} );

setTimeout( async function () {
	// Sort the Blocks based on title.
	wp.blocks.getBlockTypes().sort( ( blockA, blockB ) => {
		if ( 'uagb' === blockA.category && 'uagb' === blockB.category ) {
			return blockA.title > blockB.title ? 1 : -1;
		}
		return 0;
	} );
}, 50 );
