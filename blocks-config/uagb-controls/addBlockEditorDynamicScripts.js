const addBlockEditorDynamicScripts = ( dependencies = [] ) => {

    // Desktop scripts are already enqueued.

    // Get Tablet / Mobile iFrame
    const tabletPreview = document.getElementsByClassName( 'is-tablet-preview' );
    const mobilePreview = document.getElementsByClassName( 'is-mobile-preview' );

    if ( 0 !== tabletPreview.length || 0 !== mobilePreview.length ) {

        const preview = tabletPreview[ 0 ] || mobilePreview[ 0 ];
        const iframe = preview.querySelector( `iframe[name='editor-canvas']` );
        const iframeDocument = iframe.contentWindow.document || iframe.contentDocument;

        // Dependency JS Files.
        for ( let i = 0; i < dependencies.length; i++ ) {
            if ( iframeDocument.getElementById( dependencies[ i ] ) ) {
                console.log( iframeDocument.getElementById( dependencies[ i ] ) );
                continue;
            }
            const tempScriptTag = document.getElementById( dependencies[ i ] );
            let cloneTempScriptTag = false;
            if ( tempScriptTag ) {
                // cloneTempScriptTag = tempScriptTag.cloneNode( true );
                cloneTempScriptTag = document.createElement( 'script' );
                cloneTempScriptTag.id = tempScriptTag.id;
                cloneTempScriptTag.src = tempScriptTag.src;
            }
            if ( tempScriptTag ) {
                iframeDocument.head.appendChild( cloneTempScriptTag );
            }
        }
    }
}

export default addBlockEditorDynamicScripts;