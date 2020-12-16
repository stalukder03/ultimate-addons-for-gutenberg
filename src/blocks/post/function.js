/**
 * External dependencies
 */
import { PostTitle } from './post-title/edit';
import { PostMeta } from './post-meta/edit';
import { PostImage } from './post-image/edit';
import { PostExcerpt } from './post-excerpt/edit';
import { PostButton } from './post-button/edit';
const { createContext, useContext , Suspense } = wp.element;
const InnerBlockLayoutContext = createContext( {
	parentName: '',
	parentClassName: '',
	isLoading: false,
} );

export const useInnerBlockLayoutContext = () =>
	useContext( InnerBlockLayoutContext );

export const InnerBlockLayoutContextProvider = ( {
	parentName = '',
	parentClassName = '',
	children,
} ) => {
	const contextValue = {
		parentName,
		parentClassName,
	};
	return (
		<InnerBlockLayoutContext.Provider value={ contextValue }>
			{ children }
		</InnerBlockLayoutContext.Provider>
	);
};

export const DEFAULT_POST_LIST_LAYOUT = [
	[ 'uagb/post-image' ],
	[ 'uagb/post-title' ],
	[ 'uagb/post-meta' ],
	[ 'uagb/post-excerpt' ],
	[ 'uagb/post-button' ],
];
export const renderPostLayout = (
	blockName,
	post,
	layoutConfig,
	attributes,
	categoriesList
) => {
	if ( ! layoutConfig ) {
		return;
	}

	const blockMap = getBlockMap( blockName );

	return layoutConfig.map( ( [ name, props = {} ], index ) => {
		let children = [];

		if ( !! props.children && props.children.length > 0 ) {
			children = renderPostLayout(
				blockName,
				post,
				props.children,
				attributes,
				categoriesList
			);
		}

		const LayoutComponent = blockMap[ name ];
		if ( ! LayoutComponent ) {
			return null;
		}

		return (
			<Suspense
				fallback={ <div className="wc-block-placeholder" /> }
			>
				<LayoutComponent
					{ ...props }
					post={ post }
					attributes = {attributes}
					categoriesList = {categoriesList}
				/>
			</Suspense>
		);
	} );
};
const registeredBlockComponents = {};

export { registeredBlockComponents };

export function registerBlockComponent( options ) {
	if ( ! options.context ) {
		options.context = 'any';
	}
	assertOption( options, 'context', 'string' );
	assertOption( options, 'blockName', 'string' );
	assertBlockComponent( options, 'component' );

	const { context, blockName, component } = options;

	if ( ! registeredBlockComponents[ context ] ) {
		registeredBlockComponents[ context ] = {};
	}

	registeredBlockComponents[ context ][ blockName ] = component;
}

const assertBlockComponent = ( options, optionName ) => {
	if ( options[ optionName ] ) {
		if ( typeof options[ optionName ] === 'function' ) {
			return;
		}
		if (
			options[ optionName ].$$typeof &&
			options[ optionName ].$$typeof === Symbol.for( 'react.lazy' )
		) {
			return;
		}
	}
	throw new Error(
		`Incorrect value for the ${ optionName } argument when registering a block component. Component must be a valid React Element or Lazy callback.`
	);
};

const assertOption = ( options, optionName, expectedType ) => {
	const actualType = typeof options[ optionName ];
	if ( actualType !== expectedType ) {
		throw new Error(
			`Incorrect value for the ${ optionName } argument when registering a block component. It was a ${ actualType }, but must be a ${ expectedType }.`
		);
	}
};

registerBlockComponent( {
	blockName: 'uagb/post-title',
	component: PostTitle
} );

registerBlockComponent( {
	blockName: 'uagb/post-image',
	component: PostImage
} );

registerBlockComponent( {
	blockName: 'uagb/post-meta',
	component: PostMeta
} );

registerBlockComponent( {
	blockName: 'uagb/post-excerpt',
	component: PostExcerpt
} );

registerBlockComponent( {
	blockName: 'uagb/post-button',
	component: PostButton
} );

export const getBlockMap = ( blockName ) => getRegisteredBlockComponents( blockName );

export function getRegisteredBlockComponents( context ) {

	const parentInnerBlocks =
		typeof registeredBlockComponents[ context ] === 'object' &&
		Object.keys( registeredBlockComponents[ context ] ).length > 0
			? registeredBlockComponents[ context ]
			: {};
		
	return {
		...parentInnerBlocks,
		...registeredBlockComponents.any,
	};
}
export const withPostDataContext = ( OriginalComponent ) => {
	return ( props ) => {
		const postDataContext = usePostDataContext();

		// If a post prop was provided, use this as the context for the tree.
		if ( !! props.post || ! postDataContext.hasContext ) {
			return (
				<OriginalComponentWithContext
					{ ...props }
					OriginalComponent={ OriginalComponent }
				/>
			);
		}

		return <OriginalComponent { ...props } />;
	};
};
/**
 * Default post shape matching API response.
 */
const defaultPostData = {
		id: 1,
		title: [{rendered:'Post Title' , raw:'Post Title'}],
		link: 'https://example.org',
		categories: 'categories',
		uagb_author_info: [{author_link:'https://example.org', display_name:'Author Name'}],
		uagb_excerpt:
			'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
		date_gmt: '23 Dec, 2020',
		uagb_comment_info: 'Comment Info',
		uagb_featured_image_src:'',
		content : [{raw:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
					}]
};

const PostDataContext = createContext( {
	post: defaultPostData,
	hasContext: false,
} );
export const usePostDataContext = () => useContext( PostDataContext );

export const PostDataContextProvider = ( {
	post = null,
	children,
	isLoading = false,
} ) => {
	const contextValue = {
		post: post || defaultPostData,
		hasContext: true,
	};
	return (
		<PostDataContext.Provider value={ contextValue }>
			{ isLoading ? (
				<div className="is-loading">{ children }</div>
			) : (
				children
			) }
		</PostDataContext.Provider>
	);
};
export const previewPosts = [
	{
		title: [{rendered:'Post Title' , raw:'Post Title'}],
		link: 'https://example.org',
		categories: 'categories',
		uagb_author_info: [{author_link:'https://example.org', display_name:'Author Name'}],
		uagb_excerpt:
			'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
		date_gmt: '23 Dec, 2020',
		uagb_comment_info: 'Comment Info',
		uagb_featured_image_src:'',
		content : [{raw:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
					}]
	},
];

/**
 * Converts innerblocks to a list of layout configs.
 *
 * @param {Object[]} innerBlocks Inner block components.
 */
export const getPostLayoutConfig = ( innerBlocks ) => {
	if ( ! innerBlocks || innerBlocks.length === 0 ) {
		return [];
	}

	return innerBlocks.map( ( block ) => {
		return [
			block.name,
			{
				...block.attributes,
				post: undefined,
				children:
					block.innerBlocks.length > 0
						? getPostLayoutConfig( block.innerBlocks )
						: [],
			},
		];
	} );
};