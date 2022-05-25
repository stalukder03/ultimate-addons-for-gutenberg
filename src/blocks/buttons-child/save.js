/**
 * BLOCK: Buttons - Save Block
 */

import classnames from 'classnames';
import renderSVG from '@Controls/renderIcon';
import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes, className } = props;

	const {
		block_id,
		opensInNewTab,
		link,
		label,
		icon,
		iconPosition,
		removeText,
		noFollow,
		backgroundType,
		hoverbackgroundType,
		borderStyle,
		background,
		color
	} = attributes;

	const btnText = () => {
		if( ! removeText ){
			return <RichText.Content
						value={ label }
						tagName="div"
						className="uagb-button__link"
					/>
		}
			return '';

	}
	const iconHtml = ( curr_position ) => {
		if ( '' !== icon && curr_position === iconPosition ) {
			return (
				<span
					className={ classnames(
						'uagb-button__icon',
						`uagb-button__icon-position-${ iconPosition }`
					) }
				>
					{ renderSVG( icon ) }
				</span>
			);
		}
		return null;
	};
	const openNewWindow = opensInNewTab ? '_blank' : '_self' ;
	const hasBackground = background !== '' || backgroundType === 'transparent' ||  'gradient' === backgroundType ? 'has-background' : '';

	return (
		<div
			className={ classnames(
				className,
				'uagb-buttons__outer-wrap',
				`uagb-block-${ block_id }`,
				'wp-block-button',
				borderStyle !== 'none' ? 'is-style-outline' : '',
			) }
		>
			<div className="uagb-button__wrapper">
				<a
					className={ classnames(
						'uagb-buttons-repeater',
						'wp-block-button__link',
						hasBackground,
						color !== '' ? 'has-text-color' : '',
					) }
					href={ link }
					rel= { noFollow ? 'nofollow noopener ' : 'follow noopener' }
					target={ openNewWindow }
				>
					{ iconHtml( 'before' ) }
					{ btnText() }
					{ iconHtml( 'after' ) }
				</a>
			</div>
		</div>
	);
}
