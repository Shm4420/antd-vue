<template>
	<div>
		{{countTime}}
	</div>
</template>
<script>
export default {
	data(){
		return{
			timer:null,
			countTime:''
		}
	},
	props:{
		lastTime:{
			type:String
		}
	},
	methods:{
		setTime(){
			let currentTime = new Date().getTime();
			let lastTime = new Date(this.lastTime).getTime();
			let times = (lastTime - currentTime) /1000;
			let days = Math.floor(times / 60 / 60 / 24)<10 ?'0'+Math.floor(times / 60 / 60 / 24):Math.floor(times / 60 / 60 / 24);
			let h = Math.floor((times / 60 / 60) % 24);
			let m = Math.floor((times / 60) % 60);
			let s = Math.floor(times % 60);
			this.countTime = days+'天'+h+'小时'+m+'分钟'+s+'秒';
			this.timer = setTimeout(()=>{
				this.setTime();
				console.log(new Date());
			},1000)
		}
	},
	created(){
		this.setTime();
	},
	beforeDestroy(){
		clearTimeout(this.timer);
	}
}
</script>


