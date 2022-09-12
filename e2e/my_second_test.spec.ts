import { test, expect } from '@playwright/test';

test.beforeEach( async ( { page } ) => {
  // Runs before each test and signs in each page.
    await page.goto( 'http://localhost:8888/wp-admin/' );
    await page.locator( 'text=Username or Email Address' ).click();
    await page.locator( 'input[name="log"]' ).fill( 'admin' );
    await page.locator( 'input[name="pwd"]' ).fill( 'password' );
    await page.locator( 'text=Log In' ).click();
} );

test( 'first', async ( { page } ) => {
    await page.goto( 'http://localhost:8888/wp-admin/options-general.php?page=spectra' );
  
    const spectrax = page.locator( 'text=Welcome to Spectra!' );
  
    await expect( spectrax ).toContainText( 'Welcome to Spectra!' )
    
  } );