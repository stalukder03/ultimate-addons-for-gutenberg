import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"

const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/post-title-block", {
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