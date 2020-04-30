import cart from './cart/store';
import products from './products/store';
import mutations from './mutations'
import actions from './actions'

const state = {
	userInfo:{
		name:'shm'
	},
	count:0
}
export default {
	state,
	mutations,
	actions,
	modules:{
		cart,
		products
	}
};