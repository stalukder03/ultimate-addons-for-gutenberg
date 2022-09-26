/**
 * BLOCK: UAGB Social profile Attributes
 */

 const itemCount = 1;

 const socialp = [];
 
 for ( let i = 1; i <= itemCount; i++ ) {
     socialp.push( {
         label: '#Label',
         label_color: '',
         type: 'facebook',
         image_icon: 'icon',
         icon: 'facebook',
         image: '',
         icon_color: '#3a3a3a',
         icon_hover_color: '',
         icon_bg_color: '',
         icon_bg_hover_color: '',
     } );
 }
 

const attributes = {
     block_id: {
         type: 'string',
     },
     current_url: {
         type: 'string',
     },
     align: {
         type: 'string',
         default: 'center',
         UAGCopyPaste: {
             styleType: 'overall-alignment'
         }
     },
     socialp: {
		type: 'array',
		default: socialp,
	},
     gap: {
         type: 'number',
         default: 10,
         UAGCopyPaste: {
             styleType: 'icon-gap'
         }
     },
     size: {
         type: 'number',
         default: 30,
         UAGCopyPaste: {
             styleType: 'icon-size'
         }
     },
     sizeType: {
         type: 'string',
         default: 'px',
         UAGCopyPaste: {
             styleType: 'icon-size-type'
         }
     },
     bgSize: {
         type: 'number',
         default: 10,
         UAGCopyPaste: {
             styleType: 'icon-bg-size'
         }
     },
     bgSizeType: {
         type: 'string',
         default: 'px',
         UAGCopyPaste: {
             styleType: 'icon-bg-size-unit'
         }
     },
     borderRadius: {
         type: 'number',
         UAGCopyPaste: {
             styleType: 'icon-border-radius'
         },
         default: 0,
     },
     social_layout: {
         type: 'string',
         default: 'horizontal',
         UAGCopyPaste: {
             styleType: 'social-layout'
         },
     },
     stack: {
         type: 'string',
         default: 'none',
     },
     isPreview: {
         type: 'boolean',
         default: false,
     },
     iconColor: {
         type: 'string',
         default: '',
         UAGCopyPaste: {
             styleType: 'icon-color'
         },
     },
     iconHoverColor: {
         type: 'string',
         UAGCopyPaste: {
             styleType: 'icon-hover-color'
         },
         default: '',
     },
     iconBgColor: {
         type: 'string',
         UAGCopyPaste: {
             styleType: 'icon-bg-color'
         },
         default: '',
     },
     iconBgHoverColor: {
         type: 'string',
         UAGCopyPaste: {
             styleType: 'icon-bg-hover-color'
         },
         default: '',
     },
     labelLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing'
		}
	},
	labelLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-tablet'
		}
	},
	labelLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-mobile'
		}
	},
	labelLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-type'
		}
	},
	iconColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-color'
		},
	},
	labelColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
    classMigrate: {
        type: 'boolean',
        default: false,
    },
    childMigrate: {
        type: 'boolean',
        default: false,
    },
 };
 
 export default attributes;
 