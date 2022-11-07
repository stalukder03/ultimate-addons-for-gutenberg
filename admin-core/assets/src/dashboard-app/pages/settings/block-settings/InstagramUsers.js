import { __ } from '@wordpress/i18n';
import { useState  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';
import { escapeHTML } from '@wordpress/escape-html';
import InstagramUnlinkPopup from './InstagramUnlinkPopup';

const classNames = ( ...classes ) => classes.filter( Boolean ).join( ' ' );

const InstagramUsers = () => {

	// Constants Required for the API Fetch.
	const SPECTRA_AUTH_ROOT = 'https://dev.ultimategutenberg.com';
	const SPECTRA_IG_TOKEN_GENERATOR = `${ SPECTRA_AUTH_ROOT }/auth/instagram/`;
	const SPECTRA_IG_BASIC_APP_ID = 432767105395971;
	const SPECTRA_IG_BASIC_REDIRECT = `${ SPECTRA_AUTH_ROOT }/auth/instagram/basic/`;
	
	// Listening for a Message from the Popup Window.
	window.addEventListener( 'message', ( event ) => {
		if ( ! event.origin.startsWith( SPECTRA_AUTH_ROOT ) ){
			return;
		}
		switch ( event.data.type ) {
			case 'instagramPersonal':
				setAuthLinkingUser( true );
				checkAuthUser( event.data );
				event.source.close();
				break;
			default:
				return;
		}
	  }, false);

	const dispatch = useDispatch();
	const [ instagramDevMode, setInstagramDevMode ] = useState( false );
	const [ tempToken, setTempToken] = useState( '' );
	const [ instaLinkUserLabel, setInstaLinkUserLabel] = useState( 'Link User' );
	const [ authLinkingUser, setAuthLinkingUser ] = useState( false );
	const [ linkingUser, setLinkingUser ] = useState( false );
	const [ openPopup, setOpenPopup ] = useState( false );
	const [ poppedUser, setPoppedUser ] = useState( '' );
	const instaLinkedAccounts = useSelector( ( state ) => state.instaLinkedAccounts );
	
	const svgDelete = (
		<div className="flex w-4 justify-center content-center">
			<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512" className="fill-white">
				<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM64 256c0-41.4 13.3-79.68 35.68-111.1l267.4 267.4C335.7 434.7 297.4 448 256 448C150.1 448 64 361.9 64 256zM412.3 367.1L144.9 99.68C176.3 77.3 214.6 64 256 64c105.9 0 192 86.13 192 192C448 297.4 434.7 335.7 412.3 367.1z"/>
			</svg>
		</div>
	);

	const svgRefresh = (
		<div className="flex w-4 justify-center content-center">
			<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512" className="fill-white">
				<path d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"/>
			</svg>
		</div>
	);

	const svgSpinner = (
		<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
			<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
			<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	);

	// const instagramDevMode = useSelector( ( state ) => state.instagramDevMode );

	// const updateDevMode = ( newStatus ) => {
	//     dispatch( {type: 'UPDATE_ENABLE_INSTAGRAM_DEV_MODE', payload: newStatus } );
	// };
	// const fileGenerationStatus = 'disabled' === enableFileGeneration ? false : true;
	

	// const updateFileGenerationStatus = () => {

	//     let assetStatus;
	// 	if ( enableFileGeneration === 'disabled' ) {
	//         assetStatus = 'enabled';
	// 	} else {
	//         assetStatus = 'disabled';
	// 	}

	//     dispatch( {type: 'UPDATE_FILE_GENERATION', payload: assetStatus } );

	// 	const action = 'uag_enable_file_generation',
	// 		nonce = uag_react.enable_file_generation_nonce;

	// 	const formData = new window.FormData();

	// 	formData.append( 'action', action );
	// 	formData.append( 'security', nonce );
	// 	formData.append( 'value', assetStatus );

	// 	apiFetch( {
	// 		url: uag_react.ajax_url,
	// 		method: 'POST',
	// 		body: formData,
	// 	} ).then( () => {
	// 	} );
	// };
	
	const setExpiryDate = ( expiryDate ) => {
		// console.log( expiryDate );
		const dd = expiryDate.getDate();
		const mm = expiryDate.getMonth() + 1;
		const yyyy = expiryDate.getFullYear();
		// console.warn( `${ yyyy }-${ mm }-${ dd }` );
		return `${ yyyy }-${ mm }-${ dd }`;
	};

	const handleInstaLinkUserLable = ( newButtonLabel ) => {
		newButtonLabel = escapeHTML( newButtonLabel );
		( "" === newButtonLabel )
		? setInstaLinkUserLabel( 'Link User' )
		: setInstaLinkUserLabel( newButtonLabel );
	};

	const highlightLinkedUser = ( theID ) => {
		const heWhoExists = document.getElementById( `Spectra-IG-User-${ theID }` );
		heWhoExists.classList.toggle( 'bg-slate-200' );
		setTimeout( () => {
			heWhoExists.classList.toggle( 'bg-slate-200' );
		}, 500 );
	};

	const checkAuthUser = ( authData ) => {
		if( authData.token !== '...' ){
			const checkUser = `https://graph.instagram.com/me?fields=id,username&access_token=${ authData.token }`;
			fetch( checkUser ).then( ( response ) => response.json() ).then( ( data ) => {
				linkAuthUser( data.id, data.username, authData );
			} ).catch( ( err ) => {
				console.warn ( err );
				setAuthLinkingUser( false );
			} );
		}
	};
	
	const linkAuthUser = ( userID, userName, authData ) => {
		let tempID;
		let tempUserMatrix = [];
		let isFound = false;
		let expiryDate = new Date();
		const refreshLink = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${ escapeHTML( authData.token ) }`;
		//Check if user has already been linked
		if ( 0 !== instaLinkedAccounts.length ){
			tempUserMatrix =  instaLinkedAccounts ;	
			tempUserMatrix.forEach( ( user ) => {
				if ( user.userName === userName ){
					isFound = true;
					tempID = user.userID;
				}
			} );
			if ( isFound ){
				highlightLinkedUser( tempID );
				setAuthLinkingUser( false );
				return;
			}
		}
		fetch( refreshLink ).then( ( response ) => response.json() ).then( ( data ) => {
			expiryDate.setSeconds( data.expires_in );			
			tempUserMatrix.push( {
				userName: userName,
				userID: userID,
				userType: authData.type.replace( 'instagram', '' ).toLowerCase(),
				token: authData.token,
				postRefreshRate: 'H-1',
				expiryDate:  setExpiryDate( expiryDate ),
				isCurrentlyActive: true,
			} );
			dispatch( { type: 'UPDATE_INSTA_LINKED_ACCOUNTS', payload: tempUserMatrix } );
			const action = 'uag_insta_linked_accounts';
			const nonce = uag_react.insta_linked_accounts_nonce;
			const formData = new window.FormData();
			formData.append( 'action', action );
			formData.append( 'security', nonce );
			formData.append( 'value', JSON.stringify( tempUserMatrix ) );
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( () => {
				setAuthLinkingUser( false );
			} );
		} ).catch( ( err ) => {
			console.error( `Well, this wasn't supposed to happen...\n${ err }` );
			setAuthLinkingUser( false );
		} );
	};
	
	const unlinkUser = ( theUser ) => {
		setPoppedUser( theUser );
		setOpenPopup( true );
	};
	
	const handleInstaLinkAccount = ( clickedButton ) => {
		setTempToken( escapeHTML( tempToken ) );
		const theButton = clickedButton.target;
		const checkUser = `https://graph.instagram.com/me?fields=id,username&access_token=${ escapeHTML( tempToken ) }`;
		setLinkingUser( true );
		theButton.disabled = true;
		handleInstaLinkUserLable( 'Saving' );
		fetch( checkUser ).then( ( response ) => response.json() ).then( ( data ) => {
			handleNewUserCreation( data.id, data.username, theButton );
		} ).catch( () => {
			setLinkingUser( false );
			// theButton.classList.toggle( 'bg-rose-600' );
			handleInstaLinkUserLable( 'Invalid Token' );
			setTimeout( () => {
				// theButton.classList.toggle( 'bg-rose-600' );
				handleInstaLinkUserLable( '' );
				theButton.disabled = false;
			}, 1000 );
		} );
	};
	
	const handleNewUserCreation = ( userID, userName, theButton ) => {
		let tempUserMatrix = [];
		let isFound = false;
		let expiryDate = new Date();
		const refreshLink = `https://graph.instagram.com/refresh_access_token
		?grant_type=ig_refresh_token
		&access_token=${ escapeHTML( tempToken ) }`;
		//Check if user has already been linked.
		if ( 0 !== instaLinkedAccounts.length ){
			tempUserMatrix =  instaLinkedAccounts ;	
			tempUserMatrix.forEach( ( user ) => {
				if ( user.userName === userName ){
					isFound = true;
				}
			} );
			if ( isFound ){
				setLinkingUser( false );
				// theButton.classList.toggle( 'bg-rose-600' );
				handleInstaLinkUserLable( 'Account Exists!' );
				setTimeout( () => {
					// theButton.classList.toggle( 'bg-rose-600' );
					handleInstaLinkUserLable( '' );
					theButton.disabled = false;
				}, 1000 );
				return;
			}
		}
		fetch( refreshLink ).then( ( response ) => response.json() ).then( ( data ) => {
			expiryDate.setSeconds( data.expires_in );			
			tempUserMatrix.push( {
				userName: userName,
				userID: userID,
				userType: 'personal',
				token: tempToken,
				postRefreshRate: 'H-1',
				expiryDate: setExpiryDate( expiryDate ),
				isCurrentlyActive: true,
			} );
			dispatch( { type: 'UPDATE_INSTA_LINKED_ACCOUNTS', payload: tempUserMatrix } );
			const action = 'uag_insta_linked_accounts';
			const nonce = uag_react.insta_linked_accounts_nonce;
			const formData = new window.FormData();
			formData.append( 'action', action );
			formData.append( 'security', nonce );
			formData.append( 'value', JSON.stringify( tempUserMatrix ) );
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( ( data ) => {
				if ( data.success ) {
					setLinkingUser( false );
					// theButton.classList.toggle( 'bg-lime-500' );
					handleInstaLinkUserLable( 'Account Linked!' );
					setTimeout( () => {
						// theButton.classList.toggle( 'bg-lime-500' );
						handleInstaLinkUserLable( '' );
						theButton.disabled = false;
					}, 1000 );
				}
				else{
					setLinkingUser( false );
					// theButton.classList.toggle( 'bg-rose-600' );
					handleInstaLinkUserLable( 'Failed to add account' );
					setTimeout( () => {
						// theButton.classList.toggle( 'bg-rose-600' );
						handleInstaLinkUserLable( '' );
						theButton.disabled = false;
					}, 1000 );
				}
			} );
		} ).catch( ( err ) => {
			console.error( `Well, this wasn't supposed to happen...\n${ err }`);
		} );
	};
	
	const displayAuthWindow = ( theUserType ) => {
		let popupAuth;
		const positioning = {
			left: ( screen.width - 480 ) / 2,
			top: ( screen.height - 720 ) / 2,
		};
		switch ( theUserType ) {
			case 'personal':
				popupAuth = window.open(
					`https://api.instagram.com/oauth/authorize?client_id=${
						SPECTRA_IG_BASIC_APP_ID
					}&redirect_uri=${
						SPECTRA_IG_BASIC_REDIRECT
					}&scope=user_profile,user_media&response_type=code`,
					'InstagramAuth',
					`width=480,height=720,top=${ positioning.top },left=${ positioning.left },scrollbars=0`
				);
				break;
			case 'business':
				popupAuth = window.open(
					`https://api.instagram.com/oauth/authorize?client_id=${
						SPECTRA_IG_BASIC_APP_ID
					}&redirect_uri=${
						SPECTRA_IG_BASIC_REDIRECT
					}&scope=user_profile,user_media&response_type=code`,
					'InstagramAuth',
					`width=480,height=720,top=${ positioning.top },left=${ positioning.left },scrollbars=0`
				);
				break;
			default:
				popupAuth = 'nope.';
				break;
		}
		popupAuth !== 'nope.' && popupAuth.postMessage( { message: "fetchInstagramAccount" }, "*" );
	};

	const generateDP = ( user ) => (
		( 'business' === user.userType.toLowerCase() ) ? (
			// Render Profile Picture from ( profile_picture_url )
			<div className="h-12 w-12 aspect-square rounded-full bg-spectra"></div>
		) : (
			<div className="h-12 w-12 aspect-square rounded-full bg-spectra text-white flex justify-center items-center text-xl">{ user.userName[0].toUpperCase() }</div>
		)
	);

	const getAccountType = ( userType ) => {
		switch ( userType ) {
			case 'personal':
				return __( 'Personal Account', 'ultimate-addons-for-gutenberg' );
			case 'business':
				return __( 'Business Account', 'ultimate-addons-for-gutenberg' );
			default:
				return __( 'Instagram Account', 'ultimate-addons-for-gutenberg' );
		}
	};
	
	const renderAllLinkedAccounts = () => {
		if ( 0 === Object.keys( instaLinkedAccounts ).length ){
			return (
				<>
					<p className="text-sm text-slate-400">
						{ __( 'No linked accounts.', 'ultimate-addons-for-gutenberg' ) }
					</p>
					<p className="text-sm text-slate-400">
						{ __( 'Please link an Instagram Account to start using it with Spectra!', 'ultimate-addons-for-gutenberg' ) }
					</p>
				</>
			);
		}
		const userMatrix = instaLinkedAccounts.map( ( user ) => (
			<>
				{/* <tr className={ ! user.isCurrentlyActive ? 'opacity-50 transition duration-500' : 'transition duration-500' } key={ user.userID } id={ `Spectra-IG-User-${ user.userID }` }>
					<td className="text-center p-2">{ `@${ user.userName }` }</td>
					<td className="text-center p-2">
						{ user.userType ? user.userType.toUpperCase() : 'UNLINKED' }
					</td>
					<td className="flex justify-center p-2">
						<button
							type='button'
							className= 'flex items-center mb-2 ml-1 px-4 py-2 border border-transparent text-sm font-medium rounded-[0.2rem] shadow-sm bg-rose-600 hover:bg-rose-800 focus:outline-none transition'
							aria-label={ __( 'Unlink', 'ultimate-addons-for-gutenberg' ) }
							onClick={ () => unlinkUser( user.userName ) }
						>
							{ svgDelete }
						</button>
					</td>
				</tr> */}
				<div
					className="relative h-16 px-3 py-2 rounded-md flex border border-slate-200"
					key={ user.userID }
					id={ `Spectra-IG-User-${ user.userID }` }
				>
					<button
						className="absolute top-0 right-0 w-4 h-4 -mt-2 -mr-2 rounded-full bg-slate-500"
						aria-label={ __( 'Unlink', 'ultimate-addons-for-gutenberg' ) }
						onClick={ () => unlinkUser( user.userName ) }
						// style={ {
						// 	top: 0,
						// 	marginTop: '-0.5em',
						// 	marginRight: '-0.5em',
						// 	backgroundColor: 'rgb(100 116 139)', // Same Color Used for Slate 500.
						// } }
					>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path style={{ fill: 'white' }} fill-rule="evenodd" clip-rule="evenodd" d="M7.9998 15.2008C11.9763 15.2008 15.1998 11.9772 15.1998 8.00078C15.1998 4.02433 11.9763 0.800781 7.9998 0.800781C4.02335 0.800781 0.799805 4.02433 0.799805 8.00078C0.799805 11.9772 4.02335 15.2008 7.9998 15.2008ZM6.8362 5.56439C6.48473 5.21291 5.91488 5.21291 5.56341 5.56439C5.21194 5.91586 5.21194 6.48571 5.56341 6.83718L6.72701 8.00078L5.56341 9.16438C5.21194 9.51586 5.21194 10.0857 5.56341 10.4372C5.91488 10.7886 6.48473 10.7886 6.8362 10.4372L7.9998 9.27357L9.16341 10.4372C9.51488 10.7886 10.0847 10.7886 10.4362 10.4372C10.7877 10.0857 10.7877 9.51586 10.4362 9.16439L9.2726 8.00078L10.4362 6.83718C10.7877 6.48571 10.7877 5.91586 10.4362 5.56439C10.0847 5.21291 9.51488 5.21291 9.16341 5.56439L7.9998 6.72799L6.8362 5.56439Z"/>
						</svg>
					</button>
					{ generateDP( user ) }
					<div className="ml-3 flex-1 flex flex-col justify-center overflow-hidden">
						<div className="text-base text-slate-800">{ `@${ user.userName }` }</div>
						{/* <p className="w-full text-base text-slate-800 text-ellipsis overflow-hidden">{ `@${ user.userName }_has_something_up_his_sleeve` }</p> */}
						<div className="text-xs text-slate-400">{ getAccountType( user.userType ) }</div>
					</div>
				</div>
			</>
		) );

		const renderedUsers = (
			<>
				<p className="text-sm text-slate-800">
					{ __( 'Linked Users', 'ultimate-addons-for-gutenberg' ) }
				</p>
				{/* THIS CLASS ( grid-cols-4 ) DOES NOT BUILD. HOWEVER, THIS CLASS ( grid-rows-4 ) WORKS AS REQUIRED. */}
				<div className="mt-5 w-full grid gap-5" style={ { 'grid-template-columns': 'repeat(4, minmax(0, 1fr))' } }>
					{ userMatrix }
				</div>
			</>
		);
		return renderedUsers;
	};

	const renderDevSettings = () => (
		<>
			<p className="mt-5 text-sm text-slate-500">
				{ __( 'No need to share passwords. Share our', 'ultimate-addons-for-gutenberg' ) }
				&nbsp;
				<a className="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover" href={ SPECTRA_IG_TOKEN_GENERATOR } target="_blank">{ __( 'Access Token Generator', 'ultimate-addons-for-gutenberg' ) }</a>
				&nbsp;
				{ __( 'with your client and ask them to share their token with you.', 'ultimate-addons-for-gutenberg' ) }
			</p>
			<div className="mt-4 grid grid-cols-[1fr_auto] w-full">
				<input
					className="mr-5 h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field"
					type='text'
					aria-label='Token'
					placeholder='Token'
					value={ tempToken }
					onChange={ ( event ) => setTempToken( event.target.value ) }
				/>
				<button
					type='button'
					className={ classNames(
						! tempToken ? 'cursor-not-allowed bg-slate-200 text-slate-400' : 'bg-spectra text-white hover:bg-spectra-hover focus:bg-spectra-hover',
						'flex items-center w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none transition-all'
					) }
					disabled={ ( '' === tempToken ) ? true : false }
					onClick={ ( event ) => handleInstaLinkAccount( event ) }
				>
					{ linkingUser && svgSpinner }
					{ __( instaLinkUserLabel, 'ultimate-addons-for-gutenberg' ) }
				</button>
			</div>
		</>
	);

	return (
		<>
			<section className="block border-b border-solid border-slate-200 px-12 py-8 justify-between">  
				<div className="mr-16 w-full flex items-center">
					<h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
						{ __( 'Instagram Accounts', 'ultimate-addons-for-gutenberg' ) }
					</h3>
					<Switch
						checked={ instagramDevMode }
						onChange={ () => setInstagramDevMode( ! instagramDevMode ) }
						className={ classNames(
							instagramDevMode ? 'bg-spectra' : 'bg-slate-200',
							'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
						) }
					>
						<span
							aria-hidden="true"
							className={ classNames(
								instagramDevMode ? 'translate-x-5' : 'translate-x-0',
								'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
							) }
						/>
					</Switch>
				</div>
				<div className="mr-16 mt-2 w-full flex items-start">
					<div className="w-9/12">
						<p className="text-sm text-slate-500">
							{ __( 'Link your Instagram account(s), or enable Developer Mode to link your someone else\'s account(s).', 'ultimate-addons-for-gutenberg' ) }
						</p>
						{ instagramDevMode ? renderDevSettings() : (
							<button
								type="button"
								className="flex items-center mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none"
								onClick={ () => displayAuthWindow( 'personal' ) }
							>
								{ __( 'Link a Personal Account', 'ultimate-addons-for-gutenberg' ) }
								{ authLinkingUser && svgSpinner }
							</button>
						) }
					</div>
					<p className="flex-1 flex justify-end text-sm text-slate-800">
						{ __( 'Developer Mode', 'ultimate-addons-for-gutenberg' ) }
					</p>
				</div>
				<div className="mr-16 mt-9 pt-5 w-full border-t border-t-slate-200">
					{ renderAllLinkedAccounts() }
				</div>
			</section>
	 		<InstagramUnlinkPopup
	 			openPopup={ openPopup }
	 			poppedUser={ poppedUser }
	 			setOpenPopup={ setOpenPopup }
	 			setPoppedUser={ setPoppedUser }
	 		/>
		</>
	);

	// return (
	// 	<>
	// 		<section className="flex border-b border-solid border-slate-200">
	// 			<div className="pr-16 pb-8 w-[78%]">
	// 				<h3 className="text-lg leading-6 font-medium text-gray-900">
	// 					{ __( '', 'ultimate-addons-for-gutenberg' ) }
	// 				</h3>
	// 				<p className="mt-[0.6rem] text-sm">
	// 					{ __( 'Link your Instagram Account(s), or enable Developer Mode to link your client\'s account(s) ', 'ultimate-addons-for-gutenberg' ) }
	// 				</p>
	// 				{ instagramDevMode && renderDevSettings() }
	// 				{ renderAllLinkedAccounts() }
	// 			</div>
	// 			<div>
	// 				<button
	// 					type='button'
	// 					className="flex items-center mb-2 px-4 py-2 border border-transparent text-sm font-medium rounded-[0.2rem] shadow-sm text-white bg-wpcolor hover:bg-wphovercolor focus:outline-none transition'
	// 					onClick={ () => displayAuthWindow( 'personal' ) }
	// 				>
	// 					{ authLinkingUser && svgSpinner }
	// 					{ __( 'Personal Account', 'ultimate-addons-for-gutenberg' ) }
	// 				</button>
	// 				<button
	// 					type='button'
	// 					className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-[0.2rem] shadow-sm text-white bg-wpcolor hover:bg-wphovercolor focus:outline-none transition cursor-not-allowed opacity-10'
	// 					onClick={ () => displayAuthWindow( 'business' ) }
	// 					disabled={ true }
	// 				>
	// 					{ __( 'Business Account', 'ultimate-addons-for-gutenberg' ) }
	// 				</button>
	// 				<p className="mt-[0.6rem] text-sm">                    
	// 					<Switch
	// 						checked={ instagramDevMode }
	// 						onChange={ () => setInstagramDevMode( ! instagramDevMode ) }
	// 						className={ classNames(
	// 							instagramDevMode ? 'bg-wpcolor' : 'bg-gray-200',
	// 							'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none align-middle'
	// 						) }
	// 						>
	// 						<span
	// 							aria-hidden='true'
	// 							className={ classNames(
	// 								instagramDevMode ? 'translate-x-5' : 'translate-x-0',
	// 								'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
	// 							) }
	// 						/>
	// 					</Switch>
	// 					&ensp;
	// 					{ __( 'Developer Mode ', 'ultimate-addons-for-gutenberg' ) }                    
	// 				</p>
	// 			</div>
	// 		</section>
	// 		<InstagramUnlinkPopup
	// 			openPopup={ openPopup }
	// 			poppedUser={ poppedUser }
	// 			setOpenPopup={ setOpenPopup }
	// 			setPoppedUser={ setPoppedUser }
	// 		/>
	// 	</>
	// );
};

export default InstagramUsers;
