<template>
	<ul>
		<li v-for="item in products" :key="item.id">
			<p>{{item.name}} - {{item.price}}</p>
			<button @click="addCart(item.id)">加入购物车</button>
		</li>
	</ul>
</template>
<script>
import {ADD_CART} from '@/store/cart/mutation-type'
import {GET_PRODUCTS} from '@/store/products/mutation-type'
import {mapState,mapActions} from 'vuex';
	export default {
		data(){
			return{

			}
		},
		computed:{
			...mapState({
				products:state=>state.products.goodsList
			})
		},
		mounted(){
			this.$store.dispatch(`products/${GET_PRODUCTS}`);
		},
		methods:{
			...mapActions('cart',{addCart:ADD_CART}),

		}
	}
</script>