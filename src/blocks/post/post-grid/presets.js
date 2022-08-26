import { __ } from '@wordpress/i18n';
import defaultAttributes from './attributes';
const boxShadowPresets = [
	{
		defaultAttributes
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffset', value: 3 },
            { label: 'boxShadowVOffset', value: 8 },
            { label: 'boxShadowBlur', value: 12 },
			{ label: 'boxShadowSpread', value: 0 },
			{ label: 'boxShadowColor', value: 'rgb(0 0 0 / 15%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_451)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_451" x="55" y="75" width="218" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="2"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_451"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_451" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffset', value: 0 },
            { label: 'boxShadowVOffset', value: 18 },
            { label: 'boxShadowBlur', value: 40 },
			{ label: 'boxShadowSpread', value: -10 },
			{ label: 'boxShadowColor', value: 'rgb(0 0 0 / 20%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_459)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_459" x="48" y="71" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_459"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_459" result="shape"/> </filter> </defs> </svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffset', value: 0 },
            { label: 'boxShadowVOffset', value: 4 },
            { label: 'boxShadowBlur', value: 12 },
			{ label: 'boxShadowSpread', value: 0 },
			{ label: 'boxShadowColor', value: 'rgb(0 0 0 / 10%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_463)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_463" x="48" y="67" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_463"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_463" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffset', value: 0 },
            { label: 'boxShadowVOffset', value: 2 },
            { label: 'boxShadowBlur', value: 5 },
			{ label: 'boxShadowSpread', value: -1 },
			{ label: 'boxShadowColor', value: 'rgb(0 0 0 / 15%)' }
        ],
     	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_467)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_467" x="53" y="71" width="222" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="3"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_467"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_467" result="shape"/> </filter> </defs> </svg>',
	},
	{
        value: 'preset-5',
        label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffset', value: 0 },
            { label: 'boxShadowVOffset', value: 50 },
            { label: 'boxShadowBlur', value: 50 },
			{ label: 'boxShadowSpread', value: -30 },
			{ label: 'boxShadowColor', value: 'rgb(0 0 0 / 15%)' }
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_471)"> <ellipse cx="169" cy="174.5" rx="100" ry="16.5" fill="#FAFAFA"/> </g> <path d="M275 189.388C275 192.493 272.493 195 269.4 195H70.5995C67.5034 195 65 192.486 65 189.388V81.615C65 78.5136 67.5067 76 70.5995 76H269.4C272.497 76 274.997 78.5136 274.997 81.615L275 189.388Z" fill="#FBFBFB"/> <defs> <filter id="filter0_d_103_471" x="60" y="154" width="220" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="6"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_471"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_471" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-6',
        label: __( 'Preset 6', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffset', value: 0 },
            { label: 'boxShadowVOffset', value: 20 },
            { label: 'boxShadowBlur', value: 30 },
			{ label: 'boxShadowSpread', value: 0 },
			{ label: 'boxShadowColor', value: 'rgb(0 0 0 / 15%)' }
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_476)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_476" x="52" y="74" width="224" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="3.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_476"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_476" result="shape"/> </filter> </defs> </svg>',
    },
];
export {boxShadowPresets};



