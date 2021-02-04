/**
 * BLOCK: Post Title - Save Block
 */

import classnames from "classnames"
const { select } = wp.data;

export default function save( props ) {

    const {
		block_id,
		titleTag,
	} = props.attributes
    var Tag = titleTag;
    
    const title = select("core/editor").getEditedPostAttribute( 'title' );

    return(
        <div className={ classnames(
				props.className,
				`uagb-block-${block_id}`,					
			) }
        >
            <div className="uagb-post-title__wrap">
                <Tag className="uagb-post-title">
                    { title }
                </Tag>
            </div>
        </div>
    );
}