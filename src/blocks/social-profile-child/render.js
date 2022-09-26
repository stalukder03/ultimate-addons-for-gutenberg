/**
 * BLOCK: Social Share - Editor Render.
 */

// Import classes
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import styles from './editor.lazy.scss';
import React, { useLayoutEffect } from 'react';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { className, image_icon, icon, label, image } = attributes;

	const defaultedAlt = ( image && image?.alt ) ? image?.alt : '';

	let imageIconHtml = '';

	if ( image_icon === 'icon' ) {
		if ( icon ) {
			imageIconHtml = (
				<span className="uagb-ss__source-icon">
					{ renderSVG( icon ) }
				</span>
			);
		}
	} else if ( image && image.url ) {
		imageIconHtml = (
			<img className="uagb-ss__source-image" src={ image.url } alt={ defaultedAlt } />
		);
	}

	return (
		<div
			className={ classnames(
				'uagb-ss-repeater',
				'uagb-ss__wrapper',
				className,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			<a className="uagb-ss__link"  href="/" rel="noopener noreferrer">
				<span className="uagb-ss__source-wrap">{ imageIconHtml }</span>
			</a>
			<RichText
					tagName="span"
					placeholder={ __(
						'Label Name',
						'ultimate-addons-for-gutenberg'
					) }
					value={ attributes.label }
					onChange={ ( value ) =>
						setAttributes( { label: value } )
					}
					className="uagb-icon-list__label"
					allowedFormats={ [
						'core/bold',
						'core/italic',
						'core/strikethrough',
					] }
				/>
		</div>
	);
};

export default React.memo( Render );
