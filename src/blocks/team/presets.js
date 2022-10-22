import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import defaultAttributes from './attributes';

let imgUrl = '';
if ( defaultAttributes.image ) {
	imgUrl = defaultAttributes.image.url;
}

const presets = [
	{
		defaultAttributes
	},
    {
        value: 'preset-1',
        label: __( 'Preset 1', 'ultimate-addons-for-gutenberg' ),
        attributes: [
			{ label: 'image', value: { url: ( imgUrl ? imgUrl : `${ uagb_blocks_info.uagb_url }/admin/assets/images/placeholder.png` ) } },
            { label: 'titleSpace', value: 40 },
			{ label: 'prefixSpace', value: 11 },
			{ label: 'descSpace', value: 10 },
			{ label: 'align', value: 'center' },
			{ label: 'imgPosition', value: 'above' },
			{ label: 'imgAlign', value: '' },
			{ label: 'socialEnable', value: true },
			{ label: 'imgStyle', value: 'circle' },
			{ label: 'imageLeftMargin', value: 20 },
			{ label: 'imageRightMargin', value: 20 },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 168C58 166.343 59.138 165 60.5418 165H266.259C267.663 165 268.801 166.343 268.801 168C268.801 169.657 267.663 171 266.259 171H60.5418C59.138 171 58 169.657 58 168Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M84 189C84 187.343 85.1317 186 86.5276 186H240.24C241.636 186 242.768 187.343 242.768 189C242.768 190.657 241.636 192 240.24 192H86.5276C85.1317 192 84 190.657 84 189Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M86 125.003C86 122.792 87.6678 121 89.7252 121H237.04C239.097 121 240.765 122.792 240.765 125.003C240.765 127.213 239.097 129.005 237.04 129.005H89.7252C87.6678 129.005 86 127.213 86 125.003Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M113 147C113 145.343 114.088 144 115.431 144H211.569C212.912 144 214 145.343 214 147C214 148.657 212.912 150 211.569 150H115.431C114.088 150 113 148.657 113 147Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M161.236 56.0245C161.048 56.0467 160.475 56.1101 159.964 56.1655C156.734 56.5158 153.158 57.727 150.272 59.4481C146.6 61.6383 143.615 64.6221 141.424 68.2931C139.716 71.154 138.582 74.4786 138.119 77.98C137.96 79.1788 137.96 82.8471 138.119 84.0459C138.582 87.5474 139.716 90.872 141.424 93.7329C143.615 97.4039 146.6 100.388 150.272 102.578C153.135 104.285 156.461 105.419 159.964 105.881C161.163 106.04 164.833 106.04 166.032 105.881C172.127 105.076 177.293 102.401 181.509 97.8652C183.842 95.3561 185.667 92.2352 186.787 88.84C187.67 86.1636 188 84.0325 188 81.013C188 78.7792 187.906 77.7923 187.505 75.8276C186.129 69.0915 181.799 63.0716 175.723 59.4481C172.89 57.7585 169.512 56.6008 166.13 56.1603C165.272 56.0486 161.843 55.9534 161.236 56.0245ZM165.2 67.0181C167.615 67.6483 169.781 69.4215 170.882 71.6696C171.564 73.0622 171.74 73.8566 171.74 75.5341C171.74 76.688 171.701 77.0988 171.527 77.7355C170.858 80.1867 169.112 82.313 166.864 83.4142C165.976 83.8492 164.685 84.2416 164.141 84.2416C163.559 84.2416 163.967 84.3436 165.117 84.4859C170.303 85.1276 174.852 87.9503 177.723 92.3078C178.483 93.4621 179.477 95.5224 179.396 95.7772C179.362 95.884 178.888 96.3954 178.343 96.9135C175.018 100.073 171.021 102.077 166.522 102.839C165.415 103.026 164.842 103.063 162.998 103.063C161.154 103.063 160.581 103.026 159.474 102.839C154.975 102.077 150.978 100.073 147.653 96.9135C147.108 96.3954 146.634 95.884 146.6 95.7772C146.519 95.5224 147.513 93.4621 148.273 92.3078C151.144 87.9503 155.693 85.1276 160.879 84.4859C162.029 84.3436 162.437 84.2416 161.855 84.2416C161.311 84.2416 160.02 83.8492 159.132 83.4142C156.884 82.313 155.138 80.1867 154.469 77.7355C154.295 77.0988 154.255 76.688 154.255 75.5341C154.255 73.8563 154.432 73.0618 155.114 71.6696C156.325 69.1968 158.697 67.3905 161.406 66.877C162.429 66.6832 164.164 66.7477 165.2 67.0181Z" fill="#B6B6B6"/> <circle cx="133" cy="212" r="5" fill="#B6B6B6"/> <circle cx="148" cy="212" r="5" fill="#B6B6B6"/> <circle cx="163" cy="212" r="5" fill="#B6B6B6"/> <circle cx="178" cy="212" r="5" fill="#B6B6B6"/> <circle cx="193" cy="212" r="5" fill="#B6B6B6"/> </svg>',
    },
    {
        value: 'preset-2',
        label: __( 'Preset 2', 'ultimate-addons-for-gutenberg' ),
        attributes: [
			{ label: 'image', value: { url: ( imgUrl ? imgUrl : `${ uagb_blocks_info.uagb_url }/admin/assets/images/placeholder.png` ) } },
            { label: 'titleSpace', value: 5 },
			{ label: 'prefixSpace', value: 13 },
			{ label: 'descSpace', value: 20 },
			{ label: 'align', value: 'center' },
			{ label: 'imgPosition', value: 'above' },
			{ label: 'imgAlign', value: '' },
			{ label: 'socialEnable', value: false },
			{ label: 'imgStyle', value: 'circle' },
			{ label: 'imageLeftMargin', value: 20 },
			{ label: 'imageRightMargin', value: 20 },
        ],
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 180C58 178.343 59.138 177 60.5418 177H266.259C267.663 177 268.801 178.343 268.801 180C268.801 181.657 267.663 183 266.259 183H60.5418C59.138 183 58 181.657 58 180Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M84 199.009C84 197.352 85.1317 196.009 86.5276 196.009H240.24C241.636 196.009 242.768 197.352 242.768 199.009C242.768 200.666 241.636 202.009 240.24 202.009H86.5276C85.1317 202.009 84 200.666 84 199.009Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M86 141.003C86 138.792 87.6678 137 89.7252 137H237.04C239.097 137 240.765 138.792 240.765 141.003C240.765 143.213 239.097 145.005 237.04 145.005H89.7252C87.6678 145.005 86 143.213 86 141.003Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M113 159C113 157.343 114.088 156 115.431 156H211.569C212.912 156 214 157.343 214 159C214 160.657 212.912 162 211.569 162H115.431C114.088 162 113 160.657 113 159Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M161.236 70.0245C161.048 70.0467 160.475 70.1101 159.964 70.1655C156.734 70.5158 153.158 71.727 150.272 73.4481C146.6 75.6383 143.615 78.6221 141.424 82.2931C139.716 85.154 138.582 88.4786 138.119 91.98C137.96 93.1788 137.96 96.8471 138.119 98.0459C138.582 101.547 139.716 104.872 141.424 107.733C143.615 111.404 146.6 114.388 150.272 116.578C153.135 118.285 156.461 119.419 159.964 119.881C161.163 120.04 164.833 120.04 166.032 119.881C172.127 119.076 177.293 116.401 181.509 111.865C183.842 109.356 185.667 106.235 186.787 102.84C187.67 100.164 188 98.0325 188 95.013C188 92.7792 187.906 91.7923 187.505 89.8276C186.129 83.0915 181.799 77.0716 175.723 73.4481C172.89 71.7585 169.512 70.6008 166.13 70.1603C165.272 70.0486 161.843 69.9534 161.236 70.0245ZM165.2 81.0181C167.615 81.6483 169.781 83.4215 170.882 85.6696C171.564 87.0622 171.74 87.8566 171.74 89.5341C171.74 90.688 171.701 91.0988 171.527 91.7355C170.858 94.1867 169.112 96.313 166.864 97.4142C165.976 97.8492 164.685 98.2416 164.141 98.2416C163.559 98.2416 163.967 98.3436 165.117 98.4859C170.303 99.1276 174.852 101.95 177.723 106.308C178.483 107.462 179.477 109.522 179.396 109.777C179.362 109.884 178.888 110.395 178.343 110.913C175.018 114.073 171.021 116.077 166.522 116.839C165.415 117.026 164.842 117.063 162.998 117.063C161.154 117.063 160.581 117.026 159.474 116.839C154.975 116.077 150.978 114.073 147.653 110.913C147.108 110.395 146.634 109.884 146.6 109.777C146.519 109.522 147.513 107.462 148.273 106.308C151.144 101.95 155.693 99.1276 160.879 98.4859C162.029 98.3436 162.437 98.2416 161.855 98.2416C161.311 98.2416 160.02 97.8492 159.132 97.4142C156.884 96.313 155.138 94.1867 154.469 91.7355C154.295 91.0988 154.255 90.688 154.255 89.5341C154.255 87.8563 154.432 87.0618 155.114 85.6696C156.325 83.1968 158.697 81.3905 161.406 80.877C162.429 80.6832 164.164 80.7477 165.2 81.0181Z" fill="#B6B6B6"/> </svg>',
    },
	{
        value: 'preset-3',
        label: __( 'Preset 3', 'ultimate-addons-for-gutenberg' ),
        attributes: [
			{ label: 'image', value: { url: ( imgUrl ? imgUrl : `${ uagb_blocks_info.uagb_url }/admin/assets/images/placeholder.png` ) } },
            { label: 'titleSpace', value: 5 },
			{ label: 'prefixSpace', value: 13 },
			{ label: 'descSpace', value: 20 },
			{ label: 'align', value: 'left' },
			{ label: 'imgPosition', value: 'left' },
			{ label: 'imgAlign', value: 'middle' },
			{ label: 'socialEnable', value: true },
			{ label: 'imgStyle', value: 'circle' },
			{ label: 'imageLeftMargin', value: 20 },
			{ label: 'imageRightMargin', value: 20 },
        ],
     	icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M76.2361 98.0245C76.0477 98.0467 75.4751 98.1101 74.9637 98.1655C71.7343 98.5158 68.1582 99.727 65.2725 101.448C61.5998 103.638 58.6148 106.622 56.4236 110.293C54.7159 113.154 53.5816 116.479 53.1189 119.98C52.9604 121.179 52.9604 124.847 53.1189 126.046C53.5816 129.547 54.7159 132.872 56.4236 135.733C58.6148 139.404 61.5998 142.388 65.2725 144.578C68.1346 146.285 71.4607 147.419 74.9637 147.881C76.163 148.04 79.8329 148.04 81.0322 147.881C87.127 147.076 92.2932 144.401 96.5095 139.865C98.8421 137.356 100.667 134.235 101.787 130.84C102.67 128.164 103 126.033 103 123.013C103 120.779 102.906 119.792 102.505 117.828C101.129 111.091 96.7993 105.072 90.7234 101.448C87.8905 99.7585 84.5123 98.6008 81.1301 98.1603C80.2717 98.0486 76.843 97.9534 76.2361 98.0245ZM80.2003 109.018C82.6151 109.648 84.7812 111.421 85.8821 113.67C86.564 115.062 86.7405 115.857 86.7405 117.534C86.7405 118.688 86.7007 119.099 86.5269 119.735C85.8579 122.187 84.1121 124.313 81.8642 125.414C80.9763 125.849 79.6846 126.242 79.1405 126.242C78.5592 126.242 78.9667 126.344 80.1172 126.486C85.3027 127.128 89.8517 129.95 92.7225 134.308C93.483 135.462 94.4766 137.522 94.3958 137.777C94.3618 137.884 93.8881 138.395 93.3429 138.913C90.0182 142.073 86.0209 144.077 81.5216 144.839C80.4153 145.026 79.8418 145.063 77.998 145.063C76.1541 145.063 75.5806 145.026 74.4743 144.839C69.975 144.077 65.9777 142.073 62.653 138.913C62.1078 138.395 61.6341 137.884 61.6001 137.777C61.5193 137.522 62.5129 135.462 63.2734 134.308C66.1442 129.95 70.6932 127.128 75.8788 126.486C77.0292 126.344 77.4367 126.242 76.8554 126.242C76.3113 126.242 75.0196 125.849 74.1317 125.414C71.8838 124.313 70.138 122.187 69.469 119.735C69.2953 119.099 69.2554 118.688 69.2554 117.534C69.2554 115.856 69.4319 115.062 70.114 113.67C71.3255 111.197 73.697 109.39 76.4058 108.877C77.4286 108.683 79.1639 108.748 80.2003 109.018Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118 136C118 134.343 118.853 133 119.905 133H274.095C275.147 133 276 134.343 276 136C276 137.657 275.147 139 274.095 139H119.905C118.853 139 118 137.657 118 136Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118 154C118 152.343 118.848 151 119.895 151H235.105C236.152 151 237 152.343 237 154C237 155.657 236.152 157 235.105 157H119.895C118.848 157 118 155.657 118 154Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118 93C118 90.7909 119.229 89 120.744 89H229.256C230.771 89 232 90.7909 232 93C232 95.2091 230.771 97 229.256 97H120.744C119.229 97 118 95.2091 118 93Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118 112C118 110.343 118.797 109 119.781 109H190.219C191.203 109 192 110.343 192 112C192 113.657 191.203 115 190.219 115H119.781C118.797 115 118 113.657 118 112Z" fill="#B6B6B6"/> <circle cx="123" cy="176" r="5" fill="#B6B6B6"/> <circle cx="138" cy="176" r="5" fill="#B6B6B6"/> <circle cx="153" cy="176" r="5" fill="#B6B6B6"/> <circle cx="168" cy="176" r="5" fill="#B6B6B6"/> <circle cx="183" cy="176" r="5" fill="#B6B6B6"/> </svg>',
	}
];

export default applyFilters(
    `uag_team_presets`,
    presets
);