const boxShadowHoverPresets = [
	{
		defaultAttributes
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffsetHover', value: 3 },
            { label: 'boxShadowVOffsetHover', value: 8 },
            { label: 'boxShadowBlurHover', value: 12 },
			{ label: 'boxShadowSpreadHover', value: 15 },
			{ label: 'boxShadowColorHover', value: 'rgb(0 0 0 / 15%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_451)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_451" x="55" y="75" width="218" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="2"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_451"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_451" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffsetHover', value: 0 },
            { label: 'boxShadowVOffsetHover', value: 18 },
            { label: 'boxShadowBlurHover', value: 40 },
			{ label: 'boxShadowSpreadHover', value: -10 },
			{ label: 'boxShadowColorHover', value: 'rgb(0 0 0 / 20%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_459)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_459" x="48" y="71" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_459"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_459" result="shape"/> </filter> </defs> </svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffsetHover', value: 0 },
            { label: 'boxShadowVOffsetHover', value: 4 },
            { label: 'boxShadowBlurHover', value: 12 },
			{ label: 'boxShadowSpreadHover', value: 0 },
			{ label: 'boxShadowColorHover', value: 'rgb(0 0 0 / 10%)' }
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_463)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_463" x="48" y="67" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_463"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_463" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffsetHover', value: 0 },
            { label: 'boxShadowVOffsetHover', value: 2 },
            { label: 'boxShadowBlurHover', value: 5 },
			{ label: 'boxShadowSpreadHover', value: -1 },
			{ label: 'boxShadowColorHover', value: 'rgb(0 0 0 / 15%)' }
        ],
     	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_467)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_467" x="53" y="71" width="222" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="3"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_467"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_467" result="shape"/> </filter> </defs> </svg>',
	},
	{
        value: 'preset-5',
        label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffsetHover', value: 0 },
            { label: 'boxShadowVOffsetHover', value: 50 },
            { label: 'boxShadowBlurHover', value: 50 },
			{ label: 'boxShadowSpreadHover', value: -30 },
			{ label: 'boxShadowColorHover', value: 'rgb(0 0 0 / 15%)' }
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_471)"> <ellipse cx="169" cy="174.5" rx="100" ry="16.5" fill="#FAFAFA"/> </g> <path d="M275 189.388C275 192.493 272.493 195 269.4 195H70.5995C67.5034 195 65 192.486 65 189.388V81.615C65 78.5136 67.5067 76 70.5995 76H269.4C272.497 76 274.997 78.5136 274.997 81.615L275 189.388Z" fill="#FBFBFB"/> <defs> <filter id="filter0_d_103_471" x="60" y="154" width="220" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="6"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_471"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_471" result="shape"/> </filter> </defs> </svg>',
    },
	{
        value: 'preset-6',
        label: __( 'Preset 6', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'boxShadowHOffsetHover', value: 0 },
            { label: 'boxShadowVOffsetHover', value: 20 },
            { label: 'boxShadowBlurHover', value: 30 },
			{ label: 'boxShadowSpreadHover', value: 0 },
			{ label: 'boxShadowColorHover', value: 'rgb(0 0 0 / 15%)' }
        ],
		icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_476)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_476" x="52" y="74" width="224" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="3.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_476"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_476" result="shape"/> </filter> </defs> </svg>',
    },
];
export {boxShadowHoverPresets};

