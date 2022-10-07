import React, { useEffect } from 'react';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { useDeviceType } from '@Controls/getPreviewType';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import CounterIcon from './component/CounterIcon';

const propTypes = {};

const defaultProps = {};

const Render = ( props ) => {
	const {
		attributes,
		setAttributes
	} = props.parentProps;

	const {
		block_id,
		layout,
		heading,
		numberPrefix,
		numberSuffix,
		startNumber,
		endNumber,
		animationDuration,
		thousandSeparator,
		circleSize,
		icon,
		showIcon,
		iconImgPosition,
	} = attributes

	const deviceType = useDeviceType();

	useEffect( () => {
		UAGBCounter.init( '.uagb-block-' + block_id, attributes ) // eslint-disable-line no-undef
	}, [layout, animationDuration, startNumber, endNumber, thousandSeparator] )

	const blockName = props.parentProps.name.replace( 'uagb/', '' );
	const circleSizeFallback = getFallbackNumber( circleSize, 'circleSize', blockName );
	const animationDurationFallback = getFallbackNumber( animationDuration, 'animationDuration', blockName );

	const circlePos    = ( circleSizeFallback / 2 );
	const circleRadius = circlePos - 10;
	const circleDash   = parseFloat( 2 * Math.PI * circleRadius ).toFixed( 2 );

	const iconCheck = ( showIcon && icon !== '' ); // Reusable const to check if icon is set and enabled.

	let iconComponent = '';

	if ( icon !== '' ) {
		iconComponent = <CounterIcon attributes={attributes} />
	}

	const title = (
		<RichText
			tagName="div"
			className="wp-block-uagb-counter__title"
			value={ heading }
			onChange={ ( value ) => setAttributes( { heading: value } ) }
			placeholder={ __( 'Title…', 'ultimate-addons-for-gutenberg' ) }
		/>
	)

	const number = (
		<>
		{iconCheck && layout==='number' && iconImgPosition === 'top' && iconComponent}
		<div className="wp-block-uagb-counter__number">
			{iconCheck && layout==='number' && iconImgPosition === 'left-number' && iconComponent}
			{
				numberPrefix && ( <span className="uagb-counter-block-prefix">{numberPrefix}</span> )
			}
			<span className="uagb-counter-block-number" data-duration={animationDurationFallback} data-to-value={endNumber} data-from-value={startNumber} data-delimiter={thousandSeparator}></span>
			{
				numberSuffix && ( <span className="uagb-counter-block-suffix">{numberSuffix}</span> )
			}
			{iconCheck && layout==='number' && iconImgPosition === 'right-number' && iconComponent}
		</div>
		{layout === 'number' && title}
		{iconCheck && layout==='number' && iconImgPosition === 'bottom' && iconComponent}
		</>
	);

	const bars = (
		<div className='wp-block-uagb-counter-bars-container'>
			{number}
		</div>
	)

	const circle = (
		<div className="wp-block-uagb-counter-circle-container">
			<div className='wp-block-uagb-counter-circle-container__content'>
				{ ( iconCheck && iconImgPosition === 'top' ) && iconComponent }
				{number}
				{title}
				{ ( iconCheck && iconImgPosition === 'bottom' ) && iconComponent }
			</div>
			<svg viewPort={`0 0 ${circleSizeFallback} ${circleSizeFallback}`} version="1.1" xmlns="http://www.w3.org/2000/svg">
				<circle r={circleRadius} cx={circlePos} cy={circlePos} fill="transparent" strokeDasharray={circleDash} strokeDashoffset="0"></circle>
				<circle id="bar" r={circleRadius} cx={circlePos} cy={circlePos} fill="transparent" strokeDasharray={circleDash} strokeDashoffset={circleDash}></circle>
			</svg>
		</div>
	)

	return (
		<React.Fragment>
			<div className={ classnames(
				props.className,
				`uagb-block-${ block_id }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				'wp-block-uagb-counter',
				`wp-block-uagb-counter--${ layout }`,
			) }>
				{
					layout === 'number' && number
				}
				{
					layout === 'bars' && bars
				}
				{
					layout === 'circle' && circle
				}
				{
					layout !== 'circle' && layout !== 'number' && title
				}
			</div>
		</React.Fragment>
	);
}

Render.propTypes = propTypes;
Render.defaultProps = defaultProps;

export default Render
