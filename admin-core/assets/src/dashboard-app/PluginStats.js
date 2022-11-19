/* eslint-disable no-nested-ternary */

import React from 'react';

import { __ } from '@wordpress/i18n';

const PluginStats = () => {

	const renderDivider = () => (
		<svg
			width='1'
			height='16'
			viewBox='0 0 1 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='mr-4'
		>
			<line x1='0.5' y1='2.18557e-08' x2='0.499999' y2='16' stroke='#E2E8F0'/>
		</svg>
	);

	const renderLicenseStatus = () => (
		uag_react.spectra_pro_installed ? (
			uag_react.spectra_pro_status ? (
				uag_react.license_status ? (
					<div className='mr-8 text-sm text-emerald-500'>
						{ __( 'License activated', 'ultimate-addons-for-gutenberg' ) }
					</div>					
				) : (
					<div className='mr-8 text-sm text-slate-400'>
						{ __( 'License not activated', 'ultimate-addons-for-gutenberg' ) }
					</div>
				)
			) : (
				<div className='mr-8 text-sm text-spectra'>
					{ __( 'Enable Spectra Pro', 'ultimate-addons-for-gutenberg' ) }
				</div>
			)
		) : (
			<div className='mr-8 text-sm text-spectra'>
				{ __( 'Upgrade to Pro', 'ultimate-addons-for-gutenberg' ) }
			</div>
		)
	);

	console.log( uag_react.spectra_pro_ver );

	return (
		<>
			<div className='mr-4 text-sm text-slate-400'>
				{ uag_react.plugin_ver }
			</div>
			{ renderDivider() }
			{ ( uag_react.spectra_pro_ver ) && (
				<>
					<div className='mr-2 text-sm text-slate-500'>
						{ uag_react.spectra_pro_ver }
					</div>
					<div className='mr-4 px-1 py-0.5 text-[10px] leading-[10px] text-slate-500 border border-slate-400 rounded'>
						{ __( 'Pro', 'ultimate-addons-for-gutenberg' ) }
					</div>
					{ renderDivider() }
				</>
			) }
			{ renderLicenseStatus() }
		</>
	);

};

export default PluginStats;