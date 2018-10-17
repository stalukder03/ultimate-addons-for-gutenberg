/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function contentTimelineStyle( props ) {
	const {
		dateBottomspace,
		backgroundColor,
		separatorColor,
		separatorFillColor,
		separatorBg,
		separatorBorder,
		borderFocus,            
		verticalSpace,
		horizontalSpace,
		separatorwidth,
		borderwidth,
		connectorBgsize,
		borderRadius,
		bgPadding,
		width,
		readMoreText,
		icon,
		iconColor,
		authorColor,
		dateFontsize,
		dateColor,
		iconSize,
		iconFocus,
		iconBgFocus,
		tm_client_id,
		iconHover,
		iconBgHover,
		borderHover
	} = props.attributes        

	if( props.clientId ){
		var clientId = "uagb-"+props.clientId
	}else{
		var clientId = "uagb-"+tm_client_id
	}

	var selectors = {}

	selectors[".uagb-timeline--center .uagb-day-right .uagb-timeline-arrow:after"] = {
		"border-left-color" : backgroundColor,
	}

	selectors[".uagb-timeline--right .uagb-day-right .uagb-timeline-arrow:after"] = {
		"border-left-color" : backgroundColor
	}

	selectors[".uagb-timeline--center .uagb-day-left .uagb-timeline-arrow:after"] = {
		"border-right-color" : backgroundColor
	}

	selectors[".uagb-timeline--left .uagb-day-left .uagb-timeline-arrow:after"] = {
		"border-right-color" : backgroundColor
	}

	selectors[".uagb-timeline__line__inner"] = {
		"background-color" : separatorFillColor
	}

	selectors[".uagb-timeline__line"] = {
		"background-color" : separatorColor,
		"width" : separatorwidth+"px",
	}

	selectors[".uagb-timeline--right .uagb-timeline__line"] = {
		"right" : "calc( "+connectorBgsize+"px / 2 )",
	}

	selectors[".uagb-timeline--left .uagb-timeline__line"] = {
		"left" : "calc( "+connectorBgsize+"px / 2 )",
	}

	selectors[".uagb-timeline--center .uagb-timeline__line"] = {
		"right" : "calc( "+connectorBgsize+"px / 2 )",
	}

	selectors[".uagb-timeline-marker"] = {
		"background-color" : separatorBg,
		"min-height": connectorBgsize+"px",
		"min-width" : connectorBgsize+"px",
		"line-height" : connectorBgsize+"px",
		"border": borderwidth+"px solid"+separatorBorder,
	}

	selectors[".uagb-timeline--left .uagb-timeline-left .uagb-timeline-arrow"] = {
		"height" : connectorBgsize+"px",
	}

	selectors[".uagb-timeline--right .uagb-timeline-right .uagb-timeline-arrow"] = {
		"height" : connectorBgsize+"px",
	}

	selectors[".uagb-timeline--center .uagb-timeline-left .uagb-timeline-arrow"] = {
		"height" : connectorBgsize+"px",
	}

	selectors[".uagb-timeline--center .uagb-timeline-right .uagb-timeline-arrow"] = {
		"height" : connectorBgsize+"px",
	}

	selectors[".uagb-timeline--center .uagb-timeline-marker"] = {
		"margin-left" : horizontalSpace+"px",
		"margin-right": horizontalSpace+"px",
	}

	selectors[".uagb-timeline-field:not(:last-child)"] = {
		"margin-bottom" : verticalSpace+"px",
	}

	selectors[".uagb-timeline-date-hide.uagb-date-inner"] = {
		"margin-bottom" : dateBottomspace+"px",
		"color": dateColor,
		"font-size" : dateFontsize+"px",        
	}

	selectors[".uagb-timeline--left .uagb-day-new.uagb-day-left"] = {
		"margin-left" : horizontalSpace+"px",
		"color": dateColor,
		"font-size" : dateFontsize+"px",     
	}

	selectors[".uagb-timeline--right .uagb-day-new.uagb-day-right"] = {
		"margin-right" : horizontalSpace+"px",
		"color": dateColor,
		"font-size" : dateFontsize+"px",     
	}

	selectors[".uagb-date-new"] = {
		"color": dateColor,
		"font-size" : dateFontsize+"px",     
	}

	selectors[".uagb-events-inner-new"] = {
		"border-radius" : borderRadius+"px",
		"padding": bgPadding+"px",
	}

	selectors[".uagb-timeline-main .timeline-icon-new"] = {
		"color": iconColor,
		"font-size" : iconSize+"px",     
	}
       
	selectors[".uagb-timeline-field.animate-border:hover .uagb-timeline-marker"] = {
		"background" : iconBgHover,  
		"border-color": borderHover,
	}

	selectors[".uagb-timeline-main .uagb-timeline-marker.in-view-timeline-icon"] = {
		"background" : iconBgFocus,  
		"border-color": borderFocus,    
	}


	selectors[".uagb-timeline-field.animate-border:hover .timeline-icon-new"] = {
		"color": iconHover,
	}

	selectors[".uagb-timeline-main .uagb-timeline-marker.in-view-timeline-icon .timeline-icon-new"] = {
		"color": iconFocus,
	}


	/* Generate Responsive CSS for timeline */
	var response_selector = {}
	response_selector[".uagb-timeline--center .uagb-timeline-marker"] = {
		"margin-left" : "0px",
		"margin-right" : "0px",
	}

	response_selector[".uagb-timeline--center .uagb-day-new.uagb-day-left"] = {
		"margin-left" : horizontalSpace+"px",
	}
	response_selector[".uagb-timeline--center .uagb-day-new.uagb-day-right"] = {
		"margin-left" : horizontalSpace+"px",
	}

	var styling_css = ""

	for( var i in selectors ) {

		var cond1 = i.includes("uagb-timeline--center")
		var cond2 = i.includes("uagb-timeline--right")
		var cond3 = i.includes("uagb-timeline--left")

		var cond = (cond1 || cond2 || cond3 )

		if( !cond ){
			styling_css += "."+clientId+" "+i + " { "
		}else{
			styling_css += "."+clientId+i + " { "
		}
            
		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	// Responsive css.
	styling_css += "@media(max-width:768px){" 
	for( var i in response_selector ) {

           
		styling_css += "."+clientId+i + " { "           
            
		var sel = response_selector[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}        
	styling_css += "}"

	return styling_css

}

export default contentTimelineStyle
