import classnames from 'classnames';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import React, { useRef, useEffect, lazy, Suspense } from 'react';

const Masonry = lazy( () =>
	import(
		/* webpackChunkName: "chunks/post-masonry/react-masonry-component" */ 'react-masonry-component'
	)
);

import {
	InnerBlockLayoutContextProvider,
	renderPostLayout,
} from '.././function';

function Blog( props ) {
	const article = useRef();
	const isoElement = useRef();
	const { attributes, className, latestPosts, block_id } = props;
	const deviceType = useDeviceType();
	const {
		isPreview,
		columns,
		tcolumns,
		mcolumns,
		imgPosition,
		postsToShow,
		paginationEventType,
		buttonText,
		paginationType,
		layoutConfig,
		rowGap,
	} = attributes;

	// useEffect( () => {
	// 	layoutIsotope();
	// }, [ deviceType ] )

	const layoutIsotope = () => {
		if ( ! isoElement.current ){
			console.log( `%cNope.`, 'color: yellowgreen; text-shadow: 1em 1em 1em black; font-size: 2em;' );
			console.log( isoElement );
			return;
		}
		let element = isoElement.current.querySelector( '.is-masonry' );
		if ( ! element ) {
			element = isoElement.current;
		};
		console.log( element );
		// const $selector = `.uagb-block-${ block_id }`;
		// let $scope;
		// if ( 'Desktop' === deviceType ){
		// 	$scope = document.querySelector( JSON.stringify( $selector ) );
		// }
		// else{
		// 	const tabletPreview = document.getElementsByClassName( 'is-tablet-preview' );
		// 	const mobilePreview = document.getElementsByClassName( 'is-mobile-preview' );
		// 	if ( 0 !== tabletPreview.length || 0 !== mobilePreview.length ) {
		// 		const preview = tabletPreview[ 0 ] || mobilePreview[ 0 ];
		// 		const iframe = preview.getElementsByTagName( 'iframe' )[ 0 ];
		// 		const iframeDocument = iframe.contentWindow.document || iframe.contentDocument;			
		// 		$scope = iframeDocument.querySelector( $selector );
		// 		console.log( `%ciFrame:\n${ $selector }`, 'color: aquamarine; text-shadow: 1em 1em 1em black; font-size: 2em;' );
		// 	}
		// 	else{
		// 		$scope = document.querySelector( $selector );
		// 	}
		// }
		// console.log( `%cScope:`, 'color: deeppink; text-shadow: 1em 1em 1em black; font-size: 2em;' );
		// console.log( $scope );
		const isotope = new Isotope( element, { // eslint-disable-line no-undef
			itemSelector: 'article',
		} );
		setTimeout( () => isotope.layout(), 1000 );		
	}

	const updateImageBgWidth = () => {

		setTimeout( () => {

			if( article?.current ){

				const articleWidth  = article?.current?.offsetWidth;
				const imageWidth = 100 - ( rowGap / articleWidth ) * 100;
				const parent = article?.current?.parentNode;

				if ( parent && parent.classList.contains( 'uagb-post__image-position-background' ) ) {
					const images = parent?.getElementsByClassName( 'uagb-post__image' );
					for( const image of images ) {
						if ( image ) {
							image.style.width = imageWidth + '%';
							image.style.marginLeft = rowGap / 2 + 'px';

						}
					}
				}
			}

		}, 100 )
	};

	useEffect( () => {
		updateImageBgWidth();
    }, [article] );

	useEffect( () => {
		updateImageBgWidth();
    }, [imgPosition] );

	// Removing posts from display should be instant.
	const displayPosts =
		latestPosts.length > postsToShow
			? latestPosts.slice( 0, postsToShow )
			: latestPosts;

	const paginationRender = () => {
		if ( 'infinite' === paginationType ) {
			if ( 'scroll' === paginationEventType ) {
				return (
					<div className="uagb-post-inf-loader">
						<div className="uagb-post-loader-1"></div>
						<div className="uagb-post-loader-2"></div>
						<div className="uagb-post-loader-3"></div>
					</div>
				);
			}
			if ( 'button' === paginationEventType ) {
				return (
					<div className="uagb-post__load-more-wrap">
						<span className="uagb-post-pagination-button">
							<a // eslint-disable-line jsx-a11y/anchor-is-valid
								className="uagb-post__load-more">
								{ buttonText }
							</a>
						</span>
					</div>
				);
			}
		}
	};
	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/post-masonry.png`;
	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<div
			className={ classnames(
				className,
				'uagb-post-grid',
				'uagb-post__arrow-outside',
				`uagb-post__image-position-${ imgPosition }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
			data-blog-id={ block_id }
			ref={ isoElement }
		>
			{/* <Suspense fallback={ lazyLoader() }> */}
				<Masonry
					className={ classnames(
						'is-masonry',
						`uagb-post__columns-${ columns }`,
						`uagb-post__columns-tablet-${ tcolumns }`,
						`uagb-post__columns-mobile-${ mcolumns }`,
						'uagb-post__items',
						className,
						'uagb-post-grid',
						'uagb-post__arrow-outside',
						`uagb-post__image-position-${ imgPosition }`,
						`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
						`uagb-block-${ block_id }`
					) }
					data-blog-id={ block_id }
				>
					<InnerBlockLayoutContextProvider
						parentName="uagb/post-masonry"
						parentClassName="uagb-block-grid"
					>
						{ displayPosts.map( ( post, i ) => (
							<article ref={article} key={ i } className="uagb-post__inner-wrap">
								{ renderPostLayout(
									'uagb/post-masonry',
									post,
									layoutConfig,
									props.attributes,
									props.categoriesList
								) }
							</article>
						) ) }
					</InnerBlockLayoutContextProvider>
				</Masonry>
			{/* </Suspense> */}
			{ paginationRender() }
		</div>
	);
}

export default Blog;
