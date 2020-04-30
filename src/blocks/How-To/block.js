/**
 * BLOCK: How To
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
// import deprecated from "./deprecated"
// import save from "./save"
import "./style.scss"
import "./editor.scss"


const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

const {
	RichText
} = wp.blockEditor

console.log(attributes)


registerBlockType( "uagb/how-to", {
	title: uagb_blocks_info.blocks["uagb/how-to"]["title"],
	description: uagb_blocks_info.blocks["uagb/how-to"]["description"],
	icon: UAGB_Block_Icons.advanced_heading,
	category: uagb_blocks_info.category,
	keywords: [
		__( "how to" ),
		__( "schema" ),
		__( "uag" ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	edit,
	// save,
	// deprecated,
} )
