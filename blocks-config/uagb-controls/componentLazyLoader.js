import React, { useLayoutEffect } from 'react';

const LightTheme = React.lazy( () => {
	const Styles = import( './themes/lightTheme' );
	export Styles;
});
const DarkTheme = React.lazy(() => import('./themes/darkTheme'));

const componentLazyLoader = (styles) => {};

export default componentLazyLoader;
