/**
 * BLOCK: Count Down Timer
 */

import styling from './styling';
import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';

const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/count-down-timer/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/count-down-timer/render" */ './render' )
);

const CountDownTimer = ( props ) => {

	useEffect( () => {

		const { attributes, setAttributes } = props;

		const {
			questionBottomPaddingDesktop,
			vquestionPaddingDesktop,
			questionLeftPaddingDesktop,
			hquestionPaddingDesktop,
			questionBottomPaddingTablet,
			vquestionPaddingTablet,
			questionLeftPaddingTablet,
			hquestionPaddingTablet,
			questionBottomPaddingMobile,
			vquestionPaddingMobile,
			questionLeftPaddingMobile,
			hquestionPaddingMobile,
			answerTopPadding,
			answerBottomPadding,
			answerRightPadding,
			answerLeftPadding,
			answerTopPaddingTablet,
			answerBottomPaddingTablet,
			answerRightPaddingTablet,
			answerLeftPaddingTablet,
			answerTopPaddingMobile,
			answerBottomPaddingMobile,
			answerRightPaddingMobile,
			answerLeftPaddingMobile,
			vanswerPaddingDesktop,
			hanswerPaddingDesktop,
			vanswerPaddingTablet,
			hanswerPaddingTablet,
			vanswerPaddingMobile,
			hanswerPaddingMobile,
		} = attributes;

		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-count-down-timer-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.

		const element = document.getElementById(
			'uagb-style-count-down-timer-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}

	}, [ props ] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default CountDownTimer;
