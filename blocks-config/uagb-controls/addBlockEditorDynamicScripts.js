/*
ISSUES:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
01. Mulit-loading scripts. ------------------------------------------ RESOLVED
02. Slick needs jQuery to be loaded. -------------------------------- RESOLVED
03. Attribute Altering and React Effects are Broken.
04. blockJS is not required and needs to be removed. ---------------- RESOLVED
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

/*
TEST CODE ( For Post Masonry Isotope ):
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const element = document.querySelector( '.wp-block-uagb-post-masonry ' );
const isotope = new Isotope( element, {
	itemSelector: 'article.uagb-post__inner-wrap',
	layoutMode: 'masonry',
} );
isotope.layout();
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const addBlockEditorDynamicScripts = ( dependencies = [] ) => {

    const scriptLoaded = ( id ) => {
        console.log( `${ id } has been loaded.`);
    };

    // Desktop scripts are already enqueued.

    // Get Tablet / Mobile iFrame
    const tabletPreview = document.getElementsByClassName( 'is-tablet-preview' );
    const mobilePreview = document.getElementsByClassName( 'is-mobile-preview' );

    if ( 0 !== tabletPreview.length || 0 !== mobilePreview.length ) {

        const preview = tabletPreview[ 0 ] || mobilePreview[ 0 ];

        const iframe = preview.getElementsByTagName( 'iframe' )[ 0 ];
        const iframeDocument = iframe.contentWindow.document || iframe.contentDocument;

            // Dependency JS Files.
            for ( let i = 0; i < dependencies.length; i++ ) {
				if ( iframeDocument.getElementById( dependencies[ i ] ) ) {
					continue;
				}
                const tempScriptTag = document.getElementById( dependencies[ i ] );
				let cloneTempScriptTag = false;
				if ( tempScriptTag ) {
					// cloneTempScriptTag = tempScriptTag.cloneNode( true );
                    cloneTempScriptTag = document.createElement( 'script' );
                    cloneTempScriptTag.id = tempScriptTag.id;
                    cloneTempScriptTag.src = tempScriptTag.src;
                    cloneTempScriptTag.onload = scriptLoaded( cloneTempScriptTag.id );
				}
				if ( tempScriptTag ) {
					iframeDocument.head.appendChild( cloneTempScriptTag );
				}
            }
        // }
    }
}

export default addBlockEditorDynamicScripts;
