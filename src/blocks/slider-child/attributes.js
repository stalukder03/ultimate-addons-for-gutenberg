import { getBorderAttributes } from '@Controls/generateAttributes';

const inputBorderAttributes = getBorderAttributes( 'slider' )

const attributes = {
	block_id: {
		type: 'string',
	},
	// Container wrapper tag name and link are not required in PHP as it is only used in render and save.
	htmlTag: {
		type: 'string',
		default: 'div',
	},
	htmlTagLink: {
		type: 'object',
	},

	widthDesktop: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'container-width-desktop'
		}
	},
	widthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-width-tablet'
		}
	},
	widthMobile: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'container-width-mobile'
		}
	},
	widthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'container-width-type'
		}
	},

	innerContentCustomWidthDesktop: {
		type: 'number',
		default: uagb_blocks_info.content_width
	},
	innerContentCustomWidthTablet: {
		type: 'number',
		default: 1024
	},
	innerContentCustomWidthMobile: {
		type: 'number',
		default: 767
	},
	innerContentCustomWidthType: {
		type: 'string',
		default: 'px',
	},
	minHeightDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-min-height-desktop'
		},
	},
	minHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-min-height-tablet'
		},

	},
	minHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-min-height-mobile'
		},

	},
	minHeightType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-min-height-type'
		},
	},
	directionDesktop: {
		type: 'string',
		default: 'column',
		UAGCopyPaste: {
			styleType: 'container-direction-desktop'
		},
	},
	directionTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-direction-tablet'
		},
	},
	directionMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-direction-mobile'
		},
	},
	alignItemsDesktop: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'container-align-items-desktop'
		},
	},
	alignItemsTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-align-items-tablet'
		},
	},
	alignItemsMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-align-items-mobile'
		},
	},
	justifyContentDesktop: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'container-justify-content-desktop'
		},
	},
	justifyContentTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-justify-content-tablet'
		},
	},
	justifyContentMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-justify-content-mobile'
		},
	},
	wrapDesktop: {
		type: 'string',
		default: 'nowrap',
		UAGCopyPaste: {
			styleType: 'container-wrap-desktop'
		},
	},
	wrapTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-wrap-tablet'
		},
	},
	wrapMobile: {
		type: 'string',
		default: 'wrap',
		UAGCopyPaste: {
			styleType: 'container-wrap-mobile'
		},
	},
	alignContentDesktop: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'container-align-content-desktop'
		},
	},
	alignContentTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-align-content-tablet'
		},
	},
	alignContentMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-align-content-mobile'
		},
	},

	backgroundType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'container-bg-type'
		},
	},
	backgroundImageDesktop: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-image-desktop'
		},
	},
	backgroundImageTablet: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-image-tablet'
		},
	},
	backgroundImageMobile: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-image-mobile'
		},
	},
	backgroundPositionDesktop: {
		type: 'object',
		default: {
			x: 0.5,
			y: 0.5,
		},
		UAGCopyPaste: {
			styleType: 'container-bg-position-desktop'
		},
	},
	backgroundPositionTablet: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-position-tablet'
		},
	},
	backgroundPositionMobile: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-position-mobile'
		},
	},
	backgroundSizeDesktop: {
		type: 'string',
		default: 'cover',
		UAGCopyPaste: {
			styleType: 'container-bg-size-desktop'
		},
	},
	backgroundSizeTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-size-tablet'
		},
	},
	backgroundSizeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-size-mobile'
		},
	},
	backgroundRepeatDesktop: {
		type: 'string',
		default: 'no-repeat',
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-desktop'
		},
	},
	backgroundRepeatTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-tablet'
		},
	},
	backgroundRepeatMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-mobile'
		},
	},
	backgroundAttachmentDesktop: {
		type: 'string',
		default: 'scroll',
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-desktop'
		},
	},
	backgroundAttachmentTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-tablet'
		},
	},
	backgroundAttachmentMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-mobile'
		},
	},
	backgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-color'
		},
	},
	backgroundOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bg-opacity'
		},
	},
	backgroundImageColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-image-color'
		},
		default: '#FFFFFF75',
	},
	gradientValue: {
		type: 'string',
		default: 'linear-gradient(90deg, rgba(6, 147, 227, 0.5) 0%, rgba(155, 81, 224, 0.5) 100%)',
		UAGCopyPaste: {
			styleType: 'container-bg-gradient-value'
		},
	},

	borderStyle: {
		type: 'string',
	},
	borderWidth: {
		type: 'number',
	},
	borderRadius: {
		type: 'number',
	},
	borderColor: {
		type: 'string',
	},
	borderHoverColor: {
		type: 'string',
	},
	boxShadowColor: {
		type: 'string',
		default: '#00000070',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-color'
		},
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-hoffset'
		},
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-voffset'
		},
	},
	boxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-blur'
		},
	},
	boxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-spread'
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-position'
		},
	},

	boxShadowColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-color-hover'
		},
	},
	boxShadowHOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-hoffset-hover'
		},
	},
	boxShadowVOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-voffset-hover'
		},
	},
	boxShadowBlurHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-blur-hover'
		},
	},
	boxShadowSpreadHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-spread-hover'
		},
	},
	boxShadowPositionHover: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-position-hover'
		},
	},

	topPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-padding-desktop'
		},
		default: uagb_blocks_info.container_global_padding
	},
	bottomPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-desktop'
		},
		default: uagb_blocks_info.container_global_padding
	},
	leftPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-padding-desktop'
		},
		default: uagb_blocks_info.container_global_padding
	},
	rightPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-padding-desktop'
		},
		default: uagb_blocks_info.container_global_padding
	},
	topPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-padding-tablet'
		},
		default: uagb_blocks_info.container_global_padding
	},
	bottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-tablet'
		},
		default: uagb_blocks_info.container_global_padding
	},
	leftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-padding-tablet'
		},
		default: uagb_blocks_info.container_global_padding
	},
	rightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-padding-tablet'
		},
		default: uagb_blocks_info.container_global_padding
	},
	topPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-padding-mobile'
		},
		default: uagb_blocks_info.container_global_padding
	},
	bottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-mobile'
		},
		default: uagb_blocks_info.container_global_padding
	},
	leftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-padding-mobile'
		},
		default: uagb_blocks_info.container_global_padding
	},
	rightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-padding-mobile'
		},
		default: uagb_blocks_info.container_global_padding
	},
	paddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-padding-type'
		},
	},
	paddingTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-padding-type-tablet'
		},
	},
	paddingTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-padding-type-mobile'
		},
	},
	paddingLink: {
		type: 'boolean',
		default: true,
	},

	topMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-margin-desktop'
		},
	},
	bottomMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-desktop'
		},
	},
	leftMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-margin-desktop'
		},
	},
	rightMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-margin-desktop'
		},
	},
	topMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-margin-tablet'
		},
	},
	bottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-tablet'
		},
	},
	leftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-margin-tablet'
		},
	},
	rightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-margin-tablet'
		},
	},
	topMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-margin-mobile'
		},
	},
	bottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-mobile'
		},
	},
	leftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-margin-mobile'
		},
	},
	rightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-margin-mobile'
		},
	},
	marginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-margin-type'
		},
	},
	marginTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-margin-type-tablet'
		},
	},
	marginTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-margin-type-mobile'
		},
	},
	marginLink: {
		type: 'boolean',
		default: true,
	},

	...inputBorderAttributes
};

export default attributes;
