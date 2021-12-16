UAGBAnimatedHeading = { // eslint-disable-line no-undef
	settings: {},
	init( mainSelector, data = {} ) {
		this.settings = this.getDefaultSettings( mainSelector, data )
		const mainWrapper = document.querySelector( mainSelector );
		if( this.settings.data.animateType === 'rotating' ){
			this.dispatchRoatingAnimation( mainWrapper )
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
				textRotating: 'uagb-animated-headline__text-rotating',
				dynamicText: 'uagb-animated-headline-dynamic-text',
				dynamicLetter: 'uagb-animated-headline-dynamic-letter',
				dynamicLetterAnimationIn: 'uagb-animated-headline-animation-in'
			}
		}
	},
	dispatchRoatingAnimation( mainWrapper )
	{
		const rotatingWrapper = mainWrapper.querySelector(
			'.' + this.settings.classes.textRotating
		);
		if( !rotatingWrapper ){
			return;
		}
		this._resetInlineStyle();
		if( this.settings.data.rotatingAnimation === 'typing' ){
			this.animationTyping( rotatingWrapper );
		} else if( this.settings.data.rotatingAnimation === 'clip' ) {
			this.animateClip( rotatingWrapper );
		}
		else if( this.settings.data.rotatingAnimation === 'flip' ) {
			this.animateFlip( rotatingWrapper );
		}
		else if( this.settings.data.rotatingAnimation === 'swirl' ) {
			this.animateSwirl( rotatingWrapper );
		}
	},
	animationTyping( rotatingWrap ) {
		const that = this
		const typingChildItemWrap = rotatingWrap.querySelectorAll( `.${that.settings.classes.dynamicText}` )
		let typingInterval = null;
		let wordIndex = 1;
		that._insertActiveAnimationIn(typingChildItemWrap, 0)
		wordTyping();
		function wordTyping() {
			// enable looping
			if( typingChildItemWrap[wordIndex] === undefined ){
				wordIndex = 0;
			}
			clearInterval( typingInterval )
			typingInterval = setTimeout( function () {
				that._swtichWord(typingChildItemWrap, wordIndex)
				that._insertActiveAnimationIn(typingChildItemWrap, wordIndex)
				// remove previous node animation in class
				that._removeInActiveAnimationIn(typingChildItemWrap, wordIndex)
				wordIndex++
				wordTyping();
			}, 5000 );
		}
	},
	animateClip( rotatingWrap ){
		let clipInterval = null;
		const that = this
		const selectorClip = this.settings.classes.textRotating + '--clip'
		const clipChildItemWrap = rotatingWrap.querySelectorAll( `.${that.settings.classes.dynamicText}` )
		let wordIndex = 1;
		wordClip();
		function wordClip() {
			// enable looping
			if( clipChildItemWrap[wordIndex] === undefined ){
				wordIndex = 0;
			}
			// get child element maximum width and assign parent inline style
			jQuery( '.' + selectorClip ).animate( {width: clipChildItemWrap[wordIndex].clientWidth} )
			clearInterval( clipInterval )
			clipInterval = setTimeout( function () {
				jQuery( '.' + selectorClip ).animate( {width:2}, function() {
					clipChildItemWrap.forEach( ( item, index ) => {
						if( wordIndex === index ){
							clipChildItemWrap[index].classList.add( `${that.settings.classes.dynamicText}--active` )
						} else {
							clipChildItemWrap[index].classList.remove( `${that.settings.classes.dynamicText}--active` )
						}
					} )
				} )
				wordIndex++;
				wordClip();
			}, 5000 );
		}
	},
	animateFlip(rotatingWrap){
		let flipInterval = null;
		const that = this
		const flipChildItemWrap = rotatingWrap.querySelectorAll( `.${that.settings.classes.dynamicText}` )
		let wordIndex = 1;
		wordFlip();
		function wordFlip() {
			// enable looping
			if( flipChildItemWrap[wordIndex] === undefined ){
				wordIndex = 0;
			}
			clearInterval( flipInterval )
			flipInterval = setTimeout( function () {
				that._swtichWord(flipChildItemWrap, wordIndex)
				wordIndex++
				wordFlip();
			}, 5000 );
		}
	},
	animateSwirl(rotatingWrap){
		const that = this
		const flipChildItemWrap = rotatingWrap.querySelectorAll( `.${that.settings.classes.dynamicText}` )
		let flipInterval = null;
		let wordIndex = 1;
		that._insertActiveAnimationIn(flipChildItemWrap, 0)
		wordSwirl();
		function wordSwirl() {
			// enable looping
			if( flipChildItemWrap[wordIndex] === undefined ){
				wordIndex = 0;
			}
			clearInterval( flipInterval )
			flipInterval = setTimeout( function () {
				that._swtichWord(flipChildItemWrap, wordIndex)
				that._insertActiveAnimationIn(flipChildItemWrap, wordIndex)
				// remove previous node animation in class
				that._removeInActiveAnimationIn(flipChildItemWrap, wordIndex)
				wordIndex++
				wordSwirl();
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
	_swtichWord( allNodes, index )
	{
		const prevIndex = (index === 0 ? allNodes.length : index) - 1;
		allNodes[index].classList.add( `${this.settings.classes.dynamicText}--active` )
		allNodes[index].classList.remove( `${this.settings.classes.dynamicText}--inactive` )
		allNodes[prevIndex].classList.add( `${this.settings.classes.dynamicText}--inactive` )
		allNodes[prevIndex].classList.remove( `${this.settings.classes.dynamicText}--active` )
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
	_resetInlineStyle(){
		const wrappper = document.querySelector( this.settings.selectors.mainSelector )
		wrappper.querySelector( '.' + this.settings.classes.textRotating ).removeAttribute( 'style' )
	}
};
