import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import classnames from 'classnames';

const Title = ( props ) => {
	const {
		attributes,
		setAttributes,
		mergeBlocks,
		insertBlocksAfter,
		onReplace,
		titleColor,
	} = props;

	if ( setAttributes !== 'not_set' ) {
		return (
			<RichText
				tagName={ attributes.titleTag }
				placeholder={ __( 'Write a Heading' ) }
				value={ attributes.ctaTitle }
				className={ classnames(
					'uagb-cta__title',
					titleColor !== '' ? 'has-text-color' : '',
				) }
				onChange={ ( value ) => setAttributes( { ctaTitle: value } ) }
				multiline={ false }
				onMerge={ mergeBlocks }
				onSplit={
					insertBlocksAfter
						? ( before, after, ...blocks ) => {
								setAttributes( { content: before } );
								insertBlocksAfter( [
									...blocks,
									createBlock( 'core/paragraph', {
										content: after,
									} ),
								] );
						  }
						: undefined
				}
				onRemove={ () => onReplace( [] ) }
			/>
		);
	}
	return (
		<RichText.Content
			tagName={ attributes.titleTag }
			value={ attributes.ctaTitle }
			className={ classnames(
				'uagb-cta__title',
				titleColor !== '' ? 'has-text-color' : '',
			) }
		/>
	);
};

export default Title;
