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
			rotatingWrapper.innerHTML ="<span class='uagb-animated-headline-dynamic-text-typing'></span>"
			this.animationTyping( rotatingWrapper, this.settings.rotatingText );
		} else if(this.settings.rotatingAnimation === 'clip') {
			this.clipStartTimeout = null;
			this.clipBreakTimeout = null;
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
		const wordArray = data.split( /\n|\\n/ );
		// insert dom
		let domList = '';
		wordArray.forEach((item, index) => {
			domList += `<span class="uagb-animated-headline-dynamic-text-clip">${item}</span>`;
		})
		rotatingWrap.innerHTML = domList

		// add style
		rotatingWrap.style.width = '300px';
		rotatingWrap.style.overflow = 'hidden';

		const rotatingChildWrap = rotatingWrap.querySelectorAll('.uagb-animated-headline-dynamic-text-clip')
		let wordIndex = 0;
		wordClip();
		function wordClip() {
			setTimeout( function () {
				if(rotatingChildWrap[wordIndex] === undefined){
					wordIndex = 0;
				}
				rotatingChildWrap.forEach((item, index) => {
					if(wordIndex === index){
						rotatingChildWrap[index].classList.toggle('uagb-animated-headline-dynamic-text-clip--active')
					} else {
						rotatingChildWrap[index].classList.remove('uagb-animated-headline-dynamic-text-clip--active')
					}
				})
				wordIndex++;
				wordClip();
			}, 3000 );
		}
	}
};
