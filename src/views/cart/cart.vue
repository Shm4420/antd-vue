import { mapMutations } from 'vuex';
<template>
	<ul>
		<li v-for="item in carts" :key="item.id">{{item.name}} - {{item.price}} X {{item.num}}</li>
	</ul>
</template>
<script>
import {mapState} from 'vuex';
	export default {
		data(){
			return{

			}
		},
		computed:{
			...mapState({carts:'/cart/carts'})
		},
		mounted(){
		},
		methods:{
		
		}
	}
</script>