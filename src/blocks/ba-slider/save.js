/**
 * BLOCK: Image Comparison Slider / Before-After Slider
 */

// Import block dependencies and components.
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import UAGB_BA_Slider_Icons from './assets/uagb-ba-slider-handle-svgs';

export default function save( props ) {

	const { className, clientId, attributes} = props;

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
	} = props.attributes;

	const beforePlaceholder = `${window?.uagb_blocks_info?.uagb_url}assets/images/ba-slider-placeholder-before-image.jpeg`;
    const afterPlaceholder = `${window?.uagb_blocks_info?.uagb_url}assets/images/ba-slider-placeholder-after-image.jpeg`;

	return(
		<div
            className={ classnames(
                className,
                `uagb-block-${ block_id }`,
                'uagb-ba-slider',
            ) }
        >
            <img-comparison-slider
                className='uagb-ba-slider__img-comparison'
                direction={ sliderOrientation }
                value= { sliderPosition }
                hover= { hoverSlider ? 'hover' : false }
            >
                <figure slot="first" className="uagb-ba-slider__figure-before">
                    <img
                        slot="first"
                        src={ beforeImage ? beforeImage.url : beforePlaceholder }
                        alt={ beforeImage ? beforeImage.alt : '' }
                        className="uagb-ba-slider__image-before"
                    />
                    { showLabels &&
                        <figcaption className="uagb-ba-slider__label-before">
                            {beforeLabel}
                        </figcaption>
                    }
                </figure>
                <figure slot="second" className="uagb-ba-slider__figure-after">
                    <img
                        slot="second"
                        src={ afterImage ? afterImage.url : afterPlaceholder }
                        alt={ afterImage ? afterImage.alt : '' }
                        className="uagb-ba-slider__image-after"
                    />
                    { showLabels &&
                        <figcaption className="uagb-ba-slider__label-after">
                            {afterLabel}
                        </figcaption>
                    }
                </figure>
                { UAGB_BA_Slider_Icons.arrows1 }
            </img-comparison-slider>
        </div>
	);
}
