/**
 * Slider Handle Icons.
 */

 import { createElement as el } from '@wordpress/element';

// Please insert slot="handle" attribute for each new icon.

const UAGB_BA_Slider_Icons = {
    default: el( 'svg', {
            className: 'uagb-ba-slider__handle',
            slot: 'handle',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '-8 -3 16 6',
            width: '100',
        },
		el( 'path', {
			fill: 'none',
            stroke: '#fff',
            vectorEffect: 'non-scaling-stroke',
			d: 'M -5 -2 L -7 0 L -5 2 M 5 -2 L 7 0 L 5 2',
		} ),
	),
    arrows1: el( 'svg', {
            className: 'uagb-ba-slider__handle',
            slot: 'handle',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '-8 -3 16 6',
            width: '100',
    },
    el( 'path', {
            fill: '#fff',
            vectorEffect: 'non-scaling-stroke',
            d: 'M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2',
    } ),
    ),
    arrows2: el( 'svg', {
        className: 'uagb-ba-slider__handle',
        slot: 'handle',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '-8 -3 16 6',
        width: '100',
    },
    el( 'path', {
            fill: 'none',
            stroke: '#fff',
            vectorEffect: 'non-scaling-stroke',
            d: 'M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2',
    } ),
    ),
    circle: el( 'svg', {
        className: 'uagb-ba-slider__handle',
        slot: 'handle',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 50 50',
        height: '60',
        width: '60',
    },
    el( 'circle', {
            fill: '#fff',
            cx: '25',
            cy: '25',
            r: '25',
    } ),
    ),
    square: el( 'svg', {
        className: 'uagb-ba-slider__handle',
        slot: 'handle',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 50 50',
        height: '60',
        width: '60',
    },
    el( 'rect', {
            fill: '#fff',
            width: 60,
            height: 60,
    } ),
    ),
    diamondSquare: el( 'svg', {
        className: 'uagb-ba-slider__handle',
        slot: 'handle',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 50 50',
        height: '60',
        width: '60',
        transform: 'rotate(45)',
    },
    el( 'rect', {
            fill: '#fff',
            width: 60,
            height: 60,
    } ),
    ),
}

export default UAGB_BA_Slider_Icons;
