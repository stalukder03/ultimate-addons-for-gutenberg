/**
 * BLOCK: Post Date - Save Block
 */

const { __ } = wp.i18n
const { select, useSelect } = wp.data;
const { dateI18n, format , __experimentalGetSettings} = wp.date
export default function save( props ) {
    const { attributes } = props

    const {
		block_id,
    } = attributes

    var post_date = select("core/editor").getCurrentPost();
    
	const dateFormat = __experimentalGetSettings().formats.date 
    
    if( post_date.date_gmt ){
    
      return <div className={`uagb-post-date__wrap uagb-block-${ block_id }`}>
                <time dateTime={ format( "c", post_date.date_gmt ) }>
                    <span className="dashicons-calendar dashicons"></span>
                    { dateI18n( dateFormat, post_date.date_gmt ) }
				</time>
              </div> 
    }else{
        return __('No Data Found')
    }         
}
