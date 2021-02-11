/**
 * BLOCK: Featured Image - Save Block
 */

// Import block dependencies and components.
import classnames from "classnames"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
const { select } = wp.data;

export default function save( props ) {

	const {
		block_id,
		imgSize
	} = props.attributes

	const title = select("core/editor").getCurrentPost();

	if (
		undefined !== title.uagb_featured_image_src &&
		imgSize &&
		title.uagb_featured_image_src[imgSize]
	) {
		var src = title.uagb_featured_image_src[imgSize]

		return (
				<div className={ classnames(
					className,
					"uagb-featured-image__wrap",
					`uagb-block-${ block_id }`
				) }>
					<img src={ src[0] }/>
				</div>
		)
	} else {

		return 'dbdbdbd';
	}
}
