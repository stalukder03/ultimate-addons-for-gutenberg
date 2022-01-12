import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { select, dispatch, useDispatch, withSelect, withDispatch } from '@wordpress/data';
import { store as keyboardShortcutsStore, useShortcut } from '@wordpress/keyboard-shortcuts';
import { compose, ifCondition } from '@wordpress/compose';
import {
	BlockControls,
} from '@wordpress/block-editor';
import { Toolbar, ToolbarButton, Popover, MenuItem, ClipboardButton, withSpokenMessages } from '@wordpress/components';
import { serialize } from '@wordpress/blocks';
import renderSVG from '@Controls/renderIcon';

const UAGCopyBlocks = (props) => {

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

		// if ( size( selectedBlocks ) > 0 ) {
		// 	cloned = serialize( selectedBlocks );
		// }

		return cloned;
	}

    return (
        <BlockControls>
            <Toolbar className="uag-copy">
                <ClipboardButton
                    text={ getSelection() }
                    icon={ renderSVG( 'copy' ) }
                    onCopy={ onCopy }
                >
                    { __( 'Copy', 'block-options' ) }
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
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitCopyOptions' ),
		};
    } ),
    withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );

		return {
			onCopy() {
				const selectedBlocks = select( 'core/block-editor' ).getMultiSelectedBlocks();
				let notice = __( 'Selected block copied.', 'block-options' );
				// if ( size( selectedBlocks ) > 0 ) {
				// 	notice = __( 'Selected blocks copied.', 'block-options' );
				// }

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
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} ),
	withSpokenMessages,
)( UAGCopyBlocks );


registerPlugin( 'uag-copy', {
    render: displayUAGCopySettingConditionally,
} );
