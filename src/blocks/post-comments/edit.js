
const { __ } = wp.i18n

const {
	Component,
	Fragment,
    RawHTML
} = wp.element

const { select,useSelect } = wp.data;

function PostCommentDisplay({postId}) {
    
    return useSelect(
        ( select ) => {
            const comments = select( 'core' ).getEntityRecords(
                'root',
                'comment',
                {
                    post: postId,
                }
            );
                console.log( comments );
            return comments && comments.length
				? comments.map( ( comment ) => (
                    <div className="uagb-post-comments__wrap" key={ comment.id }>
                        <div className="uagb-post-comments__author-wrap">
                            <div className="uagb-post-comments__avatar-wrap">
                                <img className="uagb-post-comments__avatar" src={comment.author_avatar_urls[24]}/>
                            </div>
                            <div className="uagb-post-comments__author">{comment.author_name} Says :</div>
                        </div>
                        <div className="uagb-post-comments__content" 
                        dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></div>
                    </div>
				  ) )
				: __( 'No comments.' );
        },[ postId ]
    );   
}

class UAGBPostCommentsEdit extends Component {
    
    constructor() {
		super( ...arguments )
	}

    render() {
        
        const currentPostId = select('core/editor').getCurrentPostId();

        return(
            <div><PostCommentDisplay postId={ currentPostId }/></div>
        );
    }
}

export default UAGBPostCommentsEdit;