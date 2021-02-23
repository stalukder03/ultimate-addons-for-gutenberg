/**
 * BLOCK: Post Excerpt - Save Block
 */

const { __ } = wp.i18n
const { select, useSelect } = wp.data;

export default function save( props ) {
    const { attributes } = props

    const {
		block_id,
    } = attributes

    var post_excerpt = select("core/editor").getCurrentPost();
    

    if( post_excerpt.uagb_excerpt ){
    
      return <div className={`uagb-post-excerpt__wrap uagb-block-${ block_id }`}> 
                <div dangerouslySetInnerHTML={ { __html: post_excerpt.uagb_excerpt } } />
            </div> 
    }else{
        return __('No Data Found')
    }         
}
