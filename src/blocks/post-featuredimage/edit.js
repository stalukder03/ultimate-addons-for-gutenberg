/**
 * BLOCK: Marketing Button
 */

import classnames from "classnames"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"

const { __ } = wp.i18n
const { Component, Fragment } = wp.element
const ALLOWED_BLOCKS = [ "core/post-title" ]
const {
	InnerBlocks
} = wp.blockEditor
class UAGBPostTitle extends Component {

	render() {

		return 	(<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />);
	}
}

export default UAGBPostTitle
