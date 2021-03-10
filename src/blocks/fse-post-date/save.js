/**
 * BLOCK: Post Date - Save Block
 */

const { __ } = wp.i18n
const { dateI18n, format , __experimentalGetSettings} = wp.date
export default function save( props ) {
    const { attributes } = props

    const {
		block_id,
        date
    } = attributes

	const dateFormat = __experimentalGetSettings().formats.date 
    
    if( date ){
    
      return <div className={`uagb-post-date__wrap uagb-block-${ block_id }`}>
                <time dateTime={ format( "c", date ) }>
                    <span className="dashicons-calendar dashicons"></span>
                    { dateI18n( dateFormat, date ) }
				</time>
              </div> 
    }else{
        return __('No Data Found' , 'ultimate-addons-for-gutenberg')
    }         
}
