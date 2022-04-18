import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import React, { useLayoutEffect, useMemo, useEffect, useState } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

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

    const beforePlaceholder = `${window?.uagb_blocks_info?.uagb_url}assets/images/ba-slider-placeholder-before-image.jpeg`;
    const afterPlaceholder = `${window?.uagb_blocks_info?.uagb_url}assets/images/ba-slider-placeholder-after-image.jpeg`;

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
                <figure slot="first">
                    <img
                        slot="first"
                        src={ beforeImage ? beforeImage.url : beforePlaceholder }
                        alt={ beforeImage ? beforeImage.alt : '' }
                    />
                    <figcaption>{beforeLabel}</figcaption>
                </figure>
                <figure slot="second">
                    <img
                        slot="second"
                        src={ afterImage ? afterImage.url : afterPlaceholder }
                        alt={ afterImage ? afterImage.alt : '' }
                    />
                    <figcaption>{afterLabel}</figcaption>
                </figure>
            </ImgComparisonSlider>
        </div>
    );
}

export default React.memo( Render );
