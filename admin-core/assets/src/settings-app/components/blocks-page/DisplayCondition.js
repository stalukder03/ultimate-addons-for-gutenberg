import { useStateValue } from '@Utils/StateProvider';
import React, { useEffect } from 'react';
import { ToggleField } from '@Fields';
import SettingTable from '../common/SettingTable';
let blocksCachedValue;

function DisplayCondition( props ) {
	const [ { options } ] = useStateValue();
	const [
		{ globaldata, options },
	] = useStateValue();

	useEffect( () => {
		window.onbeforeunload = null;
		blocksCachedValue =
			options[ '_uag_common[enable_block_condition]' ];
	}, [] );

	
    useEffect( () => {

		if ( enableDisplayCondition !== options['_uag_common[enable_block_condition]'] ) {

			let formData = new window.FormData();

			formData.append( 'action', 'uag_enable_block_condition' );
			formData.append(
				'security',
				uag_react.enable_block_condition_nonce
			);
			formData.append( 'value', options['_uag_common[enable_block_condition]'] );

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

			enableDisplayCondition = options['_uag_common[enable_block_condition]'];
		}
	}, [ options['_uag_common[enable_block_condition]'] ] );

	var enableDisplayConditionSettings = globaldata.settings[ 'enable_block_condition' ];
	return (
		<div className="uag-individual-block-settings-metabox">
			<div className="uag-extension__metabox">
					<h2>Extension</h2>
					<div className="uag-individual-block-settings-metabox">
					<SettingTable
							settings={ enableDisplayConditionSettings }
							meta_key="_uag_common"
						/>
					</div>
				</div>
		</div>
	);
}

export default DisplayCondition;
