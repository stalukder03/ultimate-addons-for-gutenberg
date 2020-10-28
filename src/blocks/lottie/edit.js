/**
 * BLOCK: Lottie Edit
 */

import classnames from "classnames"
import UAGBIcon from "../../../dist/blocks/uagb-controls/UAGBIcon.json"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import styling from "./styling"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"


import Lottie from 'react-lottie';

const { __ } = wp.i18n

const {
	InspectorControls,
	MediaUpload,
    ColorPalette,
    MediaUploadCheck
} = wp.blockEditor

const {
    PanelBody,
	RangeControl,
	Button,
	TextControl,
    ToggleControl,
} = wp.components

const { Component, Fragment } = wp.element


class UAGBLottie extends Component {

    constructor() {
        super( ...arguments )
        this.lottieplayer = React.createRef();
        this.state = {  direction: 1,  loopState: true,};
        this.onSelectLottieJSON    = this.onSelectLottieJSON.bind( this )
        this.reverseDirection    = this.reverseDirection.bind( this )
        this.loopLottie    = this.loopLottie.bind( this )
        
        
        
        
	}
    
    componentDidMount() {
        
        // Assigning block_id in the attribute.
        this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
        this.props.setAttributes( { classMigrate: true } )
        
        // Pushing Style tag for this block css.
        const $style = document.createElement( "style" )
        $style.setAttribute( "id", "uagb-lottie-style-" + this.props.clientId.substr( 0, 8 ) )
        document.head.appendChild( $style )
        
    }
    
    componentDidUpdate(prevProps, prevState) {
        var element = document.getElementById( "uagb-lottie-style-" + this.props.clientId.substr( 0, 8 ) )

        if( null !== element && undefined !== element ) {
            element.innerHTML = styling( this.props )
        }
    }

    onSelectLottieJSON( media ) {

        const { setAttributes } = this.props
        
		if ( ! media || ! media.url ) {
			setAttributes( { jsonLottie: null } )
			return
		}
		
        setAttributes( { jsonLottie: media } )
		setAttributes( { lottieURl: media.url } )      
		
    }
    
    

    loopLottie() {
        const { setAttributes } = this.props
        const { loop } = this.props.attributes  
        const { loopState } = this.state

        setAttributes( { loop: ! loop } )
		this.setState({ loopState :! loopState});
		
    }

    reverseDirection() {
        const { setAttributes } = this.props
        const { reverse } = this.props.attributes  
        const { direction } = this.state

        setAttributes( { reverse: ! reverse } )
		this.setState({ direction : direction * -1 });
		
    }

    
      
    render() {
        const { className, setAttributes, attributes } = this.props
        
        const {
            height,
            width,
            backgroundColor,
            loop,            
            speed,
            reverse,
            playOnHover,
            jsonLottie,
            lottieURl,
            
        } = attributes

       
        const controlsSettings = (
            <PanelBody
                title={ __( "Controls" ) }
                initialOpen={ false }>
                <ToggleControl
                    label={ __( "Loop" ) }
                    checked={ loop }
                    onChange={ this.loopLottie }
                    help={ __( 'Enable to loop animation.' ) }
                    />
                
                <RangeControl
                    label={ __( "Speed" ) }
                    value={ speed }
                    onChange={ ( value ) => setAttributes( { speed: value } ) }
                    min={ 1 }
                    max={ 50 }
                    help={ __( 'Animation speed.' ) }
                    allowReset
                    />
                 <ToggleControl
                    label={ __( "Reverse" ) }
                    checked={ reverse }
                    onChange={this.reverseDirection}
                    help={ __( 'Direction of animation.' ) }
                    />
                <ToggleControl
                    label={ __( "Play on Hover" ) }
                    checked={ playOnHover }
                    onChange={ ( value ) => setAttributes( { playOnHover: ! playOnHover } ) }
                    />                
            </PanelBody>
        )
        
        const styleSettings = (
            <PanelBody
            title={ __( "Style" ) }
            initialOpen={ false }>
                <RangeControl
                    label={ __( "Width" ) }
                    value={ width }
                    onChange={ ( value ) => setAttributes( { width: value } ) }
                    min={ 0 }
                    max={ 1000 }
                    allowReset
                    />
                <RangeControl
                    label={ __( "Height" ) }
                    value={ height }
                    onChange={ ( value ) => setAttributes( { height: value } ) }
                    min={ 0 }
                    max={ 1000 }
                    allowReset
                    />
                <p className="uagb-setting-label">{ __( "Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: backgroundColor }} ></span></span></p>
                <ColorPalette
                    value={ backgroundColor }
                    onChange={ ( value ) => setAttributes( { backgroundColor: value } ) }
                    allowReset
                    />
            </PanelBody>
        )

        //Check if given url is valid or not for json extension.
        var validJsonPath = 'invalid';
        if( lottieURl && lottieURl.endsWith('.json') ){
             validJsonPath = 'valid' 
        }       

        if ( validJsonPath === 'invalid' ) {
            return (
                <Fragment>
				<div className="uagb-lottie_upload_wrap">
                    <h3 className="uagb-lottie-upload-heading">  {__( "Lottie" ) } </h3>
                <MediaUploadCheck>
                    <MediaUpload
                        title={ __( "Upload" ) }
                        onSelect={ this.onSelectLottieJSON }
                        allowedTypes={ [ "application/json" ] }
                        value={ jsonLottie }
                        render={ ( { open } ) => (
                            <Button isDefault onClick={ open }>
                                {__( "Upload JSON" ) }
                            </Button>
                        ) }
                    />
                </MediaUploadCheck>                
                <p className="components-base-control__label">{__( "OR" )}</p>
                <TextControl
                    className="uagb-lottie-url-input"
                    value={ lottieURl }
                    onChange={ ( value ) => setAttributes( { lottieURl: value } ) }
                    placeholder={__( "Enter URL" )}
                />
                </div>
				</Fragment>
			)
        }
       
       
        const handleLottieMouseEnter = () => {  
            this.lottieplayer.current.anim.play();
        };

        const handleLottieMouseLeave = () => {
            this.lottieplayer.current.anim.stop();
        };

        const reversedir = (reverse) ? -1 : 1
        
        return (
            <Fragment>
                
                <InspectorControls>
                    { controlsSettings }
                    { styleSettings }
                </InspectorControls>
                
                <div
                className={ classnames(
                    className,
                    "uagb-lottie__outer-wrap",
                    `uagb-block-${this.props.clientId.substr( 0, 8 )}`
                ) }
                onMouseEnter={ playOnHover ? handleLottieMouseEnter : ()=> null }
                onMouseLeave={ playOnHover ? handleLottieMouseLeave : ()=> null } >
                    <Lottie 
                        ref={this.lottieplayer}
                        options={{                            
                            loop: loop,
                            path: lottieURl,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid',
                                className:"uagb-lottie-inner-wrap"
                            }
                        }}
                        isStopped={playOnHover}                        
                        height={height}
                        width={width}
                        speed={speed}
                        isClickToPauseDisabled = {true}
                        direction={`${reversedir}`}
                        style={{backgroundColor:backgroundColor}}                       
                    />
                </div>
            </Fragment>
        );
    }
}

export default UAGBLottie
