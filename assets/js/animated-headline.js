UAGBAnimatedHeading = {
	// eslint-disable-line no-undef
	settings: {},
	init( mainSelector, data = {} ) {
		this.settings = this.getDefaultSettings(mainSelector, data)
		const mainWrapper = document.querySelector( mainSelector );
		if( this.settings.data.animateType === 'rotating' ){
			this.dispatchRoatingAnimation( mainWrapper )
		}
	},
	getDefaultSettings(mainSelector, data)
	{
		return {
			data,
			selectors: {
				mainSelector,
			},
			classes: {
				textRotating: 'uagb-animated-headline__text-rotating',
				dynamicText: 'uagb-animated-headline-dynamic-text'
			}
		}
	},
	dispatchRoatingAnimation( mainWrapper )
	{
		const rotatingWrapper = mainWrapper.querySelector(
			'.' + this.settings.classes.textRotating
		);
		if(!rotatingWrapper){
			return;
		}
		this.resetInlineStyle();
		if( this.settings.data.rotatingAnimation === 'typing' ){
			this.typingTimeout = null;
			this.breakTimeTimeout = null;
			this.animationTyping( rotatingWrapper, this.settings.data.rotatingText );
		} else if(this.settings.data.rotatingAnimation === 'clip') {
			this.animateClip(rotatingWrapper, this.settings.data.rotatingText );
		}
	},
	animationTyping( rotatingWrap, data ) {
		const wordArray = data.split( /\n|\\n/ );
		let wordPostion = 0;
		let textToBeTyped = wordArray[wordPostion];
		let letterPosition = 0, isAdding = true;
		wordWriter();
		function wordWriter() {
			clearTimeout( this.typingTimeout )
			this.typingTimeout = setTimeout( function () {
				const rotatingChildWrap = rotatingWrap.querySelector(
					'.uagb-animated-headline-dynamic-text-typing'
				)
				if(!rotatingChildWrap){
					return;
				}
				// set the text of typeText to a substring of the text to be typed using letterPosition.
				rotatingChildWrap.innerText = textToBeTyped.slice( 0, letterPosition );
				if ( isAdding ) {
					// adding text
					if ( letterPosition > textToBeTyped.length ) {
						// no more text to add
						isAdding = false;
						//break: wait 2s before playing again
						clearTimeout( this.breakTimeTimeout )
						this.breakTimeTimeout = setTimeout( function () {
							wordWriter();
						}, 2000 );
						return;
					} 
						letterPosition++;
				} else {
					// removing text
					if ( letterPosition === 0 ) {
						// style next word typing
						wordPostion++;
						if( wordArray[wordPostion] === undefined ){
							wordPostion = 0;
						}
						textToBeTyped = wordArray[wordPostion];
						// no more text to remove
						isAdding = true;
					} else {
						letterPosition--;
					}
				}
				wordWriter();
			}, 120 );
		}
	},
	animateClip(rotatingWrap){
		const that = this
		let selectorClip = this.settings.classes.textRotating + '--clip'
		// insert child item from given string
		const clipChildItemWrap = rotatingWrap.querySelectorAll(`.${that.settings.classes.dynamicText}`)
		let wordIndex = 1;
		wordClip();
		function wordClip() {
			// enable looping
			if(clipChildItemWrap[wordIndex] === undefined){
				wordIndex = 0;
			}
			// get child element maximum width and assign parent inline style
			jQuery('.' + selectorClip).animate({width: clipChildItemWrap[wordIndex].clientWidth})
			setTimeout( function () {
				jQuery('.' + selectorClip).animate({width:2}, function() {
					clipChildItemWrap.forEach((item, index) => {
						if(wordIndex === index){
							clipChildItemWrap[index].classList.remove(`${that.settings.classes.dynamicText}--inactive`)
							clipChildItemWrap[index].classList.add(`${that.settings.classes.dynamicText}--active`)
						} else {
							clipChildItemWrap[index].classList.add(`${that.settings.classes.dynamicText}--inactive`)
							clipChildItemWrap[index].classList.remove(`${that.settings.classes.dynamicText}--active`)
						}
					})
				})
				wordIndex++;
				wordClip();
			}, 5000 );
		}
	},
	resetInlineStyle(){
		const wrappper = document.querySelector( this.settings.selectors.mainSelector)
		wrappper.querySelector('.' + this.settings.classes.textRotating).removeAttribute('style')
	}

};
