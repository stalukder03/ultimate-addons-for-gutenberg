
UAGBInlineNotice = { // eslint-disable-line no-undef
	init( attr, id ) {
		const main = document.querySelectorAll( id );

		if( main.length === 0 ){
			return;
		}

		const unique_id = attr.c_id;
		const is_cookie = attr.cookies;
		const cookies_days = attr.close_cookie_days;
		const current_cookie = Cookies.get( 'uagb-notice-' + unique_id );


		for( let i = 0; i < main.length; i++ ){
			if ( 'undefined' === typeof current_cookie && true === is_cookie ) {
				main[i].style.display = 'block';
			}

			const closeBtn = main[i].querySelector( '.uagb-notice-dismiss' );

			if ( attr.noticeDismiss !== '' ) {
				closeBtn.addEventListener( 'click', function () {
					if ( true === is_cookie && 'undefined' === typeof current_cookie ) {
						Cookies.set(
							'uagb-notice-' + unique_id,
							true,
							{ expires: cookies_days }
						);
					}

					this.parentElement.classList.add( 'uagb-notice__active' );
					this.parentElement.style.display = 'none';
				} );
			}
		}
	},
};
