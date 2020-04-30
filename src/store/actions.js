const actions = {
	add(cxt,num){
		setTimeout(()=>{
			cxt.commit('add',num);
		},2000)
	}
}
export default actions;