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
import './filters';

const GlobalBlockStyles = (props) => {
   // Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

    const [ isOpen, setOpen ] = useState( false );
    const [ uniqueID, setUniqueID ] = useState( '' );

	const openModal = () => setOpen( true );
	const closeModal = () => setOpen( false );

    const {
        attributes,
        setAttributes,
        innerBlocks
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
    
    let spectraGlobalStyles = [
        {
            value: '',
            label: 'None'
        }
    ]
    const uagLocalStorage = getUAGEditorStateLocalStorage();

    if ( uagLocalStorage ) {
        const spectraGlobalStylesObject = JSON.parse(uagLocalStorage.getItem( 'spectraGlobalStyles' )) || [];
        if ( spectraGlobalStylesObject.length === 0 ) {

            spectraGlobalStyles = [
                ...spectraGlobalStyles,
                ...spectraGlobalStylesObject
            ]
        } else {
            spectraGlobalStyles = [
                ...spectraGlobalStylesObject
            ]
        }
    }

    const getBlockStyles = () => {
        let styles = {};
        const blockName = name.replace( 'uagb/', '' );
        const allBlocksAttributes = wp.hooks.applyFilters( 'uagb.blocksAttributes', blocksAttributes );
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

        let spectraGlobalStylesStoreObject = JSON.parse(uagLocalStorage.getItem( 'spectraGlobalStyles' )) || [];

        spectraGlobalStylesStoreObject.map( ( style ) => {

            if ( style.value == uniqueID ) {
                style['styles'] = styles;
            }

            return style;

        } );

        uagLocalStorage.setItem(
            'spectraGlobalStyles',
            JSON.stringify(spectraGlobalStylesStoreObject)
        )
        
    };

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
                                openModal();
                                setUniqueID(new Date().getTime().toString());
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
                                    let label = '';
                                    for (var i = 0; i < spectraGlobalStyles.length; i++) {
                                        if ( spectraGlobalStyles[i]?.value == value ) {
                                            label = spectraGlobalStyles[i]?.label;
                                            break;
                                        }
                                    }
                                    setAttributes( 
                                        { 
                                            globalBlockStyleId: value,
                                            globalBlockStyleName: label 
                                        } 
                                    );

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
                                setAttributes( 
                                    { 
                                        globalBlockStyleName: value,
                                        globalBlockStyleId: uniqueID 
                                    } 
                                )
                            } }
                            showHeaderControls={false}
                        />
                        <button 
                            onClick={ () => {
                                spectraGlobalStyles = [
                                    ...spectraGlobalStyles,
                                    {
                                        value: uniqueID,
                                        label: globalBlockStyleName
                                    }
                                ]
                                uagLocalStorage.setItem(
                                    'spectraGlobalStyles',
                                    JSON.stringify(spectraGlobalStyles)
                                )
                                closeModal();
                                getBlockStyles();

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
                                    let label = '';
                                    for (var i = 0; i < spectraGlobalStyles.length; i++) {
                                        if ( spectraGlobalStyles[i]?.value == value ) {
                                            label = spectraGlobalStyles[i]?.label;
                                            break;
                                        }
                                    }
                                    setAttributes( 
                                        { 
                                            globalBlockStyleId: value,
                                            globalBlockStyleName: label 
                                        } 
                                    );
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