import React from 'react';
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function save( props ) {
	const {
		block_id,
		url,
		alt,
		caption,
		href,
		linkClass,
		width,
		height,
		align,
		id,
		linkTarget,
		title,
	} = props.attributes;


	const image = (
		<img
			src={ url }
			alt={ alt }
			className={ id ? `uag-image-${ id }` : null }
			width={ width }
			height={ height }
			title={ title }
		/>
	);

	const figure = (
		<>
			{ href ? (
				<a
					className={ linkClass }
					href={ href }
					target={ linkTarget }
				>
					{ image }
				</a>
			) : (
				image
			) }
			{ ! RichText.isEmpty( caption ) && (
				<RichText.Content tagName="figcaption" value={ caption } />
			) }
		</>
	);

	return (
		<>
			<figure className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
				'wp-block-uagb-image',
				`wp-block-uagb-image-align-${align}`
			) }>
				{ figure }
			</figure>
		</>
	);
}

save.propTypes = propTypes;
save.defaultProps = defaultProps;
