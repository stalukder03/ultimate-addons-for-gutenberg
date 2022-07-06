import { decodeEntities } from '@wordpress/html-entities';
import React from 'react';
const Title = ( props ) => {
	const Tag = props.attributes.headingTag;

	const { post, attributes } = props;

	let target = '_self';
	if ( attributes.linkTarget ) {
		target = '_blank';
	}
	return (
		<Tag className="uagb-timeline__heading">
			<a
				href={ post.link }
				target={ target }
				rel="noopener noreferrer"
			>
				{ decodeEntities( post.title.rendered.trim() ) }
			</a>
		</Tag>
	);
};

export default React.memo( Title );
