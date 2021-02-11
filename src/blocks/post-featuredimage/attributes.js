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
		default: 0
	},
	src :{
		type :"string"
	},
	borderRadius : {
		type: "number"
	},
	borderColor : {
		type: "string"
	},
	vPadding: {
		type: "number",
		default:0 
	},
	hPadding: {
		type: "number",
		default:0 
	},
	paddingType :{
		type: "string",
		default: "px",
	},
	marginType :{
		type: "string",
		default: "px",
	},
	vMargin: {
		type: "number",
	},
	hMargin: {
		type: "number",
	},
	backgroundColor: {
		type: "string",
	},
}

export default attributes
