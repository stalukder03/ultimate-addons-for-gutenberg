/**
 * Block Icons
 */

import { createElement as el } from '@wordpress/element';

const iconColor = '#1e293b';

const UAGB_Block_Icons = {
	'section': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19L3 15M21 15L3 15M21 15V9M3 15L3 9M21 9V5C21 3.89543 20.1046 3 19 3L5 3C3.89543 3 3 3.89543 3 5L3 9M21 9L3 9',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
	),
	'buttons': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M7 17.5H17M7 6.5H17M5 10H19C20.1046 10 21 9.10457 21 8V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V8C3 9.10457 3.89543 10 5 10ZM5 21H19C20.1046 21 21 20.1046 21 19V16C21 14.8954 20.1046 14 19 14H5C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'advanced-heading': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M8 7V12.8333M8 12.8333V17M8 12.8333H16M16 12.8333V7M16 12.8333V17M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'google-map': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M9 3.00002L4.10557 5.44723C3.428 5.78601 3 6.47854 3 7.23608V20.382C3 21.1254 3.78231 21.6089 4.44721 21.2764L9 19M9 3.00002L15 5.00002M9 3.00002V19M9 19L15 21M15 5.00002L19.5528 2.72362C20.2177 2.39117 21 2.87467 21 3.61805V16.7639C21 17.5215 20.572 18.214 19.8944 18.5528L15 21M15 5.00002V21',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
	),
	'info-box': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M7 13H17M7 16.5H15.3333M9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'post-carousel': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M0 17C1.10457 17 2 16.1046 2 15V8C2 6.89543 1.10457 6 0 6M24 17C22.8954 17 22 16.1046 22 15V8C22 6.89543 22.8954 6 24 6M7 17H17C18.1046 17 19 16.1046 19 15V8C19 6.89543 18.1046 6 17 6H7C5.89543 6 5 6.89543 5 8V15C5 16.1046 5.89543 17 7 17Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
		el( 'path', {
			d: 'M8 11H12.5M8 14H16',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'post-masonry': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M3 14C3 12.8954 3.89543 12 5 12H8C9.10457 12 10 12.8954 10 14V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21V14Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
		el( 'path', {
			d: 'M14 3C14 1.89543 14.8954 1 16 1H19C20.1046 1 21 1.89543 21 3V10C21 11.1046 20.1046 12 19 12H16C14.8954 12 14 11.1046 14 10V3Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
		el( 'path', {
			d: 'M14 18C14 16.8954 14.8954 16 16 16H19C20.1046 16 21 16.8954 21 18V21C21 22.1046 20.1046 23 19 23H16C14.8954 23 14 22.1046 14 21V18Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
		el( 'path', {
			d: 'M3 3C3 1.89543 3.89543 1 5 1H8C9.10457 1 10 1.89543 10 3V6C10 7.10457 9.10457 8 8 8H5C3.89543 8 3 7.10457 3 6V3Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
	),
	'post-grid': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M3 16C3 14.8954 3.89543 14 5 14H8C9.10457 14 10 14.8954 10 16V19C10 20.1046 9.10457 21 8 21H5C3.89543 21 3 20.1046 3 19V16Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
		el( 'path', {
			d: 'M14 16C14 14.8954 14.8954 14 16 14H19C20.1046 14 21 14.8954 21 16V19C21 20.1046 20.1046 21 19 21H16C14.8954 21 14 20.1046 14 19V16Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
		el( 'path', {
			d: 'M3 5C3 3.89543 3.89543 3 5 3H8C9.10457 3 10 3.89543 10 5V8C10 9.10457 9.10457 10 8 10H5C3.89543 10 3 9.10457 3 8V5Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
		el( 'path', {
			d: 'M14 5C14 3.89543 14.8954 3 16 3H19C20.1046 3 21 3.89543 21 5V8C21 9.10457 20.1046 10 19 10H16C14.8954 10 14 9.10457 14 8V5Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
	),
	'testimonial': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M15.5 9.42857C15.5 10.2175 14.903 10.8571 14.1667 10.8571C13.4303 10.8571 12.8333 10.2175 12.8333 9.42857C12.8333 8.63959 13.4303 8 14.1667 8C14.903 8 15.5 8.63959 15.5 9.42857ZM15.5 9.42857C15.5 9.42857 15.5 11.5714 13.5 13M11.1667 9.42857C11.1667 10.2175 10.5697 10.8571 9.83333 10.8571C9.09695 10.8571 8.5 10.2175 8.5 9.42857C8.5 8.63959 9.09695 8 9.83333 8C10.5697 8 11.1667 8.63959 11.1667 9.42857ZM11.1667 9.42857C11.1667 9.42857 11.1667 11.5714 9.16667 13M12 21L14.4142 18.5858C14.7893 18.2107 15.298 18 15.8284 18H19C20.1046 18 21 17.1046 21 16V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V16C3 17.1046 3.89543 18 5 18H8.17157C8.70201 18 9.21071 18.2107 9.58579 18.5858L12 21Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		} ),
	),
	'cf7-styler': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M4.51555 17C6.13007 19.412 8.87958 21 12 21C15.1204 21 17.8699 19.412 19.4845 17M4.51555 17C3.55827 15.5699 3 13.8501 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 13.8501 20.4417 15.5699 19.4845 17M4.51555 17C5.75777 17 7.12889 15 8.43944 13M19.4845 17C18.2422 17 16.8711 15 15.5606 13M8.43944 13C9.75 11 11 9 12 9C13 9 14.25 11 15.5606 13M8.43944 13L9.09522 14.2607C9.47211 14.9852 10.5116 14.9769 10.8768 14.2464L11.3795 13.241C11.6848 12.6305 12.4984 12.4984 12.9811 12.9811L13.4309 13.4309C13.7632 13.7632 14.282 13.8193 14.6776 13.5658L15.5606 13',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
	),
	'gf-styler': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M17 12V15H7L6.99998 12.9996C6.99998 10.7905 8.79083 9.00001 10.9999 9.00001H17.5M3.33984 8.71466V15.2854C3.33984 16.0317 3.75541 16.7159 4.41768 17.0601L11.0779 20.5208C11.656 20.8212 12.3442 20.8212 12.9223 20.5208L19.5825 17.0601C20.2448 16.7159 20.6604 16.0317 20.6604 15.2854V8.71466C20.6604 7.96832 20.2448 7.28407 19.5825 6.93995L12.9223 3.47918C12.3442 3.1788 11.656 3.1788 11.0779 3.47918L4.41768 6.93995C3.75541 7.28407 3.33984 7.96832 3.33984 8.71466Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
	),
	'content-timeline': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M12.0001 3V7M12.0001 21V17M12.0001 7H15.0001M12.0001 7V12M15.0001 7C15.0001 8.10457 15.8954 9 17 9H19C20.1046 9 21 8.10457 21 7C21 5.89543 20.1046 5 19 5H17C15.8954 5 15.0001 5.89543 15.0001 7ZM12.0001 12H9M12.0001 12V17M9 12C9 13.1046 8.10457 14 7 14H5C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10H7C8.10457 10 9 10.8954 9 12ZM12.0001 17H15.0001M15.0001 17C15.0001 18.1046 15.8954 19 17 19H19C20.1046 19 21 18.1046 21 17C21 15.8954 20.1046 15 19 15H17C15.8954 15 15.0001 15.8954 15.0001 17Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'call-to-action': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M16.4545 16.4545L14.6364 21L11 11L21 14.6364L16.4545 16.4545ZM16.4545 16.4545L21 21M9 16.9291C5.60771 16.4439 3 13.5265 3 10C3 6.13401 6.13401 3 10 3C13.5265 3 16.4439 5.60771 16.9291 9M8.5 12.5987C7.6033 12.0799 7 11.1104 7 10C7 8.34315 8.34315 7 10 7C11.1104 7 12.0799 7.6033 12.5987 8.5',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		} ),
	),
	'post-timeline': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M4 3V6M4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10M4 6C5.10457 6 6 6.89543 6 8C6 9.10457 5.10457 10 4 10M4 10V14M4 14C2.89543 14 2 14.8954 2 16C2 17.1046 2.89543 18 4 18M4 14C5.10457 14 6 14.8954 6 16C6 17.1046 5.10457 18 4 18M4 18V21M11 18H19C20.1046 18 21 17.1046 21 16C21 14.8954 20.1046 14 19 14H11C9.89543 14 9 14.8954 9 16C9 17.1046 9.89543 18 11 18ZM11 10H19C20.1046 10 21 9.10457 21 8C21 6.89543 20.1046 6 19 6H11C9.89543 6 9 6.89543 9 8C9 9.10457 9.89543 10 11 10Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'icon-list': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M11 5H21M11 12H21M11 19H21',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
		el( 'path', {
			d: 'M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
		el( 'path', {
			d: 'M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
		el( 'path', {
			d: 'M7 19C7 20.1046 6.10457 21 5 21C3.89543 21 3 20.1046 3 19C3 17.8954 3.89543 17 5 17C6.10457 17 7 17.8954 7 19Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'team': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		} ),
	),
	'tabs': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M10 3V6C10 7.10457 10.8954 8 12 8H15.5M15.5 8H21M15.5 8V3M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
	),
	'social-share': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M9 12C9 13.1046 8.10457 14 7 14C5.89543 14 5 13.1046 5 12C5 10.8954 5.89543 10 7 10C8.10457 10 9 10.8954 9 12Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
		el( 'path', {
			d: 'M19 6C19 7.10457 18.1046 8 17 8C15.8954 8 15 7.10457 15 6C15 4.89543 15.8954 4 17 4C18.1046 4 19 4.89543 19 6Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
		el( 'path', {
			d: 'M19 18C19 19.1046 18.1046 20 17 20C15.8954 20 15 19.1046 15 18C15 16.8954 15.8954 16 17 16C18.1046 16 19 16.8954 19 18Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
		el( 'path', {
			d: 'M9 10.5L15 7M9 13.5L15 17',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
	),
	'restaurant-menu': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M17.7472 5.05554C17.5824 4.84998 17.3481 4.68976 17.074 4.59515C16.8912 4.53203 16.696 4.5 16.5 4.5M16.5 4.5C16.4022 4.5 16.3042 4.50797 16.2074 4.52402C15.9164 4.57225 15.6491 4.6913 15.4393 4.86612C15.2296 5.04093 15.0867 5.26366 15.0288 5.50614C14.9709 5.74861 15.0006 5.99995 15.1142 6.22835C15.2277 6.45676 15.42 6.65199 15.6666 6.78934C15.9133 6.92669 16.2033 7 16.5 7C16.7967 7 17.0867 7.07331 17.3334 7.21066C17.58 7.34802 17.7723 7.54324 17.8858 7.77165C17.9994 8.00005 18.0291 8.25139 17.9712 8.49386C17.9133 8.73634 17.7704 8.95907 17.5607 9.13388C17.3509 9.3087 17.0836 9.42775 16.7926 9.47598C16.6958 9.49203 16.5978 9.5 16.5 9.5M16.5 4.5V4M15.2528 8.94446C15.4176 9.15003 15.6519 9.31024 15.926 9.40485C16.1088 9.46797 16.304 9.5 16.5 9.5M16.5 9.5V10',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
		el( 'path', {
			d: 'M17.7472 15.0555C17.5824 14.85 17.3481 14.6898 17.074 14.5952C16.8912 14.532 16.696 14.5 16.5 14.5M16.5 14.5C16.4022 14.5 16.3042 14.508 16.2074 14.524C15.9164 14.5723 15.6491 14.6913 15.4393 14.8661C15.2296 15.0409 15.0867 15.2637 15.0288 15.5061C14.9709 15.7486 15.0006 15.9999 15.1142 16.2284C15.2277 16.4568 15.42 16.652 15.6666 16.7893C15.9133 16.9267 16.2033 17 16.5 17C16.7967 17 17.0867 17.0733 17.3334 17.2107C17.58 17.348 17.7723 17.5432 17.8858 17.7716C17.9994 18.0001 18.0291 18.2514 17.9712 18.4939C17.9133 18.7363 17.7704 18.9591 17.5607 19.1339C17.3509 19.3087 17.0836 19.4278 16.7926 19.476C16.6958 19.492 16.5978 19.5 16.5 19.5M16.5 14.5V14M15.2528 18.9445C15.4176 19.15 15.6519 19.3102 15.926 19.4049C16.1088 19.468 16.304 19.5 16.5 19.5M16.5 19.5V20',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
		el( 'path', {
			d: 'M6 5H12M6 15H12M6 8H9M6 18H9',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
		el( 'path', {
			d: 'M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'blockquote': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M7 7H17M7 11H9M17 11.8571C17 12.3305 16.6418 12.7143 16.2 12.7143C15.7582 12.7143 15.4 12.3305 15.4 11.8571C15.4 11.3838 15.7582 11 16.2 11C16.6418 11 17 11.3838 17 11.8571ZM17 11.8571C17 11.8571 17 13.1429 15.8 14M13.6 11.8571C13.6 12.3305 13.2418 12.7143 12.8 12.7143C12.3582 12.7143 12 12.3305 12 11.8571C12 11.3838 12.3582 11 12.8 11C13.2418 11 13.6 11.3838 13.6 11.8571ZM13.6 11.8571C13.6 11.8571 13.6 13.1429 12.4 14M3 21V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V16C21 17.1046 20.1046 18 19 18H7.66667C7.23393 18 6.81286 18.1404 6.46667 18.4L3 21Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		} ),
	),
	'columns': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M15 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H15M15 3V21M15 3H9M15 21H9M9 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H9M9 3V21',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
	),
	'marketing-button': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M7 20.9895H17M4 16.9895H20',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
		el( 'path', {
			d: 'M10 7H19M3 11H21C22.1046 11 23 10.1046 23 9V5C23 3.89543 22.1046 3 21 3H3C1.89543 3 1 3.89543 1 5V9C1 10.1046 1.89543 11 3 11ZM7 7C7 7.55228 6.55228 8 6 8C5.44772 8 5 7.55228 5 7C5 6.44772 5.44772 6 6 6C6.55228 6 7 6.44772 7 7Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'table-of-contents': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M7 16H13M7 12H15.3333M7 8H17M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'faq': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M9.00006 9C9.50006 8 10.5001 7 12.0001 7C13.5002 7 15.0001 8.5 15.0001 10C15.0001 11.4553 14.0588 12.4399 13.0843 12.8686C13.0248 12.8948 12.9619 12.9116 12.8992 12.9285C12.4001 13.0627 12.0001 13.4804 12.0001 14M12.0001 17H12.0101M21.0001 12C21.0001 16.9706 16.9706 21 12.0001 21C10.5124 21 9.1091 20.6391 7.87286 20C7.19356 19.6488 3.56466 21.5054 3 21C2.43678 20.4959 4.93748 17.6302 4.51561 17C3.55833 15.5699 3.00006 13.8501 3.00006 12C3.00006 7.02944 7.0295 3 12.0001 3C16.9706 3 21.0001 7.02944 21.0001 12Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		} ),
	),
	'forms': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M7 10H17M7 7H10.5M9 17H15M7 13H17M13.5 7H17M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'how-to': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M13 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V11M13 3L21 11M13 3V9C13 10.1046 13.8954 11 15 11H21M10 11H17M10 7H13M10 15H17M7 7H7.1M7 11H7.1M7 15H7.1',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		} ),
	),
	'inline-notice': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M3 21H21M3 3H21M10 12H19M3 17H21C22.1046 17 23 16.1046 23 15V9C23 7.89543 22.1046 7 21 7H3C1.89543 7 1 7.89543 1 9V15C1 16.1046 1.89543 17 3 17ZM7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'wp-search': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M3 21L9 15M7 10C7 13.866 10.134 17 14 17C17.866 17 21 13.866 21 10C21 6.13401 17.866 3 14 3C10.134 3 7 6.13401 7 10Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		} ),
	),
	'taxonomy-list': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M10 16H17M10 12H15M10 8H17M6.98999 8H6.99999M6.98999 12H6.99999M6.98999 16H6.99999M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'review': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M7 10.5H17M9.5 7H9.51M6.99 7H7M12 7H12.01M7 14H14M12 21L14.4142 18.5858C14.7893 18.2107 15.298 18 15.8284 18H19C20.1046 18 21 17.1046 21 16V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V16C3 17.1046 3.89543 18 5 18H8.17157C8.70201 18 9.21071 18.2107 9.58579 18.5858L12 21Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		} ),
	),
	'lottie': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M7 17C7 17 12 17.5 12 12C12 6.5 17 7 17 7M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'star-rating': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M11.103 7.81696C11.4698 7.07371 12.5297 7.07371 12.8965 7.81696L13.8243 9.69697C13.97 9.99211 14.2516 10.1967 14.5773 10.244L16.652 10.5455C17.4722 10.6647 17.7997 11.6726 17.2062 12.2512L15.7049 13.7146C15.4692 13.9443 15.3617 14.2753 15.4173 14.5997L15.7717 16.666C15.9118 17.4829 15.0544 18.1059 14.3208 17.7202L12.4651 16.7446C12.1738 16.5915 11.8257 16.5915 11.5344 16.7446L9.67874 17.7202C8.94511 18.1059 8.08768 17.4829 8.22779 16.666L8.58219 14.5997C8.63783 14.2753 8.53028 13.9443 8.29459 13.7146L6.79332 12.2512C6.1998 11.6726 6.52731 10.6647 7.34753 10.5455L9.42225 10.244C9.74796 10.1967 10.0295 9.99211 10.1752 9.69697L11.103 7.81696Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
		el( 'path', {
			d: 'M18.4424 14.106L20.1846 14.8943C21.0283 15.2761 21.9613 14.5667 21.7842 13.6782L21.6155 12.8313C21.5377 12.4411 21.6806 12.0403 21.99 11.7808L22.6034 11.2662C23.3499 10.6399 22.9822 9.44941 22.0043 9.32712L20.8958 9.18848C20.5373 9.14365 20.2219 8.93603 20.0458 8.62895L19.4377 7.56859C19.003 6.81047 17.8817 6.81047 17.447 7.56859L16.559 9.11719M5.55765 14.106L3.8154 14.8943C2.97172 15.2761 2.0387 14.5667 2.21577 13.6782L2.38454 12.8313C2.46229 12.4411 2.3194 12.0403 2.01002 11.7808L1.39664 11.2662C0.650069 10.6399 1.01784 9.44941 1.99569 9.32712L3.1042 9.18848C3.46273 9.14365 3.77814 8.93603 3.95423 8.62895L4.56227 7.56859C4.997 6.81047 6.11829 6.81047 6.55302 7.56859L7.44104 9.11719',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'display-conditions': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M14.8291 12C14.8291 13.4202 13.5623 14.5714 11.9996 14.5714C10.4369 14.5714 9.17004 13.4202 9.17004 12C9.17004 10.5798 10.4369 9.42857 11.9996 9.42857C13.5623 9.42857 14.8291 10.5798 14.8291 12Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		} ),
		el( 'path', {
			d: 'M3 12C4.20187 8.52247 7.77678 6 12 6C16.2232 6 19.7982 8.5225 21 12C19.7981 15.4775 16.2232 18 12 18C7.77678 18 4.20185 15.4775 3 12Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		} ),
	),
	'masonry-gallery': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M14 21V18C14 16.8954 14.8954 16 16 16H19C20.1046 16 21 16.8954 21 18V21M14 21C14 22.1046 14.8954 23 16 23H19C20.1046 23 21 22.1046 21 21M14 21L16.0343 19.6438C16.6315 19.2457 17.3962 19.1981 18.0381 19.5191L21 21M14 10C14 11.1046 14.8954 12 16 12H19C20.1046 12 21 11.1046 21 10M14 10V3C14 1.89543 14.8954 1 16 1H19C20.1046 1 21 1.89543 21 3V10M14 10V10C14 9.37526 14.3122 8.79185 14.8321 8.4453L16.0343 7.64381C16.6315 7.24569 17.3962 7.19808 18.0381 7.51906L20.1056 8.55279C20.6537 8.82687 21 9.38713 21 10V10M3 21C3 22.1046 3.89543 23 5 23H8C9.10457 23 10 22.1046 10 21M3 21V14C3 12.8954 3.89543 12 5 12H8C9.10457 12 10 12.8954 10 14V21M3 21V21C3 20.3753 3.31223 19.7918 3.83205 19.4453L5.03429 18.6438C5.63146 18.2457 6.39617 18.1981 7.03811 18.5191L9.10557 19.5528C9.65374 19.8269 10 20.3871 10 21V21M3 6V3C3 1.89543 3.89543 1 5 1H8C9.10457 1 10 1.89543 10 3V6M3 6C3 7.10457 3.89543 8 5 8H8C9.10457 8 10 7.10457 10 6M3 6L5.03429 4.64381C5.63146 4.24569 6.39617 4.19808 7.03811 4.51906L10 6M7 15H7.1M18 4H18.1',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
	),
	'responsive-conditions': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M16 19H3C1.89543 19 1 18.1046 1 17V7C1 5.89543 1.89543 5 3 5H20C21.1046 5 22 5.89543 22 7V9M16 19V11C16 9.89543 16.8954 9 18 9H21C22.1046 9 23 9.89543 23 11V19C23 20.1046 22.1046 21 21 21H18C16.8954 21 16 20.1046 16 19Z',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
		} ),
		el( 'path', {
			d: 'M3.5 12H3.51M19.5 18.5H19.51',
			stroke: iconColor,
			strokeWidth: 1.4,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		} ),
	),
	'container': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M3 16C3 14.8954 3.89543 14 5 14H8C9.10457 14 10 14.8954 10 16V19C10 20.1046 9.10457 21 8 21H5C3.89543 21 3 20.1046 3 19V16Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
		el( 'path', {
			d: 'M14 16C14 14.8954 14.8954 14 16 14H19C20.1046 14 21 14.8954 21 16V19C21 20.1046 20.1046 21 19 21H16C14.8954 21 14 20.1046 14 19V16Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
		el( 'path', {
			d: 'M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V8C21 9.10457 20.1046 10 19 10H5C3.89543 10 3 9.10457 3 8V5Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
	),
	'image': el(
		'svg',
		{ width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none' },
		el( 'path', {
			d: 'M3 17L7.41995 12.58C8.26284 11.7372 9.65125 11.8141 10.3959 12.7449L11.789 14.4863C12.4639 15.3298 13.6866 15.4851 14.5508 14.8369L15.6123 14.0408C16.4086 13.4436 17.5228 13.5228 18.2265 14.2265L21 17M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z',
			stroke: iconColor,
			strokeWidth: 1.4,
		} ),
	),
	'image-gallery': el(
		'svg',
		{ 'width': 32, 'height': 32, 'viewBox': '0 37.25 24 24' },
		el( 'path', {
			'fill': iconColor,
			'd': 'M16.938,40.125h-12c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-12   C18.938,41.025,18.037,40.125,16.938,40.125z M17.438,54.125c0,0.301-0.201,0.5-0.5,0.5h-12c-0.3,0-0.5-0.199-0.5-0.5v-12   c0-0.299,0.2-0.5,0.5-0.5h12c0.299,0,0.5,0.201,0.5,0.5V54.125z',
		} ),	
		el( 'path', {
			'fill': iconColor,
			'd': 'M19.063,42.375H7.062c-1.1,0-2,0.898-2,2v12c0,1.1,0.9,2,2,2h12.001c1.1,0,2-0.9,2-2v-12    C21.063,43.273,20.162,42.375,19.063,42.375z',
		} ),
		el( 'path', {
			'fill': '#ffffff',
			'd': 'M7.062,43.875h12.001c0.299,0,0.5,0.199,0.5,0.5v8.082c-0.434-0.369-0.867-0.738-1.145-0.971    c-0.957-0.695-1.918-0.375-2.328-0.08c-0.035,0.023-0.869,0.609-1.758,1.35c-0.289,0.24-0.543,0.123-0.652,0.031    c-0.027-0.029-0.654-0.717-1.525-1.545c-0.512-0.6-1.046-0.74-1.406-0.752c-0.748-0.039-1.248,0.467-1.24,0.467l-2.947,2.371    v-8.953C6.562,44.074,6.763,43.875,7.062,43.875z',
		} ),
		el( 'path', {
			'fill': '#ffffff',
			'd': 'M19.063,56.875H7.062c-0.299,0-0.5-0.201-0.5-0.5v-1.123l3.941-3.174c0.031-0.029,0.131-0.088,0.199-0.088    c0.078,0.004,0.193,0.088,0.363,0.281c0.884,0.844,1.499,1.518,1.544,1.564c0.447,0.426,1.588,0.984,2.682,0.072    c0.84-0.697,1.652-1.268,1.666-1.279c0.002,0,0.25-0.168,0.535,0.037c0.473,0.398,1.479,1.258,2.07,1.762v1.947    C19.563,56.674,19.361,56.875,19.063,56.875z',
		} ),
		el( 'path', {
			'fill': iconColor,
			'fill-rule': 'evenodd',
			'clip-rule': 'evenodd',
			'd': 'M18.266,47.425c-0.004,0.796-0.678,1.461-1.473,1.45   c-0.793-0.009-1.438-0.657-1.443-1.448c-0.006-0.797,0.66-1.467,1.457-1.467S18.268,46.626,18.266,47.425z',
		} ),
	),
};

export default UAGB_Block_Icons;
