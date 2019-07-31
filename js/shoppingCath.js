function Text(event){
	if(event.target.className=='active'){
		event.target.className='';
	}else{
		event.target.className='active';
	}
}

//购物车 商品数量减
function jian(event){
	event = window.event || event;
	var num = parseInt(event.target.parentElement.parentElement.children[1].innerText);
	if(num <=1){
		return;
	}
	num--;
	event.target.parentElement.parentElement.children[1].innerText = num;
}
//购物车 商品数量加
function jia(event){
	event = window.event || event;
	var num = parseInt(event.target.parentElement.parentElement.children[1].innerText);
	if(num >=9999){
		return;
	}
	num++;
	event.target.parentElement.parentElement.children[1].innerText = num;
}
