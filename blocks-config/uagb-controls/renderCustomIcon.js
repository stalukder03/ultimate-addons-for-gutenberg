function renderCustomIcon( svg ) {

    let customSVG = '';

    switch ( svg ) {
        case 'align-center':
            customSVG = (
                <svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 2H14V0H4V2ZM0 7H18V5H0V7ZM4 12H14V10H4V12Z"
                    />
                </svg>
            );
            break;
        case 'align-left':
            customSVG = (
                <svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 2H0V0H10V2ZM18 7H0V5H18V7ZM10 12H0V10H10V12Z"
                    />
                </svg>
            );
            break;
        case 'align-right':
            customSVG = (
                <svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 2H18V0H8V2ZM0 7H18V5H0V7ZM8 12H18V10H8V12Z"
                    />
                </svg>
            );
            break;
        }

        return customSVG;
}

export default renderCustomIcon;