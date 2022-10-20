const attributes = {
	block_id: {
		type: 'string',
	},
	modalTrigger: {
		type: 'string',
		default: 'button'
	},
	triggerText: {
		type: 'string',
		default: 'Click Here'
	},
	previewModal: {
		type: 'boolean',
		default: true,
	},
	icon: {
		type: 'string',
		default: 'up-right-from-square',
	},
	iconImage: {
		type: 'object',
	},
	imageSize: {
		type: 'string',
		default: 'thumbnail',
	},
	buttonText: {
		type: 'html',
		default: 'Click Here',
	},
	buttonIcon: {
		type: 'string',
		default: 'arrow-right',
	},
	buttonIconPosition: {
		type: 'string',
		default: 'after',
	},
	buttonIconSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	buttonIconSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	buttonIconSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	buttonIconSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-icon-space-type'
		}
	},
	modalAlign: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		}
	},
	modalAlignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet'
		}
	},
	modalAlignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile'
		}
	},
	modalWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-width'
		},
		default: 650
	},
	modalWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-width'
		},
	},
	modalWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-width'
		},
	},
	modalWidthType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'modal-width-type'
		}
	},
	modalHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-height'
		},
		default: 300
	},
	modalHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-height'
		},
	},
	modalHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-height'
		},
	},
	modalHeightType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'modal-height-type'
		}
	},
	appearEffect: {
		type: 'string',
		default: 'uagb-effect-default',
	},
	closeIconSize: {
		type: 'number',
		default: 25
	},
	closeIconPosition: {
		type: 'string',
		default: 'popup-top-right',
	},
	overlayColor: {
		type: 'string',
		default: 'rgba(0,0,0,0.75)',
		UAGCopyPaste: {
			styleType: 'overlay-bg-color'
		}
	},
	closeIconColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'close-icon-color'
		}
	},
	modalSpacingLink: {
		type: 'boolean',
		default: true,
	},
	paddingModalUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'modal-padding-unit'
		},
		default: 'px',
	},
	mobilePaddingModalUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'modal-padding-unit-mobile'
		},
		default: 'px',
	},
	tabletPaddingModalUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'modal-padding-unit-tablet'
		}
	},
	paddingModalTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-top-padding'
		}
	},
	paddingModalBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-bottom-padding'
		}
	},
	paddingModalLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-left-padding'
		}
	},
	paddingModalRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-right-padding'
		}
	},
	paddingModalTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-top-padding-tablet'
		}
	},
	paddingModalRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-right-padding-tablet'
		}
	},
	paddingModalBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-bottom-padding-tablet'
		}
	},
	paddingModalLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-left-padding-tablet'
		}
	},
	paddingModalTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-top-padding-mobile'
		}
	},
	paddingModalRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-right-padding-mobile'
		}
	},
	paddingModalBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-bottom-padding-mobile'
		}
	},
	paddingModalLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-left-padding-mobile'
		}
	},
	
	iconSize: {
		type: 'number',
		default: 30
	},
	iconColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-color'
		}
	},

	// btnSpacingLink: {
	// 	type: 'boolean',
	// 	default: true,
	// },
	// paddingBtnUnit: {
	// 	type: 'string',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-padding-unit'
	// 	},
	// 	default: 'px',
	// },
	// mobilePaddingBtnUnit: {
	// 	type: 'string',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-padding-unit-mobile'
	// 	},
	// 	default: 'px',
	// },
	// tabletPaddingBtnUnit: {
	// 	type: 'string',
	// 	default: 'px',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-padding-unit-tablet'
	// 	}
	// },
	// paddingBtnTop: {
	// 	type: 'number',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-top-padding'
	// 	}
	// },
	// paddingBtnBottom: {
	// 	type: 'number',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-bottom-padding'
	// 	}
	// },
	// paddingBtnLeft: {
	// 	type: 'number',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-left-padding'
	// 	}
	// },
	// paddingBtnRight: {
	// 	type: 'number',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-right-padding'
	// 	}
	// },
	// paddingBtnTopTablet: {
	// 	type: 'number',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-top-padding-tablet'
	// 	}
	// },
	// paddingBtnRightTablet: {
	// 	type: 'number',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-right-padding-tablet'
	// 	}
	// },
	// paddingBtnBottomTablet: {
	// 	type: 'number',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-bottom-padding-tablet'
	// 	}
	// },
	// paddingBtnLeftTablet: {
	// 	type: 'number',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-left-padding-tablet'
	// 	}
	// },
	// paddingBtnTopMobile: {
	// 	type: 'number',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-top-padding-mobile'
	// 	}
	// },
	// paddingBtnRightMobile: {
	// 	type: 'number',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-right-padding-mobile'
	// 	}
	// },
	// paddingBtnBottomMobile: {
	// 	type: 'number',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-bottom-padding-mobile'
	// 	}
	// },
	// paddingBtnLeftMobile: {
	// 	type: 'number',
	// 	UAGCopyPaste: {
	// 		styleType: 'btn-left-padding-mobile'
	// 	}
	// },
};

export default attributes;
