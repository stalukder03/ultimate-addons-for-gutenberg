import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { __ } from '@wordpress/i18n';
import { useEffect } from 'react';
const { getSelectedBlock } = select( 'core/block-editor' );
import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import { select } from '@wordpress/data';

const GlobalBlockStyles = (props) => {

    const {
        blockID,
    } = props;

    const selectedBlockData = getSelectedBlock();

	const allBlocksAttributes = wp.hooks.applyFilters( 'uagb.blocksAttributes', blocksAttributes )

    const {
        attributes,
        name,
        innerBlocks
    } = selectedBlockData;

    useEffect( () => {
		console.log("Attributes Changed.");

        let styles = {};
        if ( name.includes( 'uagb/' ) ) {
            const blockName = name.replace( 'uagb/', '' );
            const blockAttributes = allBlocksAttributes[blockName];

            Object.keys( blockAttributes ).map( ( attribute ) => {

                if ( blockAttributes[attribute].UAGCopyPaste ) {

                    const key = blockAttributes[attribute].UAGCopyPaste.styleType;

                    if ( undefined !== attributes[attribute] && null !== attributes[attribute] ) {

                        styles[key] = attributes[attribute];

                    }
                }

                return attribute;

            } );

            console.log(styles);
        }
	}, [ attributes ] );

    return (
        <UAGAdvancedPanelBody
            title={ __( 'Global Block Styles', 'ultimate-addons-for-gutenberg' ) }
            initialOpen={ false }
        >
				{ blockID}
        </UAGAdvancedPanelBody>
    );
};

export default GlobalBlockStyles;