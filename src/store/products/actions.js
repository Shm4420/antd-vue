import shop from '../../api/shop';
import {GET_PRODUCTS} from './mutation-type'
export default{
	[GET_PRODUCTS]({commit}){
		shop.getProducts(commit(GET_PRODUCTS));
	}
}