/**
 * BLOCK: Post Comment - Save Block
 */

const { __ } = wp.i18n
const { select, useSelect } = wp.data;

export default function save( props ) {
    const { attributes } = props

    const {
		block_id,
    } = attributes

    var post_content = select("core/editor").getCurrentPost();

    
    return <div className={`uagb-post-content__wrap uagb-block-${ block_id }`}
                dangerouslySetInnerHTML={{ __html: post_content.content }}></div>                      
               
}
