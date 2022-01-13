import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { select, withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import {
	BlockControls,
} from '@wordpress/block-editor';
import { Toolbar, ClipboardButton, withSpokenMessages } from '@wordpress/components';
import { serialize } from '@wordpress/blocks';
import renderSVG from '@Controls/renderIcon';
import editorStyles from './../editor.lazy.scss';
import { useLayoutEffect } from 'react';

const UAGCopyBlocks = ( props ) => {

    useLayoutEffect( () => {
		editorStyles.use();
		return () => {
			editorStyles.unuse();
		};
	}, [] );

    const getSelection = () => {
		const {
			selectedBlockCount,
			selectedBlock,
		} = props;

		let cloned;
		const selectedBlocks = select( 'core/block-editor' ).getMultiSelectedBlocks();
		if ( selectedBlockCount === 1 ) {
            cloned = serialize( selectedBlock );
		}
        
        if ( selectedBlocks.length > 0 ) {
            cloned = serialize( selectedBlocks );
        }
            
        return cloned;
    }

    return (
        <BlockControls>
            <Toolbar className="uag-copy">
                <ClipboardButton
                    text={ getSelection() }
                    icon={ renderSVG( 'copy' ) }
                    onCopy={ props.onCopy }
                    className='uag-copy-blocks'
                    label={ __( 'Copy Block', 'ultimate-addons-for-gutenberg' ) }
                >
                </ClipboardButton>
            </Toolbar>
        </BlockControls>
    );
};

const displayUAGCopySettingConditionally = compose(
    /* eslint-disable no-shadow */
    withSelect( function( select ) {
        const { getSelectedBlockCount, getSelectedBlock, getMultiSelectedBlocks } = select( 'core/block-editor' );
		if ( ! getSelectedBlock() ) {
			return {};
		}

		return {
			selectedBlockCount: getSelectedBlockCount(),
			selectedBlock: getSelectedBlock(),
			selectedBlocks: getMultiSelectedBlocks(),
		};
    } ),
    withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );

		return {
			onCopy() {
				const selectedBlocks = select( 'core/block-editor' ).getMultiSelectedBlocks();
				let notice = __( 'Selected block copied to Clipboard.', 'ultimate-addons-for-gutenberg' );
				if ( selectedBlocks.length > 0 ) {
					notice = __( 'Selected blocks copied to Clipboard.', 'ultimate-addons-for-gutenberg' );
				}

				createNotice(
					'info',
					notice,
					{
						isDismissible: true,
						type: 'snackbar',
					}
				);
			},
		};
	} ),
	withSpokenMessages,
)( UAGCopyBlocks );


registerPlugin( 'uag-copy', {
    render: displayUAGCopySettingConditionally,
} );
