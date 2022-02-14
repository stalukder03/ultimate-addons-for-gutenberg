import React, {useState, useEffect} from 'react';
import {
	store as blockEditorStore,
	BlockAlignmentControl,
	BlockControls
} from '@wordpress/block-editor';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { useSelect, useDispatch  } from '@wordpress/data';
import { ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { upload } from '@wordpress/icons';
import {isExternalImage, onSelectImage} from './utils'
import PropTypes from 'prop-types';

/**
 * Module constants
 */
 import {
	ALLOWED_MEDIA_TYPES
} from './constants';

const propTypes = {};

const defaultProps = {};

export default function settings(props) {
	props = props.parentProps;
	const {
		attributes,
		isSelected,
		setAttributes
	} = props;

	const {
		url,
		align,
		alt,
		caption,
		id,
		width,
		height,
		sizeSlug
	} = attributes
	const [ externalBlob, setExternalBlob ] = useState();
	const [ temporaryURL, setTemporaryURL ] = useState();
	const { createNotice } = useDispatch( 'core/notices' );


	const { mediaUpload } = useSelect( ( select ) => {
		const { getSettings } = select( blockEditorStore );
		const {imageDefaultSize, mediaUpload} = getSettings();
		return {imageDefaultSize, mediaUpload}
	}, [] );

	// If an image is externally hosted, try to fetch the image data. This may
	// fail if the image host doesn't allow CORS with the domain. If it works,
	// we can enable a button in the toolbar to upload the image.
	useEffect( () => {
		if ( ! isExternalImage( id, url ) || ! isSelected || externalBlob ) {
			return;
		}

		window
			.fetch( url )
			.then( ( response ) => response.blob() )
			.then( ( blob ) => setExternalBlob( blob ) )
			// Do nothing, cannot upload.
			.catch( () => {} );
	}, [ id, url, isSelected, externalBlob ] );





	function updateAlignment( nextAlign ) {
		const extraUpdatedAttributes = [ 'wide', 'full' ].includes( nextAlign )
			? { width: undefined, height: undefined }
			: {};
		setAttributes( {
			...extraUpdatedAttributes,
			align: nextAlign,
		} );
	}

	function uploadExternal() {
		mediaUpload( {
			filesList: [ externalBlob ],
			onFileChange( [ img ] ) {
				onSelectImage( img, setAttributes, setTemporaryURL, createNotice );

				if ( isBlobURL( img?.url ) ) {
					return;
				}

				setExternalBlob();
				createNotice(
					'success',
					__( 'Image uploaded.' ),
					{
						type: 'snackbar'
					}
				);
			},
			allowedTypes: ALLOWED_MEDIA_TYPES,
			onError( message ) {
				createNotice(
					'error',
					message,
					{
						type: 'snackbar'
					}
				);
			},
		} );
	}


	return (
		<React.Fragment>
			<BlockControls group="block">
				<BlockAlignmentControl
					value={ align }
					onChange={ updateAlignment }
				/>
				{ externalBlob && (
					<ToolbarButton
						onClick={ uploadExternal }
						icon={ upload }
						label={ __( 'Upload external image' ) }
					/>
				) }
				{ ! url && (
					<BlockAlignmentControl
						value={ align }
						onChange={ updateAlignment }
					/>
				) }
			</BlockControls>
		</React.Fragment>
	);
}

settings.propTypes = propTypes;
settings.defaultProps = defaultProps;
