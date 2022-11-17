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
		totalNumber,
		decimalPlaces,
		animationDuration,
		thousandSeparator,
		circleSize,
		circleStokeSize,
		icon,
		showIcon,
		iconImgPosition,
		sourceType,
		iconImage,
	} = attributes

	const deviceType = useDeviceType();

	useEffect( () => {
		UAGBCounter.init( '.uagb-block-' + block_id, attributes ) // eslint-disable-line no-undef
	}, [ layout, animationDuration, startNumber, endNumber, totalNumber, thousandSeparator, decimalPlaces, block_id, circleSize, circleStokeSize ] )

	const startFallback = getFallbackNumber( startNumber, 'startNumber', 'counter' );
	const endFallback = getFallbackNumber( endNumber, 'endNumber', 'counter' );

	const blockName = props.parentProps.name.replace( 'uagb/', '' );
	const circleSizeFallback = getFallbackNumber( circleSize, 'circleSize', blockName );

	// Reusable const to check if icon/image is set and enabled.
	const iconAndImageCheck = showIcon && ( ( sourceType === 'icon' && icon !== '' ) || ( sourceType === 'image' && iconImage.url !== '' ) );

	let iconComponent = '';

	if ( iconAndImageCheck ) {
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
		{iconAndImageCheck && layout==='number' && iconImgPosition === 'top' && iconComponent}
		<div className="wp-block-uagb-counter__number">
			{iconAndImageCheck && layout==='number' && iconImgPosition === 'left-number' && iconComponent}
			{
				numberPrefix && ( <span className="uagb-counter-block-prefix">{numberPrefix}</span> )
			}
			<span className="uagb-counter-block-number" data-duration={ animationDuration / 1000 } data-to-value={endFallback} data-from-value={startFallback} data-delimiter={thousandSeparator}></span>
			{
				numberSuffix && ( <span className="uagb-counter-block-suffix">{numberSuffix}</span> )
			}
			{iconAndImageCheck && layout==='number' && iconImgPosition === 'right-number' && iconComponent}
		</div>
		{layout === 'number' && title}
		{iconAndImageCheck && layout==='number' && iconImgPosition === 'bottom' && iconComponent}
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
				{ ( iconAndImageCheck && iconImgPosition === 'top' ) && iconComponent }
				{number}
				{title}
				{ ( iconAndImageCheck && iconImgPosition === 'bottom' ) && iconComponent }
			</div>
			{/* <div className='wp-block-uagb-counter-circle-container__svg-container'> */}
				<svg preserveAspectRatio="xMinYMin meet" viewBox={`0 0 ${circleSizeFallback} ${circleSizeFallback}`} version="1.1" xmlns="http://www.w3.org/2000/svg">
					<circle className="uagb-counter-circle__background"></circle>
					<circle className="uagb-counter-circle__progress"></circle>
				</svg>
			{/* </div> */}
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
