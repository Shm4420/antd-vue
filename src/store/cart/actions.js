import {ADD_CART,PUSH_CART} from './mutation-type'
export default{
	[ADD_CART]({state,commit},id){
		setTimeout(()=>{
			if(state.cartIds.indexOf(id)>-1){
				commit(PUSH_CART,id);
			}else{
				commit(ADD_CART,id);
			}
		},500)
	}
}