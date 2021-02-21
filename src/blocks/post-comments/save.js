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

    const currentPostId = select('core/editor').getCurrentPostId();

    const comments = select( 'core' ).getEntityRecords('root','comment',{post: currentPostId});
    if(comments && comments.length){
    return (<div className={`uagb-block-${ block_id }`}>
            {comments.map(( comment , index) =>{
            return <div className="uagb-post-comments__wrap" key={ comment.id }>
                            <div className="uagb-post-comments__author-wrap">
                                <div className="uagb-post-comments__avatar-wrap">
                                    <img className="uagb-post-comments__avatar" src={comment.author_avatar_urls[24]}/>
                                </div>
                                <div className="uagb-post-comments__author">{comment.author_name} Says :</div>
                            </div>
                            <div className="uagb-post-comments__content" 
                            dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></div>
                        </div>
                })
            }
            </div>);
    }else{
        return __('No Comment')
    }
}
