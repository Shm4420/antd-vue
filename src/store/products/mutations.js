import {GET_PRODUCTS} from './mutation-type'
export default{
	[GET_PRODUCTS](state,products){
		state.goodsList = products;
	}
}