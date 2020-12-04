/**
 * BLOCK: UAGB Timeline Child Attributes
 */

const { __ } = wp.i18n

const attributes = {
	content_class: {
		type : "string",
	},
	dayalign_class: {
		type : "string",
	},
	time_heading:{
		type: "string",
		default:__( "Timeline Heading " )
	},
	time_desc:{
		type: "string",
		default:__( "This is Timeline description, you can change me anytime click here " )
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	dateFormat: {
		type: "string",
		default: "F j, Y"
	},
	align : {
		type : "string",
		default : "center",
	},
	headingColor : {
		type : "string",
	},
	subHeadingColor : {
		type : "string",
	},
	backgroundColor : {
		type : "string",
		default : "#eee",
	},
	headingTag : {
		type : "string",
		default : "h4",
	},
	timelinAlignment : {
		type : "string",
		default : "center",
	},
	arrowlinAlignment : {
		type : "string",
		default : "center",
	},
	headSpace : {
		type : "number",
		default : 5,
	},
	subHeadSpace : {
		type : "number",
		default : 5,
	},
	block_id  : {
		type : "string",
		default : "0",
	},
	timelineItem :{
		type : "number",
		default : 5,
	},
	tm_client_id  : {
		type : "string",
		default : "not_set",
	},
	borderRadius : {
		type : "number",
		default : 2,
	},
	bgPadding : {
		type : "number",
		default : 20,
	},
	iconSize : {
		type : "number",
		default : 12,
	},
	icon : {
		type : "string",
		default : "fab fa fa-calendar-alt"
	},
	t_date : {
		type: "string",
		default: '1/1/2019',
	},
	displayPostDate:{
		type: "boolean",
		default: true,
	},
	stack: {
		type: "string",
		default: "tablet"
	}
}

export default attributes
