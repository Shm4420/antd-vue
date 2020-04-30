import mutations from './mutations';
import actions from './actions';
const state = {
	cartIds:[],
	carts:[],
}
const getters = {
	totalCart(state){
		return state.carts.reduce(function(acc,current){
			return acc + (current.price*current.num)
		},0).toFixed(2)
	}
}
export default{
	namespaced:true,
	state,
	getters,
	mutations,
	actions
}