const buttonsPresets = [
	{
		defaultAttributes
	},
	{
		defaultPresetAttributes: [
			{ label: 'ctaBgColor' },
			{ label: 'ctaBgHColor' },
			{ label: 'ctaColor' },
			{ label: 'ctaHColor' },
			{ label: 'btnBorderStyle' },
            { label: 'btnBorderTopLeftRadius' },
            { label: 'btnBorderTopRightRadius' },
            { label: 'btnBorderBottomLeftRadius' },
            { label: 'btnBorderBottomRightRadius' },
			{ label: 'btnBorderBottomWidthDesktop' },
			{ label: 'btnBorderTopWidthDesktop' },
			{ label: 'btnBorderLeftWidthDesktop' },
			{ label: 'btnBorderRightWidthDesktop' },
		]
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
			{ label: 'btnBorderStyle', value: 'none' },
            { label: 'btnBorderTopLeftRadius', value: 0 },
            { label: 'btnBorderTopRightRadius', value: 0 },
            { label: 'btnBorderBottomLeftRadius', value: 0 },
            { label: 'btnBorderBottomRightRadius', value: 0 },

        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="58" y="101" width="209.786" height="70" fill="#B6B6B6"/> <path d="M134.2 146H125.775V129.325H133.975C135.458 129.325 136.617 129.733 137.45 130.55C138.3 131.35 138.725 132.358 138.725 133.575C138.725 134.575 138.442 135.425 137.875 136.125C137.325 136.808 136.642 137.233 135.825 137.4C136.725 137.533 137.483 138 138.1 138.8C138.733 139.583 139.05 140.483 139.05 141.5C139.05 142.833 138.617 143.917 137.75 144.75C136.9 145.583 135.717 146 134.2 146ZM133.375 136.225C134.108 136.225 134.683 136.025 135.1 135.625C135.517 135.225 135.725 134.708 135.725 134.075C135.725 133.425 135.517 132.9 135.1 132.5C134.683 132.1 134.108 131.9 133.375 131.9H128.7V136.225H133.375ZM133.5 143.425C134.3 143.425 134.925 143.225 135.375 142.825C135.825 142.408 136.05 141.833 136.05 141.1C136.05 140.45 135.825 139.908 135.375 139.475C134.925 139.025 134.3 138.8 133.5 138.8H128.7V143.425H133.5ZM152.686 146H150.061V144.4C148.928 145.667 147.503 146.3 145.786 146.3C143.203 146.3 141.911 145.025 141.911 142.475V133.925H144.536V141.525C144.536 142.408 144.744 143.042 145.161 143.425C145.578 143.792 146.178 143.975 146.961 143.975C147.594 143.975 148.186 143.825 148.736 143.525C149.286 143.225 149.728 142.85 150.061 142.4V133.925H152.686V146ZM159.721 146.3C158.704 146.3 157.929 146.033 157.396 145.5C156.879 144.967 156.621 144.2 156.621 143.2V136.225H154.621V133.925H156.621V130.625H159.246V133.925H161.696V136.225H159.246V142.55C159.246 142.983 159.346 143.333 159.546 143.6C159.746 143.85 160.029 143.975 160.396 143.975C160.929 143.975 161.321 143.833 161.571 143.55L162.196 145.525C161.646 146.042 160.821 146.3 159.721 146.3ZM167.704 146.3C166.687 146.3 165.912 146.033 165.379 145.5C164.862 144.967 164.604 144.2 164.604 143.2V136.225H162.604V133.925H164.604V130.625H167.229V133.925H169.679V136.225H167.229V142.55C167.229 142.983 167.329 143.333 167.529 143.6C167.729 143.85 168.012 143.975 168.379 143.975C168.912 143.975 169.304 143.833 169.554 143.55L170.179 145.525C169.629 146.042 168.804 146.3 167.704 146.3ZM177.512 146.3C175.646 146.3 174.146 145.692 173.012 144.475C171.879 143.242 171.312 141.733 171.312 139.95C171.312 138.167 171.879 136.667 173.012 135.45C174.146 134.233 175.646 133.625 177.512 133.625C179.396 133.625 180.904 134.233 182.037 135.45C183.171 136.667 183.737 138.167 183.737 139.95C183.737 141.75 183.171 143.258 182.037 144.475C180.904 145.692 179.396 146.3 177.512 146.3ZM177.512 143.975C178.596 143.975 179.446 143.592 180.062 142.825C180.696 142.042 181.012 141.083 181.012 139.95C181.012 138.833 180.696 137.892 180.062 137.125C179.446 136.342 178.596 135.95 177.512 135.95C176.446 135.95 175.596 136.342 174.962 137.125C174.346 137.892 174.037 138.833 174.037 139.95C174.037 141.083 174.346 142.042 174.962 142.825C175.596 143.592 176.446 143.975 177.512 143.975ZM197.168 146H194.543V138.45C194.543 136.783 193.735 135.95 192.118 135.95C191.485 135.95 190.893 136.108 190.343 136.425C189.793 136.742 189.352 137.125 189.018 137.575V146H186.393V133.925H189.018V135.575C189.468 135.042 190.068 134.583 190.818 134.2C191.568 133.817 192.385 133.625 193.268 133.625C194.552 133.625 195.518 133.958 196.168 134.625C196.835 135.292 197.168 136.25 197.168 137.5V146Z" fill="white"/> </svg>',
    },
	{
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'btnBorderStyle', value: 'none' },
            { label: 'btnBorderTopLeftRadius', value: 5 },
            { label: 'btnBorderTopRightRadius', value: 5 },
            { label: 'btnBorderBottomLeftRadius', value: 5 },
            { label: 'btnBorderBottomRightRadius', value: 5 },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="58" y="101" width="209.786" height="70" rx="6" fill="#B6B6B6"/> <path d="M134.2 145H125.775V128.325H133.975C135.458 128.325 136.617 128.733 137.45 129.55C138.3 130.35 138.725 131.358 138.725 132.575C138.725 133.575 138.442 134.425 137.875 135.125C137.325 135.808 136.642 136.233 135.825 136.4C136.725 136.533 137.483 137 138.1 137.8C138.733 138.583 139.05 139.483 139.05 140.5C139.05 141.833 138.617 142.917 137.75 143.75C136.9 144.583 135.717 145 134.2 145ZM133.375 135.225C134.108 135.225 134.683 135.025 135.1 134.625C135.517 134.225 135.725 133.708 135.725 133.075C135.725 132.425 135.517 131.9 135.1 131.5C134.683 131.1 134.108 130.9 133.375 130.9H128.7V135.225H133.375ZM133.5 142.425C134.3 142.425 134.925 142.225 135.375 141.825C135.825 141.408 136.05 140.833 136.05 140.1C136.05 139.45 135.825 138.908 135.375 138.475C134.925 138.025 134.3 137.8 133.5 137.8H128.7V142.425H133.5ZM152.686 145H150.061V143.4C148.928 144.667 147.503 145.3 145.786 145.3C143.203 145.3 141.911 144.025 141.911 141.475V132.925H144.536V140.525C144.536 141.408 144.744 142.042 145.161 142.425C145.578 142.792 146.178 142.975 146.961 142.975C147.594 142.975 148.186 142.825 148.736 142.525C149.286 142.225 149.728 141.85 150.061 141.4V132.925H152.686V145ZM159.721 145.3C158.704 145.3 157.929 145.033 157.396 144.5C156.879 143.967 156.621 143.2 156.621 142.2V135.225H154.621V132.925H156.621V129.625H159.246V132.925H161.696V135.225H159.246V141.55C159.246 141.983 159.346 142.333 159.546 142.6C159.746 142.85 160.029 142.975 160.396 142.975C160.929 142.975 161.321 142.833 161.571 142.55L162.196 144.525C161.646 145.042 160.821 145.3 159.721 145.3ZM167.704 145.3C166.687 145.3 165.912 145.033 165.379 144.5C164.862 143.967 164.604 143.2 164.604 142.2V135.225H162.604V132.925H164.604V129.625H167.229V132.925H169.679V135.225H167.229V141.55C167.229 141.983 167.329 142.333 167.529 142.6C167.729 142.85 168.012 142.975 168.379 142.975C168.912 142.975 169.304 142.833 169.554 142.55L170.179 144.525C169.629 145.042 168.804 145.3 167.704 145.3ZM177.512 145.3C175.646 145.3 174.146 144.692 173.012 143.475C171.879 142.242 171.312 140.733 171.312 138.95C171.312 137.167 171.879 135.667 173.012 134.45C174.146 133.233 175.646 132.625 177.512 132.625C179.396 132.625 180.904 133.233 182.037 134.45C183.171 135.667 183.737 137.167 183.737 138.95C183.737 140.75 183.171 142.258 182.037 143.475C180.904 144.692 179.396 145.3 177.512 145.3ZM177.512 142.975C178.596 142.975 179.446 142.592 180.062 141.825C180.696 141.042 181.012 140.083 181.012 138.95C181.012 137.833 180.696 136.892 180.062 136.125C179.446 135.342 178.596 134.95 177.512 134.95C176.446 134.95 175.596 135.342 174.962 136.125C174.346 136.892 174.037 137.833 174.037 138.95C174.037 140.083 174.346 141.042 174.962 141.825C175.596 142.592 176.446 142.975 177.512 142.975ZM197.168 145H194.543V137.45C194.543 135.783 193.735 134.95 192.118 134.95C191.485 134.95 190.893 135.108 190.343 135.425C189.793 135.742 189.352 136.125 189.018 136.575V145H186.393V132.925H189.018V134.575C189.468 134.042 190.068 133.583 190.818 133.2C191.568 132.817 192.385 132.625 193.268 132.625C194.552 132.625 195.518 132.958 196.168 133.625C196.835 134.292 197.168 135.25 197.168 136.5V145Z" fill="white"/> </svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
            { label: 'btnBorderStyle', value: 'none' },
            { label: 'btnBorderTopLeftRadius', value: 30 },
            { label: 'btnBorderTopRightRadius', value: 30 },
            { label: 'btnBorderBottomLeftRadius', value: 30 },
            { label: 'btnBorderBottomRightRadius', value: 30 },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="58" y="101" width="209.786" height="70" rx="35" fill="#B6B6B6"/> <path d="M134.2 144H125.775V127.325H133.975C135.458 127.325 136.617 127.733 137.45 128.55C138.3 129.35 138.725 130.358 138.725 131.575C138.725 132.575 138.442 133.425 137.875 134.125C137.325 134.808 136.642 135.233 135.825 135.4C136.725 135.533 137.483 136 138.1 136.8C138.733 137.583 139.05 138.483 139.05 139.5C139.05 140.833 138.617 141.917 137.75 142.75C136.9 143.583 135.717 144 134.2 144ZM133.375 134.225C134.108 134.225 134.683 134.025 135.1 133.625C135.517 133.225 135.725 132.708 135.725 132.075C135.725 131.425 135.517 130.9 135.1 130.5C134.683 130.1 134.108 129.9 133.375 129.9H128.7V134.225H133.375ZM133.5 141.425C134.3 141.425 134.925 141.225 135.375 140.825C135.825 140.408 136.05 139.833 136.05 139.1C136.05 138.45 135.825 137.908 135.375 137.475C134.925 137.025 134.3 136.8 133.5 136.8H128.7V141.425H133.5ZM152.686 144H150.061V142.4C148.928 143.667 147.503 144.3 145.786 144.3C143.203 144.3 141.911 143.025 141.911 140.475V131.925H144.536V139.525C144.536 140.408 144.744 141.042 145.161 141.425C145.578 141.792 146.178 141.975 146.961 141.975C147.594 141.975 148.186 141.825 148.736 141.525C149.286 141.225 149.728 140.85 150.061 140.4V131.925H152.686V144ZM159.721 144.3C158.704 144.3 157.929 144.033 157.396 143.5C156.879 142.967 156.621 142.2 156.621 141.2V134.225H154.621V131.925H156.621V128.625H159.246V131.925H161.696V134.225H159.246V140.55C159.246 140.983 159.346 141.333 159.546 141.6C159.746 141.85 160.029 141.975 160.396 141.975C160.929 141.975 161.321 141.833 161.571 141.55L162.196 143.525C161.646 144.042 160.821 144.3 159.721 144.3ZM167.704 144.3C166.687 144.3 165.912 144.033 165.379 143.5C164.862 142.967 164.604 142.2 164.604 141.2V134.225H162.604V131.925H164.604V128.625H167.229V131.925H169.679V134.225H167.229V140.55C167.229 140.983 167.329 141.333 167.529 141.6C167.729 141.85 168.012 141.975 168.379 141.975C168.912 141.975 169.304 141.833 169.554 141.55L170.179 143.525C169.629 144.042 168.804 144.3 167.704 144.3ZM177.512 144.3C175.646 144.3 174.146 143.692 173.012 142.475C171.879 141.242 171.312 139.733 171.312 137.95C171.312 136.167 171.879 134.667 173.012 133.45C174.146 132.233 175.646 131.625 177.512 131.625C179.396 131.625 180.904 132.233 182.037 133.45C183.171 134.667 183.737 136.167 183.737 137.95C183.737 139.75 183.171 141.258 182.037 142.475C180.904 143.692 179.396 144.3 177.512 144.3ZM177.512 141.975C178.596 141.975 179.446 141.592 180.062 140.825C180.696 140.042 181.012 139.083 181.012 137.95C181.012 136.833 180.696 135.892 180.062 135.125C179.446 134.342 178.596 133.95 177.512 133.95C176.446 133.95 175.596 134.342 174.962 135.125C174.346 135.892 174.037 136.833 174.037 137.95C174.037 139.083 174.346 140.042 174.962 140.825C175.596 141.592 176.446 141.975 177.512 141.975ZM197.168 144H194.543V136.45C194.543 134.783 193.735 133.95 192.118 133.95C191.485 133.95 190.893 134.108 190.343 134.425C189.793 134.742 189.352 135.125 189.018 135.575V144H186.393V131.925H189.018V133.575C189.468 133.042 190.068 132.583 190.818 132.2C191.568 131.817 192.385 131.625 193.268 131.625C194.552 131.625 195.518 131.958 196.168 132.625C196.835 133.292 197.168 134.25 197.168 135.5V144Z" fill="white"/> </svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
        attributes: [
			{ label: 'ctaBgColor', value: '#00000000' },
			{ label: 'ctaBgHColor', value: '#3a3a3a' },
			{ label: 'ctaColor', value: '#0170b9' },
			{ label: 'ctaHColor', value: '#ffffff' },
			{ label: 'btnBorderStyle', value: 'solid' },
            { label: 'btnBorderTopLeftRadius', value: 0 },
            { label: 'btnBorderTopRightRadius', value: 0 },
            { label: 'btnBorderBottomLeftRadius', value: 0 },
            { label: 'btnBorderBottomRightRadius', value: 0 },
			{ label: 'btnBorderBottomWidthDesktop', value: 1 },
			{ label: 'btnBorderTopWidthDesktop', value: 1 },
			{ label: 'btnBorderLeftWidthDesktop', value: 1 },
			{ label: 'btnBorderRightWidthDesktop', value: 1 },

        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="59" y="102" width="207.786" height="68" stroke="#959595" stroke-width="2" fill="none"/> <path d="M134.2 144H125.775V127.325H133.975C135.458 127.325 136.617 127.733 137.45 128.55C138.3 129.35 138.725 130.358 138.725 131.575C138.725 132.575 138.442 133.425 137.875 134.125C137.325 134.808 136.642 135.233 135.825 135.4C136.725 135.533 137.483 136 138.1 136.8C138.733 137.583 139.05 138.483 139.05 139.5C139.05 140.833 138.617 141.917 137.75 142.75C136.9 143.583 135.717 144 134.2 144ZM133.375 134.225C134.108 134.225 134.683 134.025 135.1 133.625C135.517 133.225 135.725 132.708 135.725 132.075C135.725 131.425 135.517 130.9 135.1 130.5C134.683 130.1 134.108 129.9 133.375 129.9H128.7V134.225H133.375ZM133.5 141.425C134.3 141.425 134.925 141.225 135.375 140.825C135.825 140.408 136.05 139.833 136.05 139.1C136.05 138.45 135.825 137.908 135.375 137.475C134.925 137.025 134.3 136.8 133.5 136.8H128.7V141.425H133.5ZM152.686 144H150.061V142.4C148.928 143.667 147.503 144.3 145.786 144.3C143.203 144.3 141.911 143.025 141.911 140.475V131.925H144.536V139.525C144.536 140.408 144.744 141.042 145.161 141.425C145.578 141.792 146.178 141.975 146.961 141.975C147.594 141.975 148.186 141.825 148.736 141.525C149.286 141.225 149.728 140.85 150.061 140.4V131.925H152.686V144ZM159.721 144.3C158.704 144.3 157.929 144.033 157.396 143.5C156.879 142.967 156.621 142.2 156.621 141.2V134.225H154.621V131.925H156.621V128.625H159.246V131.925H161.696V134.225H159.246V140.55C159.246 140.983 159.346 141.333 159.546 141.6C159.746 141.85 160.029 141.975 160.396 141.975C160.929 141.975 161.321 141.833 161.571 141.55L162.196 143.525C161.646 144.042 160.821 144.3 159.721 144.3ZM167.704 144.3C166.687 144.3 165.912 144.033 165.379 143.5C164.862 142.967 164.604 142.2 164.604 141.2V134.225H162.604V131.925H164.604V128.625H167.229V131.925H169.679V134.225H167.229V140.55C167.229 140.983 167.329 141.333 167.529 141.6C167.729 141.85 168.012 141.975 168.379 141.975C168.912 141.975 169.304 141.833 169.554 141.55L170.179 143.525C169.629 144.042 168.804 144.3 167.704 144.3ZM177.512 144.3C175.646 144.3 174.146 143.692 173.012 142.475C171.879 141.242 171.312 139.733 171.312 137.95C171.312 136.167 171.879 134.667 173.012 133.45C174.146 132.233 175.646 131.625 177.512 131.625C179.396 131.625 180.904 132.233 182.037 133.45C183.171 134.667 183.737 136.167 183.737 137.95C183.737 139.75 183.171 141.258 182.037 142.475C180.904 143.692 179.396 144.3 177.512 144.3ZM177.512 141.975C178.596 141.975 179.446 141.592 180.062 140.825C180.696 140.042 181.012 139.083 181.012 137.95C181.012 136.833 180.696 135.892 180.062 135.125C179.446 134.342 178.596 133.95 177.512 133.95C176.446 133.95 175.596 134.342 174.962 135.125C174.346 135.892 174.037 136.833 174.037 137.95C174.037 139.083 174.346 140.042 174.962 140.825C175.596 141.592 176.446 141.975 177.512 141.975ZM197.168 144H194.543V136.45C194.543 134.783 193.735 133.95 192.118 133.95C191.485 133.95 190.893 134.108 190.343 134.425C189.793 134.742 189.352 135.125 189.018 135.575V144H186.393V131.925H189.018V133.575C189.468 133.042 190.068 132.583 190.818 132.2C191.568 131.817 192.385 131.625 193.268 131.625C194.552 131.625 195.518 131.958 196.168 132.625C196.835 133.292 197.168 134.25 197.168 135.5V144Z" fill="#959595"/> </svg>',
    },
	{
        value: 'preset-5',
        label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
        attributes: [
			{ label: 'ctaBgColor', value: '#00000000' },
			{ label: 'ctaBgHColor', value: '#3a3a3a' },
			{ label: 'ctaColor', value: '#0170b9' },
			{ label: 'ctaHColor', value: '#ffffff' },
			{ label: 'btnBorderStyle', value: 'solid' },
            { label: 'btnBorderTopLeftRadius', value: 5 },
            { label: 'btnBorderTopRightRadius', value: 5 },
            { label: 'btnBorderBottomLeftRadius', value: 5 },
            { label: 'btnBorderBottomRightRadius', value: 5 },
			{ label: 'btnBorderBottomWidthDesktop', value: 1 },
			{ label: 'btnBorderTopWidthDesktop', value: 1 },
			{ label: 'btnBorderLeftWidthDesktop', value: 1 },
			{ label: 'btnBorderRightWidthDesktop', value: 1 },

        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="59" y="102" width="207.786" height="68" rx="5" stroke="#959595" stroke-width="2" fill="none"/> <path d="M134.2 144H125.775V127.325H133.975C135.458 127.325 136.617 127.733 137.45 128.55C138.3 129.35 138.725 130.358 138.725 131.575C138.725 132.575 138.442 133.425 137.875 134.125C137.325 134.808 136.642 135.233 135.825 135.4C136.725 135.533 137.483 136 138.1 136.8C138.733 137.583 139.05 138.483 139.05 139.5C139.05 140.833 138.617 141.917 137.75 142.75C136.9 143.583 135.717 144 134.2 144ZM133.375 134.225C134.108 134.225 134.683 134.025 135.1 133.625C135.517 133.225 135.725 132.708 135.725 132.075C135.725 131.425 135.517 130.9 135.1 130.5C134.683 130.1 134.108 129.9 133.375 129.9H128.7V134.225H133.375ZM133.5 141.425C134.3 141.425 134.925 141.225 135.375 140.825C135.825 140.408 136.05 139.833 136.05 139.1C136.05 138.45 135.825 137.908 135.375 137.475C134.925 137.025 134.3 136.8 133.5 136.8H128.7V141.425H133.5ZM152.686 144H150.061V142.4C148.928 143.667 147.503 144.3 145.786 144.3C143.203 144.3 141.911 143.025 141.911 140.475V131.925H144.536V139.525C144.536 140.408 144.744 141.042 145.161 141.425C145.578 141.792 146.178 141.975 146.961 141.975C147.594 141.975 148.186 141.825 148.736 141.525C149.286 141.225 149.728 140.85 150.061 140.4V131.925H152.686V144ZM159.721 144.3C158.704 144.3 157.929 144.033 157.396 143.5C156.879 142.967 156.621 142.2 156.621 141.2V134.225H154.621V131.925H156.621V128.625H159.246V131.925H161.696V134.225H159.246V140.55C159.246 140.983 159.346 141.333 159.546 141.6C159.746 141.85 160.029 141.975 160.396 141.975C160.929 141.975 161.321 141.833 161.571 141.55L162.196 143.525C161.646 144.042 160.821 144.3 159.721 144.3ZM167.704 144.3C166.687 144.3 165.912 144.033 165.379 143.5C164.862 142.967 164.604 142.2 164.604 141.2V134.225H162.604V131.925H164.604V128.625H167.229V131.925H169.679V134.225H167.229V140.55C167.229 140.983 167.329 141.333 167.529 141.6C167.729 141.85 168.012 141.975 168.379 141.975C168.912 141.975 169.304 141.833 169.554 141.55L170.179 143.525C169.629 144.042 168.804 144.3 167.704 144.3ZM177.512 144.3C175.646 144.3 174.146 143.692 173.012 142.475C171.879 141.242 171.312 139.733 171.312 137.95C171.312 136.167 171.879 134.667 173.012 133.45C174.146 132.233 175.646 131.625 177.512 131.625C179.396 131.625 180.904 132.233 182.037 133.45C183.171 134.667 183.737 136.167 183.737 137.95C183.737 139.75 183.171 141.258 182.037 142.475C180.904 143.692 179.396 144.3 177.512 144.3ZM177.512 141.975C178.596 141.975 179.446 141.592 180.062 140.825C180.696 140.042 181.012 139.083 181.012 137.95C181.012 136.833 180.696 135.892 180.062 135.125C179.446 134.342 178.596 133.95 177.512 133.95C176.446 133.95 175.596 134.342 174.962 135.125C174.346 135.892 174.037 136.833 174.037 137.95C174.037 139.083 174.346 140.042 174.962 140.825C175.596 141.592 176.446 141.975 177.512 141.975ZM197.168 144H194.543V136.45C194.543 134.783 193.735 133.95 192.118 133.95C191.485 133.95 190.893 134.108 190.343 134.425C189.793 134.742 189.352 135.125 189.018 135.575V144H186.393V131.925H189.018V133.575C189.468 133.042 190.068 132.583 190.818 132.2C191.568 131.817 192.385 131.625 193.268 131.625C194.552 131.625 195.518 131.958 196.168 132.625C196.835 133.292 197.168 134.25 197.168 135.5V144Z" fill="#959595"/> </svg>',
    },
	{
        value: 'preset-6',
        label: __( 'Preset 6', 'ultimate-addons-for-gutenberg' ),
        attributes: [
			{ label: 'ctaBgColor', value: '#00000000' },
			{ label: 'ctaBgHColor', value: '#3a3a3a' },
			{ label: 'ctaColor', value: '#0170b9' },
			{ label: 'ctaHColor', value: '#ffffff' },
			{ label: 'btnBorderStyle', value: 'solid' },
            { label: 'btnBorderTopLeftRadius', value: 30 },
            { label: 'btnBorderTopRightRadius', value: 30 },
            { label: 'btnBorderBottomLeftRadius', value: 30 },
            { label: 'btnBorderBottomRightRadius', value: 30 },
			{ label: 'btnBorderBottomWidthDesktop', value: 1 },
			{ label: 'btnBorderTopWidthDesktop', value: 1 },
			{ label: 'btnBorderLeftWidthDesktop', value: 1 },
			{ label: 'btnBorderRightWidthDesktop', value: 1 },

        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="59" y="102" width="207.786" height="68" rx="34" stroke="#959595" stroke-width="2" fill="none"/> <path d="M134.2 143H125.775V126.325H133.975C135.458 126.325 136.617 126.733 137.45 127.55C138.3 128.35 138.725 129.358 138.725 130.575C138.725 131.575 138.442 132.425 137.875 133.125C137.325 133.808 136.642 134.233 135.825 134.4C136.725 134.533 137.483 135 138.1 135.8C138.733 136.583 139.05 137.483 139.05 138.5C139.05 139.833 138.617 140.917 137.75 141.75C136.9 142.583 135.717 143 134.2 143ZM133.375 133.225C134.108 133.225 134.683 133.025 135.1 132.625C135.517 132.225 135.725 131.708 135.725 131.075C135.725 130.425 135.517 129.9 135.1 129.5C134.683 129.1 134.108 128.9 133.375 128.9H128.7V133.225H133.375ZM133.5 140.425C134.3 140.425 134.925 140.225 135.375 139.825C135.825 139.408 136.05 138.833 136.05 138.1C136.05 137.45 135.825 136.908 135.375 136.475C134.925 136.025 134.3 135.8 133.5 135.8H128.7V140.425H133.5ZM152.686 143H150.061V141.4C148.928 142.667 147.503 143.3 145.786 143.3C143.203 143.3 141.911 142.025 141.911 139.475V130.925H144.536V138.525C144.536 139.408 144.744 140.042 145.161 140.425C145.578 140.792 146.178 140.975 146.961 140.975C147.594 140.975 148.186 140.825 148.736 140.525C149.286 140.225 149.728 139.85 150.061 139.4V130.925H152.686V143ZM159.721 143.3C158.704 143.3 157.929 143.033 157.396 142.5C156.879 141.967 156.621 141.2 156.621 140.2V133.225H154.621V130.925H156.621V127.625H159.246V130.925H161.696V133.225H159.246V139.55C159.246 139.983 159.346 140.333 159.546 140.6C159.746 140.85 160.029 140.975 160.396 140.975C160.929 140.975 161.321 140.833 161.571 140.55L162.196 142.525C161.646 143.042 160.821 143.3 159.721 143.3ZM167.704 143.3C166.687 143.3 165.912 143.033 165.379 142.5C164.862 141.967 164.604 141.2 164.604 140.2V133.225H162.604V130.925H164.604V127.625H167.229V130.925H169.679V133.225H167.229V139.55C167.229 139.983 167.329 140.333 167.529 140.6C167.729 140.85 168.012 140.975 168.379 140.975C168.912 140.975 169.304 140.833 169.554 140.55L170.179 142.525C169.629 143.042 168.804 143.3 167.704 143.3ZM177.512 143.3C175.646 143.3 174.146 142.692 173.012 141.475C171.879 140.242 171.312 138.733 171.312 136.95C171.312 135.167 171.879 133.667 173.012 132.45C174.146 131.233 175.646 130.625 177.512 130.625C179.396 130.625 180.904 131.233 182.037 132.45C183.171 133.667 183.737 135.167 183.737 136.95C183.737 138.75 183.171 140.258 182.037 141.475C180.904 142.692 179.396 143.3 177.512 143.3ZM177.512 140.975C178.596 140.975 179.446 140.592 180.062 139.825C180.696 139.042 181.012 138.083 181.012 136.95C181.012 135.833 180.696 134.892 180.062 134.125C179.446 133.342 178.596 132.95 177.512 132.95C176.446 132.95 175.596 133.342 174.962 134.125C174.346 134.892 174.037 135.833 174.037 136.95C174.037 138.083 174.346 139.042 174.962 139.825C175.596 140.592 176.446 140.975 177.512 140.975ZM197.168 143H194.543V135.45C194.543 133.783 193.735 132.95 192.118 132.95C191.485 132.95 190.893 133.108 190.343 133.425C189.793 133.742 189.352 134.125 189.018 134.575V143H186.393V130.925H189.018V132.575C189.468 132.042 190.068 131.583 190.818 131.2C191.568 130.817 192.385 130.625 193.268 130.625C194.552 130.625 195.518 130.958 196.168 131.625C196.835 132.292 197.168 133.25 197.168 134.5V143Z" fill="#959595"/> </svg>',
    },
];

export {buttonsPresets};
