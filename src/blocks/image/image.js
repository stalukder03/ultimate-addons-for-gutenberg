/**
 * WordPress dependencies
 */
import { isBlobURL } from '@wordpress/blob';
import {
	ExternalLink,
	PanelBody,
	ResizableBox,
	Spinner,
	TextareaControl,
	TextControl,
	ToolbarButton,
} from '@wordpress/components';
import { useViewportMatch, usePrevious } from '@wordpress/compose';
import { useSelect, useDispatch } from '@wordpress/data';
import {
	BlockControls,
	InspectorControls,
	RichText,
	__experimentalImageSizeControl as ImageSizeControl,
	__experimentalImageURLInputUI as ImageURLInputUI,
	MediaReplaceFlow,
	store as blockEditorStore,
	BlockAlignmentControl,
	__experimentalImageEditor as ImageEditor,
	__experimentalImageEditingProvider as ImageEditingProvider,
} from '@wordpress/block-editor';
import { useEffect, useMemo, useState, useRef } from '@wordpress/element';
import { __, sprintf, isRTL } from '@wordpress/i18n';
import { getFilename } from '@wordpress/url';
import { crop, overlayText, upload } from '@wordpress/icons';
import { store as noticesStore } from '@wordpress/notices';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import useClientWidth from './use-client-width';
import { isExternalImage, isMediaDestroyed } from './utils';

/**
 * Module constants
 */
import { MIN_SIZE, ALLOWED_MEDIA_TYPES } from './constants';


