import renderSVG from '@Controls/renderIcon';
 
 /**
  * WordPress dependencies
  */
import { __ } from '@wordpress/i18n';
import { select, withSelect, withDispatch } from '@wordpress/data';
import { Fragment, Component } from '@wordpress/element';
import { withSpokenMessages, ClipboardButton } from '@wordpress/components';
import { compose, ifCondition } from '@wordpress/compose';
import { serialize } from '@wordpress/blocks';
import { ToolbarGroup } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

const UAGCopyBlocks = (props) => {

    const {
        onCopy,
        selectedBlock,
    } = props;

    const selectedBlocks = select( 'core/block-editor' ).getMultiSelectedBlocks();

   //  if ( ! selectedBlock && size( selectedBlocks ) < 1 ) {
   //      return false;
   //  }

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

       //  if ( size( selectedBlocks ) > 0 ) {
       //      cloned = serialize( selectedBlocks );
       //  }

        return cloned;
    }

    return (
        <BlockControls>
            <ToolbarGroup className="uag-copy">
                <ClipboardButton
                        text={ getSelection() }
                        icon={ renderSVG( icon ) }
                        onCopy={ onCopy }
                    >
                        { __( 'Copy', 'ultimate-addons-for-gutenberg' ) }
                </ClipboardButton>
            </ToolbarGroup>
        </BlockControls>
    );
};
 
 const displayUAGCopySettingConditionally = compose(
     withSelect( () => {
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
                 let notice = __( 'Selected block copied.', 'ultimate-addons-for-gutenberg' );
                //  if ( size( selectedBlocks ) > 0 ) {
                //      notice = __( 'Selected blocks copied.', 'ultimate-addons-for-gutenberg' );
                //  }
 
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
 
 addFilter(
    'editor.BlockEdit',
    'uag-copy',
    displayUAGCopySettingConditionally
);