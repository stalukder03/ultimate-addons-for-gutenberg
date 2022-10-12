import Select from 'react-select';
import { useState, useEffect } from '@wordpress/element';
import fetchJson from '@Controls/fetchJson';
import uniqBy from '@Controls/uniqBy';
import { addQueryArgs } from '@wordpress/url';

const UAGSelectTerms = (props) => {

    const {
        label,
        data,
        onChange,
        restBase
    } = props;
console.log(data.value);
    const [ currentState, setCurrentState ] = useState( {
        options: [],
        isLoading: false,
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

		const { options, search } = currentState;

		const query = {};

		if ( search && search.length >= 3 ) {
			query.search = search;
		}

		setCurrentState( { isLoading: true } );
        
		fetchJson( {
			path: addQueryArgs( `${ restBase }/`, query ),
			signal: fetchPostAbortController.signal,
		} ).then( ( [ terms ] ) => {

			const newOptions = uniqBy( [ ...options, ...terms.map( term => ( {
				value: term.id,
				label: term.name,
			} ) ) ], 'value' );

			setCurrentState( {
				options: newOptions,
				isLoading: false,
			} );
		} );
	}

	const updateSearch = ( search ) => {
		if ( search.length >= 3 ) {
			setCurrentState( {
				search,
			}, () => fetchTerms() );
		}
	}

	const handleChange = ( value ) => {
		console.log(value);
		onChange( value?.value);
	}

    return (

        <Select
            value={ data.value }
            onChange={ handleChange }
            options={ currentState.options }
            isMulti={ false }
            isLoading={ currentState.isLoading }
            onInputChange={ s => updateSearch( s ) }
            maxMenuHeight={ 300 }
            placeholder={ label }
        />
    );
}

export default UAGSelectTerms;