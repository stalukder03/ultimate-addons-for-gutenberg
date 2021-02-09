const { __ } = wp.i18n

const attributes = {
	block_id: {
		type: "string"
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	imgSize:{
		type: "string",
		default: "thumbnail",
	},
	borderStyle : {
		type: "string",
		default: "none"
	},
	borderWidth : {
		type: "number",
		default: 1
	},
	borderRadius : {
		type: "number"
	},
	borderColor : {
		type: "string"
	},
	vPadding: {
		type: "number",
		default:10 
	},
	hPadding: {
		type: "number",
		default:14 
	},
	vMargin: {
		type: "number",
		default:10 
	},
	hMargin: {
		type: "number",
		default:14 
	},
	backgroundColor: {
		type: "string",
	},
}

export default attributes
