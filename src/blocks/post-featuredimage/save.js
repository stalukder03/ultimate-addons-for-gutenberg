/**
 * BLOCK: Featured Image - Save Block
 */

// Import block dependencies and components.
import classnames from "classnames"
const { select } = wp.data;

export default function save( props ) {

	const {
		block_id,
		imgSize
	} = props.attributes

	const title = select("core/editor").getCurrentPost();
	var src;

	if (
		undefined !== title.uagb_featured_image_src &&
		imgSize &&
		title.uagb_featured_image_src[imgSize]
	) {
		src = title.uagb_featured_image_src[imgSize]
	}else{
		src = '#';
	}

	return (
			<div className={ classnames(
				`uagb-block-${ block_id }`,
				"uagb-featured-image__wrap",
			) }>
				<img src={ src[0] }/>
			</div>
	)
}
