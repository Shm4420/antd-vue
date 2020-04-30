<template>
	<div>
		<h1>购物车实例</h1>
		<div>
			<p>账号：{{$store.state.userInfo.name}}</p>
		</div>
		<hr>
		<div>
			<h3>产品</h3>
			<products></products>
		</div>
		<div>
			<h3>购物车</h3>
			<cart></cart>
		</div>
	</div>
</template>
<script>
	import products from './goods'
	import cart from './cart'
	export default {
		data(){
			return{

			}
		},
		components:{
			products,
			cart
		},
		computed:{
		
		},
		mounted(){
			console.log(this.$store);
		},
		methods:{
		
		}
	}
</script>