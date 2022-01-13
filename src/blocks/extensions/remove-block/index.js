import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { withSelect, dispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import {
	BlockControls,
} from '@wordpress/block-editor';
import { Toolbar, ToolbarButton, withSpokenMessages } from '@wordpress/components';
import editorStyles from './../editor.lazy.scss';
import { useLayoutEffect } from 'react';

const UAGRemoveBlock = ( props ) => {

    useLayoutEffect( () => {
		editorStyles.use();
		return () => {
			editorStyles.unuse();
		};
	}, [] );

	const { removeBlock } = dispatch( 'core/block-editor' );

    const removeBlockHandler = () => {
		const {
			selectedBlock,
		} = props;

		const { createNotice } = dispatch( 'core/notices' );

		removeBlock( selectedBlock.clientId );

		const notice = __( 'Selected block Deleted.', 'ultimate-addons-for-gutenberg' );
				
		createNotice(
			'info',
			notice,
			{
				isDismissible: true,
				type: 'snackbar',
			}
		);
    }
	
    return (
        <BlockControls>
            <Toolbar className="uag-remove">
				<ToolbarButton
					icon="trash"
					label={ __( 'UAG Remove Block.', 'ultimate-addons-for-gutenberg' ) }
					onClick={ () => {
						removeBlockHandler();
					}}
				/>
            </Toolbar>
        </BlockControls>
    );
};

const displayUAGRemoveSettingConditionally = compose(
    /* eslint-disable no-shadow */
    withSelect( function( select ) {
        const { getSelectedBlock } = select( 'core/block-editor' );
		if ( ! getSelectedBlock() ) {
			return {};
		}

		return {
			selectedBlock: getSelectedBlock(),
		};
    } ),
	withSpokenMessages,
)( UAGRemoveBlock );


registerPlugin( 'uag-remove', {
    render: displayUAGRemoveSettingConditionally,
} );
