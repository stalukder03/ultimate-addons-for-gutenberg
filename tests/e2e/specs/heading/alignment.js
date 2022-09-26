import {
	insertBlock,
	createNewPost,
	closeGlobalBlockInserter,
    createURL,
    publishButton,
    openDocumentSettingsSidebar
} from '@wordpress/e2e-test-utils';

describe( 'heading alignment test', () => {
	it( 'assert the alignment of heading', async () => {
		await createNewPost( {
			'postType': 'page',
			'title': 'heading alignment',
		} );
		await insertBlock( 'Heading' );
		await closeGlobalBlockInserter();
        await openDocumentSettingsSidebar();
		//await page.click( 'button[aria-label="Settings"]' );
        await publishButton.click();
		await page.goto( createURL( '/heading-alignment' ) );
        await expect( {
			'selector':
			    '.uagb-block-48e3d9c2.wp-block-uagb-advanced-heading',
			'property': 'text-align',
		} ).cssValueToBe( `left` );
	} );
} );
