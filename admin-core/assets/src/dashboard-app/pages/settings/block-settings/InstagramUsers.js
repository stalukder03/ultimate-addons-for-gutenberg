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
	}, false );

	// Decleration of all the states needed
	const dispatch = useDispatch();
	const [ instagramDevMode, setInstagramDevMode ] = useState( false );
	const [ tempToken, setTempToken] = useState( '' );
	const [ instaLinkUserLabel, setInstaLinkUserLabel] = useState( __( 'Link User', 'ultimate-addons-for-gutenberg' ) );
	const [ authLinkingUser, setAuthLinkingUser ] = useState( false );
	const [ linkingUser, setLinkingUser ] = useState( false );
	const [ openPopup, setOpenPopup ] = useState( false );
	const [ poppedUser, setPoppedUser ] = useState( '' );
	const instaLinkedAccounts = useSelector( ( state ) => state.instaLinkedAccounts );

	// SVG For Right Hand Side Spinner.
	const svgSpinner = (
		<svg className="animate-spin -mr-1 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
			<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
			<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	);

	// Format the Expiry Date in API Supported Format.
	const setExpiryDate = ( expiryDate ) => {
		const dd = expiryDate.getDate();
		const mm = expiryDate.getMonth() + 1;
		const yyyy = expiryDate.getFullYear();
		return `${ yyyy }-${ mm }-${ dd }`;
	};

	// Update the Label of the Dev Mode Button. 
	const handleInstaLinkUserLable = ( type = null ) => {
		switch ( type ) {
			case 'saving':
				setInstaLinkUserLabel( __( 'Linking', 'ultimate-addons-for-gutenberg' ) );
				break;
			case 'invalid':
				setInstaLinkUserLabel( __( 'Inavalid Token' , 'ultimate-addons-for-gutenberg' ) );
				break;
			case 'exists':
				setInstaLinkUserLabel( __( 'Account Exists!', 'ultimate-addons-for-gutenberg' ) );
				break;
			case 'success':
				setInstaLinkUserLabel( __( 'Account Linked!', 'ultimate-addons-for-gutenberg' ) );
				break;
			case 'failed':
				setInstaLinkUserLabel( __( 'Failed to Add Account', 'ultimate-addons-for-gutenberg' ) );
				break;
			default:
				setInstaLinkUserLabel( __( 'Link User', 'ultimate-addons-for-gutenberg' ) );
		}
	};

	// Highlight the User if they are already linked.
	const highlightLinkedUser = ( theID ) => {
		const heWhoExists = document.getElementById( `Spectra-IG-User-${ theID }` );
		heWhoExists.classList.toggle( 'bg-slate-200' );
		setTimeout( () => {
			heWhoExists.classList.toggle( 'bg-slate-200' );
		}, 500 );
	};

	// Check the Authenticity of the Token.
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

	// Add the Auth Token user to the list of linked accounts.
	const linkAuthUser = ( userID, userName, authData ) => {
		let tempID;
		let tempUserMatrix = [];
		let isFound = false;
		let expiryDate = new Date();
		const refreshLink = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${ escapeHTML( authData.token ) }`;
		// Check if user has already been linked
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

	// Open the Unlink Popup Prompt.
	const unlinkUser = ( theUser ) => {
		setPoppedUser( theUser );
		setOpenPopup( true );
	};

	// Handle Linking the account from the One-Click Button.
	const handleInstaLinkAccount = ( clickedButton ) => {
		setTempToken( escapeHTML( tempToken ) );
		const theButton = clickedButton.target;
		const checkUser = `https://graph.instagram.com/me?fields=id,username&access_token=${ escapeHTML( tempToken ) }`;
		setLinkingUser( true );
		theButton.disabled = true;
		handleInstaLinkUserLable( 'saving' );
		fetch( checkUser ).then( ( response ) => response.json() ).then( ( data ) => {
			handleNewUserCreation( data.id, data.username, theButton );
		} ).catch( () => {
			setLinkingUser( false );
			handleInstaLinkUserLable( 'invalid' );
			setTimeout( () => {
				handleInstaLinkUserLable();
				theButton.disabled = false;
			}, 1000 );
		} );
	};

	// Add the One Click Button user to the list of linked accounts.
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
				handleInstaLinkUserLable( 'exists' );
				setTimeout( () => {
					handleInstaLinkUserLable();
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
					handleInstaLinkUserLable( 'success' );
					setTimeout( () => {
						handleInstaLinkUserLable();
						theButton.disabled = false;
					}, 1000 );
				}
				else{
					setLinkingUser( false );
					handleInstaLinkUserLable( 'failed' );
					setTimeout( () => {
						handleInstaLinkUserLable();
						theButton.disabled = false;
					}, 1000 );
				}
			} );
		} ).catch( ( err ) => {
			console.error( `Well, this wasn't supposed to happen...\n${ err }`);
		} );
	};

	// Display the Popup Window.
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

	// Generate a Display Picture based on the Account Type.
	const generateDP = ( user ) => (
		( 'business' === user.userType.toLowerCase() ) ? (
			// Render Profile Picture from ( profile_picture_url )
			<div className="h-12 w-12 aspect-square rounded-full bg-spectra"></div>
		) : (
			<div className="h-12 w-12 aspect-square rounded-full bg-violet-100 text-spectra flex justify-center items-center text-xl">{ user.userName[0].toUpperCase() }</div>
		)
	);

	// Get the Account Type Internationalized Label.
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

	// Render All the linked Users.
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
			<div
				className="relative h-16 p-2 pr-4 m-2.5 rounded-md flex border border-slate-200 hover:border-slate-400 transition-colors"
				key={ user.userID }
				id={ `Spectra-IG-User-${ user.userID }` }
			>
				<button
					className="absolute top-0 right-0 w-4 h-4 -mt-2 -mr-2 flex items-center justify-center rounded-full bg-slate-500 hover:bg-red-600 transition-colors"
					aria-label={ __( 'Unlink', 'ultimate-addons-for-gutenberg' ) }
					onClick={ () => unlinkUser( user.userName ) }
				>
					<svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#fff"/>
					</svg>
				</button>
				{ generateDP( user ) }
				<div className="ml-4 flex-1 flex flex-col justify-center">
					<div className="text-base text-slate-800">{ `@${ user.userName }` }</div>
					<div className="text-xs text-slate-400">{ getAccountType( user.userType ) }</div>
				</div>
			</div>
		) );

		const renderedUsers = (
			<>
				<p className="text-sm text-slate-800">
					{ __( 'Linked Users', 'ultimate-addons-for-gutenberg' ) }
				</p>
				<div className="-m-2.5 mt-2.5 w-full flex flex-wrap">
					{ userMatrix }
				</div>
			</>
		);

		return renderedUsers;
	};

	// Render Developer Mode Settings.
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
					{ instaLinkUserLabel }
					{ linkingUser && svgSpinner }
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
};

export default InstagramUsers;
