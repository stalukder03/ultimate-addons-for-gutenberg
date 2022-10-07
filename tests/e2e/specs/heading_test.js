import {
	insertBlock,
	createNewPost,
	closeGlobalBlockInserter,
    publishPost,
    createURL,
} from '@wordpress/e2e-test-utils';


describe( 'columns in gutenberg editor', () => {
	it( 'assert wide width of the columns in the block editor', async () => {
		await createNewPost( {
			'postType': 'post',
			'title': 'test heading',
		} );
        await insertBlock( 'uagb/advanced-heading' );
        await closeGlobalBlockInserter();
        await page.click( '#editor > div > div.edit-post-layout.is-mode-visual.is-sidebar-opened.interface-interface-skeleton.has-footer > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div.components-panel > div > div:nth-child(2) > div.uagb-inspector-tab.uagb-tab-content-general > div > div.components-base-control.uagb-multi-buttons-control.uag-multibutton-icons.spectra-multi-buttons__color-scheme--primary.spectra-multi-buttons__layout--full > div.components-button-group.uagb-multi-button-button-group > button.components-button.uagb-multi-button.is-primary' );
        await publishPost();
        await page.goto( createURL( '/test-heading' ), {
			'waitUntil': 'networkidle0',
		} );
        await expect( {
			'selector':
				'.uagb-block-82ff84f3.wp-block-uagb-advanced-heading',
			'property': 'text-align',
		} ).cssValueToBe( `left` );
    } );
} );