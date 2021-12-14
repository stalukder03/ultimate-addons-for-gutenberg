window.UAGBAnimatedHeading = {
	// eslint-disable-line no-undef
	settings: {},
	init( $selector, settings = {} ) {
		this.settings = settings
		const wrapper = document.querySelector( $selector );
		if( this.settings.animateType === 'rotating' ){
			this.dispatchRoatingAnimation( wrapper )
		}
	},
	dispatchRoatingAnimation( wrapper )
	{
		const rotatingWrapper = wrapper.querySelector(
			'.uagb-animated-headline__text-rotating'
		);
		if(!rotatingWrapper){
			return;
		}
		if( this.settings.rotatingAnimation === 'typing' ){
			this.typingTimeout = null;
			this.breakTimeTimeout = null;
			// added new div for avoid eidtor animation issue
			rotatingWrapper.innerHTML ="<span class='uagb-animated-headline-dynamic-text-typing'></span>"
			this.animationTyping( rotatingWrapper, this.settings.rotatingText );
		} else if(this.settings.rotatingAnimation === 'clip') {
			// added new div for avoid eidtor animation issue
			rotatingWrapper.innerHTML ="<span class='uagb-animated-headline-dynamic-text-clip'></span>"
			this.animateClip(rotatingWrapper, this.settings.rotatingText );
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
	animateClip(rotatingWrap, data){
		let selectorTextClip = 'uagb-animated-headline-dynamic-text-clip'
		const rotatingChildWrap = rotatingWrap.querySelector(
			'.' + selectorTextClip
		)
		// insert child item from given string
		rotatingChildWrap.innerHTML = this._animateClipDomInsert(selectorTextClip, data);
		const clipChildItemWrap = rotatingWrap.querySelectorAll(`.${selectorTextClip}__item`)
		let wordIndex = 1;
		wordClip();
		function wordClip() {
			// enable looping
			if(clipChildItemWrap[wordIndex] === undefined){
				wordIndex = 0;
			}
			// get child element maximum width and assign parent inline style
			jQuery(rotatingChildWrap).animate({width: clipChildItemWrap[wordIndex].clientWidth})
			setTimeout( function () {
				jQuery(rotatingChildWrap).animate({width:2}, function() {
					clipChildItemWrap.forEach((item, index) => {
						if(wordIndex === index){
							clipChildItemWrap[index].classList.toggle(`${selectorTextClip}__item--active`)
						} else {
							clipChildItemWrap[index].classList.remove(`${selectorTextClip}__item--active`)
						}
					})
				})
				wordIndex++;
				wordClip();
			}, 5000 );
		}
	},
	_animateClipDomInsert(selectorTextClip, data){
		const wordArray = data.split( /\n|\\n/ );
		let domList = '';
		wordArray.forEach((item, index) => {
			domList += `<span class="${selectorTextClip + '__item'} ${index === 0 ? selectorTextClip + '__item--active' : ''}">${item}</span>`;
		})
		return domList;
	}
};
