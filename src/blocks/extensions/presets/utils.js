
import apiFetch from '@wordpress/api-fetch';
import {__} from '@wordpress/i18n';

export const getChangeAttributes = ( defaultAttributes, attributes ) => {
	const excludeAttributeList = ['block_id', 'dynamicContent']
	return Object.entries( attributes ).reduce( ( acc, entry ) => {
		if( !excludeAttributeList.includes( entry[0] ) ){
			const currentValue = defaultAttributes[entry[0]]
			if( currentValue ){
				if( currentValue.default === undefined || ( currentValue.default !== undefined && currentValue.default !== entry[1] ) ){
					acc.push( {label: entry[0], value: entry[1]} )
				}
			}
		}
		return acc;
	}, [] );
}

export const download = ( fileName, content, contentType ) => {
	const file = new window.Blob( [ content ], { type: contentType } );

	// IE11 can't use the click to download technique
	// we use a specific IE11 technique instead.
	if ( window.navigator.msSaveOrOpenBlob ) {
		window.navigator.msSaveOrOpenBlob( file, fileName );
	} else {
		const a = document.createElement( 'a' );
		a.href = URL.createObjectURL( file );
		a.download = fileName;
		a.style.display = 'none';
		document.body.appendChild( a );
		a.click();
		document.body.removeChild( a );
	}
};
export const exportPresets = async( blockName, createNotice ) => {
	let presets;

	try {
		presets = await apiFetch( { path: '/uagpro/v1/presets?block_name=' + blockName } );
	} catch ( error ) {
		if ( error.message ) {
			createNotice( 'error', error.message, {
				type: 'snackbar'
			} );
		}
		return;
	}

	const fileName = blockName + '-presets.json';

	const data = {
		__file: 'uagpro_presets',
		version: 1,
		presets
	};


	const fileContent = JSON.stringify( { ...data }, null, 2 );

	createNotice(
		'success',
		__( 'Presets exported.', 'uag-pro' ),
		{
			type: 'snackbar'
		}
	);

	download( fileName, fileContent, 'application/json' );
};
