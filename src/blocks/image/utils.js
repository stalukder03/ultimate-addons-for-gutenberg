import { isBlobURL } from '@wordpress/blob';

export const pickRelevantMediaFiles = ( image, size ) => {
	const {alt, id, link, caption} = image
	const imageProps = {alt, id, link, caption}
	imageProps.url = image.url
	return imageProps;
};

/**
 * Is the URL a temporary blob URL? A blob URL is one that is used temporarily
 * while the image is being uploaded and will not have an id yet allocated.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the URL a Blob URL
 */
export const isTemporaryImage = ( id, url ) => ! id && isBlobURL( url );

/**
 * Is the url for the image hosted externally. An externally hosted image has no
 * id and is not a blob url.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the url an externally hosted url?
 */
export const isExternalImage = ( id, url ) => url && ! id && ! isBlobURL( url );

/**
 * Checks if WP generated default image size. Size generation is skipped
 * when the image is smaller than the said size.
 *
 * @param {Object} image
 * @param {string} defaultSize
 *
 * @return {boolean} Whether or not it has default image size.
 */
export const hasDefaultSize = ( image, defaultSize ) => {
	return image.hasOwnProperty('sizes') || image.hasOwnProperty('url') || image.hasOwnProperty('media_details') || image.hasOwnProperty('source_url') || image[defaultSize] !== undefined
}

/**
 * Checks if a media attachment object has been "destroyed",
 * that is, removed from the media library. The core Media Library
 * adds a `destroyed` property to a deleted attachment object in the media collection.
 *
 * @param {number} id The attachment id.
 *
 * @return {boolean} Whether the image has been destroyed.
 */
export const isMediaDestroyed = ( id ) => {
	const attachment = wp?.media?.attachment( id ) || {};
	return attachment.destroyed;
}


export function onSelectImage( media, setAttributes, setTemporaryURL  ) {
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
