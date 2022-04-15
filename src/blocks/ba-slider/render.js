import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import React, { useLayoutEffect, useMemo, useEffect, useState } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
// import BeforeImagePlaceholder from '../../../assets/images/ba-slider-placeholder-before-image.jpeg';
// import AfterImagePlaceholder from '../../../assets/images/ba-slider-placeholder-after-image.jpeg';

const Render = ( props ) => {

    props = props.parentProps;
	const deviceType = useDeviceType();
	const { className, clientId, attributes, setAttributes } = props;

    const {
        block_id,
        classMigrate,
        beforeImage,
        afterImage,
        showLabels,
        beforeLabel,
        afterLabel,
        sliderOrientation,
        sliderPosition,
        animateSlider,
        hoverSlider,
    } = attributes;

    return(
        <div
            className={ classnames(
                className,
                `uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
                `uagb-block-${ block_id }`
            ) }
        >
            <ImgComparisonSlider
                direction={ sliderOrientation }
                value= { sliderPosition }
            >
                <img
                    slot="first"
                    src={ beforeImage ? beforeImage.url : 'Placeholder' }
                    alt={ beforeImage ? beforeImage.alt : '' }
                />
                <img
                    slot="second"
                    src={ afterImage ? afterImage.url : 'Placeholder' }
                    alt={ afterImage ? afterImage.alt : '' }
                />
            </ImgComparisonSlider>
        </div>
    );
}

export default React.memo( Render );
