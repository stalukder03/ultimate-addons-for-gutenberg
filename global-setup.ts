// global-setup.ts
// import { chromium } from '@playwright/test';

// async function globalSetup() {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   await page.goto( 'http://localhost:8888/wp-admin/' );
//   await page.locator( 'text=Username or Email Address' ).click();
//   await page.locator( 'input[name="log"]' ).fill( 'admin' );
//   await page.locator( 'input[name="pwd"]' ).fill( 'password' );
//   await page.locator( 'text=Log In' ).click();
//   await page.context().storageState( { path: 'storageState.json' } );
//   await browser.close();
// }

// export default globalSetup;