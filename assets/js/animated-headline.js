UAGBAnimatedHeading = {
	// eslint-disable-line no-undef
	init($selector) {
		const animatedHeadlingWrap = document.querySelector($selector);
		const rotatingWrap = animatedHeadlingWrap.querySelector(
			'.uagb-animated-headline__text-rotating'
		);
		if(rotatingWrap){
			UAGBAnimatedHeading.animationTyping(rotatingWrap);
		}
	},
	animationTyping(typeText) {
		const wordArray = typeText.textContent.split(/\n/);
		typeText.innerHTML = '';
		var wordIndex = 0;
		var textToBeTyped = wordArray[wordIndex];
		var index = 0,
		isAdding = true;

		wordWriter();
		function wordWriter() {
			setTimeout(function () {
				// set the text of typeText to a substring of the text to be typed using index.
				typeText.innerText = textToBeTyped.slice(0, index);
				if (isAdding) {
					// adding text
					if (index > textToBeTyped.length) {
						// no more text to add
						isAdding = false;
						//break: wait 2s before playing again
						setTimeout(function () {
							wordWriter();
						}, 2000);
						return;
					} else {
						index++;
					}
				} else {
					// removing text
					if (index === 0) {
						startNextWordTyping();
						// no more text to remove
						isAdding = true;
					} else {
						index--;
					}
				}
				wordWriter();
			}, 120);
		}
		function startNextWordTyping(){
			wordIndex++;
			if(wordArray[wordIndex] === undefined){
				wordIndex = 0;
			}
			textToBeTyped = wordArray[wordIndex];
		}
	},
};
