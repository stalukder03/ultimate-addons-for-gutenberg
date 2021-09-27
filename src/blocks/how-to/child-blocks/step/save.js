/**
 * BLOCK: How To - Step - Save Block
 */

import classnames from 'classnames';

import { __ } from '@wordpress/i18n';

import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

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
console.log(url);
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
			<RichText.Content
				tagName="div"
				className="uagb-how-to-step-name"
				value={ name }
			/>
			<RichText.Content
				tagName="p"
				className="uagb-how-to-step-description"
				value={ description }
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
							href={url}
							target={urlTarget}
							className="uagb-step-link-all"
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
}
