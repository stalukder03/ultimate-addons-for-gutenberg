import attributes from "./attributes"

registerBlockType( "uagb/post-title", {
	title: uagb_blocks_info.blocks["uagb/post-title-block"]["title"],
	description: uagb_blocks_info.blocks["uagb/post-title-block"]["description"],
	icon: UAGB_Block_Icons.marketing_button,
	category: uagb_blocks_info.category,
	keywords: [
		__( "post title" ),
		__( "title" ),
		__( "uag" ),
	],
	attributes,
	edit,
	save
} )