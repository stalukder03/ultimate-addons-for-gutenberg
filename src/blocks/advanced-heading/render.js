import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import React from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import { applyFilters } from '@wordpress/hooks';

const Render = ( props ) => {
	props = props.parentProps;
	
	const {
		attributes: {
			isPreview,
			block_id,
			headingTitleToggle,
			headingTitle,
			headingDesc,
			headingDescToggle,
			headingTag,
			seperatorStyle,
			globalBlockStyleName
		},
		setAttributes,
		className,
		attributes,
		name
	} = props;

	const deviceType = useDeviceType();
	const headingText = (
		<RichText
			tagName={ headingTag }
			placeholder={ __(
				'Write a Heading',
				'ultimate-addons-for-gutenberg'
			) }
			value={ headingTitle }
			className="uagb-heading-text"
			multiline={ false }
			onChange={ ( value ) => {
				setAttributes( { headingTitle: value } );
			} }
		/>
	);

	const separator = seperatorStyle !== 'none' && (
		<div className="uagb-separator-wrap">
			<div className="uagb-separator"></div>
		</div>
	);

	const descText = (
		<RichText
			tagName="p"
			placeholder={ __(
				'Write a Description',
				'ultimate-addons-for-gutenberg'
			) }
			value={ headingDesc }
			className="uagb-desc-text"
			onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
		/>
	);
	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/creative-heading.png`;
	
	let blockNameClass = name?.split( '/' )?.pop();
	let htmlAttributes = {
		className: classnames( {
			[className]: true,
			[`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`] : true,
			[`uagb-block-${ block_id }`] : true,
			[`spectra-gbs-${blockNameClass}-${globalBlockStyleName}`] : true
		} ),
	};

	htmlAttributes = applyFilters( 
		`spectra.block.htmlAttributes`, 
		htmlAttributes, 
		attributes
	);
	
	
	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<div
			{...htmlAttributes}
		>
			{ headingTitleToggle && headingText }
			{ separator }
			{ headingDescToggle && descText  }
		</div>
	);
};
export default React.memo( Render );
