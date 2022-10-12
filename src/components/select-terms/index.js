import Select from 'react-select';
import { useState, useEffect } from '@wordpress/element';
import fetchJson from '@Controls/fetchJson';
import uniqBy from '@Controls/uniqBy';
import { addQueryArgs } from '@wordpress/url';
import { __ } from '@wordpress/i18n';

const UAGSelectTerms = (props) => {

    const {
        label,
        data,
        restBase,
		setAttributes
    } = props;

    const [ currentState, setCurrentState ] = useState( {
        options: [ {value: '', label: __('All')}],
        isLoading: false,
		value: data?.value,
		selectedLabel: __('All')
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

		let selectedLabelValue = __('All');
        
		fetchJson( {
			path: addQueryArgs( `${ restBase }/`, query ),
			signal: fetchPostAbortController.signal,
		} ).then( ( [ terms ] ) => {
			const termsObject = terms.map( term => {
				
				if ( term?.count <= 0 ) {
					return false;
				}
				if ( term.id === data?.value ) {
					selectedLabelValue = term.name
				}
				if ( term?.count >= 0 ) {
					return (
						{
							value: term.id,
							label: term.name
						}
					);
				}
			})
			
			const newOptions = uniqBy( [ ...options, ...termsObject.filter(Boolean) ], 'value' );
			console.log(selectedLabelValue);
			setCurrentState( {
				options: newOptions,
				isLoading: false,
				selectedLabel: selectedLabelValue
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
		setAttributes( { [data?.label]: value?.value } )
		setCurrentState( {
			value: data?.value,
		} );
	}

    return (

        <Select
			defaultValue={ {label: currentState.selectedLabel, value: currentState.value} }
            onChange={ handleChange }
            options={ currentState.options }
            isMulti={ false }
            // isLoading={ currentState.isLoading }
            onInputChange={ s => updateSearch( s ) }
            maxMenuHeight={ 300 }
            placeholder={ label }
			className="spectra-multi-select components-base-control"
        />
    );
}

export default UAGSelectTerms;