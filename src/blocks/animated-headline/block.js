/**
 * BLOCK: Animated Headline
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './editor.lazy.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/animated-headline', {
    title: __( 'Animated Headline', 'ultimate-addons-for-gutenberg' ),
    description: __(
        'This block lets you add a animated headline.',
        'ultimate-addons-for-gutenberg'
    ),
    icon: UAGB_Block_Icons.advanced_heading,
    keywords: [
        __( 'animated headline', 'ultimate-addons-for-gutenberg' ),
        __( 'animation', 'ultimate-addons-for-gutenberg' ),
        __( 'uag', 'ultimate-addons-for-gutenberg' ),
        __( 'heading', 'ultimate-addons-for-gutenberg' ),
        __( 'headline', 'ultimate-addons-for-gutenberg' ),
    ],
    supports: {
        anchor: true,
    },
    example: {
        attributes: {
            headingTitle: __(
                'Write a Heading',
                'ultimate-addons-for-gutenberg'
            ),
        },
    },
    category: uagb_blocks_info.category,
    attributes,
    edit,
    save
} );