UAGBAnimatedHeading = { // eslint-disable-line no-undef
	settings: {},
	elements: {},
	init( mainSelector, data = {} ) {
		this.settings = this.getDefaultSettings( mainSelector, data )
		this.elements = this.getDefaultElements(mainSelector)
		this._resetInlineStyle();
		if( this.settings.data.animateType === 'rotating' ){
			// this.dispatchRoatingAnimation()
			if(
				this.settings.data.rotatingAnimation === 'dropIn' || 
				this.settings.data.rotatingAnimation === 'flip'   ||
				this.settings.data.rotatingAnimation === 'slide'  ||
				this.settings.data.rotatingAnimation === 'slideDown'  
			){
				this.rotatingWordSwitch();
			} else if( this.settings.data.rotatingAnimation === 'clip' ) {
				this.animateClip();
			} else {
				// typing, swirl, blinds
				this.rotatingWordSwitchWithLetterInsert()
			}
		}
	},
	getDefaultSettings( mainSelector, data )
	{
		return {
			data,
			selectors: {
				mainSelector,
			},
			classes: {
				texthighlighted: 'uagb-animated-headline__text-highlighted',
				textRotating: 'uagb-animated-headline__text-rotating',
				dynamicText: 'uagb-animated-headline-dynamic-text',
				dynamicLetter: 'uagb-animated-headline-dynamic-letter',
				dynamicLetterAnimationIn: 'uagb-animated-headline-animation-in'
			}
		}
	},
	getDefaultElements(mainSelector){
		const headlineWrapper = document.querySelector( mainSelector );
		const dynamicTextWrapper = headlineWrapper.querySelector(
			'.' + this.settings.classes.textRotating
		);
		const dynamicText = dynamicTextWrapper.querySelectorAll( `.${this.settings.classes.dynamicText}` )
		return {
			headlineWrapper,
			dynamicTextWrapper,
			dynamicText
		}
	},
	rotatingWordSwitch(){
		let wordSwitchInterval = null;
		const that = this
		let wordIndex = 1;
		that._setDynamicWidth(that.elements.dynamicText, 0)
		wordSwtich();
		function wordSwtich() {
			// enable looping
			if( that.elements.dynamicText[wordIndex] === undefined ){
				wordIndex = 0;
			}
			clearInterval( wordSwitchInterval )
			wordSwitchInterval = setTimeout( function () {
				that._swtichWord(that.elements.dynamicText, wordIndex)
				that._setDynamicWidth(that.elements.dynamicText, wordIndex)
				wordIndex++
				wordSwtich();
			}, 5000 );
		}
	},
	rotatingWordSwitchWithLetterInsert (){
		let wordLetterSwitchInterval = null;
		const that = this
		let wordIndex = 1;
		that._insertActiveAnimationIn(that.elements.dynamicText, 0)
		wordLetterSwtich();
		function wordLetterSwtich() {
			// enable looping
			if( that.elements.dynamicText[wordIndex] === undefined ){
				wordIndex = 0;
			}
			clearInterval( wordLetterSwitchInterval )
			wordLetterSwitchInterval = setTimeout( function () {
				that._swtichWord(that.elements.dynamicText, wordIndex)
				that._insertActiveAnimationIn(that.elements.dynamicText, wordIndex)
				// remove previous node animation in class
				that._removeInActiveAnimationIn(that.elements.dynamicText, wordIndex)
				wordIndex++
				wordLetterSwtich();
			}, 5000 );
		}
	},
	
	animateClip(){
		let clipInterval = null;
		const that = this
		const selectorClip = this.settings.classes.textRotating + '--clip'
		let wordIndex = 0;
		wordClip();
		function wordClip() {
			// enable looping
			if( that.elements.dynamicText[wordIndex] === undefined ){
				wordIndex = 0;
			}
			// get child element maximum width and assign parent inline style
			jQuery( '.' + selectorClip ).animate( {width: that.elements.dynamicText[wordIndex].clientWidth} )
			clearInterval( clipInterval )
			clipInterval = setTimeout( function () {
				jQuery( '.' + selectorClip ).animate( {width:2}, function() {
					that._swtichWord(that.elements.dynamicText, wordIndex)
				} )
				wordIndex++;
				wordClip();
			}, 5000 );
		}
	},

	_hidePreviousWord( allNodes, currentShowingIndex )
	{
		if( currentShowingIndex === 0 ){
			allNodes[allNodes.length - 1].classList.remove( `${this.settings.classes.dynamicText}--active` )
		} else {
			allNodes[currentShowingIndex - 1].classList.remove( `${this.settings.classes.dynamicText}--active` )
		}	
	},
	_swtichWord( allNodes, activeIndex )
	{
		allNodes.forEach((node, index) => {
			if(index === activeIndex){
				allNodes[index].classList.add( `${this.settings.classes.dynamicText}--active` )
				allNodes[index].classList.remove( `${this.settings.classes.dynamicText}--inactive` )
			} else {
				allNodes[index].classList.add( `${this.settings.classes.dynamicText}--inactive` )
				allNodes[index].classList.remove( `${this.settings.classes.dynamicText}--active` )
			}
		});
	},
	_insertActiveAnimationIn(allNodes, index){
		const self = this;
		const dynamicLetters = allNodes[index].querySelectorAll( `.${self.settings.classes.dynamicLetter}` )
		let showingLetterInterval = null;
		let letterCount = 0;
		showingLetter();
		function showingLetter(){
			clearInterval( showingLetterInterval )
			showingLetterInterval = setTimeout( () => {
				if( dynamicLetters[letterCount] !== undefined ){
					dynamicLetters[letterCount].classList.add( self.settings.classes.dynamicLetterAnimationIn )
					showingLetter();
				}
				letterCount++
			}, 150 );
		}
	},
	_removeInActiveAnimationIn( allNodes, index )
	{
		const prevIndex = (index === 0 ? allNodes.length : index) - 1;
		const dynamicLettersNodes = allNodes[prevIndex].querySelectorAll( `.${this.settings.classes.dynamicLetter}` )
		dynamicLettersNodes.forEach( ( element, index ) => {
			dynamicLettersNodes[index].classList.remove( this.settings.classes.dynamicLetterAnimationIn )
		} );
	},
	_setDynamicWidth(allNodes, activeIndex){
		jQuery(this.elements.dynamicTextWrapper).css({width: jQuery(allNodes[activeIndex]).width()})
	},
	_resetInlineStyle(){
		const wrappper = document.querySelector( this.settings.selectors.mainSelector )
		wrappper.querySelector( '.' + this.settings.classes.textRotating ).removeAttribute( 'style' )
	}
};
