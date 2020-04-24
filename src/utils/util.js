/*
** @describe:函数防抖
** @params:fn
** @params:time 时间 
*/
export function debounce(fn,time=500){
	let timer = null;
	return function(){
		clearTimeout(timer);
		timer = setTimeout(()=>{
			fn.apply(this,arguments);
		},time)
	}
}
/*
** @describe:函数节流
** @params:fn
** @params:time 时间 
*/
export function throttle(fn,time=500){
	let canRun = true;
	return function(){
		if(!canRun) return;
		canRun = false;
		setTimeout(()=>{
			fn.apply(this,arguments);
			canRun = true;
		},time)
	}
}