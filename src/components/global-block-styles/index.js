import React, { useLayoutEffect } from 'react';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
const { getSelectedBlock } = select( 'core/block-editor' );
import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import { select, useDispatch } from '@wordpress/data';
import { ButtonGroup, Button, Tooltip, Modal  } from '@wordpress/components';
import UAGTextControl from '@Components/text-control';

const GlobalBlockStyles = (props) => {

    useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

    const [ isOpen, setOpen ] = useState( false );
    const [ blockStyleName, setBlockStyleName ] = useState( '' );

	const openModal = () => setOpen( true );
	const closeModal = () => setOpen( false );

    const {
        attributes,
        setAttributes
    } = props;

    const {
        globalBlockStyleName
    } = attributes;

    const selectedBlockData = getSelectedBlock();

    const {
        name,
        clientId
    } = selectedBlockData;
    

	const allBlocksAttributes = wp.hooks.applyFilters( 'uagb.blocksAttributes', blocksAttributes )

    return (
        <UAGAdvancedPanelBody
            title={ __( 'Global Block Styles', 'ultimate-addons-for-gutenberg' ) }
            initialOpen={ false }
        >
            <Button
                className="spectra-save-block-styles-button"
                onClick={ () => {
                    console.log("Button Clicked");
                    openModal();
                } }
                variant="primary"
            >
                { __( 'Save as a Global Block Style', 'ultimate-addons-for-gutenberg' ) }
            </Button>
            { isOpen && (
                    <Modal 
                        title={ __( 'Save as a Global Block Style', 'ultimate-addons-for-gutenberg' ) } onRequestClose={ closeModal }
                        className="spectra-global-block-style-name-modal"
                    >
                    <p> { __( 'You\'ll be able to add this global style to multiple areas on your site.', 'ultimate-addons-for-gutenberg' ) }</p>
                    <div className="button-input-wrap">
                        <UAGTextControl
                            label={ __(
                                'Style Name',
                                'ultimate-addons-for-gutenberg'
                            ) }
                            value={ globalBlockStyleName }
                            setAttributes={ setAttributes }
                            onChange={ ( value ) => {
                                setAttributes( { globalBlockStyleName: value } )
                            } }
                            showHeaderControls={false}
                        />
                        <Button variant="secondary" onClick={ closeModal }>
                            <p> { __( 'Save', 'ultimate-addons-for-gutenberg' ) }</p>
                        </Button>
                    </div>
				</Modal>
			) }
        </UAGAdvancedPanelBody>
    );
};

export default GlobalBlockStyles;