/**
 * BLOCK: Testimonial - Save Block
 */

import classnames from "classnames"
import contentTimelineChildStyle from "./inline-styles"
import ContentTmClasses from ".././classes"
import AlignClass from ".././align-classes"
import DayAlignClass from ".././day-align-classes"
import renderSVG from "../../../../dist/blocks/uagb-controls/renderIcon"

const { dateI18n, __experimentalGetSettings } = wp.date

const {
	RichText
} = wp.blockEditor

const { Fragment } = wp.element

export default function save( props ) {
	const {
		block_id,
		headingTag,
		timelinAlignment,
		displayPostDate,
		icon,
		tm_content,
		t_date,
		date_icon,
		stack,
		timelineItem,
		dateFormat,
		time_heading,
		time_desc,
	} = props.attributes

	/* Style for elements */
	var front_style = contentTimelineChildStyle( props )

	const hasItems = Array.isArray( tm_content ) && tm_content.length

	var content_align_class = AlignClass( props.attributes, 0 ) // Get classname for layout alignment
	var day_align_class     = DayAlignClass( props.attributes, 0 ) //

	var display_inner_date = false
	var icon_class = "uagb-timeline__icon-new out-view-uagb-timeline__icon "

	return (
		<div className = "uagb-timeline__days">
		<article className = "uagb-timeline__field uagb-timeline__field-wrap" id={"uagb-timeline-child-"+props.clientId}>
			<div className = { classnames(
				...content_align_class,
			) }>

				<div className = "uagb-timeline__marker out-view-uagb-timeline__icon">
					<span className = {icon_class}>{ renderSVG(icon) }</span>
				</div>

				<div className = { classnames(
					...day_align_class,
				) }>
					<div className="uagb-events-new" >
						<div className="uagb-timeline__events-inner-new" >
							<div className="uagb-timeline__date-hide uagb-timeline__date-inner" >
                                        <div className={ "uagb-timeline__inner-date-new" }>
                                        	{ t_date }
                                        </div>
							</div>

							<div className="uagb-timeline-content">

								<div className="uagb-timeline__heading-text" >
									<RichText.Content
										tagName={ headingTag }
										value={ time_heading }
										className='uagb-timeline__heading'
									/>
								</div>

								<RichText.Content
									tagName= "p"
									value={ time_desc }
									className='uagb-timeline-desc-content'
								/>

								<div className="uagb-timeline__arrow"></div>

							</div>

						</div>
					</div>
						{ display_inner_date && <div className = "uagb-timeline__date-new">
							{ displayPostDate && t_date &&
                                <div className={ "uagb-timeline__date-new" }>
                                	{ t_date }
                                </div>
							}
						</div>
						}
				</div>
			</div>
		</article>
		</div>
	)
}