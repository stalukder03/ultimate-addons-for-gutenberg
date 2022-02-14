import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { useSelect, useDispatch  } from '@wordpress/data';
import {
	store as blockEditorStore,
	BlockIcon,
	MediaPlaceholder,
	useBlockProps
} from '@wordpress/block-editor';
import { useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { image as icon } from '@wordpress/icons';
import Image from './image'

/**
 * Internal dependencies
 */
import {pickRelevantMediaFiles, isTemporaryImage, isExternalImage, hasDefaultSize, isMediaDestroyed, onSelectImage} from './utils'


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
		clientId,
	} = props;

	const {url,
		alt,
		caption,
		id,
		width,
		height,
		sizeSlug} = attributes

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
					onSelectImage( img, setAttributes, setTemporaryURL, createNotice );
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

	const classes = classnames( className, {
		'is-transient': temporaryURL,
		'is-resized': !! width || !! height,
		[ `size-${ sizeSlug }` ]: sizeSlug,
	} );

	const blockProps = useBlockProps( {
		ref,
		className: classes,
	} );

	return (
		<React.Fragment>
			<figure {...blockProps}>
				{ ( temporaryURL || url ) && (
					<Image
						temporaryURL={ temporaryURL }
						attributes={ attributes }
						setAttributes={ setAttributes }
						isSelected={ isSelected }
						insertBlocksAfter={ insertBlocksAfter }
						onReplace={ onReplace }
						onSelectImage={ (image) => onSelectImage(image, setAttributes, setTemporaryURL, createNotice) }
						onSelectURL={ onSelectURL }
						onUploadError={ onUploadError }
						containerRef={ ref }
						context={ context }
						clientId={ clientId }
						onCloseModal={ onCloseModal }
						onImageLoadError={ onImageError }
					/>
				) }
				<MediaPlaceholder
					icon={ <BlockIcon icon={ icon } /> }
					onSelect={ (image) => onSelectImage(image, setAttributes, setTemporaryURL, createNotice) }
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
