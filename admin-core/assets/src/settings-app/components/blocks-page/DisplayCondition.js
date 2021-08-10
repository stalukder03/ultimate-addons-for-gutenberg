import { useStateValue } from '@Utils/StateProvider';
import React , { useEffect }from 'react';
import SettingTable from '../common/SettingTable';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
let enableBlockConditionCachedValue;
function DisplayCondition( ) {
	const [
		{ globaldata , options },
	] = useStateValue();

	useEffect( () => {
		window.onbeforeunload = null;
		enableBlockConditionCachedValue = options['uag_enable_block_condition']
	}, [] );

    useEffect( () => {

		if ( enableBlockConditionCachedValue !== options['uag_enable_block_condition'] ) {
			let formData = new window.FormData();

			formData.append( 'action', 'uag_uag_enable_block_condition' );
			formData.append(
				'security',
				uag_react.uag_enable_block_condition_nonce
			);
			formData.append( 'value', options['uag_enable_block_condition'] );
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( ( data ) => {

				if ( data.success ) {

				} else {
					console.log( 'Error' );
				}
			} );

			enableBlockConditionCachedValue = options['uag_enable_block_condition'];
		}
	}, [ options['uag_enable_block_condition'] ] );

	var enableDisplayConditionSettings  = globaldata.settings[ 'uag_enable_block_condition' ];

	return (
			<div className="uag-extension__metabox">
				<h2>Extension</h2>
				<div className="uag-individual-block-settings-metabox">
					<SettingTable
						settings={ enableDisplayConditionSettings  }
					/>
					<a href="https://ultimategutenberg.com/docs/display-conditions-blocks/" target="_blank">
						{ __(
							'Documentation',
							'ultimate-addons-for-gutenberg'
						) }
					</a>
				</div>
				
		</div>
	);
}

export default DisplayCondition;
