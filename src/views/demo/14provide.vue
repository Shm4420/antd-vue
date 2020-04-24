<template>
	<div>
		<inject-com></inject-com>
		<button @click="changeColor()">更改组件颜色</button>
	</div>
</template>
<script>
import Vue from 'vue'
import injectCom from './14inject'
export default {
	components:{
		injectCom
	},
	provide(){
		return{
			theme:this.color
		}
	},
	data(){
		return{
			color:'blue'
		}
	},
	created(){
		this.data = Vue.observable({color:'blue'})
	},
	methods:{
		changeColor(){
			this.color = this.color=='blue'?'green':'blue';
		}
	}
}
</script>

