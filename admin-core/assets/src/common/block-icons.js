/**
 * Block Icons
 */

import { createElement as el } from '@wordpress/element';

const UAGB_Block_Icons = {
	'section': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M18 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18.5 18C18.5 18.3 18.3 18.5 18 18.5H6C5.7 18.5 5.5 18.3 5.5 18V17H10V16H5.5V8H10V7H5.5V6C5.5 5.7 5.7 5.5 6 5.5H18C18.3 5.5 18.5 5.7 18.5 6V7H14V8H18.5V16H14V17H18.5V18ZM12.1266 15.6005L14.522 13.3L15.2513 13.9999L12.1269 17.0004L9.00139 14.0011L9.7304 13.301L12.1266 15.6005ZM12.1252 8.4006L14.5215 10.7001L15.2505 9.99995L12.1249 7.00063L9.00059 10.0012L9.72989 10.701L12.1252 8.4006Z',
		} ),
	),
	'buttons': el(
		'svg',
		{width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4ZM18 18.5C18.3 18.5 18.5 18.3 18.5 18V6C18.5 5.7 18.3 5.5 18 5.5H6C5.7 5.5 5.5 5.7 5.5 6V18C5.5 18.3 5.7 18.5 6 18.5H18Z',
		} ),
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M8 7V10H16V7H8ZM7.81818 6C7.36631 6 7 6.36631 7 6.81818V10.1818C7 10.6337 7.36631 11 7.81818 11H16.1818C16.6337 11 17 10.6337 17 10.1818V6.81818C17 6.36631 16.6337 6 16.1818 6H7.81818Z',
		} ),
		el( 'path', {
			fill: '#1e1e1e',
			d:
				'M7 13.7576C7 13.3392 7.33918 13 7.75758 13H16.2424C16.6608 13 17 13.3392 17 13.7576V17.2424C17 17.6608 16.6608 18 16.2424 18H7.75758C7.33918 18 7 17.6608 7 17.2424V13.7576Z',
		} ),
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M8 14V17H16V14H8ZM7.75758 13C7.33918 13 7 13.3392 7 13.7576V17.2424C7 17.6608 7.33918 18 7.75758 18H16.2424C16.6608 18 17 17.6608 17 17.2424V13.7576C17 13.3392 16.6608 13 16.2424 13H7.75758Z',
		} ),
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M14 9H10V8H14V9Z',
		} ),
		el( 'path', {
			'fill': 'white',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M14 16L10 16V15L14 15V16Z',
		} ),
	),
	'advanced-heading': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M18 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18.5 18C18.5 18.3 18.3 18.5 18 18.5H6C5.7 18.5 5.5 18.3 5.5 18V6C5.5 5.7 5.7 5.5 6 5.5H18C18.3 5.5 18.5 5.7 18.5 6V18ZM16 16V8H13.75V11.1453H10.25V8H8V16H10.25V12.6838H13.75V16H16Z',
		} ),
	),
	'google-map': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M17.8786 3.94079C18.5355 3.67804 19.25 4.1618 19.25 4.86926V16.471C19.25 16.8799 19.001 17.2476 18.6214 17.3995L14.2096 19.1642C13.9712 19.2596 13.7053 19.2596 13.4668 19.1642L9.12036 17.4256L4.59174 19.0724C3.93956 19.3095 3.25 18.8265 3.25 18.1326V6.5232C3.25 6.1027 3.51307 5.72711 3.90826 5.58341L8.78561 3.80983C9.01664 3.72582 9.27051 3.72985 9.49875 3.82114L13.8382 5.55694L17.8786 3.94079ZM4.66176 6.81161V17.5447L8.85294 16.0206V5.28755L4.66176 6.81161ZM10.3529 5.68333V16.3981L13.0882 17.4922V6.77746L10.3529 5.68333ZM17.8382 16.1922L14.5882 17.4922V6.77745L17.8382 5.47745V16.1922Z',
		} )
	),
	'info-box': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none'  },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4ZM18 18.5C18.3 18.5 18.5 18.3 18.5 18V6C18.5 5.7 18.3 5.5 18 5.5H6C5.7 5.5 5.5 5.7 5.5 6V18C5.5 18.3 5.7 18.5 6 18.5H18ZM12 6L12.6735 8.07295H14.8532L13.0898 9.3541L13.7634 11.4271L12 10.1459L10.2366 11.4271L10.9102 9.3541L9.14683 8.07295H11.3265L12 6ZM16.0909 12.8545H8V13.6636H16.0909V12.8545ZM8.80908 14.4727H15.2818V15.2818H8.80908V14.4727ZM13.6636 16.0909H10.4272V16.9H13.6636V16.0909Z',
		} )
	),
	'post-carousel': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M18 4H6C4.9 4 4 4.9 4 6V8H5.5V6C5.5 5.7 5.7 5.5 6 5.5H18C18.3 5.5 18.5 5.7 18.5 6V8H20V6C20 4.9 19.1 4 18 4ZM6 20C4.9 20 4 19.1 4 18V16H5.5V18C5.5 18.3 5.7 18.5 6 18.5H18C18.3 18.5 18.5 18.3 18.5 18V16H20V18C20 19.1 19.1 20 18 20H6ZM6.24 12L9.92 15.8333L8.8 17L4 12L8.8 7L9.92 8.16667L6.24 12ZM17.76 12L14.08 15.8333L15.2 17L20 12L15.2 7L14.08 8.16667L17.76 12Z',
		} )
	),
	'post-masonry': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4ZM18 18.5C18.3 18.5 18.5 18.3 18.5 18V6C18.5 5.7 18.3 5.5 18 5.5H6C5.7 5.5 5.5 5.7 5.5 6V18C5.5 18.3 5.7 18.5 6 18.5H18ZM7 7H11V11H7V7ZM11 12H7V13H11V12ZM13 16H17V17H13V16ZM17 11H13V15H17V11Z',
		} ),
	),
	'post-grid': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			fill: '#1e1e1e',
			d:
				'M6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4ZM18 18.5C18.3 18.5 18.5 18.3 18.5 18V6C18.5 5.7 18.3 5.5 18 5.5H6C5.7 5.5 5.5 5.7 5.5 6V18C5.5 18.3 5.7 18.5 6 18.5H18ZM7 7H11V11H7V7ZM11 13H7V17H11V13ZM12 13H17V14H12V13ZM17 7H12V8H17V7ZM12 15H15V16H12V15ZM15 9H12V10H15V9Z',
		} )
	),
	'testimonial': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
			'M6 4H18C19.1 4 20 4.9 20 6V16C20 17.1 19.1 18 18 18H14.8333L12.5 20L10.1667 18H6C4.9 18 4 17.1 4 16V6C4 4.9 4.9 4 6 4ZM14 17L13 18L12.5 18.5L12 18L11 17L10.5 16.5H6C5.7 16.5 5.5 16.3 5.5 16V6C5.5 5.7 5.7 5.5 6 5.5H18C18.3 5.5 18.5 5.7 18.5 6V16C18.5 16.3 18.3 16.5 18 16.5H14.5L14 17ZM9.58015 11.6296L8 14.1852L9.13359 15L11.229 11.7407C11.4122 11.4444 11.5725 11.1481 11.7099 10.8519C11.8473 10.5556 11.916 10.2346 11.916 9.88889C11.916 9.34568 11.7443 8.90124 11.4008 8.55556C11.0573 8.18519 10.6336 8 10.1298 8C9.62595 8 9.20229 8.18519 8.85878 8.55556C8.53817 8.90124 8.37786 9.34568 8.37786 9.88889C8.37786 10.358 8.50382 10.7407 8.75573 11.037C9.00763 11.3333 9.28244 11.5309 9.58015 11.6296ZM14.6641 11.6296L13.084 14.1852L14.2176 15L16.313 11.7407C16.4962 11.4444 16.6565 11.1481 16.7939 10.8519C16.9313 10.5556 17 10.2346 17 9.88889C17 9.34568 16.8282 8.90124 16.4847 8.55556C16.1412 8.18519 15.7176 8 15.2137 8C14.7099 8 14.2863 8.18519 13.9427 8.55556C13.6221 8.90124 13.4618 9.34568 13.4618 9.88889C13.4618 10.358 13.5878 10.7407 13.8397 11.037C14.0916 11.3333 14.3664 11.5309 14.6641 11.6296Z',
		} ),
	),
	'cf7-styler': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none'  },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM5.80977 14.1785C5.97184 14.057 6.13267 13.9376 6.29212 13.8193L6.29216 13.8192C6.75081 13.4788 7.19819 13.1467 7.63173 12.7973C8.86313 11.8179 10.0443 10.7695 10.8673 9.41345C11.1528 8.94764 11.5356 8.97866 11.9305 9.01065C11.9613 9.01315 11.9923 9.01566 12.0233 9.01794C12.2158 9.02996 12.4141 9.1226 12.5961 9.20762L12.6201 9.21883C12.6911 9.25194 12.7478 9.32422 12.8037 9.39543L12.8038 9.39546C12.8221 9.41878 12.8403 9.442 12.8589 9.46368L12.859 9.46379C13.0914 9.72115 13.3238 9.97851 13.5563 10.2296C14.6808 11.4413 15.8494 12.609 17.1876 13.5946C17.3654 13.7252 17.5495 13.8494 17.7351 13.9747C17.8708 14.0663 18.0072 14.1584 18.1426 14.2538C18.9907 12.2762 18.7017 9.14978 16.352 7.0843C14.0589 5.06278 10.66 4.88072 8.17204 6.66368C5.62129 8.4843 4.87994 11.6798 5.80977 14.1785ZM8.91967 13.8457L8.92249 13.8298L8.91336 13.8332C8.96847 13.4975 9.12659 13.2079 9.28109 12.9249C9.49649 12.5304 9.70482 12.1488 9.61701 11.6735C10.2264 10.9202 10.8547 10.148 11.5207 9.33184L11.5547 9.38836C11.5973 9.45906 11.6352 9.52183 11.6652 9.57668C11.9236 9.46013 12.0524 9.40206 12.165 9.42467C12.2768 9.44713 12.3726 9.54915 12.5636 9.75246C13.4054 10.6502 14.2473 11.5417 15.108 12.452H15.1026L15.1143 12.4646H14.6496C14.7983 12.7527 14.9299 13.0169 15.0572 13.2724L15.1655 13.4898L15.1897 13.5381L15.1332 13.5946C15.0963 13.568 15.0581 13.5434 15.0203 13.5191L15.0203 13.5191C14.9422 13.4687 14.8658 13.4195 14.8065 13.3561C14.6086 13.1489 14.4138 12.937 14.2191 12.7251C14.0243 12.5132 13.8295 12.3013 13.6316 12.0942C13.4683 11.9184 13.2987 11.7489 13.1102 11.6045C12.9217 11.4601 12.7835 11.5605 12.7709 11.7677C12.7634 11.9788 12.7694 12.1922 12.7755 12.4052V12.4052C12.7795 12.5468 12.7835 12.6883 12.7835 12.8287C12.7818 12.9109 12.7829 12.9936 12.784 13.0762V13.0762C12.7869 13.2965 12.7898 13.5164 12.7395 13.7265C12.6264 14.1848 12.2683 14.2538 11.9605 13.9022C11.909 13.8422 11.8601 13.7796 11.812 13.7155L11.8004 13.6999C11.7705 13.6599 11.7409 13.6194 11.7112 13.5786L11.711 13.5784C11.6875 13.5462 11.664 13.5139 11.64 13.4816C11.3134 13.0296 10.9992 13.0484 10.7416 13.5318C10.7193 13.5747 10.6975 13.618 10.6757 13.6613C10.6174 13.7769 10.5589 13.8931 10.4903 14.0027C10.4469 14.0678 10.3885 14.1209 10.3296 14.1744C10.3032 14.1983 10.2768 14.2223 10.2516 14.2475C10.2402 14.2418 10.2282 14.2361 10.2159 14.2304C10.1911 14.2234 10.1632 14.2088 10.1322 14.191C10.1385 14.1596 10.145 14.1282 10.1515 14.0969L10.1515 14.0968C10.1777 13.9713 10.2038 13.8457 10.2139 13.7202C10.2193 13.623 10.22 13.4792 10.1841 13.417C10.1798 13.4125 10.1751 13.4089 10.1699 13.4063C10.0757 13.3498 9.90604 13.3561 9.79924 13.4C9.70129 13.4399 9.61173 13.5028 9.52207 13.5657L9.52206 13.5657C9.45645 13.6118 9.39079 13.6579 9.32176 13.6951C9.24747 13.7322 9.17048 13.7585 9.0783 13.7899C9.03016 13.8064 8.97787 13.8242 8.91967 13.8457Z',
		} ),
	),
	'gf-styler': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			fill: '#1e1e1e',
			d:
				'M18.7334 6.41291C19.428 6.80826 20 7.78453 20 8.57926L19.9959 14.812C19.9959 15.6068 19.428 16.583 18.7293 16.9784L13.2666 20.0928C12.572 20.4922 11.4321 20.4922 10.7334 20.0928L5.2666 16.9784C4.56793 16.583 4 15.6068 4 14.812V8.57926C4 7.78453 4.56793 6.81229 5.2666 6.41291L10.7334 3.29853C11.428 2.89915 12.5679 2.89915 13.2666 3.29853L18.7334 6.41291ZM17.6874 13.1379H10.4474C9.99795 13.1379 9.667 13.0088 9.4055 12.7304C8.82532 12.1213 8.51888 10.9433 8.47394 10.2857H15.5996V12.0527H17.6343V8.27669H6.30029C6.30029 8.27669 6.34115 12.4521 7.91827 14.1101C8.572 14.7959 9.43002 15.1469 10.4637 15.1469H17.6874V13.1379Z',
		} ),
	),
	'content-timeline': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M10.5306 4V20H12.5306V4H10.5306ZM15.7755 5.22221C15.2232 5.22221 14.7755 5.66993 14.7755 6.22221V8.22221C14.7755 8.7745 15.2232 9.22221 15.7755 9.22221H19C19.5523 9.22221 20 8.7745 20 8.22221V6.22221C20 5.66993 19.5523 5.22221 19 5.22221H15.7755ZM4 11.6667C4 11.1144 4.44772 10.6667 5 10.6667H8.22449C8.77677 10.6667 9.22449 11.1144 9.22449 11.6667V13.6667C9.22449 14.219 8.77677 14.6667 8.22449 14.6667H5C4.44772 14.6667 4 14.219 4 13.6667V11.6667ZM15.7755 15C15.2232 15 14.7755 15.4477 14.7755 16V18C14.7755 18.5523 15.2232 19 15.7755 19H19C19.5523 19 20 18.5523 20 18V16C20 15.4477 19.5523 15 19 15H15.7755Z',
		} ),
	),
	'call-to-action': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			fill: '#1e1e1e',
			d:
				'M11.5748 16.48C9.0941 16.3629 7.12043 14.318 7.12043 11.8049C7.12043 9.22146 9.21892 7.12195 11.8011 7.12195C14.313 7.12195 16.3569 9.09659 16.4739 11.5785L14.8357 11.0868C14.5158 9.70537 13.2755 8.68293 11.8011 8.68293C10.077 8.68293 8.68064 10.08 8.68064 11.8049C8.68064 13.28 9.70258 14.521 11.0834 14.841L11.5748 16.48ZM19.6021 11.8049C19.6021 12.039 19.5943 12.2732 19.5709 12.5073L18.0341 12.0468C18.0419 11.9688 18.0419 11.8829 18.0419 11.8049C18.0419 8.35512 15.2491 5.56098 11.8011 5.56098C8.353 5.56098 5.56021 8.35512 5.56021 11.8049C5.56021 15.2546 8.353 18.0488 11.8011 18.0488C11.8791 18.0488 11.9649 18.0488 12.0429 18.041L12.5032 19.5785C12.2691 19.6019 12.0351 19.6098 11.8011 19.6098C7.49488 19.6098 4 16.1132 4 11.8049C4 7.49659 7.49488 4 11.8011 4C16.1073 4 19.6021 7.49659 19.6021 11.8049ZM16.6611 15.1298L19.6021 14.1463L11.8011 11.8049L14.1414 19.6098L15.1243 16.6673L18.4554 20L20 18.4546L16.6611 15.1298Z',
		} )
	),
	'post-timeline': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd':
				'M8.26667 6.13333C8.26667 7.02864 7.71515 7.79512 6.93333 8.1116V15.8884C7.71515 16.2049 8.26667 16.9714 8.26667 17.8667C8.26667 19.0449 7.31154 20 6.13333 20C4.95513 20 4 19.0449 4 17.8667C4 16.9714 4.55151 16.2049 5.33333 15.8884V8.11159C4.55151 7.79512 4 7.02863 4 6.13333C4 4.95513 4.95513 4 6.13333 4C7.31154 4 8.26667 4.95513 8.26667 6.13333ZM15.7333 5.06667H10.4V9.33333H15.7333V5.06667ZM10.4 4C9.81088 4 9.33331 4.47756 9.33331 5.06667V9.33333C9.33331 9.92244 9.81088 10.4 10.4 10.4H15.7333C16.3224 10.4 16.8 9.92244 16.8 9.33333V5.06667C16.8 4.47756 16.3224 4 15.7333 4H10.4ZM10.4 14.6667H18.9333L18.9333 18.9333H10.4V14.6667ZM9.33331 14.6667C9.33331 14.0776 9.81088 13.6 10.4 13.6H18.9333C19.5224 13.6 20 14.0776 20 14.6667V18.9333C20 19.5224 19.5224 20 18.9333 20H10.4C9.81088 20 9.33331 19.5224 9.33331 18.9333V14.6667ZM14.6666 6.13334H11.4666V5.60001H14.6666V6.13334ZM11.4666 15.7333H16.8V15.2H11.4666V15.7333ZM13.6 7.2H11.4666V6.66667H13.6V7.2ZM11.4666 16.2667V16.8H15.7333V16.2667H11.4666ZM13.6 8.26665H11.4666V7.73332H13.6V8.26665ZM11.4666 17.8667H14.6666V17.3333H11.4666V17.8667Z',
		} ),
	),
	'icon-list': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd':
				'M18 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18.5 18C18.5 18.3 18.3 18.5 18 18.5H6C5.7 18.5 5.5 18.3 5.5 18V6C5.5 5.7 5.7 5.5 6 5.5H18C18.3 5.5 18.5 5.7 18.5 6V18ZM9.72727 7H7V9.72727H9.72727V7ZM7 10.6364H9.72727V13.3636H7V10.6364ZM9.72727 14.2727H7V17H9.72727V14.2727ZM11 14H16.3636V14.8939H11V14ZM14 15.197H11V15.697H14V15.197ZM11 11H16.4545V11.9091H11V11ZM14 12.2045H11V12.7045H14V12.2045ZM11 7H16.4545V7.90909H11V7ZM14 8.20454H11V8.70454H14V8.20454Z',
		} )
	),
	'team': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd':
				'M9.81818 11.8182C11.4255 11.8182 12.7273 10.5164 12.7273 8.90909C12.7273 7.30182 11.4255 6 9.81818 6C8.21091 6 6.90909 7.30182 6.90909 8.90909C6.90909 10.5164 8.21091 11.8182 9.81818 11.8182ZM9.81818 7.45455C10.6182 7.45455 11.2727 8.10909 11.2727 8.90909C11.2727 9.70909 10.6182 10.3636 9.81818 10.3636C9.01818 10.3636 8.36364 9.70909 8.36364 8.90909C8.36364 8.10909 9.01818 7.45455 9.81818 7.45455ZM17.0909 8.90909C17.0909 10.5164 15.7891 11.8182 14.1818 11.8182C13.84 11.8182 13.52 11.7455 13.2145 11.6436C13.8182 10.8945 14.1818 9.94182 14.1818 8.90909C14.1818 7.87636 13.8182 6.92364 13.2145 6.17455C13.52 6.07273 13.84 6 14.1818 6C15.7891 6 17.0909 7.30182 17.0909 8.90909ZM17.0909 15.4545C17.0909 14.2327 16.3927 13.3164 15.3964 12.64C17.4036 12.9309 20 13.8691 20 15.4545V17.6364H17.0909V15.4545ZM4 15.4545C4 13.52 7.87636 12.5454 9.81818 12.5454C11.76 12.5454 15.6364 13.52 15.6364 15.4545V17.6364H4V15.4545ZM5.45455 15.4618V16.1818H14.1818V15.4545C14.0364 14.9382 11.7818 14 9.81818 14C7.85455 14 5.6 14.9382 5.45455 15.4618Z'
		} )
	),
	'tabs': el(
		'svg',
		{ width: 24, height: 24, viewBox: '0 0 20 20', className: 'uagb-editor-icons'  },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd':
				'M6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4ZM18 18.5C18.3 18.5 18.5 18.3 18.5 18V6C18.5 5.7 18.3 5.5 18 5.5H6C5.7 5.5 5.5 5.7 5.5 6V18C5.5 18.3 5.7 18.5 6 18.5H18Z',
		} ),
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd':
				'M9.75 7.5V5H11.25V7.5C11.25 8.19036 11.8096 8.75 12.5 8.75H19V10.25H12.5C10.9812 10.25 9.75 9.01878 9.75 7.5Z',
		} ),
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd':
				'M13.75 9V5H15.25V9H13.75Z',
		} ),
	),
	'social-share': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			fill: '#1e1e1e',
			d:
				'M17.3333 15.9248C16.6578 15.9248 16.0533 16.2002 15.5911 16.6317L9.25333 12.8221C9.29778 12.611 9.33333 12.3999 9.33333 12.1796C9.33333 11.9593 9.29778 11.7481 9.25333 11.537L15.52 7.7642C16 8.22318 16.6311 8.50775 17.3333 8.50775C18.8089 8.50775 20 7.27768 20 5.75387C20 4.23006 18.8089 3 17.3333 3C15.8578 3 14.6667 4.23006 14.6667 5.75387C14.6667 5.97418 14.7022 6.18531 14.7467 6.39644L8.48 10.1692C8 9.71027 7.36889 9.4257 6.66667 9.4257C5.19111 9.4257 4 10.6558 4 12.1796C4 13.7034 5.19111 14.9334 6.66667 14.9334C7.36889 14.9334 8 14.6489 8.48 14.1899L14.8089 18.0086C14.7644 18.2014 14.7378 18.4033 14.7378 18.6053C14.7378 20.0832 15.9022 21.2857 17.3333 21.2857C18.7644 21.2857 19.9289 20.0832 19.9289 18.6053C19.9289 17.1274 18.7644 15.9248 17.3333 15.9248ZM17.3333 4.83592C17.8222 4.83592 18.2222 5.249 18.2222 5.75387C18.2222 6.25875 17.8222 6.67183 17.3333 6.67183C16.8444 6.67183 16.4444 6.25875 16.4444 5.75387C16.4444 5.249 16.8444 4.83592 17.3333 4.83592ZM6.66667 13.0975C6.17778 13.0975 5.77778 12.6845 5.77778 12.1796C5.77778 11.6747 6.17778 11.2616 6.66667 11.2616C7.15556 11.2616 7.55556 11.6747 7.55556 12.1796C7.55556 12.6845 7.15556 13.0975 6.66667 13.0975ZM17.3333 19.5416C16.8444 19.5416 16.4444 19.1285 16.4444 18.6236C16.4444 18.1188 16.8444 17.7057 17.3333 17.7057C17.8222 17.7057 18.2222 18.1188 18.2222 18.6236C18.2222 19.1285 17.8222 19.5416 17.3333 19.5416Z',
		} )
	),
	'restaurant-menu': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			fill: '#1e1e1e',
			d:
				'M12 4C7.584 4 4 7.584 4 12C4 16.416 7.584 20 12 20C16.416 20 20 16.416 20 12C20 7.584 16.416 4 12 4ZM12 18.4C8.472 18.4 5.6 15.528 5.6 12C5.6 8.472 8.472 5.6 12 5.6C15.528 5.6 18.4 8.472 18.4 12C18.4 15.528 15.528 18.4 12 18.4ZM12.248 11.312C10.832 10.952 10.376 10.56 10.376 9.976C10.376 9.304 11.008 8.832 12.056 8.832C13.16 8.832 13.576 9.36 13.608 10.144H14.976C14.936 9.072 14.28 8.088 12.984 7.768V6.4H11.12V7.752C9.912 8.008 8.944 8.792 8.944 10C8.944 11.432 10.136 12.152 11.872 12.568C13.432 12.936 13.744 13.488 13.744 14.064C13.744 14.488 13.432 15.176 12.064 15.176C10.784 15.176 10.28 14.6 10.208 13.864H8.832C8.912 15.224 9.92 15.992 11.12 16.24V17.6H12.992V16.264C14.208 16.032 15.168 15.336 15.176 14.048C15.168 12.288 13.656 11.68 12.248 11.312Z',
		} ),
	),
	'blockquote': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd': 'M5.6 4H18.4C19.28 4 20 4.72 20 5.6V15.2C20 16.08 19.28 16.8 18.4 16.8H7.2L4 20V5.6C4 4.72 4.72 4 5.6 4ZM7.2 15.2H18.4V5.6H5.6V16.8L7.2 15.2ZM9.58015 10.6296L8 13.1852L9.13359 14L11.229 10.7407C11.4122 10.4444 11.5725 10.1481 11.7099 9.85185C11.8473 9.55556 11.916 9.23457 11.916 8.88889C11.916 8.34568 11.7443 7.90124 11.4008 7.55556C11.0573 7.18519 10.6336 7 10.1298 7C9.62595 7 9.20229 7.18519 8.85878 7.55556C8.53817 7.90124 8.37786 8.34568 8.37786 8.88889C8.37786 9.35802 8.50382 9.74074 8.75573 10.037C9.00763 10.3333 9.28244 10.5309 9.58015 10.6296ZM14.6641 10.6296L13.084 13.1852L14.2176 14L16.313 10.7407C16.4962 10.4444 16.6565 10.1481 16.7939 9.85185C16.9313 9.55556 17 9.23457 17 8.88889C17 8.34568 16.8282 7.90124 16.4847 7.55556C16.1412 7.18519 15.7176 7 15.2137 7C14.7099 7 14.2863 7.18519 13.9427 7.55556C13.6221 7.90124 13.4618 8.34568 13.4618 8.88889C13.4618 9.35802 13.5878 9.74074 13.8397 10.037C14.0916 10.3333 14.3664 10.5309 14.6641 10.6296Z',
		} )
	),
	'columns': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			fill: '#1e1e1e',
			d:
				'M18.4 4H5.6C4.72 4 4 4.78 4 5.73333V18.2667C4 19.22 4.72 20 5.6 20H18.4C19.28 20 20 19.22 20 18.2667V5.73333C20 4.78 19.28 4 18.4 4ZM8.8 18.2667H5.6V5.73333H8.8V18.2667ZM13.6 18.2667H10.4V5.73333H13.6V18.2667ZM18.4 18.2667H15.2V5.73333H18.4V18.2667Z',
		} )
	),
	'marketing-button': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd':
				'M18.1854 4.58887V7.03842C19.1465 7.53157 19.9798 8.46601 20.1988 9.58716C20.3298 10.2579 20.2344 10.9771 19.8316 11.6598C19.489 12.2406 18.9427 12.7645 18.1854 13.2152V15.9593L11.3283 13.6736L12.116 18.0059C12.2276 18.6197 11.756 19.1847 11.1321 19.1847H8.72526C8.2743 19.1847 7.87914 18.8829 7.76049 18.4479L6.3961 13.4451C6.17634 13.3858 5.96364 13.2796 5.7781 13.1202C4.49792 12.0205 4.10631 10.8033 4.30095 9.66623C4.48476 8.59242 5.16937 7.72177 5.77666 7.18383C6.08772 6.90829 6.47454 6.79769 6.83063 6.79769H9.90235L18.1854 4.58887ZM8.79524 8.19623H6.83063C6.75443 8.19623 6.71652 8.21962 6.70399 8.23071C6.23107 8.64963 5.79004 9.25604 5.67944 9.90219C5.57966 10.4851 5.72488 11.2308 6.68944 12.0594C6.7146 12.081 6.76333 12.1046 6.83693 12.1046H8.79524V8.19623ZM7.91264 13.6905L9.02966 17.7862H10.6546L9.90988 13.6905H7.91264ZM10.6933 11.9877L16.7869 14.0189V6.40922L10.6933 8.03419V11.9877ZM18.1854 11.4867C18.3825 11.3023 18.5257 11.121 18.6271 10.9492C18.8501 10.5711 18.8938 10.2017 18.8261 9.85524C18.7473 9.45145 18.5097 9.05825 18.1854 8.74205V11.4867Z',
		} )
	),
	'table-of-contents': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H9H8H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4ZM18 18.5H9V5.5H18C18.3 5.5 18.5 5.7 18.5 6V18C18.5 18.3 18.3 18.5 18 18.5ZM6 5.5H8V18.5H6C5.7 18.5 5.5 18.3 5.5 18V6C5.5 5.7 5.7 5.5 6 5.5ZM11 8H17V7H11V8ZM17 10H11V9H17V10ZM11 12H17V11H11V12ZM17 14H11V13H17V14ZM11 16H17V15H11V16Z',
		} ),
	),
	'faq': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd':
				'M18 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18.5 18C18.5 18.3 18.3 18.5 18 18.5H6C5.7 18.5 5.5 18.3 5.5 18V6C5.5 5.7 5.7 5.5 6 5.5H18C18.3 5.5 18.5 5.7 18.5 6V18ZM14.1792 7.74766C13.6404 7.24922 12.9206 7 12.0198 7C11.3716 7 10.816 7.12906 10.3529 7.38718C9.89832 7.6364 9.55316 7.97908 9.31744 8.41522C9.09014 8.85136 8.9849 9.3409 9.00174 9.88385H11.0348C11.0348 9.57232 11.119 9.32755 11.2874 9.14953C11.4558 8.96262 11.6915 8.86916 11.9946 8.86916C12.2808 8.86916 12.5039 8.95817 12.6638 9.13618C12.8238 9.3142 12.9038 9.55897 12.9038 9.87049C12.9038 10.3155 12.7312 10.6226 12.386 10.7917C12.0493 10.9608 11.5568 11.0454 10.9086 11.0454H10.1509L10.214 13.5287H12.1082L12.1713 12.5274C13.0216 12.5185 13.7035 12.2826 14.2171 11.8198C14.739 11.348 15 10.6938 15 9.85714C15 8.94927 14.7264 8.24611 14.1792 7.74766ZM10.2519 16.6529C10.496 16.8843 10.8075 17 11.1864 17C11.5568 17 11.8599 16.8843 12.0956 16.6529C12.3397 16.4125 12.4618 16.1188 12.4618 15.7717C12.4618 15.4157 12.3397 15.1175 12.0956 14.8772C11.8599 14.6368 11.5568 14.5167 11.1864 14.5167C10.8075 14.5167 10.496 14.6368 10.2519 14.8772C10.0162 15.1175 9.89832 15.4157 9.89832 15.7717C9.89832 16.1188 10.0162 16.4125 10.2519 16.6529Z',
		} ),
	),
	'forms': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			fill: '#1e1e1e',
			d:
				'M17.3333 16.2778C17.8243 16.2778 18.2222 16.6758 18.2222 17.1667C18.2222 17.6576 17.8243 18.0556 17.3333 18.0556H6.66667C6.17575 18.0556 5.77778 17.6576 5.77778 17.1667C5.77778 16.6758 6.17575 16.2778 6.66667 16.2778H17.3333ZM20 8.27778C20 7.78686 19.602 7.38889 19.1111 7.38889H4.88889C4.39797 7.38889 4 7.78686 4 8.27778C4 8.7687 4.39797 9.16667 4.88889 9.16667H19.1111C19.602 9.16667 20 8.7687 20 8.27778ZM20 11.8333C20 11.3424 19.602 10.9444 19.1111 10.9444H4.88889C4.39797 10.9444 4 11.3424 4 11.8333C4 12.3243 4.39797 12.7222 4.88889 12.7222H19.1111C19.602 12.7222 20 12.3243 20 11.8333ZM20 15.5C20 14.9477 19.5523 14.5 19 14.5H5C4.44772 14.5 4 14.9477 4 15.5V18.8333C4 19.3856 4.44772 19.8333 5 19.8333H19C19.5523 19.8333 20 19.3856 20 18.8333V15.5Z',
		} ),
		el( 'path', {
			fill: '#1e1e1e',
			d:
				'M4.88889 4H19.1111C19.602 4 20 4.39797 20 4.88889C20 5.37981 19.602 5.77778 19.1111 5.77778H4.88889C4.39797 5.77778 4 5.37981 4 4.88889C4 4.39797 4.39797 4 4.88889 4Z',
		} ),
	),
	'how-to': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd':
				'M5.77778 4H14.6667L20 9.33333V18.2222C20 19.2 19.2 20 18.2222 20H5.76889C4.79111 20 4 19.2 4 18.2222L4.00889 5.77778C4.00889 4.8 4.8 4 5.77778 4ZM5.77778 5.77778V18.2222H18.2222V10.2222H13.7778V5.77778H5.77778ZM8.44444 9.33333C8.93333 9.33333 9.33333 8.93333 9.33333 8.44444C9.33333 7.95556 8.93333 7.55556 8.44444 7.55556C7.95556 7.55556 7.55556 7.95556 7.55556 8.44444C7.55556 8.93333 7.95556 9.33333 8.44444 9.33333ZM8.44444 12.8889C8.93333 12.8889 9.33333 12.4889 9.33333 12C9.33333 11.5111 8.93333 11.1111 8.44444 11.1111C7.95556 11.1111 7.55556 11.5111 7.55556 12C7.55556 12.4889 7.95556 12.8889 8.44444 12.8889ZM8.44444 16.4444C8.93333 16.4444 9.33333 16.0444 9.33333 15.5556C9.33333 15.0667 8.93333 14.6667 8.44444 14.6667C7.95556 14.6667 7.55556 15.0667 7.55556 15.5556C7.55556 16.0444 7.95556 16.4444 8.44444 16.4444ZM13 8H10V9H13V8ZM10 11H15V12H10V11ZM17 15H10V16H17V15Z',
		} )
	),
	'inline-notice': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd':
				'M18 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18.5 18C18.5 18.3 18.3 18.5 18 18.5H6C5.7 18.5 5.5 18.3 5.5 18V6C5.5 5.7 5.7 5.5 6 5.5H18C18.3 5.5 18.5 5.7 18.5 6V18ZM12.8285 13.7364L13.061 7H10.8663L11.1134 13.7364H12.8285ZM11.0988 16.6792C11.3411 16.8931 11.6463 17 12.0145 17C12.3731 17 12.6686 16.8931 12.9012 16.6792C13.1337 16.4561 13.25 16.1818 13.25 15.8563C13.25 15.5309 13.1337 15.2613 12.9012 15.0474C12.6686 14.8243 12.3731 14.7127 12.0145 14.7127C11.6463 14.7127 11.3411 14.8243 11.0988 15.0474C10.8663 15.2613 10.75 15.5309 10.75 15.8563C10.75 16.1818 10.8663 16.4561 11.0988 16.6792Z',
		} )
	),
	'wp-search': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd':
				'M18 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18.5 18C18.5 18.3 18.3 18.5 18 18.5H6C5.7 18.5 5.5 18.3 5.5 18V6C5.5 5.7 5.7 5.5 6 5.5H18C18.3 5.5 18.5 5.7 18.5 6V18ZM15.1316 14.4141L17 16.2825L16.2825 17L14.4141 15.1316C13.6327 15.7573 12.6437 16.1338 11.5669 16.1338C9.04902 16.1338 7 14.0848 7 11.5669C7 9.04902 9.04902 7 11.5669 7C14.0848 7 16.1338 9.04902 16.1338 11.5669C16.1338 12.6437 15.7573 13.6327 15.1316 14.4141ZM11.5669 8.01487C9.60821 8.01487 8.01487 9.60821 8.01487 11.5669C8.01487 13.5256 9.60821 15.1189 11.5669 15.1189C13.5256 15.1189 15.1189 13.5256 15.1189 11.5669C15.1189 9.60821 13.5256 8.01487 11.5669 8.01487Z',
		} )
	),
	'taxonomy-list': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd':
				'M6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4ZM18 18.5C18.3 18.5 18.5 18.3 18.5 18V6C18.5 5.7 18.3 5.5 18 5.5H6C5.7 5.5 5.5 5.7 5.5 6V18C5.5 18.3 5.7 18.5 6 18.5H18ZM7 7H9V9H7V7ZM9 11H7V13H9V11ZM10 15H12V17H10V15ZM17 7H10V9H17V7ZM10 11H17V13H10V11ZM17 15H13V17H17V15Z',
		} )
	),
	'review': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd':
				'M18 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18.5 18C18.5 18.3 18.3 18.5 18 18.5H6C5.7 18.5 5.5 18.3 5.5 18V6C5.5 5.7 5.7 5.5 6 5.5H18C18.3 5.5 18.5 5.7 18.5 6V18ZM11 8.90526L9.2025 8.74211L8.5 7L7.7975 8.74474L6 8.90526L7.365 10.15L6.955 12L8.5 11.0184L10.045 12L9.6375 10.15L11 8.90526ZM18 8.90526L16.2025 8.74211L15.5 7L14.7975 8.74474L13 8.90526L14.365 10.15L13.955 12L15.5 11.0184L17.045 12L16.6375 10.15L18 8.90526ZM6 14H18V15H6V14ZM15 16H6V17H15V16Z',
		} )
	),
	'lottie': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd': 'M18 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18.5 18C18.5 18.3 18.3 18.5 18 18.5H6C5.7 18.5 5.5 18.3 5.5 18V6C5.5 5.7 5.7 5.5 6 5.5H18C18.3 5.5 18.5 5.7 18.5 6V18ZM16.9192 7.25437C16.2261 7.32949 15.1654 7.47053 14.1553 8.28199C13.1458 9.09292 12.2907 10.4846 11.7679 12.8373C11.5649 13.7505 10.9615 14.3882 10.1193 14.7682C9.26138 15.1552 8.17647 15.2589 7.137 15.0657L6.86301 16.5405C8.15687 16.7809 9.55894 16.6666 10.7362 16.1355C11.9292 15.5973 12.909 14.6167 13.2321 13.1627C13.7093 11.0154 14.4375 9.97933 15.0947 9.45139C15.7513 8.92397 16.4406 8.81502 17.0808 8.74563L16.9192 7.25437Z',
		} ),
	),
	'star-rating': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 24 24' },
		el( 'path', {
			fill: '#1e1e1e',
			d:
				'M20 9.792L14.248 9.296L12 4L9.752 9.304L4 9.792L8.368 13.576L7.056 19.2L12 16.216L16.944 19.2L15.64 13.576L20 9.792ZM12 14.72V7.28L13.368 10.512L16.872 10.816L14.216 13.12L15.016 16.544L12 14.72Z',
		} )
	),
	'display-conditions': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 36 45' },
		el( 'path', {
			fill: '#1F2937',
			d:
				'M1.31802 1.31802C2.16193 0.474106 3.30653 0 4.5 0H31.5C32.6935 0 33.8381 0.474106 34.682 1.31802C35.5259 2.16193 36 3.30653 36 4.5V31.5C36 32.6935 35.5259 33.8381 34.682 34.682C33.8381 35.5259 32.6935 36 31.5 36H4.5C3.30653 36 2.16193 35.5259 1.31802 34.682C0.474106 33.8381 0 32.6935 0 31.5V4.5C0 3.30653 0.474106 2.16193 1.31802 1.31802ZM33.091 2.90901C32.669 2.48705 32.0967 2.25 31.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V31.5C2.25 32.0967 2.48705 32.669 2.90901 33.091C3.33097 33.5129 3.90326 33.75 4.5 33.75H31.5C32.0967 33.75 32.669 33.5129 33.091 33.091C33.5129 32.669 33.75 32.0967 33.75 31.5V4.5C33.75 3.90326 33.5129 3.33097 33.091 2.90901Z',
		} ),
		el( 'path', {
			fill: '#1F2937',
			d:
				'M27 8H21C20.7348 8 20.4804 8.11063 20.2929 8.30754C20.1054 8.50445 20 8.77152 20 9.05C20 9.32848 20.1054 9.59555 20.2929 9.79246C20.4804 9.98938 20.7348 10.1 21 10.1H26V15.35C26 15.6285 26.1054 15.8955 26.2929 16.0925C26.4804 16.2894 26.7348 16.4 27 16.4C27.2652 16.4 27.5196 16.2894 27.7071 16.0925C27.8946 15.8955 28 15.6285 28 15.35V9.05C28 8.77152 27.8946 8.50445 27.7071 8.30754C27.5196 8.11063 27.2652 8 27 8ZM27 20.6C26.7348 20.6 26.4804 20.7106 26.2929 20.9075C26.1054 21.1045 26 21.3715 26 21.65V26.9H21C20.7348 26.9 20.4804 27.0106 20.2929 27.2075C20.1054 27.4044 20 27.6715 20 27.95C20 28.2285 20.1054 28.4956 20.2929 28.6925C20.4804 28.8894 20.7348 29 21 29H27C27.2652 29 27.5196 28.8894 27.7071 28.6925C27.8946 28.4956 28 28.2285 28 27.95V21.65C28 21.3715 27.8946 21.1045 27.7071 20.9075C27.5196 20.7106 27.2652 20.6 27 20.6ZM18 12.2C17.2044 12.2 16.4413 12.5319 15.8787 13.1226C15.3161 13.7134 15 14.5146 15 15.35V16.4C14.4696 16.4 13.9609 16.6213 13.5858 17.0151C13.2107 17.4089 13 17.943 13 18.5V22.7C13 23.257 13.2107 23.7911 13.5858 24.1849C13.9609 24.5787 14.4696 24.8 15 24.8H21C21.5304 24.8 22.0391 24.5787 22.4142 24.1849C22.7893 23.7911 23 23.257 23 22.7V18.5C23 17.943 22.7893 17.4089 22.4142 17.0151C22.0391 16.6213 21.5304 16.4 21 16.4V15.35C21 14.5146 20.6839 13.7134 20.1213 13.1226C19.5587 12.5319 18.7956 12.2 18 12.2ZM17 15.35C17 15.0715 17.1054 14.8045 17.2929 14.6075C17.4804 14.4106 17.7348 14.3 18 14.3C18.2652 14.3 18.5196 14.4106 18.7071 14.6075C18.8946 14.8045 19 15.0715 19 15.35V16.4H17V15.35ZM21 22.7H15V18.5H21V22.7ZM9 16.4C9.26522 16.4 9.51957 16.2894 9.70711 16.0925C9.89464 15.8955 10 15.6285 10 15.35V10.1H15C15.2652 10.1 15.5196 9.98938 15.7071 9.79246C15.8946 9.59555 16 9.32848 16 9.05C16 8.77152 15.8946 8.50445 15.7071 8.30754C15.5196 8.11063 15.2652 8 15 8H9C8.73478 8 8.48043 8.11063 8.29289 8.30754C8.10536 8.50445 8 8.77152 8 9.05V15.35C8 15.6285 8.10536 15.8955 8.29289 16.0925C8.48043 16.2894 8.73478 16.4 9 16.4ZM15 26.9H10V21.65C10 21.3715 9.89464 21.1045 9.70711 20.9075C9.51957 20.7106 9.26522 20.6 9 20.6C8.73478 20.6 8.48043 20.7106 8.29289 20.9075C8.10536 21.1045 8 21.3715 8 21.65V27.95C8 28.2285 8.10536 28.4956 8.29289 28.6925C8.48043 28.8894 8.73478 29 9 29H15C15.2652 29 15.5196 28.8894 15.7071 28.6925C15.8946 28.4956 16 28.2285 16 27.95C16 27.6715 15.8946 27.4044 15.7071 27.2075C15.5196 27.0106 15.2652 26.9 15 26.9Z',
		} )
	),
	'masonry-gallery': el(
		'svg',
		{ width: 34, height: 34, viewBox: '0 0 36 45' },
		el( 'path', {
			fill: '#1F2937',
			fillRule:'evenodd',
			clipRule:'evenodd',
			d:
				'M9 7C7.89543 7 7 7.89543 7 9V17C7 18.1046 7.89543 19 9 19H15C16.1046 19 17 18.1046 17 17V9C17 7.89543 16.1046 7 15 7H9ZM9.25 9.25V16.75H14.75V9.25H9.25Z',
		} ),
		el( 'path', {
			fill: '#1F2937',
			fillRule:'evenodd',
			clipRule:'evenodd',
			d:
				'M7 23C7 21.8954 7.89543 21 9 21H15C16.1046 21 17 21.8954 17 23V27C17 28.1046 16.1046 29 15 29H9C7.89543 29 7 28.1046 7 27V23ZM9.25 26.75V23.25H14.75V26.75H9.25Z',
		} ),
		el( 'path', {
			fill: '#1F2937',
			fillRule:'evenodd',
			clipRule:'evenodd',
			d:
				'M27 29C28.1046 29 29 28.1046 29 27V19C29 17.8954 28.1046 17 27 17H21C19.8954 17 19 17.8954 19 19V27C19 28.1046 19.8954 29 21 29H27ZM26.75 19.25H21.25V26.75H26.75V19.25Z',
		} ),
		el( 'path', {
			fill: '#1F2937',
			fillRule:'evenodd',
			clipRule:'evenodd',
			d:
				'M29 13C29 14.1046 28.1046 15 27 15L21 15C19.8954 15 19 14.1046 19 13V9C19 7.89543 19.8954 7 21 7L27 7C28.1046 7 29 7.89543 29 9V13ZM26.75 9.25V12.75L21.25 12.75V9.25L26.75 9.25Z',
		} ),
		el( 'path', {
			fill: '#1F2937',
			fillRule:'evenodd',
			clipRule:'evenodd',
			d:
				'M1.31802 1.31802C2.16193 0.474106 3.30653 0 4.5 0H31.5C32.6935 0 33.8381 0.474106 34.682 1.31802C35.5259 2.16193 36 3.30653 36 4.5V31.5C36 32.6935 35.5259 33.8381 34.682 34.682C33.8381 35.5259 32.6935 36 31.5 36H4.5C3.30653 36 2.16193 35.5259 1.31802 34.682C0.474106 33.8381 0 32.6935 0 31.5V4.5C0 3.30653 0.474106 2.16193 1.31802 1.31802ZM33.091 2.90901C32.669 2.48705 32.0967 2.25 31.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V31.5C2.25 32.0967 2.48705 32.669 2.90901 33.091C3.33097 33.5129 3.90326 33.75 4.5 33.75H31.5C32.0967 33.75 32.669 33.5129 33.091 33.091C33.5129 32.669 33.75 32.0967 33.75 31.5V4.5C33.75 3.90326 33.5129 3.33097 33.091 2.90901Z',
		} ),
	),
	'container': el(
		'svg',
		{ width: 36, height: 36, viewBox: '0 0 24 24' },
		el( 'path', {
			'fill': '#1e1e1e',
			'fill-rule':'evenodd',
			'clip-rule':'evenodd',
			'd':
				'M18 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18.5 18C18.5 18.3 18.3 18.5 18 18.5H6C5.7 18.5 5.5 18.3 5.5 18V6C5.5 5.7 5.7 5.5 6 5.5H18C18.3 5.5 18.5 5.7 18.5 6V18ZM8 11.4V8H8.7V11.4H8ZM7 7.81818C7 7.36631 7.36631 7 7.81818 7H8.88182C9.33369 7 9.7 7.36631 9.7 7.81818V11.5818C9.7 12.0337 9.33369 12.4 8.88182 12.4H7.81818C7.36631 12.4 7 12.0337 7 11.5818V7.81818ZM11.45 8V16H12.45V8H11.45ZM11.3591 7C10.857 7 10.45 7.40701 10.45 7.90909V16.0909C10.45 16.593 10.857 17 11.3591 17H12.5409C13.043 17 13.45 16.593 13.45 16.0909V7.90909C13.45 7.40701 13.043 7 12.5409 7H11.3591ZM15 16V12H16V16H15ZM14 11.7576C14 11.3392 14.3392 11 14.7576 11H16.2424C16.6608 11 17 11.3392 17 11.7576V16.2424C17 16.6608 16.6608 17 16.2424 17H14.7576C14.3392 17 14 16.6608 14 16.2424V11.7576Z',
		} ),
	),
};

export default UAGB_Block_Icons;
