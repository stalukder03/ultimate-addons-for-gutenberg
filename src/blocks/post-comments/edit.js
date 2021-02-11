
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

            return comments && comments.length
				? comments.map( ( comment ) => (
						<RawHTML
							className="uagb-post-comments__content"
							key={ comment.id }
						>
							{ comment.content.rendered }
						</RawHTML>
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