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
            { label: 'headingAlign', value: 'left' },
			{ label: 'seperatorStyle', value: 'none' },
			{ label: 'separatorWidth', value: 80 },
			{ label: 'separatorHeight', value: '' },
			{ label: 'separatorColor', value: '' },
			{ label: 'separatorWidthType' , value: 'px'},
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="27" width="42" height="2" rx="1" /><rect x="7" y="35" width="58" height="1" rx="0.5" /><rect x="7" y="39" width="58" height="1" rx="0.5" /><path d="M7 43.5C7 43.2239 7.22386 43 7.5 43H50.5C50.7761 43 51 43.2239 51 43.5C51 43.7761 50.7761 44 50.5 44H7.5C7.22386 44 7 43.7761 7 43.5Z" /></svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'headingAlign', value: 'center' },
			{ label: 'seperatorStyle', value: 'solid' },
			{ label: 'separatorWidth', value: 80 },
			{ label: 'separatorHeight', value: 2 },
			{ label: 'separatorColor', value: '#0170B9' },
			{ label: 'separatorWidthType' , value: 'px'},
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="24" width="43" height="2" rx="1" /><path fill-rule="evenodd" clip-rule="evenodd" d="M24 32.5029C24 32.2252 24.2252 32 24.5029 32H24.7544C25.0321 32 25.2573 32.2252 25.2573 32.5029C25.2573 32.7807 25.0321 33.0058 24.7544 33.0058H24.5029C24.2252 33.0058 24 32.7807 24 32.5029ZM26.2631 32.5029C26.2631 32.2252 26.4883 32 26.766 32H27.2689C27.5467 32 27.7718 32.2252 27.7718 32.5029C27.7718 32.7807 27.5467 33.0058 27.2689 33.0058H26.766C26.4883 33.0058 26.2631 32.7807 26.2631 32.5029ZM28.7777 32.5029C28.7777 32.2252 29.0028 32 29.2806 32H29.7835C30.0613 32 30.2864 32.2252 30.2864 32.5029C30.2864 32.7807 30.0613 33.0058 29.7835 33.0058H29.2806C29.0028 33.0058 28.7777 32.7807 28.7777 32.5029ZM31.2922 32.5029C31.2922 32.2252 31.5174 32 31.7952 32H32.2981C32.5758 32 32.801 32.2252 32.801 32.5029C32.801 32.7807 32.5758 33.0058 32.2981 33.0058H31.7952C31.5174 33.0058 31.2922 32.7807 31.2922 32.5029ZM33.8068 32.5029C33.8068 32.2252 34.032 32 34.3097 32H34.8126C35.0904 32 35.3155 32.2252 35.3155 32.5029C35.3155 32.7807 35.0904 33.0058 34.8126 33.0058H34.3097C34.032 33.0058 33.8068 32.7807 33.8068 32.5029ZM36.3214 32.5029C36.3214 32.2252 36.5465 32 36.8243 32H37.3272C37.605 32 37.8301 32.2252 37.8301 32.5029C37.8301 32.7807 37.605 33.0058 37.3272 33.0058H36.8243C36.5465 33.0058 36.3214 32.7807 36.3214 32.5029ZM38.8359 32.5029C38.8359 32.2252 39.0611 32 39.3389 32H39.8418C40.1195 32 40.3447 32.2252 40.3447 32.5029C40.3447 32.7807 40.1195 33.0058 39.8418 33.0058H39.3389C39.0611 33.0058 38.8359 32.7807 38.8359 32.5029ZM41.3505 32.5029C41.3505 32.2252 41.5757 32 41.8534 32H42.3563C42.6341 32 42.8592 32.2252 42.8592 32.5029C42.8592 32.7807 42.6341 33.0058 42.3563 33.0058H41.8534C41.5757 33.0058 41.3505 32.7807 41.3505 32.5029ZM43.8651 32.5029C43.8651 32.2252 44.0902 32 44.368 32H44.8709C45.1487 32 45.3738 32.2252 45.3738 32.5029C45.3738 32.7807 45.1487 33.0058 44.8709 33.0058H44.368C44.0902 33.0058 43.8651 32.7807 43.8651 32.5029ZM46.3796 32.5029C46.3796 32.2252 46.6048 32 46.8826 32H47.134C47.4118 32 47.6369 32.2252 47.6369 32.5029C47.6369 32.7807 47.4118 33.0058 47.134 33.0058H46.8826C46.6048 33.0058 46.3796 32.7807 46.3796 32.5029Z" /><rect x="7" y="39" width="58" height="1" rx="0.5" /><rect x="7" y="43" width="58" height="1" rx="0.5" /><rect x="14" y="47" width="44" height="1" rx="0.5" /></svg>',
    },
    {
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
		attributes: [
            { label: 'headingAlign', value: 'left' },
			{ label: 'seperatorStyle', value: 'solid' },
			{ label: 'separatorWidth', value: 80 },
			{ label: 'separatorHeight', value: 2 },
			{ label: 'separatorWidthType' , value: 'px'},
			{ label: 'separatorColor', value: '#0170B9' },
        ],
        icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="24" width="43" height="2" rx="1" /><path fill-rule="evenodd" clip-rule="evenodd" d="M7 32.5029C7 32.2252 7.22516 32 7.50291 32H7.75437C8.03212 32 8.25728 32.2252 8.25728 32.5029C8.25728 32.7807 8.03212 33.0058 7.75437 33.0058H7.50291C7.22516 33.0058 7 32.7807 7 32.5029ZM9.26311 32.5029C9.26311 32.2252 9.48827 32 9.76602 32H10.2689C10.5467 32 10.7718 32.2252 10.7718 32.5029C10.7718 32.7807 10.5467 33.0058 10.2689 33.0058H9.76602C9.48827 33.0058 9.26311 32.7807 9.26311 32.5029ZM11.7777 32.5029C11.7777 32.2252 12.0028 32 12.2806 32H12.7835C13.0613 32 13.2864 32.2252 13.2864 32.5029C13.2864 32.7807 13.0613 33.0058 12.7835 33.0058H12.2806C12.0028 33.0058 11.7777 32.7807 11.7777 32.5029ZM14.2922 32.5029C14.2922 32.2252 14.5174 32 14.7952 32H15.2981C15.5758 32 15.801 32.2252 15.801 32.5029C15.801 32.7807 15.5758 33.0058 15.2981 33.0058H14.7952C14.5174 33.0058 14.2922 32.7807 14.2922 32.5029ZM16.8068 32.5029C16.8068 32.2252 17.032 32 17.3097 32H17.8126C18.0904 32 18.3155 32.2252 18.3155 32.5029C18.3155 32.7807 18.0904 33.0058 17.8126 33.0058H17.3097C17.032 33.0058 16.8068 32.7807 16.8068 32.5029ZM19.3214 32.5029C19.3214 32.2252 19.5465 32 19.8243 32H20.3272C20.605 32 20.8301 32.2252 20.8301 32.5029C20.8301 32.7807 20.605 33.0058 20.3272 33.0058H19.8243C19.5465 33.0058 19.3214 32.7807 19.3214 32.5029ZM21.8359 32.5029C21.8359 32.2252 22.0611 32 22.3389 32H22.8418C23.1195 32 23.3447 32.2252 23.3447 32.5029C23.3447 32.7807 23.1195 33.0058 22.8418 33.0058H22.3389C22.0611 33.0058 21.8359 32.7807 21.8359 32.5029ZM24.3505 32.5029C24.3505 32.2252 24.5757 32 24.8534 32H25.3563C25.6341 32 25.8592 32.2252 25.8592 32.5029C25.8592 32.7807 25.6341 33.0058 25.3563 33.0058H24.8534C24.5757 33.0058 24.3505 32.7807 24.3505 32.5029ZM26.8651 32.5029C26.8651 32.2252 27.0902 32 27.368 32H27.8709C28.1487 32 28.3738 32.2252 28.3738 32.5029C28.3738 32.7807 28.1487 33.0058 27.8709 33.0058H27.368C27.0902 33.0058 26.8651 32.7807 26.8651 32.5029ZM29.3796 32.5029C29.3796 32.2252 29.6048 32 29.8826 32H30.134C30.4118 32 30.6369 32.2252 30.6369 32.5029C30.6369 32.7807 30.4118 33.0058 30.134 33.0058H29.8826C29.6048 33.0058 29.3796 32.7807 29.3796 32.5029Z" /><rect x="7" y="39" width="58" height="1" rx="0.5" /><rect x="7" y="43" width="58" height="1" rx="0.5" /><rect x="7" y="47" width="44" height="1" rx="0.5" /></svg>',
    }
];

export default applyFilters(
    `uag_creative_heading_presets`,
    presets
);
