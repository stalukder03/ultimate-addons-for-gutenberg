function renderCustomIcon( svg ) {

    let customSVG = '';

    switch ( svg ) {
        case 'align-center':
            customSVG = (
                <svg id="icon-format_align_center" viewBox="0 0 24 24">
                    <path d="M3 3h18v2.016h-18v-2.016zM6.984 6.984h10.031v2.016h-10.031v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 21v-2.016h18v2.016h-18zM6.984 15h10.031v2.016h-10.031v-2.016z"></path>
                </svg>
            );
            break;
        case 'align-left':
            customSVG = (
                <svg id="icon-format_align_left" viewBox="0 0 24 24">
                    <path d="M3 3h18v2.016h-18v-2.016zM3 21v-2.016h18v2.016h-18zM3 12.984v-1.969h18v1.969h-18zM15 6.984v2.016h-12v-2.016h12zM15 15v2.016h-12v-2.016h12z"></path>
                </svg>
            );
            break;
        case 'align-right':
            customSVG = (
                <svg id="icon-format_align_right" viewBox="0 0 24 24">
                    <path d="M3 3h18v2.016h-18v-2.016zM9 9v-2.016h12v2.016h-12zM3 12.984v-1.969h18v1.969h-18zM9 17.016v-2.016h12v2.016h-12zM3 21v-2.016h18v2.016h-18z"></path>
                </svg>
            );
            break;
        case 'align-stretch':
            customSVG = (
                <svg viewBox="0 0 24 24">
                    <path d="M3 3h18v2.016h-18v-2.016zM3 9v-2.016h18v2.016h-18zM3 12.984v-1.969h18v1.969h-18zM3 17.016v-2.016h18v2.016h-18zM3 21v-2.016h18v2.016h-18z"></path>
                </svg>
            );
            break;
        }

        return customSVG;
}

export default renderCustomIcon;