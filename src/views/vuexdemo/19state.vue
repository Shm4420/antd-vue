<template>
	<div>
		<p>{{count}}</p>
		<button @click="add(2)">增加</button>
		<button @click="asyAdd()">异步增加</button>
	</div>
</template>
<script>
	import {mapMutations} from 'vuex';
	export default {
		data(){
			return{

			}
		},
		computed:{
			count(){
				return this.$store.state.count;
			}
		},
		methods:{
			// add(){
			// 	this.$store.commit('add',2);
			// },
			asyAdd(){
				this.$store.dispatch('add',3);
			},
			...mapMutations({
				add:'add'
			})
		}
	}
</script>
