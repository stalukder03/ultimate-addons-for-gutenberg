
export default function Image( {
	temporaryURL,
	attributes: {
		url = '',
		alt,
		caption,
		align,
		id,
		href,
		rel,
		linkClass,
		linkDestination,
		title,
		width,
		height,
		linkTarget,
		sizeSlug,
	}
} ) {
	return (
		<>
			<img id={ id } src={ url } />
		</>
	);
}
