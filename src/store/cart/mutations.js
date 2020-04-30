import {ADD_CART,PUSH_CART} from './mutation-type'
export default{
	[ADD_CART](state,id){
		console.log(state,id);
		state.cartIds.push(id);
		// state.cart.concat()
	},
	[PUSH_CART](state,id){
		console.log(state,id);
		// if(state.cartIds.indexOf(id)>-1){

		// }
		// state.cartIds.push(id);
	}
}
