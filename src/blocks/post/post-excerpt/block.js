/**
 * BLOCK: UAGB - post-excerpt
 */

// Import block dependencies and components
import PostExcerpt from "./edit"
import UAGB_Block_Icons from "../../../../dist/blocks/uagb-controls/block-icons"

// Components
const { __ } = wp.i18n

// Register block controls
const { registerBlockType } = wp.blocks

// Register the block
registerBlockType( "uagb/post-excerpt", {
	title: uagb_blocks_info.blocks["uagb/post-excerpt"]["title"],
	description: uagb_blocks_info.blocks["uagb/post-excerpt"]["description"],
	icon: UAGB_Block_Icons.post_grid,
	category: uagb_blocks_info.category,
	parent: [ "uagb/post-grid" ,"uagb/post-masonry" , "uagb/post-carousel" ],
	keywords: [
		__( "post" ),
		__( "excerpt" ),
		__( "uag" ),
	],
	PostExcerpt,
	example: {},
	// Render via PHP
	save() {
		return 'excerpt'
	},
} )
