UAGBCountdown = { // eslint-disable-line no-undef
	elements: {},
	init( mainSelector, data = {} ) {
		this.elements = this.getDefaultElements( mainSelector );
		if( !data.isFrontend ){
			this.elements.countdownWrapper.removeAttribute( 'played' );
		}
		if( typeof this.elements.countdownWrapper !== 'undefined' && this.elements.countdownWrapper ){
			const numberCount = this._numberCount( data );
			this._inViewInit( numberCount, data );
		}
	},
	getDefaultElements( mainSelector ) {
		const countdownWrapper = this.getElement( mainSelector );
		return {
			countdownWrapper
		};
	},
	getElement( selector, childSelector = null ) {
		let domElement = document.querySelector( selector );
		if ( domElement ) {
			if ( childSelector ) {
				return domElement.querySelector( childSelector );
			}
		} else {
			const editorCanvas = document.querySelector(
				'iframe[name="editor-canvas"]'
			);
			if ( editorCanvas && editorCanvas.contentDocument ) {
				domElement = editorCanvas.contentDocument.querySelector(
					selector
				);
				if ( childSelector ) {
					return ( domElement = domElement.querySelector(
						childSelector
					) );
				}
			}
		}
		return domElement;
	},

};
