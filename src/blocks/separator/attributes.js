/**
 * BLOCK: UAGB separator Attributes
 */
const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	separatorAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		}
	},
	separatorAlignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet'
		}
	},
	separatorAlignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile'
		}
	},
	seperatorStyle: {
		type: 'string',
		default: 'solid',
		UAGCopyPaste: {
			styleType: 'separator-style'
		}
	},
	seperatorWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
		default: 30,
	},
	seperatorWidthTablet: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'separator-width-tablet'
		},
	},
	seperatorWidthMobile: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'separator-width-mobile'
		},
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'separator-width-type'
		}
	},
	seperatorThickness: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'separator-thickness'
		}
	},
	thicknessUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-thickness-unit'
		}
	},
	separatorTopPadding : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-margin'
		}
	},
	separatorRightPadding : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-margin'
		}
	},
	separatorLeftPadding : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-margin'
		}
	},
	separatorPaddingTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-margin-tablet'
		}
	},
	separatorPaddingRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-margin-tablet'
		}
	},
	separatorPaddingBottomTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin-tablet'
		}
	},
	separatorPaddingLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-margin-tablet'
		}
	},
	separatorPaddingTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-margin-mobile'
		}
	},
	separatorPaddingRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-margin-mobile'
		}
	},
	separatorPaddingBottomMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin-mobile'
		}
	},
	separatorPaddingLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-margin-mobile'
		}
	},
	seperatorPaddingUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit'
		}
	},
	separatorMobilePaddingUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit-mobile'
		},
		default: 'px',
	},
	separatorTabletPaddingUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit-tablet'
		},
		default: 'px',
	},
};

export default attributes;