export default function Image( {
	temporaryURL,
	attributes: {
		url = '',
		alt,
		caption,
		align,
		id,
		href,
		rel,
		linkClass,
		linkDestination,
		title,
		width,
		height,
		linkTarget,
		sizeSlug,
	},
	setAttributes,
	isSelected,
	insertBlocksAfter,
	onReplace,
	onCloseModal,
	onSelectImage,
	onSelectURL,
	onUploadError,
	containerRef,
	context,
	clientId,
	onImageLoadError,
} ) {
	const imageRef = useRef();
	const captionRef = useRef();
	const prevUrl = usePrevious( url );
	const { allowResize = true } = context;
	const { getBlock } = useSelect( blockEditorStore );
	const { replaceBlocks, toggleSelection } = useDispatch( blockEditorStore );

	const { image, multiImageSelection } = useSelect(
		( select ) => {
			const { getMedia } = select( coreStore );
			const { getMultiSelectedBlockClientIds, getBlockName } = select(
				blockEditorStore
			);
			const multiSelectedClientIds = getMultiSelectedBlockClientIds();
			return {
				image: id && isSelected ? getMedia( id ) : null,
				multiImageSelection:
					multiSelectedClientIds.length &&
					multiSelectedClientIds.every(
						( _clientId ) =>
							getBlockName( _clientId ) === 'core/image'
					),
			};
		},
		[ id, isSelected ]
	);

	const {
		canInsertCover,
		imageEditing,
		imageSizes,
		maxWidth,
		mediaUpload,
	} = useSelect(
		( select ) => {
			const {
				getBlockRootClientId,
				getSettings,
				canInsertBlockType,
			} = select( blockEditorStore );

			const rootClientId = getBlockRootClientId( clientId );
			const {imageEditing, imageSizes, maxWidth, mediaUpload} = getSettings()

			return {
				imageEditing,
				imageSizes,
				maxWidth,
				mediaUpload,
				canInsertCover: canInsertBlockType(
					'core/cover',
					rootClientId
				),
			};
		},
		[ clientId ]
	);



	const isLargeViewport = useViewportMatch( 'medium' );
	const isWideAligned = [ 'wide', 'full' ].includes(align);
	const [
		{ loadedNaturalWidth, loadedNaturalHeight },
		setLoadedNaturalSize,
	] = useState( {} );
	const [ isEditingImage, setIsEditingImage ] = useState( false );
	const [ externalBlob, setExternalBlob ] = useState();
	const clientWidth = useClientWidth( containerRef, [ align ] );
	const isResizable = allowResize && ! ( isWideAligned && isLargeViewport );
	// const imageSizeOptions = map(
	// 	filter( imageSizes, ( { slug } ) =>
	// 		get( image, [ 'media_details', 'sizes', slug, 'source_url' ] )
	// 	),
	// 	( { name, slug } ) => ( { value: slug, label: name } )
	// );


	// Get naturalWidth and naturalHeight from image ref, and fall back to loaded natural
	// width and height. This resolves an issue in Safari where the loaded natural
	// witdth and height is otherwise lost when switching between alignments.
	const { naturalWidth, naturalHeight } = useMemo( () => {
		return {
			naturalWidth:
				imageRef.current?.naturalWidth ||
				loadedNaturalWidth ||
				undefined,
			naturalHeight:
				imageRef.current?.naturalHeight ||
				loadedNaturalHeight ||
				undefined,
		};
	}, [
		loadedNaturalWidth,
		loadedNaturalHeight,
		imageRef.current?.complete,
	] );



	const filename = getFilename( url );
	let defaultedAlt;

	if ( alt ) {
		defaultedAlt = alt;
	} else if ( filename ) {
		defaultedAlt = sprintf(
			/* translators: %s: file name */
			__( 'This image has an empty alt attribute; its file name is %s' ),
			filename
		);
	} else {
		defaultedAlt = __( 'This image has an empty alt attribute' );
	}

	let img = (
		// Disable reason: Image itself is not meant to be interactive, but
		// should direct focus to block.
		<>
			<img
				src={ temporaryURL || url }
				alt={ defaultedAlt }
				onError={ () => onImageError() }
				onLoad={ ( event ) => {
					setLoadedNaturalSize( {
						loadedNaturalWidth: event.target?.naturalWidth,
						loadedNaturalHeight: event.target?.naturalHeight,
					} );
				} }
				ref={ imageRef }
			/>
			{ temporaryURL && <Spinner /> }
		</>
	);

	let imageWidthWithinContainer;
	let imageHeightWithinContainer;

	if ( clientWidth && naturalWidth && naturalHeight ) {
		const exceedMaxWidth = naturalWidth > clientWidth;
		const ratio = naturalHeight / naturalWidth;
		imageWidthWithinContainer = exceedMaxWidth ? clientWidth : naturalWidth;
		imageHeightWithinContainer = exceedMaxWidth
			? clientWidth * ratio
			: naturalHeight;
	}

	const canEditImage = id && naturalWidth && naturalHeight && imageEditing;
	const allowCrop = ! multiImageSelection && canEditImage && ! isEditingImage;

	function onResizeStart() {
		toggleSelection( false );
	}

	function onResizeStop() {
		toggleSelection( true );
	}

	if ( canEditImage && isEditingImage ) {
		img = (
			<ImageEditor
				url={ url }
				width={ width }
				height={ height }
				clientWidth={ clientWidth }
				naturalHeight={ naturalHeight }
				naturalWidth={ naturalWidth }
			/>
		);
	} else if ( ! isResizable || ! imageWidthWithinContainer ) {
		img = <div style={ { width, height } }>{ img }</div>;
	} else {
		const currentWidth = width || imageWidthWithinContainer;
		const currentHeight = height || imageHeightWithinContainer;

		const ratio = naturalWidth / naturalHeight;
		const minWidth =
			naturalWidth < naturalHeight ? MIN_SIZE : MIN_SIZE * ratio;
		const minHeight =
			naturalHeight < naturalWidth ? MIN_SIZE : MIN_SIZE / ratio;

		// With the current implementation of ResizableBox, an image needs an
		// explicit pixel value for the max-width. In absence of being able to
		// set the content-width, this max-width is currently dictated by the
		// vanilla editor style. The following variable adds a buffer to this
		// vanilla style, so 3rd party themes have some wiggleroom. This does,
		// in most cases, allow you to scale the image beyond the width of the
		// main column, though not infinitely.
		// @todo It would be good to revisit this once a content-width variable
		// becomes available.
		const maxWidthBuffer = maxWidth * 2.5;

		let showRightHandle = false;
		let showLeftHandle = false;

		/* eslint-disable no-lonely-if */
		// See https://github.com/WordPress/gutenberg/issues/7584.
		if ( align === 'center' ) {
			// When the image is centered, show both handles.
			showRightHandle = true;
			showLeftHandle = true;
		} else if ( isRTL() ) {
			// In RTL mode the image is on the right by default.
			// Show the right handle and hide the left handle only when it is
			// aligned left. Otherwise always show the left handle.
			if ( align === 'left' ) {
				showRightHandle = true;
			} else {
				showLeftHandle = true;
			}
		} else {
			// Show the left handle and hide the right handle only when the
			// image is aligned right. Otherwise always show the right handle.
			if ( align === 'right' ) {
				showLeftHandle = true;
			} else {
				showRightHandle = true;
			}
		}
		/* eslint-enable no-lonely-if */

		img = (
			<ResizableBox
				size={ {
					width: width ? width : 'auto',
					height: height ? height : 'auto',
				} }
				showHandle={ isSelected }
				minWidth={ minWidth }
				maxWidth={ maxWidthBuffer }
				minHeight={ minHeight }
				maxHeight={ maxWidthBuffer / ratio }
				lockAspectRatio
				enable={ {
					top: false,
					right: showRightHandle,
					bottom: true,
					left: showLeftHandle,
				} }
				onResizeStart={ onResizeStart }
				onResizeStop={ ( event, direction, elt, delta ) => {
					onResizeStop();
					setAttributes( {
						width: parseInt( currentWidth + delta.width, 10 ),
						height: parseInt( currentHeight + delta.height, 10 ),
					} );
				} }
			>
				{ img }
			</ResizableBox>
		);
	}

	return (
		<>
			<ImageEditingProvider
				id={ id }
				url={ url }
				naturalWidth={ naturalWidth }
				naturalHeight={ naturalHeight }
				clientWidth={ clientWidth }
				onSaveImage={ ( imageAttributes ) =>
					setAttributes( imageAttributes )
				}
				isEditing={ isEditingImage }
				onFinishEditing={ () => setIsEditingImage( false ) }
			>
				{ img }
			</ImageEditingProvider>
		</>
	);
}
