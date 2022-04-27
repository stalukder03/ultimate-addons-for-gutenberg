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
            { label: 'bgColor', value: '#ffffff' },
            { label: 'inputborderRadius', value: 2 },
			{ label: 'paddingFieldTop' , value: 12 },
			{ label: 'paddingFieldRight' , value: 12 },
			{ label: 'paddingFieldBottom' , value: 12 },
			{ label: 'paddingFieldLeft' , value: 12 },
			{ label: 'formStyle', value: 'boxed' }
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 53C14.8954 53 14 53.8954 14 55C14 56.1046 14.8954 57 16 57H29C30.1046 57 31 56.1046 31 55C31 53.8954 30.1046 53 29 53H22.5H16Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M56 42H16V49H56V42ZM56 40H16C14.8954 40 14 40.8954 14 42V49C14 50.1046 14.8954 51 16 51H56C57.1046 51 58 50.1046 58 49V42C58 40.8954 57.1046 40 56 40ZM56 24H16C14.8954 24 14 24.8954 14 26V28C14 29.1046 14.8954 30 16 30H56C57.1046 30 58 29.1046 58 28V26C58 24.8954 57.1046 24 56 24ZM56 26H16V28H56V26ZM56 34H16V36H56V34ZM56 18H16V20H56V18ZM16 16C14.8954 16 14 16.8954 14 18V20C14 21.1046 14.8954 22 16 22H56C57.1046 22 58 21.1046 58 20V18C58 16.8954 57.1046 16 56 16H16ZM14 34C14 32.8954 14.8954 32 16 32H56C57.1046 32 58 32.8954 58 34V36C58 37.1046 57.1046 38 56 38H16C14.8954 38 14 37.1046 14 36V34Z" /></svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'bgColor', value: '#ffffff' },
            { label: 'inputborderRadius', value: 3 },
			{ label: 'paddingFieldTop' , value: 0 },
			{ label: 'paddingFieldRight' , value: 10 },
			{ label: 'paddingFieldBottom' , value: 10 },
			{ label: 'paddingFieldLeft' , value: 0 },
			{ label: 'formStyle', value: 'underlined' }
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_179_65" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M56 38H16V45H56V38ZM16 36C14.8954 36 14 36.8954 14 38V45C14 46.1046 14.8954 47 16 47H56C57.1046 47 58 46.1046 58 45V38C58 36.8954 57.1046 36 56 36H16Z"/><path d="M14 25C14 24.4477 14.4477 24 15 24H57C57.5523 24 58 24.4477 58 25C58 25.5523 57.5523 26 57 26H15C14.4477 26 14 25.5523 14 25Z"/><path d="M14 31C14 30.4477 14.4477 30 15 30H57C57.5523 30 58 30.4477 58 31C58 31.5523 57.5523 32 57 32H15C14.4477 32 14 31.5523 14 31Z"/><path d="M14 53C14 51.8954 14.8954 51 16 51H29C30.1046 51 31 51.8954 31 53C31 54.1046 30.1046 55 29 55H16C14.8954 55 14 54.1046 14 53Z"/><path d="M14 19C14 18.4477 14.4477 18 15 18H57C57.5523 18 58 18.4477 58 19C58 19.5523 57.5523 20 57 20H15C14.4477 20 14 19.5523 14 19Z"/></mask><path d="M16 38V36H14V38H16ZM56 38H58V36H56V38ZM16 45H14V47H16V45ZM56 45V47H58V45H56ZM16 40H56V36H16V40ZM18 45V38H14V45H18ZM56 43H16V47H56V43ZM54 38V45H58V38H54ZM16 38V34C13.7909 34 12 35.7909 12 38H16ZM16 45V38H12V45H16ZM16 45H16H12C12 47.2091 13.7909 49 16 49V45ZM56 45H16V49H56V45ZM56 45V49C58.2091 49 60 47.2091 60 45H56ZM56 38V45H60V38H56ZM56 38H60C60 35.7909 58.2091 34 56 34V38ZM16 38H56V34H16V38ZM15 26H57V22H15V26ZM57 24H15V28H57V24ZM15 24C15.5523 24 16 24.4477 16 25H12C12 26.6569 13.3431 28 15 28V24ZM56 25C56 24.4477 56.4477 24 57 24V28C58.6569 28 60 26.6569 60 25H56ZM57 26C56.4477 26 56 25.5523 56 25H60C60 23.3431 58.6569 22 57 22V26ZM15 22C13.3431 22 12 23.3431 12 25H16C16 25.5523 15.5523 26 15 26V22ZM15 32H57V28H15V32ZM57 30H15V34H57V30ZM15 30C15.5523 30 16 30.4477 16 31H12C12 32.6569 13.3431 34 15 34V30ZM56 31C56 30.4477 56.4477 30 57 30V34C58.6569 34 60 32.6569 60 31H56ZM57 32C56.4477 32 56 31.5523 56 31H60C60 29.3431 58.6569 28 57 28V32ZM15 28C13.3431 28 12 29.3431 12 31H16C16 31.5523 15.5523 32 15 32V28ZM16 53H29V49H16V53ZM29 53H16V57H29V53ZM16 53H16H12C12 55.2091 13.7909 57 16 57V53ZM29 53V57C31.2091 57 33 55.2091 33 53H29ZM29 53H33C33 50.7909 31.2091 49 29 49V53ZM16 49C13.7909 49 12 50.7909 12 53H16V49ZM15 20H57V16H15V20ZM57 18H15V22H57V18ZM15 18C15.5523 18 16 18.4477 16 19H12C12 20.6569 13.3431 22 15 22V18ZM56 19C56 18.4477 56.4477 18 57 18V22C58.6569 22 60 20.6569 60 19H56ZM57 20C56.4477 20 56 19.5523 56 19H60C60 17.3431 58.6569 16 57 16V20ZM15 16C13.3431 16 12 17.3431 12 19H16C16 19.5523 15.5523 20 15 20V16Z"  mask="url(#path-1-inside-1_179_65)"/></svg>',
    }
];

export default applyFilters(
    `uag_forms_presets`,
    presets
);
