var goodsList = [
	{id:1,name:'Node.js深入浅出',num:5,price:39.99},
	{id:2,name:'Vue深入浅出',num:2,price:29.99},
	{id:3,name:'React源码解析',num:3,price:35},
]
function getProducts(cb){
	setTimeout(()=>{
		cb(goodsList);
	},1000)
}
function buyProduct(product,cb,errorCb){
	setTimeout(()=>{
		Math.random() > 0.5 ? cb() : errorCb();
	},1000)
}
export default{
	getProducts,
	buyProduct
}