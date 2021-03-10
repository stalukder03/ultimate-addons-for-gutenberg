/**
 * BLOCK: Post Excerpt - Save Block
 */

const { __ } = wp.i18n

export default function save( props ) {
    const { attributes } = props

    const {
		block_id,
    postExcerpt
    } = attributes

    if( postExcerpt ){
    
      return <div className={`uagb-post-excerpt__wrap uagb-block-${ block_id }`}> 
                <div dangerouslySetInnerHTML={ { __html: postExcerpt } } />
            </div> 
    }else{
        return __('No Data Found', 'ultimate-addons-for-gutenberg')
    }         
}
