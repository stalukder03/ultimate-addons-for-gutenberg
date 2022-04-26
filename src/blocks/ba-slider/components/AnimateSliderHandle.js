import { useEffect } from '@wordpress/element';


const AnimateSliderHandle = ( props ) => {

    useEffect( () => {

        const slider = document.querySelector( '.' + props.blockClass + ' > .uagb-ba-slider__img-comparison' );  // We appened the selectors to find the component for img-comparison-slider.

        let direction = 'right';

        const move = () => {

            slider.value = slider.value + 0.2 * ( direction === 'right' ? 1 : -1 );
            
            if ( slider.value >= 100 ) {
                direction = 'left';
            }

            if ( slider.value <= 0 ) {
                direction = 'right';
            }

        };

        let animationId;

        if( props.isAnimationEnabled ) {
    
            const animate = () => {

                move();
                animationId = requestAnimationFrame( animate );

            };

            animationId = requestAnimationFrame( animate );

        }

    } );

    return null;
}

export default AnimateSliderHandle;