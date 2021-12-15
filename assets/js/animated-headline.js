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
		if(!rotatingWrapper){
			return;
		}
		this.resetInlineStyle();
		if( this.settings.data.rotatingAnimation === 'typing' ){
			this.animationTyping(mainWrapper);
		} else if(this.settings.data.rotatingAnimation === 'clip') {
			this.animateClip(rotatingWrapper);
		}
	},
	animationTyping(mainWrapper) {
		const that = this
		const rotatingWrap = mainWrapper.querySelector(
			'.' + this.settings.classes.textRotating + '--typing'
		);
		const typingChildItemWrap = rotatingWrap.querySelectorAll(`.${that.settings.classes.dynamicText}`)
		that._animationTypingDynamicLetterInsert(typingChildItemWrap);
		let wordIndex = 0;
		wordTyping();
		function wordTyping() {
			// enable looping
			if(typingChildItemWrap[wordIndex] === undefined){
				wordIndex = 0;
			}
			setTimeout( function () {
				// show word
				that._hidePreviousWord(typingChildItemWrap, wordIndex)
				that._removeInActiveAnimationIn(typingChildItemWrap, wordIndex)
				typingChildItemWrap[wordIndex].classList.add(`${that.settings.classes.dynamicText}--active`)
				const dynamicLetters = typingChildItemWrap[wordIndex].querySelectorAll(`.${that.settings.classes.dynamicLetter}`)
				let letterCount = 0;
				showingLetter();
				function showingLetter(){
					setTimeout(() => {
						if(dynamicLetters[letterCount] !== undefined){
							dynamicLetters[letterCount].classList.add(that.settings.classes.dynamicLetterAnimationIn)
						}
						letterCount++
						showingLetter();
					}, 150);
				}
				wordIndex++;
				wordTyping();
			}, 5000 );
		}
	},
	_animationTypingDynamicLetterInsert(allNodes){
		allNodes.forEach((item, index) => {
			const letters = item.innerHTML.split('')
			let dynamicLettersMarkup = '';
			letters.map((letter) => {
				dynamicLettersMarkup += `<span class="${this.settings.classes.dynamicLetter}">${letter}</span>`;
			})
			item.innerHTML = dynamicLettersMarkup
		})
	},
	_hidePreviousWord(allNodes, currentShowingIndex)
	{
		if(currentShowingIndex === 0){
			allNodes[allNodes.length - 1].classList.remove(`${this.settings.classes.dynamicText}--active`)
		} else {
			allNodes[currentShowingIndex - 1].classList.remove(`${this.settings.classes.dynamicText}--active`)
		}	
	},
	_removeInActiveAnimationIn(allNodes, currentShowingIndex)
	{
		const removeItemIndex = (currentShowingIndex === 0 ? allNodes.length - 1 : currentShowingIndex - 1)
		const dynamicLettersNodes = allNodes[removeItemIndex].querySelectorAll(`.${this.settings.classes.dynamicLetter}`)
		dynamicLettersNodes.forEach((element, index) => {
			dynamicLettersNodes[index].classList.remove(this.settings.classes.dynamicLetterAnimationIn)
		});
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
	},
};
