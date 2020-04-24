<template>
	<div>
		<input type="text" v-model="msg"  @keyup="changeInput">
		<div>{{newMsg}}</div>
		<count-down :lastTime="lastTime"></count-down>
	</div>
</template>
<script>
import {debounce} from '@/utils/util';
import CountDown from '@/components/CountDown.vue'
export default {
	name:'demo11',
	components:{
		CountDown
	},
	data(){
		return{
			msg:'',
			newMsg:'',
			lastTime:'2020-04-24 10:00:00'
		}
	},
	methods:{
		changeInput:debounce(function(){
			this.changeMsg(' 5s');
		},2000),
		changeMsg:function(a){
			this.newMsg = this.msg+a;
		}
	}
}
</script>


