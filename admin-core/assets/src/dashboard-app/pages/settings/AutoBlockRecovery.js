import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const AutoBlockRecovery = () => {

    const dispatch = useDispatch();

    const enableAutoBlockRecovery = useSelector( ( state ) => state.enableAutoBlockRecovery );
    const enableAutoBlockRecoveryStatus = 'disabled' === enableAutoBlockRecovery ? false : true;

    const updateEnableAutoBlockRecoveryStatus = () => {

        let assetStatus;
		if ( enableAutoBlockRecovery === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( { type: 'UPDATE_ENABLE_AUTO_BLOCK_RECOVERY', payload: assetStatus } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_auto_block_recovery' );
		formData.append( 'security', uag_react.auto_block_recovery_nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
		} );
    };

    return (
        <section className='flex border-b border-solid border-slate-200'>
            <div className='pr-16 pb-8 w-[78%]'>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    { __( 'Automatic Block Recovery', 'ultimate-addons-for-gutenberg' ) }
                </h3>
                <p className="mt-[0.6rem] text-sm ">
                    { __( 'Enable this to automatically recover any erroneous blocks that may occur on your web pages. This will save you time spent on clicking all those \"Attempt Block Recovery\" Buttons.', 'ultimate-addons-for-gutenberg' ) }
                </p>
            </div>
            <div>
                <Switch
                    checked={ enableAutoBlockRecoveryStatus }
                    onChange={ updateEnableAutoBlockRecoveryStatus }
                    className={ classNames(
                        enableAutoBlockRecoveryStatus ? 'bg-wpcolor' : 'bg-gray-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    ) }
                    >
                    <span
                        aria-hidden="true"
                        className={ classNames(
                            enableAutoBlockRecoveryStatus ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        ) }
                    />
                </Switch>
            </div>
        </section>
    );
};

export default AutoBlockRecovery;