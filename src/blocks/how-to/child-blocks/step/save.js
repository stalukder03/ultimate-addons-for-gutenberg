/**
 * BLOCK: Forms - Name - Save Block
 */

import classnames from 'classnames';

import { __ } from '@wordpress/i18n';

import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes } = props;

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
		</div>
	);
}
