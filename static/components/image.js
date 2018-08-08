
// Vue component for each image
Vue.component('image-item', {

	props:["image"],
	template: `
		<div>
			<img v-bind:style="styleObj" v-bind:src="image" alt="">
			<button>delete</button>
			<button>share</button>
		</div>
		`,
	data: function(){
		return{
			styleObj:{
				"max-width": "200px",
				"max-height": "200px"
			}
		}
	}
});