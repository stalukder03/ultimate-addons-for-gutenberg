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
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';
import UAGSelectControl from '@Components/select-control';

import './attributes';

const GlobalBlockStyles = (props) => {
   // Add and remove the CSS on the drop and remove of the component.
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
        globalBlockStyleName,
        globalBlockStyleId
    } = attributes;

    const selectedBlockData = getSelectedBlock();

    const {
        name,
        clientId
    } = selectedBlockData;
    

	const allBlocksAttributes = wp.hooks.applyFilters( 'uagb.blocksAttributes', blocksAttributes )
    let spectraGlobalStyles = [
        {
            value: '',
            label: 'None'
        }
    ]
    const uagLocalStorage = getUAGEditorStateLocalStorage();
    if ( uagLocalStorage ) {
        spectraGlobalStyles = JSON.parse(uagLocalStorage.getItem( 'spectraGlobalStyles' )) || [];
        spectraGlobalStyles = [
            ...spectraGlobalStyles,
            {
                value: '',
                label: 'None'
            }
        ]
    }
    
    const uniqueKey = new Date().getTime();

    console.log(spectraGlobalStyles);
    return (
        <UAGAdvancedPanelBody
            title={ __( 'Global Block Styles', 'ultimate-addons-for-gutenberg' ) }
            initialOpen={ false }
        >
            {
                ( ! globalBlockStyleName || '' === globalBlockStyleName ) && (
                    <>
                        <Button
                            className="spectra-save-block-styles-button components-base-control"
                            onClick={ () => {
                                console.log("Button Clicked");
                                openModal();
                            } }
                            variant="primary"
                        >
                            { __( 'Save as a New Global Block Style', 'ultimate-addons-for-gutenberg' ) }
                        </Button>
                        <UAGSelectControl
                            label={ __(
                                'Link to Existing Style',
                                'ultimate-addons-for-gutenberg'
                            ) }
                            data={ {
                                value: globalBlockStyleId,
                                label: 'globalBlockStyleId',
                            } }
                            onChange = {
                                (value) => {
                                    console.log(value);
                                    setAttributes( { globalBlockStyleId: value } )
                                    for (var i = 0; i < spectraGlobalStyles.length; i++) {
                                        console.log(spectraGlobalStyles[i]?.value);
                                        console.log(value);
                                        if ( spectraGlobalStyles[i]?.value == value ) {
                                            setAttributes( { globalBlockStyleName: spectraGlobalStyles[i]?.label } )
                                          break;
                                        }
                                    }
                                }
                            }
                            layout="stack"
                            options={ spectraGlobalStyles }
                        />
                    </>
                )
            }
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
                            onChange={ ( value ) => {
                                console.log(value);
                                setAttributes( { globalBlockStyleName: value } )
                            } }
                            showHeaderControls={false}
                        />
                        <button 
                            onClick={ () => {
                                console.log("Button Clicked");
                                console.log(globalBlockStyleName);
                                spectraGlobalStyles = [
                                    ...spectraGlobalStyles,
                                    {
                                        value: uniqueKey,
                                        label: globalBlockStyleName
                                    }
                                ]
                                uagLocalStorage.setItem(
                                    'spectraGlobalStyles',
                                    JSON.stringify(spectraGlobalStyles)
                                )
                                closeModal();

                            } }
                        >
                            <p> { __( 'Save', 'ultimate-addons-for-gutenberg' ) }</p>
                        </button>
                    </div>
				</Modal>
			) }
            {
                (globalBlockStyleName && '' !== globalBlockStyleName ) && (
                    <>
                        <p> {__( 'This is a Global Styles Linked Block', 'ultimate-addons-for-gutenberg' ) }</p>
                        <UAGSelectControl
							label={ __(
								'Linked Style',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: globalBlockStyleId,
								label: 'globalBlockStyleId',
							} }
                            onChange = {
                                (value) => {
                                    console.log(value);
                                }
                            }
							options={ spectraGlobalStyles }
                            layout="stack"
						/>
                    </>
                )
            }
        </UAGAdvancedPanelBody>
    );
};

export default GlobalBlockStyles;