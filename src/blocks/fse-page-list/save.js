/**
 * BLOCK: Fse Page List - Save Block
 */

const { __ } = wp.i18n
const {
	Spinner
} = wp.components
export default function save( props ) {
    const { attributes } = props

    const {
		block_id,
        page_list,
        layout
    } = attributes

    const hasPage = Array.isArray( page_list ) && page_list.length

    if(!hasPage){
        return ! Array.isArray( page_list ) && (
            <Spinner /> )
    }
    const page_data = page_list.map((item, index) => {
        return <li className="uagb-menu-list"><a href={item.link}>{item.title.raw}</a></li>
    });
    return <div className={`uagb-fse-page-list__wrap uagb-block-${ block_id } uagb-fse-page-list-${layout}`}>
                {page_data}
            </div>
}
