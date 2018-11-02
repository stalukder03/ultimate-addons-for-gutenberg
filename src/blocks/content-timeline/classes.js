/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */

function ContentTmClasses( attributes ) {

		var cTmStyle_class = ''
		/* Arrow position */
        var arrow_align_class  = 'uagb-timeline__arrow-top'+' '
        if( attributes.arrowlinAlignment == 'center' ){
            arrow_align_class = 'uagb-timeline__arrow-center'+' '
        }else if( attributes.arrowlinAlignment == 'bottom' ){
            arrow_align_class = 'uagb-timeline__arrow-bottom'+' '
        } 

        /* Alignmnet */
        var align_class = 'uagb-timeline__center '+' '
        if( attributes.timelinAlignment == 'left' ){
            align_class = 'uagb-timeline__left'+' '
        }else if( attributes.timelinAlignment == 'right'){
            align_class = 'uagb-timeline__right'+' '
        }     
        align_class+= arrow_align_class+''
        align_class += 'uagb-timeline__responsive-tablet uagb-timeline'

	return [
		align_class        
	]
}

export default ContentTmClasses
