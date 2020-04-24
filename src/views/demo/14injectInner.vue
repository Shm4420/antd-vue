<template>
	<div>
		<span :style="{color:theme1}">inject注入</span>
	</div>
</template>
<script>
export default {
	inject:{
		theme1:{
			from:'theme',
			default:()=>({})
		}
	},
	created(){
		console.log(this.theme1)
	}
}
</script>

