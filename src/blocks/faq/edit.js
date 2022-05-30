/**
 * BLOCK: FAQ
 */

import styling from './styling';
import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';

const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/faq/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/faq/render" */ './render' )
);

import { compose } from '@wordpress/compose';
import { select, withSelect } from '@wordpress/data';

let prevState;

const FaqComponent = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {
		// Replacement for componentDidMount.

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

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { schema: JSON.stringify( props.schemaJsonData ) } );

		if (
			10 === questionBottomPaddingDesktop &&
			10 !== vquestionPaddingDesktop
		) {
			setAttributes( {
				questionBottomPaddingDesktop: vquestionPaddingDesktop,
			} );
		}
		if (
			10 === questionLeftPaddingDesktop &&
			10 !== hquestionPaddingDesktop
		) {
			setAttributes( {
				questionLeftPaddingDesktop: hquestionPaddingDesktop,
			} );
		}

		if (
			10 === questionBottomPaddingTablet &&
			10 !== vquestionPaddingTablet
		) {
			setAttributes( {
				questionBottomPaddingTablet: vquestionPaddingTablet,
			} );
		}
		if (
			10 === questionLeftPaddingTablet &&
			10 !== hquestionPaddingTablet
		) {
			setAttributes( {
				questionLeftPaddingTablet: hquestionPaddingTablet,
			} );
		}

		if (
			10 === questionBottomPaddingMobile &&
			10 !== vquestionPaddingMobile
		) {
			setAttributes( {
				questionBottomPaddingMobile: vquestionPaddingMobile,
			} );
		}
		if (
			10 === questionLeftPaddingMobile &&
			10 !== hquestionPaddingMobile
		) {
			setAttributes( {
				questionLeftPaddingMobile: hquestionPaddingMobile,
			} );
		}

		if ( vanswerPaddingDesktop ) {
			if ( undefined === answerTopPadding ) {
				setAttributes( { answerTopPadding: vanswerPaddingDesktop } );
			}
			if ( undefined === answerBottomPadding ) {
				setAttributes( { answerBottomPadding: vanswerPaddingDesktop } );
			}
		}
		if ( hanswerPaddingDesktop ) {
			if ( undefined === answerRightPadding ) {
				setAttributes( { answerRightPadding: hanswerPaddingDesktop } );
			}
			if ( undefined === answerLeftPadding ) {
				setAttributes( { answerLeftPadding: hanswerPaddingDesktop } );
			}
		}

		if ( vanswerPaddingTablet ) {
			if ( undefined === answerTopPaddingTablet ) {
				setAttributes( {
					answerTopPaddingTablet: vanswerPaddingTablet,
				} );
			}
			if ( undefined === answerBottomPaddingTablet ) {
				setAttributes( {
					answerBottomPaddingTablet: vanswerPaddingTablet,
				} );
			}
		}
		if ( hanswerPaddingTablet ) {
			if ( undefined === answerRightPaddingTablet ) {
				setAttributes( {
					answerRightPaddingTablet: hanswerPaddingTablet,
				} );
			}
			if ( undefined === answerLeftPaddingTablet ) {
				setAttributes( {
					answerLeftPaddingTablet: hanswerPaddingTablet,
				} );
			}
		}

		if ( vanswerPaddingMobile ) {
			if ( undefined === answerTopPaddingMobile ) {
				setAttributes( {
					answerTopPaddingMobile: vanswerPaddingMobile,
				} );
			}
			if ( undefined === answerBottomPaddingMobile ) {
				setAttributes( {
					answerBottomPaddingMobile: vanswerPaddingMobile,
				} );
			}
		}
		if ( hanswerPaddingMobile ) {
			if ( undefined === answerRightPaddingMobile ) {
				setAttributes( {
					answerRightPaddingMobile: hanswerPaddingMobile,
				} );
			}
			if ( undefined === answerLeftPaddingMobile ) {
				setAttributes( {
					answerLeftPaddingMobile: hanswerPaddingMobile,
				} );
			}
		}

		prevState = props.schemaJsonData;
	}, [] );

	useEffect( () => {

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-faq-' + props.clientId.substr( 0, 8 ), blockStyling );

		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( faqChild ) => {
			faqChild.attributes.headingTag = props.attributes.headingTag;
		} );

		if (
			JSON.stringify( props.schemaJsonData ) !==
			JSON.stringify( prevState )
		) {
			props.setAttributes( {
				schema: JSON.stringify( props.schemaJsonData ),
			} );

			prevState = props.schemaJsonData;
		}
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-faq-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } deviceType = { deviceType } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default compose(
	withSelect( ( ownProps ) => {
		let page_url = '';
		if ( select( 'core/editor' ) ) {
			page_url = select( 'core/editor' ).getPermalink();
		}

		let faq_data = {};
		const json_data = {
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			'@id': page_url,
			'mainEntity': [],
		};
		const faqChildBlocks = select( 'core/block-editor' ).getBlocks(
			ownProps.clientId
		);

		faqChildBlocks.forEach( ( faqChild, key ) => {
			faq_data = {
				'@type': 'Question',
				'name': faqChild.attributes.question,
				'acceptedAnswer': {
					'@type': 'Answer',
					'text': faqChild.attributes.answer,
				},
			};
			json_data.mainEntity[ key ] = faq_data;
		} );

		return {
			schemaJsonData: json_data,
		};
	} )
)( FaqComponent );
