/**
 * Internal dependencies
 */
import rowIcons from './icons';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
const variations = [
	{
		name: 'one-column',
		label: __( 'One column', 'ultimate-addons-for-gutenberg' ),
		icon: rowIcons.colOne,
		attributes: {
			variationSelected: true,
		},
		scope: [ 'block' ],
	},
	{
		name: 'two-column-split',
		label: __(
			'Two columns; equal split',
			'ultimate-addons-for-gutenberg'
		),
		icon: rowIcons.layout5050,
		attributes: {
			variationSelected: true,
		},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/container-child', { widthDesktop: 50 } ],
			[ 'uagb/container-child', { widthDesktop: 50 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-columns-one-third-two-thirds',
		label: __(
			'Two columns; one-third, two-thirds split',
			'ultimate-addons-for-gutenberg'
		),
		icon: rowIcons.layout3366,
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container-child', { widthDesktop: 33.33 } ],
			[ 'uagb/container-child', { widthDesktop: 66.66 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-columns-two-thirds-one-third',
		label: __(
			'Two columns; two-thirds, one-third split',
			'ultimate-addons-for-gutenberg'
		),
		icon: rowIcons.layout6633,
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container-child', { widthDesktop: 66.66 } ],
			[ 'uagb/container-child', { widthDesktop: 33.33 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-equal',
		label: __(
			'Three columns; equal split',
			'ultimate-addons-for-gutenberg'
		),
		icon: rowIcons.layout333333,
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container-child', { widthDesktop: 33.33 } ],
			[ 'uagb/container-child', { widthDesktop: 33.33 } ],
			[ 'uagb/container-child', { widthDesktop: 33.33 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-column-first-half',
		label: __(
			'Three columns; equal split',
			'ultimate-addons-for-gutenberg'
		),
		icon: rowIcons.layout252550,
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container-child', { widthDesktop: 25 } ],
			[ 'uagb/container-child', { widthDesktop: 25 } ],
			[ 'uagb/container-child', { widthDesktop: 50 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-column',
		label: __(
			'Three columns; equal split',
			'ultimate-addons-for-gutenberg'
		),
		icon: rowIcons.layout502525,
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container-child', { widthDesktop: 50 } ],
			[ 'uagb/container-child', { widthDesktop: 25 } ],
			[ 'uagb/container-child', { widthDesktop: 25 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-wider-center',
		label: __(
			'Three columns; wide center column',
			'ultimate-addons-for-gutenberg'
		),
		icon: rowIcons.layout255025,
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container-child', { widthDesktop: 25 } ],
			[ 'uagb/container-child', { widthDesktop: 50 } ],
			[ 'uagb/container-child', { widthDesktop: 25 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'four-column',
		label: __(
			'Four columns; equal split',
			'ultimate-addons-for-gutenberg'
		),
		icon: rowIcons.layout25252525,
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container-child', { widthDesktop: 25 } ],
			[ 'uagb/container-child', { widthDesktop: 25 } ],
			[ 'uagb/container-child', { widthDesktop: 25 } ],
			[ 'uagb/container-child', { widthDesktop: 25 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'five-column',
		label: __(
			'Five columns; equal split',
			'ultimate-addons-for-gutenberg'
		),
		icon: rowIcons.layout2525252525,
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container-child', { widthDesktop: 25 } ],
			[ 'uagb/container-child', { widthDesktop: 25 } ],
			[ 'uagb/container-child', { widthDesktop: 25 } ],
			[ 'uagb/container-child', { widthDesktop: 25 } ],
			[ 'uagb/container-child', { widthDesktop: 25 } ],
		],
		scope: [ 'block' ],
	},
];

export default variations;
