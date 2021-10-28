
/**
 * BLOCK: Uploads Block
 */

 import classnames from "classnames"
 import attributes from './attributes';
 import { __ } from '@wordpress/i18n';
 import { RichText } from '@wordpress/block-editor';
 
 const deprecated = [
     {
        attributes,
        save( props ) {
            
            const { attributes } = props

            const {
                block_id,
                uploadRequired,
                name,
                formats
            } = attributes
            
            const allowed_files = formats.map(f => ".".concat(f)).join(",");

            const isRequired = (uploadRequired) ? __("required" , 'ultimate-addons-for-gutenberg') : "";

            return (
                <div className={ classnames(
                    "uagb-forms-upload-wrap",
                    "uagb-forms-field-set",
                    `uagb-block-${ block_id }`,
                ) }>
                    <RichText.Content
                    tagName="div"
                    value={ name }
                    className={`uagb-forms-upload-label ${isRequired} uagb-forms-input-label`}	
                    id={ block_id }	
                    />
                    <input type="file" accept={allowed_files} className="uagb-forms-upload-input" required={uploadRequired} name={ block_id } />
                </div>
            )
        }
    }
 ];

 export default deprecated;