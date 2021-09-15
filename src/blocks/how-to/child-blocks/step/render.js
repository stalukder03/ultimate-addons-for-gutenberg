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

	const { block_id, name, description, url, image } = attributes;

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

	return (
		<div
			className={ classnames(
				'uagb-how-to-step-wrap',
				`uagb-block-${ block_id }`
			) }
		>
			{ imageUrl &&
				<img
					className="uagb-how-to-step-image"
					src={ imageUrl }
					alt={ image.alt }
				/>
			}
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
		</div>
	);
};
export default React.memo( Render );
