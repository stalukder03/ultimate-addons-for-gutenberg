import { registerBlockType } from '@wordpress/blocks';


registerBlockType('uagb/jamy2',{
	title:'Jamy static block',
	edit: function(){
		return <p> Hello world (from the editor)</p>;
	},
	category: uagb_blocks_info.category,
	save:function(){
		return <p> Hello world (from the Frontend)</p>;
	},
})
