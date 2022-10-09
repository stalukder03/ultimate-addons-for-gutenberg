import Select from 'react-select';
import { useState, useEffect } from '@wordpress/element';
import fetchJson from '@Controls/fetchJson';
import uniqBy from '@Controls/uniqBy';
import { addQueryArgs } from '@wordpress/url';
import { select } from '@wordpress/data';
const { getEntityRecords } = select( 'core/data' );

const UAGSelectTerms = (props) => {

    const {
        label,
        data,
        onChange,
        restBase,
        postType
    } = props;

    const [ currentState, setCurrentState ] = useState( {
        options: [],
        isLoading: false,
        page: 1,
        hasMore: false,
    } );

    let fetchPostAbortController;

    useEffect( () => {
		// Replacement for componentDidMount.
        fetchPostAbortController = new AbortController();
        fetchTerms();

        return () => {
            fetchPostAbortController && fetchPostAbortController.abort();
        };
	}, [] );

    const fetchTerms = () => {

		const { page, options, search } = currentState;

		const query = {
			page,
			per_page: 2,
		};

		if ( search && search.length >= 3 ) {
			query.search = search;
		}

		setCurrentState( { isLoading: true } );
        console.log('here');
        console.log(query);
        console.log(fetchPostAbortController);
		fetchJson( {
			path: addQueryArgs( `${ restBase }/`, query ),
			signal: fetchPostAbortController.signal,
		} ).then( ( [ terms, headers ] ) => {
            console.log(terms);
            console.log(headers);

			const newOptions = uniqBy( [ ...options, ...terms.map( term => ( {
				value: term.id,
				label: term.name,
			} ) ) ], 'value' );
console.log(postType);
            const totalPosts = getEntityRecords(
				'postType',
				postType
			);
                console.log(totalPosts);
			// setCurrentState( {
			// 	options: newOptions,
			// 	hasMore:  > page,
			// 	isLoading: false,
			// } );
		} );
	}

    const fetchMoreTerms = () => {
		const { page, hasMore, isLoading } = currentState;

		if ( ! hasMore || isLoading ) {
			return;
		}

		setCurrentState( { page: page + 1 }, () => fetchTerms() );
	}

	const updateSearch = ( search ) => {
		if ( search.length >= 3 ) {
			setCurrentState( {
				search,
				page: 1,
			}, () => fetchTerms() );
		}
	}

	const handleChange = ( value ) => {
		setCurrentState( {
			search: null,
			page: 1,
		} );
		onChange( value );
	}

    return (

        <Select
            value={ data.value }
            onChange={ handleChange }
            options={ currentState.options }
            isMulti={ false }
            isLoading={ currentState.isLoading }
            onMenuScrollToBottom={ () => fetchMoreTerms() }
            onInputChange={ s => updateSearch( s ) }
            maxMenuHeight={ 300 }
            placeholder={ label }
        />
    );
}

export default UAGSelectTerms;