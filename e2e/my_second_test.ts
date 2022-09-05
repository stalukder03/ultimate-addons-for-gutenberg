import { test, expect } from '@playwright/test';

test( 'first', async ( { page } ) => {
    await page.goto( 'http://localhost:8888/wp-admin/options-general.php?page=spectra' );
  
    const spectrax = page.locator( 'text=Welcome to Spectra!' );
  
    await expect( spectrax ).toContainText( 'Welcome to Spectra!' )
    
  } );