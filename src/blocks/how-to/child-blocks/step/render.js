import classnames from 'classnames';
import React, { useLayoutEffect } from 'react';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { RichText } from '@wordpress/block-editor';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;

	const { attributes, setAttributes, mergeBlocks, insertBlocksAfter } = props;

	const { 
		block_id,
		name,
		description,
		url,
		urlType,
		image,
		imageSize,
		urlText,
		urlTarget
	} = attributes;

	let urlCheck = '';
	if (
		typeof image !== 'undefined' &&
		image !== null &&
		image !== ''
	) {
		urlCheck = image.url;
	}

	let imageUrl = '';
	if ( urlCheck !== '' ) {
		const size = image.sizes;
		const imageSize = attributes.imageSize;

		if (
			typeof size !== 'undefined' &&
			typeof size[ imageSize ] !== 'undefined'
		) {
			imageUrl = size[ imageSize ].url;
		} else {
			imageUrl = urlCheck;
		}
	}
	const imageMarkup = (
		<img
			className="uagb-how-to-step-image"
			src={ imageUrl }
			alt={ image.alt }
		/>
	);
	const contentMarkup = (
		<>
			<RichText
				tagName="div"
				className="uagb-how-to-step-name"
				placeholder={ __(
					'Name',
					'ultimate-addons-for-gutenberg'
				) }
				value={ name }
				onChange={ ( value ) => setAttributes( { name: value } ) }
				multiline={ false }
			/>
			<RichText
				tagName="p"
				value={ description }
				placeholder={ __( 'Write a Description' ) }
				className="uagb-how-to-step-description"
				onChange={ ( value ) =>
					setAttributes( { description: value } )
				}
				onMerge={ mergeBlocks }
				onSplit={
					insertBlocksAfter
						? ( before, after, ...blocks ) => {
								setAttributes( { description: before } );
								insertBlocksAfter( [
									...blocks,
									createBlock( 'core/paragraph', {
										description: after,
									} ),
								] );
						}
						: undefined
				}
				onRemove={ () => onReplace( [] ) }
			/>
			{'text' === urlType && (
				<a
					href={url}
					target={urlTarget}
					className="uagb-step-link"
				>
					<span className="uagb-step-link-text">
						{urlText}
					</span>
				</a>
			)}
		</>
	);
	return (
		<div
			className={ classnames(
				'uagb-how-to-step-wrap',
				`uagb-block-${ block_id }`
			) }
		>
			{'all' === urlType && (
					<>
						<a
							className="uagb-step-link"
							aria-label={'Step Link'}
							rel="noopener noreferrer"
						></a>
						<div className="uagb-step-image-content-wrap">
							{ imageUrl && imageMarkup }
							{ contentMarkup }
						</div>
					</>
				)
			}
			{'text' === urlType && (
					<div className="uagb-step-image-content-wrap">
						{ imageUrl && imageMarkup }
						{ contentMarkup }
					</div>
				)
			}
		</div>
	);
};
export default React.memo( Render );
