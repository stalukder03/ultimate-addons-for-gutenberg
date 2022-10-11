import {
	searchForBlock,
	focusSelectedBlock,
	waitForInserterCloseAndContentFocus,
	createNewPost,
	closeGlobalBlockInserter,
    publishPost,
    createURL,
} from '@wordpress/e2e-test-utils';


describe( 'heading in gutenberg editor', () => {
	it( 'assert wide width of the columns in the block editor', async () => {
		await createNewPost( {
			'postType': 'post',
			'title': 'test heading',
		} );
		const searchTerm = 'Heading';
        await searchForBlock( searchTerm );
		const insertButton = await page.waitForXPath(
			`/html/body/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div/div[1]/div[1]/div[2]/div[1]/div/div[2]/div/div/div/div[3]/div/div/div[3]/button`
		);
		await insertButton.click();
        await closeGlobalBlockInserter();
        await publishPost();
        await page.goto( createURL( '/test-heading' ), {
			'waitUntil': 'networkidle0',
		} );
        await expect( {
			'selector':
				'.uagb-block-a92d7c60.wp-block-uagb-advanced-heading',
			'property': 'text-align',
		} ).cssValueToBe( `left` );
    } );
} );