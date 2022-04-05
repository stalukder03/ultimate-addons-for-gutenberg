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
        case 'flex-row-start':
            customSVG = (
                <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.33984 1C2.33984 0.447715 1.89213 0 1.33984 0C0.787559 0 0.339844 0.447715 0.339844 1V30.5C0.339844 31.0523 0.787559 31.5 1.33984 31.5C1.89213 31.5 2.33984 31.0523 2.33984 30.5V1ZM32.3398 1C32.3398 0.447715 31.8921 0 31.3398 0C30.7876 0 30.3398 0.447715 30.3398 1V30.5C30.3398 31.0523 30.7876 31.5 31.3398 31.5C31.8921 31.5 32.3398 31.0523 32.3398 30.5V1ZM5.33984 6L9.33984 6C9.87011 6.00053 10.3785 6.21141 10.7535 6.58637C11.1284 6.96133 11.3393 7.46973 11.3398 8L11.3398 23C11.3393 23.5303 11.1284 24.0387 10.7535 24.4136C10.3785 24.7886 9.87011 24.9995 9.33984 25H5.33984C4.80957 24.9995 4.30117 24.7886 3.92621 24.4136C3.55126 24.0387 3.34037 23.5303 3.33984 23L3.33984 8C3.34037 7.46973 3.55126 6.96133 3.92621 6.58637C4.30117 6.21141 4.80957 6.00053 5.33984 6ZM5.33984 8L5.33984 23H9.33984L9.34084 8L5.33984 8ZM18.3398 6L14.3398 6C13.8096 6.00053 13.3012 6.21141 12.9262 6.58637C12.5513 6.96133 12.3404 7.46973 12.3398 8L12.3398 23C12.3404 23.5303 12.5513 24.0387 12.9262 24.4136C13.3012 24.7886 13.8096 24.9995 14.3398 25H18.3398C18.8701 24.9995 19.3785 24.7886 19.7535 24.4136C20.1284 24.0387 20.3393 23.5303 20.3398 23V8C20.3393 7.46973 20.1284 6.96133 19.7535 6.58637C19.3785 6.21141 18.8701 6.00053 18.3398 6ZM14.3398 23L14.3398 8L18.3408 8L18.3398 23H14.3398Z"/>
                </svg>
            );
            break;
        case 'flex-row-end':
            customSVG = (
                <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.33984 1C2.33984 0.447715 1.89213 0 1.33984 0C0.787559 0 0.339844 0.447715 0.339844 1V30.5C0.339844 31.0523 0.787559 31.5 1.33984 31.5C1.89213 31.5 2.33984 31.0523 2.33984 30.5V1ZM32.3398 1C32.3398 0.447715 31.8921 0 31.3398 0C30.7876 0 30.3398 0.447715 30.3398 1V30.5C30.3398 31.0523 30.7876 31.5 31.3398 31.5C31.8921 31.5 32.3398 31.0523 32.3398 30.5V1ZM14.3398 6L18.3398 6C18.8701 6.00053 19.3785 6.21141 19.7535 6.58637C20.1284 6.96133 20.3393 7.46973 20.3398 8V23C20.3393 23.5303 20.1284 24.0387 19.7535 24.4136C19.3785 24.7886 18.8701 24.9995 18.3398 25H14.3398C13.8096 24.9995 13.3012 24.7886 12.9262 24.4136C12.5513 24.0387 12.3404 23.5303 12.3398 23L12.3398 8C12.3404 7.46973 12.5513 6.96133 12.9262 6.58637C13.3012 6.21141 13.8096 6.00053 14.3398 6ZM14.3398 8L14.3398 23H18.3398L18.3408 8L14.3398 8ZM27.3398 6L23.3398 6C22.8096 6.00053 22.3012 6.21141 21.9262 6.58637C21.5513 6.96133 21.3404 7.46973 21.3398 8V23C21.3404 23.5303 21.5513 24.0387 21.9262 24.4136C22.3012 24.7886 22.8096 24.9995 23.3398 25H27.3398C27.8701 24.9995 28.3785 24.7886 28.7535 24.4136C29.1284 24.0387 29.3393 23.5303 29.3398 23V8C29.3393 7.46973 29.1284 6.96133 28.7535 6.58637C28.3785 6.21141 27.8701 6.00053 27.3398 6ZM23.3398 23V8L27.3408 8L27.3398 23H23.3398Z"/>
                </svg>
            );
            break;
        case 'flex-row-center':
            customSVG = (
                <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.33984 1C2.33984 0.447715 1.89213 0 1.33984 0C0.787559 0 0.339844 0.447715 0.339844 1V30.5C0.339844 31.0523 0.787559 31.5 1.33984 31.5C1.89213 31.5 2.33984 31.0523 2.33984 30.5V1ZM32.3398 1C32.3398 0.447715 31.8921 0 31.3398 0C30.7876 0 30.3398 0.447715 30.3398 1V30.5C30.3398 31.0523 30.7876 31.5 31.3398 31.5C31.8921 31.5 32.3398 31.0523 32.3398 30.5V1ZM9.33984 6L13.3398 6C13.8701 6.00053 14.3785 6.21141 14.7535 6.58637C15.1284 6.96133 15.3393 7.46973 15.3398 8L15.3398 23C15.3393 23.5303 15.1284 24.0387 14.7535 24.4136C14.3785 24.7886 13.8701 24.9995 13.3398 25H9.33984C8.80957 24.9995 8.30117 24.7886 7.92621 24.4136C7.55126 24.0387 7.34037 23.5303 7.33984 23L7.33984 8C7.34037 7.46973 7.55126 6.96133 7.92622 6.58637C8.30117 6.21141 8.80957 6.00053 9.33984 6ZM9.33984 8L9.33984 23H13.3398L13.3408 8H9.33984ZM23.3398 6L19.3398 6C18.8096 6.00053 18.3012 6.21141 17.9262 6.58637C17.5513 6.96133 17.3404 7.46973 17.3398 8V23C17.3404 23.5303 17.5513 24.0387 17.9262 24.4136C18.3012 24.7886 18.8096 24.9995 19.3398 25H23.3398C23.8701 24.9995 24.3785 24.7886 24.7535 24.4136C25.1284 24.0387 25.3393 23.5303 25.3398 23V8C25.3393 7.46973 25.1284 6.96133 24.7535 6.58637C24.3785 6.21141 23.8701 6.00053 23.3398 6ZM19.3398 23V8L23.3408 8L23.3398 23H19.3398Z"/>
                </svg>
            );
            break;
        case 'flex-row-strech':
            customSVG = (
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V30.5C0 31.0523 0.447715 31.5 1 31.5C1.55228 31.5 2 31.0523 2 30.5V1ZM32 1C32 0.447715 31.5523 0 31 0C30.4477 0 30 0.447715 30 1V30.5C30 31.0523 30.4477 31.5 31 31.5C31.5523 31.5 32 31.0523 32 30.5V1ZM5.00021 6L12.999 6C13.5293 6.00053 14.0377 6.21141 14.4127 6.58637C14.7876 6.96133 14.9985 7.46973 14.999 8L14.999 23C14.9985 23.5303 14.7876 24.0387 14.4127 24.4136C14.0377 24.7886 13.5293 24.9995 12.999 25H5.00021C4.46993 24.9995 3.96153 24.7886 3.58658 24.4136C3.21162 24.0387 3.00073 23.5303 3.00021 23L3.00021 8C3.00074 7.46973 3.21162 6.96133 3.58658 6.58637C3.96153 6.21141 4.46994 6.00053 5.00021 6ZM5.00021 8L5.00021 23H12.999L13 8L5.00021 8ZM26.9988 6L19 6C18.4697 6.00053 17.9613 6.21141 17.5863 6.58637C17.2114 6.96133 17.0005 7.46973 17 8V23C17.0005 23.5303 17.2114 24.0387 17.5863 24.4136C17.9613 24.7886 18.4697 24.9995 19 25H26.9988C27.529 24.9995 28.0375 24.7886 28.4124 24.4136C28.7874 24.0387 28.9982 23.5303 28.9988 23V8C28.9982 7.46973 28.7874 6.96133 28.4124 6.58637C28.0375 6.21141 27.529 6.00053 26.9988 6ZM19 23V8L26.9998 8L26.9988 23H19Z"/>
                </svg>
            );
            break;
        case 'flex-row-space-between':
            customSVG = (
                <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.68359 1C2.68359 0.447715 2.23588 0 1.68359 0C1.13131 0 0.683594 0.447715 0.683594 1V30.5C0.683594 31.0523 1.13131 31.5 1.68359 31.5C2.23588 31.5 2.68359 31.0523 2.68359 30.5V1ZM32.6836 1C32.6836 0.447715 32.2359 0 31.6836 0C31.1313 0 30.6836 0.447715 30.6836 1V30.5C30.6836 31.0523 31.1313 31.5 31.6836 31.5C32.2359 31.5 32.6836 31.0523 32.6836 30.5V1ZM5.68359 6L9.68359 6C10.2139 6.00053 10.7223 6.21141 11.0972 6.58637C11.4722 6.96133 11.6831 7.46973 11.6836 8L11.6836 23C11.6831 23.5303 11.4722 24.0387 11.0972 24.4136C10.7223 24.7886 10.2139 24.9995 9.68359 25H5.68359C5.15332 24.9995 4.64492 24.7886 4.26996 24.4136C3.89501 24.0387 3.68412 23.5303 3.68359 23L3.68359 8C3.68412 7.46973 3.89501 6.96133 4.26996 6.58637C4.64492 6.21141 5.15332 6.00053 5.68359 6ZM5.68359 8L5.68359 23H9.68359L9.68459 8L5.68359 8ZM27.6836 6L23.6836 6C23.1533 6.00053 22.6449 6.21141 22.27 6.58637C21.895 6.96133 21.6841 7.46973 21.6836 8V23C21.6841 23.5303 21.895 24.0387 22.27 24.4136C22.6449 24.7886 23.1533 24.9995 23.6836 25H27.6836C28.2139 24.9995 28.7223 24.7886 29.0972 24.4136C29.4722 24.0387 29.6831 23.5303 29.6836 23V8C29.6831 7.46973 29.4722 6.96133 29.0972 6.58637C28.7223 6.21141 28.2139 6.00053 27.6836 6ZM23.6836 23V8L27.6846 8L27.6836 23H23.6836Z"/>
                </svg>
            );
            break;
        case 'flex-row-space-around':
            customSVG = (
                <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.68359 1C2.68359 0.447715 2.23588 0 1.68359 0C1.13131 0 0.683594 0.447715 0.683594 1V30.5C0.683594 31.0523 1.13131 31.5 1.68359 31.5C2.23588 31.5 2.68359 31.0523 2.68359 30.5V1ZM32.6836 1C32.6836 0.447715 32.2359 0 31.6836 0C31.1313 0 30.6836 0.447715 30.6836 1V30.5C30.6836 31.0523 31.1313 31.5 31.6836 31.5C32.2359 31.5 32.6836 31.0523 32.6836 30.5V1ZM7.68359 6L11.6836 6C12.2139 6.00053 12.7223 6.21141 13.0972 6.58637C13.4722 6.96133 13.6831 7.46973 13.6836 8L13.6836 23C13.6831 23.5303 13.4722 24.0387 13.0972 24.4136C12.7223 24.7886 12.2139 24.9995 11.6836 25H7.68359C7.15332 24.9995 6.64492 24.7886 6.26996 24.4136C5.89501 24.0387 5.68412 23.5303 5.68359 23L5.68359 8C5.68412 7.46973 5.89501 6.96133 6.26996 6.58637C6.64492 6.21141 7.15332 6.00053 7.68359 6ZM7.68359 8L7.68359 23H11.6836L11.6846 8L7.68359 8ZM25.6836 6L21.6836 6C21.1533 6.00053 20.6449 6.21141 20.27 6.58637C19.895 6.96133 19.6841 7.46973 19.6836 8V23C19.6841 23.5303 19.895 24.0387 20.27 24.4136C20.6449 24.7886 21.1533 24.9995 21.6836 25H25.6836C26.2139 24.9995 26.7223 24.7886 27.0972 24.4136C27.4722 24.0387 27.6831 23.5303 27.6836 23V8C27.6831 7.46973 27.4722 6.96133 27.0972 6.58637C26.7223 6.21141 26.2139 6.00053 25.6836 6ZM21.6836 23V8L25.6846 8L25.6836 23H21.6836Z"/>
                </svg>
            );
            break;
        case 'flex-row-space-evenly':
            customSVG = (
                <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.68359 1C2.68359 0.447715 2.23588 0 1.68359 0C1.13131 0 0.683594 0.447715 0.683594 1V30.5C0.683594 31.0523 1.13131 31.5 1.68359 31.5C2.23588 31.5 2.68359 31.0523 2.68359 30.5V1ZM32.6836 1C32.6836 0.447715 32.2359 0 31.6836 0C31.1313 0 30.6836 0.447715 30.6836 1V30.5C30.6836 31.0523 31.1313 31.5 31.6836 31.5C32.2359 31.5 32.6836 31.0523 32.6836 30.5V1ZM8.68359 6L12.6836 6C13.2139 6.00053 13.7223 6.21141 14.0972 6.58637C14.4722 6.96133 14.6831 7.46973 14.6836 8L14.6836 23C14.6831 23.5303 14.4722 24.0387 14.0972 24.4136C13.7223 24.7886 13.2139 24.9995 12.6836 25H8.68359C8.15332 24.9995 7.64492 24.7886 7.26996 24.4136C6.89501 24.0387 6.68412 23.5303 6.68359 23L6.68359 8C6.68412 7.46973 6.89501 6.96133 7.26996 6.58637C7.64492 6.21141 8.15332 6.00053 8.68359 6ZM8.68359 8L8.68359 23H12.6836L12.6846 8L8.68359 8ZM24.6836 6L20.6836 6C20.1533 6.00053 19.6449 6.21141 19.27 6.58637C18.895 6.96133 18.6841 7.46973 18.6836 8V23C18.6841 23.5303 18.895 24.0387 19.27 24.4136C19.6449 24.7886 20.1533 24.9995 20.6836 25H24.6836C25.2139 24.9995 25.7223 24.7886 26.0972 24.4136C26.4722 24.0387 26.6831 23.5303 26.6836 23V8C26.6831 7.46973 26.4722 6.96133 26.0972 6.58637C25.7223 6.21141 25.2139 6.00053 24.6836 6ZM20.6836 23V8L24.6846 8L24.6836 23H20.6836Z"/>
                </svg>
            );
            break;
        case 'flex-column-start':
            customSVG = (
                <svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.4336 2.75C31.9859 2.75 32.4336 2.30228 32.4336 1.75C32.4336 1.19772 31.9859 0.75 31.4336 0.75H1.93359C1.38131 0.75 0.933594 1.19771 0.933594 1.75C0.933594 2.30228 1.38131 2.75 1.93359 2.75L31.4336 2.75ZM31.4336 32.75C31.9859 32.75 32.4336 32.3023 32.4336 31.75C32.4336 31.1977 31.9859 30.75 31.4336 30.75L1.93359 30.75C1.38131 30.75 0.933594 31.1977 0.933594 31.75C0.933594 32.3023 1.38131 32.75 1.93359 32.75L31.4336 32.75ZM26.4336 5.75V9.75C26.4331 10.2803 26.2222 10.7887 25.8472 11.1636C25.4723 11.5386 24.9639 11.7495 24.4336 11.75L9.43359 11.75C8.90332 11.7495 8.39492 11.5386 8.01996 11.1636C7.64501 10.7887 7.43412 10.2803 7.43359 9.75L7.43359 5.75C7.43412 5.21973 7.64501 4.71133 8.01996 4.33637C8.39492 3.96141 8.90332 3.75053 9.43359 3.75L24.4336 3.75C24.9639 3.75053 25.4723 3.96141 25.8472 4.33637C26.2222 4.71133 26.4331 5.21973 26.4336 5.75ZM24.4336 5.75L9.43359 5.75L9.43359 9.75L24.4336 9.751V5.75ZM26.4336 18.75V14.75C26.4331 14.2197 26.2222 13.7113 25.8472 13.3364C25.4723 12.9614 24.9639 12.7505 24.4336 12.75L9.43359 12.75C8.90332 12.7505 8.39492 12.9614 8.01996 13.3364C7.64501 13.7113 7.43412 14.2197 7.43359 14.75L7.43359 18.75C7.43412 19.2803 7.64501 19.7887 8.01996 20.1636C8.39492 20.5386 8.90332 20.7495 9.43359 20.75L24.4336 20.75C24.9639 20.7495 25.4723 20.5386 25.8472 20.1636C26.2222 19.7887 26.4331 19.2803 26.4336 18.75ZM9.43359 14.75L24.4336 14.75V18.751L9.43359 18.75L9.43359 14.75Z"/>
                </svg>
            );
            break;
        case 'flex-column-end':
            customSVG = (
                <svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.4336 2.75C31.9859 2.75 32.4336 2.30228 32.4336 1.75C32.4336 1.19772 31.9859 0.75 31.4336 0.75H1.93359C1.38131 0.75 0.933594 1.19771 0.933594 1.75C0.933594 2.30228 1.38131 2.75 1.93359 2.75L31.4336 2.75ZM31.4336 32.75C31.9859 32.75 32.4336 32.3023 32.4336 31.75C32.4336 31.1977 31.9859 30.75 31.4336 30.75L1.93359 30.75C1.38131 30.75 0.933594 31.1977 0.933594 31.75C0.933594 32.3023 1.38131 32.75 1.93359 32.75L31.4336 32.75ZM26.4336 14.75V18.75C26.4331 19.2803 26.2222 19.7887 25.8472 20.1636C25.4723 20.5386 24.9639 20.7495 24.4336 20.75L9.43359 20.75C8.90332 20.7495 8.39492 20.5386 8.01996 20.1636C7.64501 19.7887 7.43412 19.2803 7.43359 18.75L7.43359 14.75C7.43412 14.2197 7.64501 13.7113 8.01996 13.3364C8.39492 12.9614 8.90332 12.7505 9.43359 12.75L24.4336 12.75C24.9639 12.7505 25.4723 12.9614 25.8472 13.3364C26.2222 13.7113 26.4331 14.2197 26.4336 14.75ZM24.4336 14.75L9.43359 14.75L9.43359 18.75L24.4336 18.751V14.75ZM26.4336 27.75V23.75C26.4331 23.2197 26.2222 22.7113 25.8472 22.3364C25.4723 21.9614 24.9639 21.7505 24.4336 21.75L9.43359 21.75C8.90332 21.7505 8.39492 21.9614 8.01996 22.3364C7.64501 22.7113 7.43412 23.2197 7.43359 23.75L7.43359 27.75C7.43412 28.2803 7.64501 28.7887 8.01996 29.1636C8.39492 29.5386 8.90332 29.7495 9.43359 29.75L24.4336 29.75C24.9639 29.7495 25.4723 29.5386 25.8472 29.1636C26.2222 28.7887 26.4331 28.2803 26.4336 27.75ZM9.43359 23.75L24.4336 23.75V27.751L9.43359 27.75L9.43359 23.75Z"/>
                </svg>
            );
            break;
        case 'flex-column-center':
            customSVG = (
                <svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.4336 2.75C31.9859 2.75 32.4336 2.30228 32.4336 1.75C32.4336 1.19772 31.9859 0.75 31.4336 0.75H1.93359C1.38131 0.75 0.933594 1.19771 0.933594 1.75C0.933594 2.30228 1.38131 2.75 1.93359 2.75L31.4336 2.75ZM31.4336 32.75C31.9859 32.75 32.4336 32.3023 32.4336 31.75C32.4336 31.1977 31.9859 30.75 31.4336 30.75L1.93359 30.75C1.38131 30.75 0.933594 31.1977 0.933594 31.75C0.933594 32.3023 1.38131 32.75 1.93359 32.75L31.4336 32.75ZM26.4336 9.75V13.75C26.4331 14.2803 26.2222 14.7887 25.8472 15.1636C25.4723 15.5386 24.9639 15.7495 24.4336 15.75L9.43359 15.75C8.90332 15.7495 8.39492 15.5386 8.01996 15.1636C7.64501 14.7887 7.43412 14.2803 7.43359 13.75L7.43359 9.75C7.43412 9.21973 7.64501 8.71133 8.01996 8.33637C8.39492 7.96141 8.90332 7.75053 9.43359 7.75L24.4336 7.75C24.9639 7.75053 25.4723 7.96141 25.8472 8.33637C26.2222 8.71133 26.4331 9.21973 26.4336 9.75ZM24.4336 9.75L9.43359 9.75L9.43359 13.75L24.4336 13.751V9.75ZM26.4336 23.75V19.75C26.4331 19.2197 26.2222 18.7113 25.8472 18.3364C25.4723 17.9614 24.9639 17.7505 24.4336 17.75L9.43359 17.75C8.90332 17.7505 8.39492 17.9614 8.01996 18.3364C7.64501 18.7113 7.43412 19.2197 7.43359 19.75V23.75C7.43412 24.2803 7.64501 24.7887 8.01996 25.1636C8.39492 25.5386 8.90332 25.7495 9.43359 25.75L24.4336 25.75C24.9639 25.7495 25.4723 25.5386 25.8472 25.1636C26.2222 24.7887 26.4331 24.2803 26.4336 23.75ZM9.43359 19.75L24.4336 19.75V23.751L9.43359 23.75L9.43359 19.75Z"/>
                </svg>
            );
            break;
        case 'flex-column-strech':
            customSVG = (
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.5 2C31.0523 2 31.5 1.55228 31.5 1C31.5 0.447715 31.0523 0 30.5 0H1C0.447716 0 0 0.447714 0 0.999999C0 1.55228 0.447716 2 1 2L30.5 2ZM30.5 32C31.0523 32 31.5 31.5523 31.5 31C31.5 30.4477 31.0523 30 30.5 30L1 30C0.447716 30 0 30.4477 0 31C0 31.5523 0.447716 32 1 32L30.5 32ZM25.5 5.00018V12.999C25.4995 13.5293 25.2886 14.0377 24.9136 14.4126C24.5387 14.7876 24.0303 14.9985 23.5 14.999L8.5 14.999C7.96973 14.9985 7.46133 14.7876 7.08637 14.4126C6.71141 14.0377 6.50053 13.5293 6.5 12.999L6.5 5.00017C6.50053 4.4699 6.71141 3.9615 7.08637 3.58654C7.46133 3.21159 7.96973 3.0007 8.5 3.00017L23.5 3.00018C24.0303 3.0007 24.5387 3.21159 24.9136 3.58655C25.2886 3.9615 25.4995 4.4699 25.5 5.00018ZM23.5 5.00018L8.5 5.00017L8.5 12.999L23.5 13V5.00018ZM25.5 26.9987V18.9999C25.4995 18.4697 25.2886 17.9613 24.9136 17.5863C24.5387 17.2113 24.0303 17.0005 23.5 16.9999L8.5 16.9999C7.96973 17.0005 7.46133 17.2113 7.08637 17.5863C6.71141 17.9613 6.50053 18.4697 6.5 18.9999L6.5 26.9987C6.50053 27.529 6.71141 28.0374 7.08637 28.4124C7.46133 28.7873 7.96973 28.9982 8.5 28.9987L23.5 28.9987C24.0303 28.9982 24.5387 28.7873 24.9136 28.4124C25.2886 28.0374 25.4995 27.529 25.5 26.9987ZM8.5 18.9999L23.5 18.9999V26.9997L8.5 26.9987L8.5 18.9999Z"/>
                </svg>
            );
            break;
        case 'flex-column-space-between':
            customSVG = (
                <svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.4336 2.75C31.9859 2.75 32.4336 2.30228 32.4336 1.75C32.4336 1.19772 31.9859 0.75 31.4336 0.75H1.93359C1.38131 0.75 0.933594 1.19771 0.933594 1.75C0.933594 2.30228 1.38131 2.75 1.93359 2.75L31.4336 2.75ZM31.4336 32.75C31.9859 32.75 32.4336 32.3023 32.4336 31.75C32.4336 31.1977 31.9859 30.75 31.4336 30.75L1.93359 30.75C1.38131 30.75 0.933594 31.1977 0.933594 31.75C0.933594 32.3023 1.38131 32.75 1.93359 32.75L31.4336 32.75ZM26.4336 5.75V9.75C26.4331 10.2803 26.2222 10.7887 25.8472 11.1636C25.4723 11.5386 24.9639 11.7495 24.4336 11.75L9.43359 11.75C8.90332 11.7495 8.39492 11.5386 8.01996 11.1636C7.64501 10.7887 7.43412 10.2803 7.43359 9.75L7.43359 5.75C7.43412 5.21973 7.64501 4.71133 8.01996 4.33637C8.39492 3.96141 8.90332 3.75053 9.43359 3.75L24.4336 3.75C24.9639 3.75053 25.4723 3.96141 25.8472 4.33637C26.2222 4.71133 26.4331 5.21973 26.4336 5.75ZM24.4336 5.75L9.43359 5.75L9.43359 9.75L24.4336 9.751V5.75ZM26.4336 27.75V23.75C26.4331 23.2197 26.2222 22.7113 25.8472 22.3364C25.4723 21.9614 24.9639 21.7505 24.4336 21.75L9.43359 21.75C8.90332 21.7505 8.39492 21.9614 8.01996 22.3364C7.64501 22.7113 7.43412 23.2197 7.43359 23.75L7.43359 27.75C7.43412 28.2803 7.64501 28.7887 8.01996 29.1636C8.39492 29.5386 8.90332 29.7495 9.43359 29.75L24.4336 29.75C24.9639 29.7495 25.4723 29.5386 25.8472 29.1636C26.2222 28.7887 26.4331 28.2803 26.4336 27.75ZM9.43359 23.75L24.4336 23.75V27.751L9.43359 27.75L9.43359 23.75Z"/>
                </svg>
            );
            break;
        case 'flex-column-space-around':
            customSVG = (
                <svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.4336 2.75C31.9859 2.75 32.4336 2.30228 32.4336 1.75C32.4336 1.19772 31.9859 0.75 31.4336 0.75H1.93359C1.38131 0.75 0.933594 1.19771 0.933594 1.75C0.933594 2.30228 1.38131 2.75 1.93359 2.75L31.4336 2.75ZM31.4336 32.75C31.9859 32.75 32.4336 32.3023 32.4336 31.75C32.4336 31.1977 31.9859 30.75 31.4336 30.75L1.93359 30.75C1.38131 30.75 0.933594 31.1977 0.933594 31.75C0.933594 32.3023 1.38131 32.75 1.93359 32.75L31.4336 32.75ZM26.4336 7.75V11.75C26.4331 12.2803 26.2222 12.7887 25.8472 13.1636C25.4723 13.5386 24.9639 13.7495 24.4336 13.75L9.43359 13.75C8.90332 13.7495 8.39492 13.5386 8.01996 13.1636C7.64501 12.7887 7.43412 12.2803 7.43359 11.75L7.43359 7.75C7.43412 7.21973 7.64501 6.71133 8.01996 6.33637C8.39492 5.96141 8.90332 5.75053 9.43359 5.75L24.4336 5.75C24.9639 5.75053 25.4723 5.96141 25.8472 6.33637C26.2222 6.71133 26.4331 7.21973 26.4336 7.75ZM24.4336 7.75L9.43359 7.75L9.43359 11.75L24.4336 11.751V7.75ZM26.4336 25.75V21.75C26.4331 21.2197 26.2222 20.7113 25.8472 20.3364C25.4723 19.9614 24.9639 19.7505 24.4336 19.75L9.43359 19.75C8.90332 19.7505 8.39492 19.9614 8.01996 20.3364C7.64501 20.7113 7.43412 21.2197 7.43359 21.75L7.43359 25.75C7.43412 26.2803 7.64501 26.7887 8.01996 27.1636C8.39492 27.5386 8.90332 27.7495 9.43359 27.75L24.4336 27.75C24.9639 27.7495 25.4723 27.5386 25.8472 27.1636C26.2222 26.7887 26.4331 26.2803 26.4336 25.75ZM9.43359 21.75L24.4336 21.75V25.751L9.43359 25.75L9.43359 21.75Z"/>
                </svg>
            );
            break;
        case 'flex-column-space-evenly':
            customSVG = (
                <svg viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.4336 2.75C31.9859 2.75 32.4336 2.30228 32.4336 1.75C32.4336 1.19772 31.9859 0.75 31.4336 0.75H1.93359C1.38131 0.75 0.933594 1.19771 0.933594 1.75C0.933594 2.30228 1.38131 2.75 1.93359 2.75L31.4336 2.75ZM31.4336 32.75C31.9859 32.75 32.4336 32.3023 32.4336 31.75C32.4336 31.1977 31.9859 30.75 31.4336 30.75L1.93359 30.75C1.38131 30.75 0.933594 31.1977 0.933594 31.75C0.933594 32.3023 1.38131 32.75 1.93359 32.75L31.4336 32.75ZM26.4336 8.75V12.75C26.4331 13.2803 26.2222 13.7887 25.8472 14.1636C25.4723 14.5386 24.9639 14.7495 24.4336 14.75L9.43359 14.75C8.90332 14.7495 8.39492 14.5386 8.01996 14.1636C7.64501 13.7887 7.43412 13.2803 7.43359 12.75L7.43359 8.75C7.43412 8.21973 7.64501 7.71133 8.01996 7.33637C8.39492 6.96141 8.90332 6.75053 9.43359 6.75L24.4336 6.75C24.9639 6.75053 25.4723 6.96141 25.8472 7.33637C26.2222 7.71133 26.4331 8.21973 26.4336 8.75ZM24.4336 8.75L9.43359 8.75L9.43359 12.75L24.4336 12.751V8.75ZM26.4336 24.75V20.75C26.4331 20.2197 26.2222 19.7113 25.8472 19.3364C25.4723 18.9614 24.9639 18.7505 24.4336 18.75L9.43359 18.75C8.90332 18.7505 8.39492 18.9614 8.01996 19.3364C7.64501 19.7113 7.43412 20.2197 7.43359 20.75L7.43359 24.75C7.43412 25.2803 7.64501 25.7887 8.01996 26.1636C8.39492 26.5386 8.90332 26.7495 9.43359 26.75L24.4336 26.75C24.9639 26.7495 25.4723 26.5386 25.8472 26.1636C26.2222 25.7887 26.4331 25.2803 26.4336 24.75ZM9.43359 20.75L24.4336 20.75V24.751L9.43359 24.75L9.43359 20.75Z"/>
                </svg>
            );
            break;
        case 'flex-direction-row':
            customSVG = (
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 1.01587C2 0.454822 1.55228 0 1 0C0.447715 0 0 0.454822 0 1.01587V30.9841C0 31.5452 0.447715 32 1 32C1.55228 32 2 31.5452 2 30.9841V1.01587ZM32 1.01587C32 0.454822 31.5523 0 31 0C30.4477 0 30 0.454822 30 1.01587V30.9841C30 31.5452 30.4477 32 31 32C31.5523 32 32 31.5452 32 30.9841V1.01587ZM23.0355 5.29289L26.6213 8.87864C27.0118 9.26916 27.0118 9.90233 26.6213 10.2929L23.0355 13.8786C22.645 14.2691 22.0118 14.2691 21.6213 13.8786C21.2308 13.4881 21.2308 12.8549 21.6213 12.4644L23.5 10.5857H6C5.44772 10.5857 5 10.138 5 9.58574C5 9.03346 5.44772 8.58574 6 8.58574H23.5L21.6213 6.70711C21.2308 6.31658 21.2308 5.68342 21.6213 5.29289C22.0118 4.90237 22.645 4.90237 23.0355 5.29289ZM26.6213 21.5L23.0355 17.9143C22.645 17.5238 22.0118 17.5238 21.6213 17.9143C21.2308 18.3048 21.2308 18.938 21.6213 19.3285L23.5 21.2071H6C5.44771 21.2071 5 21.6548 5 22.2071C5 22.7594 5.44771 23.2071 6 23.2071H23.5L21.6213 25.0858C21.2308 25.4763 21.2308 26.1095 21.6213 26.5C22.0118 26.8905 22.645 26.8905 23.0355 26.5L26.6213 22.9142C27.0118 22.5237 27.0118 21.8905 26.6213 21.5Z"/>
                </svg>

            );
            break;
        case 'flex-direction-column':
            customSVG = (
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M30.9841 2C31.5452 2 32 1.55228 32 1C32 0.447715 31.5452 -1.98809e-08 30.9841 -4.44052e-08L1.01587 -1.35436e-06C0.454821 -1.37888e-06 -1.95703e-08 0.447714 -4.37114e-08 0.999999C-6.78525e-08 1.55228 0.454821 2 1.01587 2L30.9841 2ZM30.9841 32C31.5452 32 32 31.5523 32 31C32 30.4477 31.5452 30 30.9841 30L1.01587 30C0.454819 30 -1.33091e-06 30.4477 -1.35505e-06 31C-1.37919e-06 31.5523 0.454819 32 1.01587 32L30.9841 32ZM26.7071 23.0355L23.1214 26.6213C22.7308 27.0118 22.0977 27.0118 21.7071 26.6213L18.1214 23.0355C17.7309 22.645 17.7309 22.0118 18.1214 21.6213C18.5119 21.2308 19.1451 21.2308 19.5356 21.6213L21.4143 23.5L21.4143 6C21.4143 5.44771 21.862 5 22.4143 5C22.9665 5 23.4143 5.44771 23.4143 6L23.4143 23.5L25.2929 21.6213C25.6834 21.2308 26.3166 21.2308 26.7071 21.6213C27.0976 22.0118 27.0976 22.645 26.7071 23.0355ZM10.5 26.6213L14.0857 23.0355C14.4762 22.645 14.4762 22.0118 14.0857 21.6213C13.6952 21.2308 13.062 21.2308 12.6715 21.6213L10.7929 23.5L10.7929 6C10.7929 5.44771 10.3452 5 9.79287 5C9.24059 5 8.79287 5.44771 8.79287 6L8.79287 23.5L6.91422 21.6213C6.52369 21.2308 5.89053 21.2308 5.5 21.6213C5.10948 22.0118 5.10948 22.645 5.5 23.0355L9.08576 26.6213C9.47629 27.0118 10.1095 27.0118 10.5 26.6213Z"/>
                </svg>
            );
            break;
        case 'flex-direction-row-reverse':
            customSVG = (
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M30 30.9841C30 31.5452 30.4477 32 31 32C31.5523 32 32 31.5452 32 30.9841L32 1.01587C32 0.454821 31.5523 -3.91405e-08 31 -8.74228e-08C30.4477 -1.35705e-07 30 0.45482 30 1.01587L30 30.9841ZM8.88104e-08 30.9841C3.97618e-08 31.5452 0.447716 32 1 32C1.55228 32 2 31.5452 2 30.9841L2 1.01587C2 0.454818 1.55229 -2.66182e-06 1 -2.71011e-06C0.447719 -2.75839e-06 2.75777e-06 0.454818 2.70872e-06 1.01587L8.88104e-08 30.9841ZM8.96449 26.7071L5.37868 23.1214C4.98816 22.7308 4.98816 22.0977 5.37868 21.7071L8.96449 18.1214C9.35501 17.7309 9.98818 17.7309 10.3787 18.1214C10.7692 18.5119 10.7692 19.1451 10.3787 19.5356L8.5 21.4143L26 21.4143C26.5523 21.4143 27 21.862 27 22.4143C27 22.9665 26.5523 23.4143 26 23.4143L8.5 23.4143L10.3787 25.2929C10.7692 25.6834 10.7692 26.3166 10.3787 26.7071C9.98818 27.0976 9.35501 27.0976 8.96449 26.7071ZM5.37868 10.5L8.96449 14.0857C9.35502 14.4762 9.98818 14.4762 10.3787 14.0857C10.7692 13.6952 10.7692 13.062 10.3787 12.6715L8.5 10.7929L26 10.7929C26.5523 10.7929 27 10.3452 27 9.79287C27 9.24059 26.5523 8.79287 26 8.79287L8.5 8.79287L10.3787 6.91422C10.7692 6.52369 10.7692 5.89053 10.3787 5.5C9.98818 5.10948 9.35502 5.10948 8.96449 5.5L5.37868 9.08576C4.98816 9.47629 4.98816 10.1095 5.37868 10.5Z"/>
                </svg>
            );
            break;
        case 'flex-direction-column-reverse':
            customSVG = (
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.01587 30C0.454822 30 -6.78525e-08 30.4477 -4.37113e-08 31C-1.95702e-08 31.5523 0.454822 32 1.01587 32L30.9841 32C31.5452 32 32 31.5523 32 31C32 30.4477 31.5452 30 30.9841 30L1.01587 30ZM1.01587 -4.44052e-08C0.45482 -1.98809e-08 -1.37919e-06 0.447716 -1.35505e-06 1C-1.33091e-06 1.55228 0.454821 2 1.01587 2L30.9841 2C31.5452 2 32 1.55228 32 0.999999C32 0.447714 31.5452 -1.37888e-06 30.9841 -1.35436e-06L1.01587 -4.44052e-08ZM5.29289 8.96449L8.87863 5.37868C9.26916 4.98815 9.90233 4.98815 10.2928 5.37868L13.8786 8.96449C14.2691 9.35501 14.2691 9.98818 13.8786 10.3787C13.4881 10.7692 12.8549 10.7692 12.4644 10.3787L10.5857 8.5L10.5857 26C10.5857 26.5523 10.138 27 9.58574 27C9.03346 27 8.58574 26.5523 8.58574 26L8.58574 8.5L6.70711 10.3787C6.31658 10.7692 5.68342 10.7692 5.29289 10.3787C4.90237 9.98818 4.90237 9.35501 5.29289 8.96449ZM21.5 5.37868L17.9143 8.96449C17.5238 9.35501 17.5238 9.98818 17.9143 10.3787C18.3048 10.7692 18.938 10.7692 19.3285 10.3787L21.2071 8.5L21.2071 26C21.2071 26.5523 21.6548 27 22.2071 27C22.7594 27 23.2071 26.5523 23.2071 26L23.2071 8.5L25.0858 10.3787C25.4763 10.7692 26.1095 10.7692 26.5 10.3787C26.8905 9.98818 26.8905 9.35501 26.5 8.96449L22.9142 5.37868C22.5237 4.98815 21.8905 4.98815 21.5 5.37868Z"/>
                </svg>

            );
            break;
        case 'flex-wrap':
            customSVG = (
                <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33984 0C1.89213 0 2.33984 0.447715 2.33984 1V30.5C2.33984 31.0523 1.89213 31.5 1.33984 31.5C0.787559 31.5 0.339844 31.0523 0.339844 30.5V1C0.339844 0.447715 0.787559 0 1.33984 0Z"/>
                    <path d="M31.3398 0C31.8921 0 32.3398 0.447715 32.3398 1V30.5C32.3398 31.0523 31.8921 31.5 31.3398 31.5C30.7876 31.5 30.3398 31.0523 30.3398 30.5V1C30.3398 0.447715 30.7876 0 31.3398 0Z"/>
                    <path d="M27.3398 5C27.8921 5 28.3398 5.44772 28.3398 6V22C28.3398 22.0022 28.3398 22.0043 28.3398 22.0065C28.3363 22.5558 27.89 23 27.3398 23L10.8398 23L12.7185 24.8786C13.1091 25.2692 13.1091 25.9023 12.7185 26.2929C12.328 26.6834 11.6949 26.6834 11.3043 26.2929L7.71852 22.7071C7.328 22.3166 7.328 21.6834 7.71852 21.2929L11.3043 17.7071C11.6949 17.3166 12.328 17.3166 12.7185 17.7071C13.1091 18.0977 13.1091 18.7308 12.7185 19.1213L10.8398 21L26.3398 21V7L5.33984 7C4.78756 7 4.33984 6.55228 4.33984 6C4.33984 5.44771 4.78756 5 5.33984 5H27.3398Z"/>
                </svg>
            );
            break;
        case 'flex-no-wrap':
            customSVG = (
                <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33984 0C1.89213 0 2.33984 0.447715 2.33984 1V30.5C2.33984 31.0523 1.89213 31.5 1.33984 31.5C0.787559 31.5 0.339844 31.0523 0.339844 30.5V1C0.339844 0.447715 0.787559 0 1.33984 0Z"/>
                    <path d="M31.3398 0C31.8921 0 32.3398 0.447715 32.3398 1V30.5C32.3398 31.0523 31.8921 31.5 31.3398 31.5C30.7876 31.5 30.3398 31.0523 30.3398 30.5V1C30.3398 0.447715 30.7876 0 31.3398 0Z"/>
                    <path d="M24.3754 11.2929L27.9612 14.8786C28.3517 15.2692 28.3517 15.9023 27.9612 16.2929L24.3754 19.8786C23.9848 20.2691 23.3517 20.2691 22.9611 19.8786C22.5706 19.4881 22.5706 18.8549 22.9611 18.4644L24.8398 16.5857L5.33984 16.5857C4.78756 16.5857 4.33984 16.138 4.33984 15.5857C4.33984 15.0334 4.78756 14.5857 5.33984 14.5857L24.8398 14.5857L22.9611 12.7071C22.5706 12.3166 22.5706 11.6834 22.9611 11.2929C23.3517 10.9024 23.9848 10.9024 24.3754 11.2929Z"/>
                </svg>
            );
            break;
        case 'flex-wrap-reverse':
            customSVG = (
                <svg viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33984 32C1.89213 32 2.33984 31.5452 2.33984 30.9841V1.01587C2.33984 0.454821 1.89213 0 1.33984 0C0.787559 0 0.339844 0.454821 0.339844 1.01587V30.9841C0.339844 31.5452 0.787559 32 1.33984 32Z"/>
                    <path d="M31.3398 32C31.8921 32 32.3398 31.5452 32.3398 30.9841V1.01587C32.3398 0.454821 31.8921 0 31.3398 0C30.7876 0 30.3398 0.454821 30.3398 1.01587V30.9841C30.3398 31.5452 30.7876 32 31.3398 32Z"/>
                    <path d="M27.3398 26.5C27.8921 26.5 28.3398 26.0523 28.3398 25.5V9.5C28.3398 9.49784 28.3398 9.49569 28.3398 9.49353C28.3363 8.94422 27.89 8.5 27.3398 8.5L10.8398 8.5L12.7185 6.62136C13.1091 6.23084 13.1091 5.59767 12.7185 5.20715C12.328 4.81663 11.6949 4.81663 11.3043 5.20715L7.71852 8.79289C7.328 9.18342 7.328 9.81658 7.71852 10.2071L11.3043 13.7929C11.6949 14.1834 12.328 14.1834 12.7185 13.7929C13.1091 13.4023 13.1091 12.7692 12.7185 12.3787L10.8398 10.5L26.3398 10.5V24.5H5.33984C4.78756 24.5 4.33984 24.9477 4.33984 25.5C4.33984 26.0523 4.78756 26.5 5.33984 26.5H27.3398Z"/>
                </svg>

            );
            break;
        }

        return customSVG;
}

export default renderCustomIcon;