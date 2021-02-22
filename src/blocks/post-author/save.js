/**
 * BLOCK: Post Author - Save Block
 */

const { __ } = wp.i18n
const { select, useSelect } = wp.data;

export default function save( props ) {
    const { attributes } = props

    const {
		block_id,
    } = attributes

    var post_author = select("core/editor").getCurrentPost();
                       
    if(post_author.uagb_author_info && post_author.uagb_author_info.display_name && post_author.uagb_author_info.author_link){
    
      return <div className={`uagb-post-author__wrap uagb-block-${ block_id }`}>
                  <span className="dashicons-admin-users dashicons"></span>
                  <a className="uagb-post-author__name" target="_blank" href={ post_author.uagb_author_info.author_link } rel ="noopener noreferrer">{ post_author.uagb_author_info.display_name }</a>
              </div> 
    }else{
        return __('No Data Found')
    }         
}
