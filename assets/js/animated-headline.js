UAGBAnimatedHeading = { // eslint-disable-line no-undef
	settings: {},
	elements: {},
	interval: [],
	svgPaths: {
		circle: [
			'M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7',
		],
		underline_zigzag: [
			'M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9',
		],
		x: [
			'M497.4,23.9C301.6,40,155.9,80.6,4,144.4',
			'M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7',
		],
		strikethrough: ['M3,75h493.5'],
		curly: [
			'M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6',
		],
		diagonal: ['M13.5,15.5c131,13.7,289.3,55.5,475,125.5'],
		double: [
			'M8.4,143.1c14.2-8,97.6-8.8,200.6-9.2c122.3-0.4,287.5,7.2,287.5,7.2',
			'M8,19.4c72.3-5.3,162-7.8,216-7.8c54,0,136.2,0,267,7.8',
		],
		double_underline: [
			'M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6',
			'M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4',
		],
		underline: [
			'M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7',
		],
	},
	init( mainSelector, data = {} ) {
		this.settings = this.getDefaultSettings( mainSelector, data );
		this.elements = this.getDefaultElements( mainSelector );
		console.log('Headling block')
		if ( this.elements ) {
			this._resetClearInterval();
			if ( this.elements.dynamicTextWrapper ) {
				this.roatingHeadline();
			} else if ( this.elements.highlightedTextWrapper ) {
				this.highlightedHeadline();
				this._activateHighlightAnimation();
			}
		}
	},
	getDefaultSettings( mainSelector, data ) {
		const animationDelay = data.animationDelay || 8000
		const animationDuration = data.animationDuration || 1200
		return {
			data: {
				...data,
				animationDelay,
				animationDuration,
				//letters effect
				lettersDelay: animationDuration * 0.02 || 50,
				//typing effect
				typeLettersDelay: animationDuration * 0.06 || 150,
			},
			selectors: {
				mainSelector,
			},
			classes: {
				texthighlighted: 'uagb-animated-headline__text-highlighted',
				textRotating: 'uagb-animated-headline__text-rotating',
				dynamicText: 'uagb-animated-headline-dynamic-text',
				dynamicSVG: 'uagb-animated-headline-dynamic-svg',
				dynamicLetter: 'uagb-animated-headline-dynamic-letter',
				dynamicLetterAnimationIn: 'uagb-animated-headline-animation-in',
				activateHighlight: 'e-animated',
				hideHighlight: 'e-hide-highlight',
			},
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
	getDefaultElements( mainSelector ) {
		const headlineWrapper = this.getElement( mainSelector );
		const dynamicTextWrapper = this.getElement(
			mainSelector,
			'.' + this.settings.classes.textRotating
		);
		const highlightedTextWrapper = this.getElement(
			mainSelector,
			'.' + this.settings.classes.texthighlighted
		);

		const dynamicText =
			dynamicTextWrapper &&
			dynamicTextWrapper.querySelectorAll(
				`.${this.settings.classes.dynamicText}`
			);
		const dynamicSVG =
			highlightedTextWrapper &&
			highlightedTextWrapper.querySelector(
				`.${this.settings.classes.dynamicSVG}`
			);
		return {
			headlineWrapper,
			highlightedTextWrapper,
			dynamicTextWrapper,
			dynamicText,
			dynamicSVG,
		};
	},
	roatingHeadline() {
		if (
			this.settings.data.rotatingAnimation === 'dropIn' ||
			this.settings.data.rotatingAnimation === 'flip' ||
			this.settings.data.rotatingAnimation === 'slide' ||
			this.settings.data.rotatingAnimation === 'slideDown'
		) {
			this.rotatingWordSwitch();
		} else if ( this.settings.data.rotatingAnimation === 'clip' ) {
			this.animateClip();
		} else {
			// typing, swirl, blinds
			this.rotatingWordSwitchWithLetterInsert();
		}
	},
	highlightedHeadline() {
		this._addHighlight();
	},
	rotatingWordSwitch() {
		const that = this;
		let isFinishedRound = false;
		that._resetClearInterval();
		that._resetInlineStyle();
		let wordIndex = 1;
		that._setDynamicWidth( that.elements.dynamicText, 0 );
		wordSwtich();
		function wordSwtich() {
			// enable looping
			if ( that.elements.dynamicText[wordIndex] === undefined ) {
				wordIndex = 0;
				if( that.settings.data.infiniteLoop === false ){
					isFinishedRound = true
				}
			}
			that.interval.push(
				setTimeout( function () {
					that._switchWord( that.elements.dynamicText, wordIndex );
					that._setDynamicWidth( that.elements.dynamicText, wordIndex );
					wordIndex++;
					if( isFinishedRound === false ){
						wordSwtich();
					}
				}, that.settings.data.animationDuration )
			);
		}
	},
	rotatingWordSwitchWithLetterInsert() {
		const that = this;
		let isFinishedRound = false;
		if ( !that.elements ) {
			return;
		}
		that._resetClearInterval();
		that._resetInlineStyle();
		let wordIndex = 1;
		that._insertActiveAnimationIn( that.elements.dynamicText, 0 );
		wordLetterSwtich();
		function wordLetterSwtich() {
			// enable looping
			if ( that.elements.dynamicText[wordIndex] === undefined ) {
				wordIndex = 0;
				if( that.settings.data.infiniteLoop === false ){
					isFinishedRound = true
				}
			}
			that.interval.push(
				setTimeout( function () {
					if ( that.elements ) {
						that._switchWord( that.elements.dynamicText, wordIndex );
						that._insertActiveAnimationIn(
							that.elements.dynamicText,
							wordIndex
						);
						// remove previous node animation in class
						that._removeInActiveAnimationIn(
							that.elements.dynamicText,
							wordIndex
						);
						wordIndex++;
						if( isFinishedRound === false ){
							wordLetterSwtich();
						}
					}
				}, that.settings.data.animationDuration )
			);
		}
	},

	animateClip() {
		const that = this;
		let isFinishedRound = false;
		that._resetClearInterval();
		that._resetInlineStyle();
		const selectorClip = this.settings.classes.textRotating + '--clip';
		let wordIndex = 0;
		wordClip();
		function wordClip() {
			// enable looping
			if ( that.elements.dynamicText[wordIndex] === undefined ) {
				wordIndex = 0;
				if( that.settings.data.infiniteLoop === false ){
					isFinishedRound = true
				}
			}
			// get child element maximum width and assign parent inline style
			jQuery( '.' + selectorClip ).animate( {
				width: that.elements.dynamicText[wordIndex].clientWidth,
			} );

			if( isFinishedRound === false ){
				that.interval.push(
					setTimeout( function () {
						jQuery( '.' + selectorClip ).animate(
							{ width: 2 },
							function () {
								that._switchWord(
									that.elements.dynamicText,
									wordIndex
								);
							}
						);
						wordIndex++;
						wordClip();
					}, that.settings.data.animationDuration )
				);
			}
		}
	},

	_hidePreviousWord( allNodes, currentShowingIndex ) {
		if ( currentShowingIndex === 0 ) {
			allNodes[allNodes.length - 1].classList.remove(
				`${this.settings.classes.dynamicText}--active`
			);
		} else {
			allNodes[currentShowingIndex - 1].classList.remove(
				`${this.settings.classes.dynamicText}--active`
			);
		}
	},
	_switchWord( allNodes, activeIndex ) {
		if ( allNodes ) {
			allNodes.forEach( ( node, index ) => {
				if ( index === activeIndex ) {
					allNodes[index].classList.add(
						`${this.settings.classes.dynamicText}--active`
					);
					allNodes[index].classList.remove(
						`${this.settings.classes.dynamicText}--inactive`
					);
				} else {
					allNodes[index].classList.add(
						`${this.settings.classes.dynamicText}--inactive`
					);
					allNodes[index].classList.remove(
						`${this.settings.classes.dynamicText}--active`
					);
				}
			} );
		}
	},
	_insertActiveAnimationIn( allNodes, index ) {
		const self = this;
		const dynamicLetters = allNodes[index].querySelectorAll(
			`.${self.settings.classes.dynamicLetter}`
		);
		let letterCount = 0;
		showingLetter();
		function showingLetter() {
			self.interval.push(
				setTimeout( () => {
					if ( dynamicLetters[letterCount] !== undefined ) {
						dynamicLetters[letterCount].classList.add(
							self.settings.classes.dynamicLetterAnimationIn
						);
						showingLetter();
					}
					letterCount++;
				}, self.settings.data.lettersDelay )
			);
		}
	},
	_removeInActiveAnimationIn( allNodes, index ) {
		const prevIndex = ( index === 0 ? allNodes.length : index ) - 1;
		const dynamicLettersNodes = allNodes[prevIndex].querySelectorAll(
			`.${this.settings.classes.dynamicLetter}`
		);
		dynamicLettersNodes.forEach( ( element, nodeIndex ) => {
			dynamicLettersNodes[nodeIndex].classList.remove(
				this.settings.classes.dynamicLetterAnimationIn
			);
		} );
	},
	_setDynamicWidth( allNodes, activeIndex ) {
		jQuery( this.elements.dynamicTextWrapper ).css( {
			width: jQuery( allNodes[activeIndex] ).width(),
		} );
	},
	_resetInlineStyle() {
		const wrappper = this.getElement(
			this.settings.selectors.mainSelector,
			'.' + this.settings.classes.textRotating
		);
		wrappper.removeAttribute( 'style' );
	},
	_resetClearInterval() {
		this.interval.map( ( item ) => clearInterval( item ) );
		this.interval = [];
	},
	_getSvgPaths( pathName ) {
		const pathsInfo = this.svgPaths[pathName];
			let $paths = jQuery();
		pathsInfo.forEach( function ( pathInfo ) {
			$paths = $paths.add(
				jQuery( '<path>', {
					d: pathInfo,
				} )
			);
		} );
		return $paths;
	},
	_addHighlight() {
		const $svg = jQuery( '<svg>', {
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 500 150',
			preserveAspectRatio: 'none',
		} ).html( this._getSvgPaths( this.settings.data.highlightedShape ) );
		this.elements.dynamicSVG.innerHTML = $svg[0].outerHTML;
	},
	_activateHighlightAnimation() {
		const that = this;
		if ( that.elements && that.elements.highlightedTextWrapper ) {
			that.elements.highlightedTextWrapper.classList.remove(
				that.settings.classes.hideHighlight
			);
			that.elements.highlightedTextWrapper.classList.add(
				that.settings.classes.activateHighlight
			);
		}
		that.interval.push(
			setTimeout( () => {
				if ( that.elements && that.elements.highlightedTextWrapper ) {
					that.elements.highlightedTextWrapper.classList.remove(
						that.settings.classes.activateHighlight
					);
					that.elements.highlightedTextWrapper.classList.add(
						that.settings.classes.hideHighlight
					);
				}
			}, parseInt( that.settings.data.animationDuration ) + parseInt( that.settings.data.animationDuration ) * 0.8 )
		);
		if( that.settings.data.infiniteLoop ){
			that.interval.push(
				setTimeout( () => {
					that._activateHighlightAnimation( false );
				}, parseInt( that.settings.data.animationDelay ) + parseInt( that.settings.data.animationDuration ) )
			);
		}
	},
};
