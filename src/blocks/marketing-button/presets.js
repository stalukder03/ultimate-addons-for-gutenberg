import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import defaultAttributes from './attributes';

const presets = [
	{
		defaultAttributes
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'paddingBtnLeft', value: 35 },
            { label: 'paddingBtnRight', value: 35 },
            { label: 'paddingBtnTop', value: 10 },
            { label: 'paddingBtnBottom', value: 10 },
			{ label: 'backgroundType' , value: 'color'},
			{ label: 'titleColor', value: '#fff'},
			{ label: 'prefixColor', value: '#fff'},
			{ label: 'iconColor', value: '#fff'},
            { label: 'btnBorderStyle', value: 'none' },
            { label: 'btnBorderTopLeftRadius', value: 100 },
            { label: 'btnBorderTopRightRadius', value: 100 },
            { label: 'btnBorderBottomLeftRadius', value: 100 },
            { label: 'btnBorderBottomRightRadius', value: 100 },
            { label: 'iconPosition', value: 'after' },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="56" y="105" width="213" height="63" rx="31.5" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M108 144.5C108 143.119 109.14 142 110.546 142H215.454C216.86 142 218 143.119 218 144.5C218 145.881 216.86 147 215.454 147H110.546C109.14 147 108 145.881 108 144.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M102 130C102 127.791 103.447 126 105.233 126H219.767C221.553 126 223 127.791 223 130C223 132.209 221.553 134 219.767 134H105.233C103.447 134 102 132.209 102 130Z" fill="#E6E7E9"/> </svg>',
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
            { label: 'paddingBtnLeft', value: 33 },
            { label: 'paddingBtnRight', value: 33 },
            { label: 'paddingBtnTop', value: 8 },
            { label: 'paddingBtnBottom', value: 8 },
			{ label: 'backgroundType' , value: 'color'},
			{ label: 'titleColor', value: '#fff'},
			{ label: 'prefixColor', value: '#fff'},
			{ label: 'iconColor', value: '#fff'},
            { label: 'iconPosition', value: 'after' },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="49" y="106" width="213" height="63" rx="6" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M101 145.5C101 144.119 102.14 143 103.546 143H208.454C209.86 143 211 144.119 211 145.5C211 146.881 209.86 148 208.454 148H103.546C102.14 148 101 146.881 101 145.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M95 131C95 128.791 96.4473 127 98.2325 127H212.767C214.553 127 216 128.791 216 131C216 133.209 214.553 135 212.767 135H98.2325C96.4473 135 95 133.209 95 131Z" fill="#E6E7E9"/> </svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
			{ label: 'backgroundType', value: 'transparent' },
            { label: 'btnBorderStyle', value: 'solid' },
            { label: 'btnBorderTopWidth', value: 2 },
            { label: 'btnBorderLeftWidth', value: 2 },
            { label: 'btnBorderRightWidth', value: 2 },
            { label: 'btnBorderBottomWidth', value: 2 },
            { label: 'btnBorderTopLeftRadius', value: 100 },
            { label: 'btnBorderTopRightRadius', value: 100 },
            { label: 'btnBorderBottomLeftRadius', value: 100 },
            { label: 'btnBorderBottomRightRadius', value: 100 },
            { label: 'paddingBtnLeft', value: 33 },
            { label: 'paddingBtnRight', value: 33 },
            { label: 'paddingBtnTop', value: 8 },
            { label: 'paddingBtnBottom', value: 8 },
			{ label: 'titleColor', value: '#000000'},
			{ label: 'prefixColor', value: '#000000'},
			{ label: 'iconColor', value: '#000000'},
            { label: 'iconPosition', value: 'after' },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="57.25" y="106.25" width="210.5" height="60.5" rx="30.25" stroke="#959595" stroke-width="2.5" fill="none"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M108 144.5C108 143.119 109.14 142 110.546 142H215.454C216.86 142 218 143.119 218 144.5C218 145.881 216.86 147 215.454 147H110.546C109.14 147 108 145.881 108 144.5Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M102 130C102 127.791 103.447 126 105.233 126H219.767C221.553 126 223 127.791 223 130C223 132.209 221.553 134 219.767 134H105.233C103.447 134 102 132.209 102 130Z" fill="#D2D2D2"/> </svg>',
    },
	{
        value: 'preset-4',
        label: __( 'Preset 4', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'btnBorderStyle', value: 'none' },
            { label: 'btnBorderTopLeftRadius', value: 5 },
            { label: 'btnBorderTopRightRadius', value: 5 },
            { label: 'btnBorderBottomLeftRadius', value: 5 },
            { label: 'btnBorderBottomRightRadius', value: 5 },
            { label: 'paddingBtnLeft', value: 35 },
            { label: 'paddingBtnRight', value: 35 },
            { label: 'paddingBtnTop', value: 10 },
            { label: 'paddingBtnBottom', value: 10 },
			{ label: 'backgroundType' , value: 'gradient'},
            { label: 'gradientType', value: 'linear' },
            { label: 'gradientAngle', value: 0 },
			{ label: 'gradientLocation1' , value: 0 },
			{ label: 'gradientLocation2' , value: 100},
			{ label: 'titleColor', value: '#fff'},
			{ label: 'prefixColor', value: '#fff'},
			{ label: 'iconColor', value: '#fff'},
            { label: 'iconPosition', value: 'after' },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="57" y="105" width="213" height="63" rx="6" fill="url(#paint0_linear_103_225)"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M109 144.5C109 143.119 110.14 142 111.546 142H216.454C217.86 142 219 143.119 219 144.5C219 145.881 217.86 147 216.454 147H111.546C110.14 147 109 145.881 109 144.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M103 130C103 127.791 104.447 126 106.233 126H220.767C222.553 126 224 127.791 224 130C224 132.209 222.553 134 220.767 134H106.233C104.447 134 103 132.209 103 130Z" fill="#E6E7E9"/> <defs> <linearGradient id="paint0_linear_103_225" x1="163.5" y1="105" x2="163.5" y2="168" gradientUnits="userSpaceOnUse"> <stop stop-color="#D2D2D2"/> <stop offset="1" stop-color="#959595"/> </linearGradient> </defs> </svg>',
    },
	{
        value: 'preset-5',
        label: __( 'Preset 5', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'btnBorderStyle', value: 'none' },
            { label: 'btnBorderTopLeftRadius', value: 100 },
            { label: 'btnBorderTopRightRadius', value: 100 },
            { label: 'btnBorderBottomLeftRadius', value: 100 },
            { label: 'btnBorderBottomRightRadius', value: 100 },
            { label: 'paddingBtnLeft', value: 35 },
            { label: 'paddingBtnRight', value: 35 },
            { label: 'paddingBtnTop', value: 10 },
            { label: 'paddingBtnBottom', value: 10 },
			{ label: 'backgroundType' , value: 'gradient'},
            { label: 'gradientType', value: 'linear' },
            { label: 'gradientAngle', value: 0 },
			{ label: 'gradientLocation1' , value: 0 },
			{ label: 'gradientLocation2' , value: 100},
			{ label: 'titleColor', value: '#fff'},
			{ label: 'prefixColor', value: '#fff'},
			{ label: 'iconColor', value: '#fff'},
            { label: 'iconPosition', value: 'after' },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="57" y="105" width="213" height="63" rx="31.5" fill="url(#paint0_linear_103_232)"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M109 144.5C109 143.119 110.14 142 111.546 142H216.454C217.86 142 219 143.119 219 144.5C219 145.881 217.86 147 216.454 147H111.546C110.14 147 109 145.881 109 144.5Z" fill="#E6E7E9"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M103 130C103 127.791 104.447 126 106.233 126H220.767C222.553 126 224 127.791 224 130C224 132.209 222.553 134 220.767 134H106.233C104.447 134 103 132.209 103 130Z" fill="#E6E7E9"/> <defs> <linearGradient id="paint0_linear_103_232" x1="163.5" y1="105" x2="163.5" y2="168" gradientUnits="userSpaceOnUse"> <stop stop-color="#D2D2D2"/> <stop offset="1" stop-color="#959595"/> </linearGradient> </defs> </svg>',
    },
];

export default applyFilters(
    `uag_marketing_button_presets`,
    presets
);
