/**
 * BLOCK: Fse Post Categories - Save Block
 */

const { __ } = wp.i18n
const { select, useSelect } = wp.data;

export default function save( props ) {
    const { attributes } = props

    const {
		block_id,
        categories
    } = attributes

    const category_data = (
        categories && categories.length ? (
            <div className="uagb-post-categories__author">{categories.join(" ")} </div>
        ): __('No Category Data Found', 'ultimate-addons-for-gutenberg')
    );

    return <div className={`uagb-post-categories__wrap uagb-block-${ block_id }`}>
                <span className="dashicons-tag dashicons"></span>
                {category_data}
            </div>
}
