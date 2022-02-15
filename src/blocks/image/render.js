import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { ToolbarButton } from '@wordpress/components';
import { useSelect, useDispatch  } from '@wordpress/data';
import { upload } from '@wordpress/icons';
import {
	BlockAlignmentControl,
	BlockControls,
	store as blockEditorStore,
	BlockIcon,
	MediaPlaceholder,
	useBlockProps
} from '@wordpress/block-editor';
import { useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useDeviceType } from '@Controls/getPreviewType';
import { image as icon } from '@wordpress/icons';
import Image from './image'

/**
 * Internal dependencies
 */
import {pickRelevantMediaFiles, isTemporaryImage, isExternalImage, hasDefaultSize, isMediaDestroyed} from './utils'


/**
 * Module constants
 */
 import {
	LINK_DESTINATION_ATTACHMENT,
	LINK_DESTINATION_CUSTOM,
	LINK_DESTINATION_MEDIA,
	LINK_DESTINATION_NONE,
	ALLOWED_MEDIA_TYPES,
} from './constants';

const propTypes = {};

const defaultProps = {};

const render = (props) => {
	props = props.parentProps;
	const {
		attributes,
		setAttributes,
		className,
		isSelected,
		insertBlocksAfter,
		onReplace,
		context,
		clientId
	} = props;

	const {
		block_id,
		url,
		alt,
		caption,
		align,
		id,
	} = attributes

	const deviceType = useDeviceType();
	const { createNotice } = useDispatch( 'core/notices' );
	const [ temporaryURL, setTemporaryURL ] = useState();
	const [ externalBlob, setExternalBlob ] = useState();

	const altRef = useRef();
	useEffect( () => {
		altRef.current = alt;
	}, [ alt ] );

	const captionRef = useRef();
	useEffect( () => {
		captionRef.current = caption;
	}, [ caption ] );

	const ref = useRef();
	const { imageDefaultSize, mediaUpload } = useSelect( ( select ) => {
		const { getSettings } = select( blockEditorStore );
		const {imageDefaultSize, mediaUpload} = getSettings();
		return {imageDefaultSize, mediaUpload}
	}, [] );

	// A callback passed to MediaUpload,
	// fired when the media modal closes.
	function onCloseModal() {
		if ( isMediaDestroyed( attributes?.id ) ) {
			setAttributes( {
				url: undefined,
				id: undefined,
			} );
		}
	}

	/*
		Runs an error callback if the image does not load.
		If the error callback is triggered, we infer that that image
		has been deleted.
	*/
	function onImageError( isReplaced = false ) {
		// If the image block was not replaced with an embed,
		// clear the attributes and trigger the placeholder.
		if ( ! isReplaced ) {
			setAttributes( {
				url: undefined,
				id: undefined,
			} );
		}
	}

	function onUploadError( message ) {
		createNotice(
			'error',
			message,
			{
				type: 'snackbar'
			}
		);
	}

	function onSelectImage( media ) {
		if ( ! media || ! media.url ) {
			setAttributes( {
				url: undefined,
				alt: undefined,
				id: undefined,
				title: undefined,
				caption: undefined,
			} );

			return;
		}

		if ( isBlobURL( media.url ) ) {
			setTemporaryURL( media.url );
			return;
		}

		setTemporaryURL();

		let mediaAttributes = pickRelevantMediaFiles( media, imageDefaultSize );

		// If a caption text was meanwhile written by the user,
		// make sure the text is not overwritten by empty captions.
		if ( captionRef.current && ! get( mediaAttributes, [ 'caption' ] ) ) {
			mediaAttributes = omit( mediaAttributes, [ 'caption' ] );
		}

		let additionalAttributes;
		// Reset the dimension attributes if changing to a different image.
		if ( ! media.id || media.id !== id ) {
			additionalAttributes = {
				width: undefined,
				height: undefined,
				// Fallback to size "full" if there's no default image size.
				// It means the image is smaller, and the block will use a full-size URL.
				sizeSlug: hasDefaultSize( media, imageDefaultSize )
					? imageDefaultSize
					: 'full',
			};
		} else {
			// Keep the same url when selecting the same file, so "Image Size"
			// option is not changed.
			additionalAttributes = { url };
		}

		// Check if default link setting should be used.
		let linkDestination = attributes.linkDestination;
		if ( ! linkDestination ) {
			// Use the WordPress option to determine the proper default.
			// The constants used in Gutenberg do not match WP options so a little more complicated than ideal.
			// TODO: fix this in a follow up PR, requires updating media-text and ui component.
			switch (
				wp?.media?.view?.settings?.defaultProps?.link ||
				LINK_DESTINATION_NONE
			) {
				case 'file':
				case LINK_DESTINATION_MEDIA:
					linkDestination = LINK_DESTINATION_MEDIA;
					break;
				case 'post':
				case LINK_DESTINATION_ATTACHMENT:
					linkDestination = LINK_DESTINATION_ATTACHMENT;
					break;
				case LINK_DESTINATION_CUSTOM:
					linkDestination = LINK_DESTINATION_CUSTOM;
					break;
				case LINK_DESTINATION_NONE:
					linkDestination = LINK_DESTINATION_NONE;
					break;
			}
		}

		// Check if the image is linked to it's media.
		let href;
		switch ( linkDestination ) {
			case LINK_DESTINATION_MEDIA:
				href = media.url;
				break;
			case LINK_DESTINATION_ATTACHMENT:
				href = media.link;
				break;
		}
		mediaAttributes.href = href;

		setAttributes( {
			...mediaAttributes,
			...additionalAttributes,
			linkDestination,
		} );
	}

	function onSelectURL( newURL ) {
		if ( newURL !== url ) {
			setAttributes( {
				url: newURL,
				id: undefined,
				width: undefined,
				height: undefined,
				sizeSlug: imageDefaultSize,
			} );
		}
	}

	function updateAlignment( nextAlign ) {
		const extraUpdatedAttributes = [ 'wide', 'full' ].includes( nextAlign )
			? { width: undefined, height: undefined }
			: {};
		setAttributes( {
			...extraUpdatedAttributes,
			align: nextAlign,
		} );
	}

	let isTemp = isTemporaryImage( id, url );

	// Upload a temporary image on mount.
	useEffect( () => {
		if ( ! isTemp ) {
			return;
		}

		const file = getBlobByURL( url );

		if ( file ) {
			mediaUpload( {
				filesList: [ file ],
				onFileChange: ( [ img ] ) => {
					onSelectImage( img );
				},
				allowedTypes: ALLOWED_MEDIA_TYPES,
				onError: ( message ) => {
					isTemp = false;
					createNotice(
						'error',
						message,
						{
							type: 'snackbar'
						}
					);
					setAttributes( {
						src: undefined,
						id: undefined,
						url: undefined,
					} );
				},
			} );
		}
	}, [] );

	// If an image is temporary, revoke the Blob url when it is uploaded (and is
	// no longer temporary).
	useEffect( () => {
		if ( isTemp ) {
			setTemporaryURL( url );
			return;
		}
		revokeBlobURL( temporaryURL );
	}, [ isTemp, url ] );

	const isExternal = isExternalImage( id, url );
	const src = isExternal ? url : undefined;
	const mediaPreview = !! url && (
		<img
			alt={ __( 'Edit image' ) }
			title={ __( 'Edit image' ) }
			className={ 'edit-image-preview' }
			src={ url }
		/>
	);


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
				onSelectImage( img );

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


	const blockProps = useBlockProps( {
		ref,
	} );

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
			</BlockControls>
			<figure {...blockProps} className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`,
				`wp-block-uagb-image-align-${align}`
			) }>
				{ ( temporaryURL || url ) && (
					<Image
						temporaryURL={ temporaryURL }
						attributes={ attributes }
						setAttributes={ setAttributes }
						isSelected={ isSelected }
						insertBlocksAfter={ insertBlocksAfter }
						onReplace={ onReplace }
						onSelectImage={ onSelectImage }
						onSelectURL={ onSelectURL }
						onUploadError={ onUploadError }
						containerRef={ ref }
						context={ context }
						clientId={ clientId }
						onCloseModal={ onCloseModal }
						onImageLoadError={ onImageError }
					/>
				) }
				{ ! url && (
					<BlockControls group="block">
						<BlockAlignmentControl
							value={ align }
							onChange={ updateAlignment }
						/>
					</BlockControls>
				) }
				<MediaPlaceholder
					icon={ <BlockIcon icon={ icon } /> }
					onSelect={ onSelectImage }
					onSelectURL={ onSelectURL }
					onError={ onUploadError }
					onClose={ onCloseModal }
					accept="image/*"
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ { id, src } }
					mediaPreview={ mediaPreview }
					disableMediaButtons={ temporaryURL || url }
				/>
			</figure>
		</React.Fragment>
	);
}

render.propTypes = propTypes;
render.defaultProps = defaultProps;

export default render
