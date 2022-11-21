UAGBCountdown = { // eslint-disable-line no-undef
	elements: {},
	init( mainSelector, data = {} ) {

        this.elements = this.getDefaultElements( mainSelector );

        if( typeof this.elements.countdownWrapper !== 'undefined' && this.elements.countdownWrapper ){
            this.updateCountdown( data );
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

    updateCountdown( data ) {

        const currentTime = new Date();
        const endDateTime = new Date( data.endDateTime );
        
        const diff = endDateTime - currentTime;

        const isOvertime = diff < 0

    }

};
