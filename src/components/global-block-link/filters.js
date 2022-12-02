import { addFilter } from '@wordpress/hooks';
import { select } from '@wordpress/data';

function addCustomAttributes( blockHtmlAttributes, blockAttributes ) {

    const { getSelectedBlock } = select( 'core/block-editor' );
    const blockName = getSelectedBlock()?.name;
	if ( ! blockName || ! blockName.includes( 'uagb' ) || ! blockAttributes?.globalBlockStyleName || ! blockAttributes?.globalBlockStyleId ) {
		return blockHtmlAttributes;
	}

    let blockNameClass = blockName?.split( '/' )?.pop();
	let id = `spectra-gbs-${blockNameClass}-${blockAttributes?.globalBlockStyleName}`;

    blockHtmlAttributes = Object.assign( blockHtmlAttributes, {
        className: blockHtmlAttributes.className + ' ' + id,
    } );
	
	return blockHtmlAttributes;
}

addFilter(
	'spectra.block.htmlAttributes',
	'spectra/global-block-styles/update-attributes',
	addCustomAttributes
);