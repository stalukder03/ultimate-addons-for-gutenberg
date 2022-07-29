/**
 * BLOCK: Social Share - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import links from './links';

export default function save( props ) {
	const { className } = props;

	const { type, image_icon, icon, image, block_id } = props.attributes;

	const url = links[ type ];

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
			<img className="uagb-ss__source-image" src={ image.url } alt="" width="640" height="360" loading="lazy"/>
		);
	}

	return (
		<div
			className={ classnames(
				'uagb-ss-repeater',
				'uagb-ss__wrapper',
				className,
				`uagb-block-${ block_id }`
			) }
		>
			<a // eslint-disable-line jsx-a11y/anchor-is-valid
				className="uagb-ss__link"
				data-href={ url }
				rel="noopener noreferrer"
			>
				<span className="uagb-ss__source-wrap">{ imageIconHtml }</span>
			</a>
		</div>
	);
}
