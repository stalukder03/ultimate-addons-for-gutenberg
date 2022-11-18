/**
 * BLOCK: Countdown - Attributes
 */
import { getBorderAttributes } from '@Controls/generateAttributes';
import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: 'string',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	timerType: {
		type: 'string',
		default: 'date',  // date, evergreen, recurring.
	},
	dateTime: {
		type: 'string',
		default: '2030-01-01T00:00:00',
	},
	// Labels.
	showLabels: {
		type: 'boolean',
		default: true,
	},
	labelDays: {
		type: 'string',
		default: __( 'DAYS', 'ultimate-addons-for-gutenberg' ),
	},
	labelHours: {
		type: 'string',
		default: __( 'HOURS', 'ultimate-addons-for-gutenberg' ),
	},
	labelMinutes: {
		type: 'string',
		default: __( 'MINUTES', 'ultimate-addons-for-gutenberg' ),
	},
	labelSeconds: {
		type: 'string',
		default: __( 'SECONDS', 'ultimate-addons-for-gutenberg' ),
	},
	// Separator.
	showSeparator: {
		type: 'boolean',
		default: true,
	},
	separatorType: {
		type: 'string',
		default: 'colon',
	},

	// Countdown Expiry Settings.
		// zero - keep at zero
		// hide - hide timer
		// redirect - redirect to url
		// content - replace with innerblocks based content
	timerEndAction: {
		type: 'string',
		default: 'zero',
	},
	redirectURL: {
		type: 'string',
		default: '',
	},
};

export default attributes;
