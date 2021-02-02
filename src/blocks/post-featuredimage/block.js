/**
 * BLOCK: Post Title
 */
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import "./style.scss"
import "./editor.scss"


const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/post-featuredimage", {
	title: uagb_blocks_info.blocks["uagb/post-featuredimage"]["title"],
	description: uagb_blocks_info.blocks["uagb/post-featuredimage"]["description"],
	icon: UAGB_Block_Icons.post_title,
	category: uagb_blocks_info.category,
	keywords: [
		__( "post featured image" ),
		__( "title" ),
		__( "uag" ),
	],
	attributes,
	edit,
	save,
} )
