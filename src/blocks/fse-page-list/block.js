/**
 * BLOCK: Fse Page List
 */
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import "./style.scss"


const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/fse-page-list", {
	title: uagb_blocks_info.blocks["uagb/fse-page-list"]["title"],
	description: uagb_blocks_info.blocks["uagb/fse-page-list"]["description"],
	icon: UAGB_Block_Icons.marketing_button,
	category: uagb_blocks_info.category,
	keywords: [
		__( "Page List" , 'ultimate-addons-for-gutenberg' ),
		__( "Page", 'ultimate-addons-for-gutenberg' ),
		__( "uag", 'ultimate-addons-for-gutenberg' ),
	],
	edit,
	save,
	attributes
} );