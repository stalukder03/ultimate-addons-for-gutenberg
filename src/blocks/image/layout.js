import { useEffect, useRef } from '@wordpress/element';
import {RichText} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function Layout({attributes, isSelected, setAttributes, captionRef}) {
	const {caption, heading, layout, overlayContentPosition, seperatorStyle, seperatorPosition} = attributes
	const headingRef = useRef();
	useEffect( () => {
		headingRef.current = heading;
	}, [ caption ] );

	const imageHeading = (
		<>
			{ ( ! RichText.isEmpty( heading ) || isSelected ) && (
				<RichText
					ref={ headingRef }
					tagName="h2"
					className='uagb-image-heading'
					aria-label={ __( 'Image overlay heading text' ) }
					placeholder={ __( 'Add Heading' ) }
					value={ heading }
					onChange={ ( value ) =>
						setAttributes( { heading: value } )
					}
					inlineToolbar
				/>
			) }
		</>
	)

	const imageCaption = (
		<>
			{ ( ! RichText.isEmpty( caption ) || isSelected ) && (
				<RichText
					ref={ captionRef }
					tagName="figcaption"
					className='uagb-image-caption'
					aria-label={ __( 'Image caption text' ) }
					placeholder={ __( 'Add caption' ) }
					value={ caption }
					onChange={ ( value ) =>
						setAttributes( { caption: value } )
					}
					inlineToolbar
				/>
			) }
		</>
	)

	const separator = 'none' !== seperatorStyle && (
		<div className="uagb-image-separator"></div>
	)


	return (
		<React.Fragment>
			{
				layout === 'overlay' ? (
					<>
						<div className={`wp-block-uagb-image--layout-overlay__inner ${overlayContentPosition.replace(' ', '-')}`}>
							{ 'before_title' === seperatorPosition && separator}
							{imageHeading}
							{ 'after_title' === seperatorPosition && separator}
							{imageCaption}
							{ 'after_sub_title' === seperatorPosition && separator}
						</div>
					</>
				) : (
					imageCaption
				)
			}

		</React.Fragment>
	);
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;
