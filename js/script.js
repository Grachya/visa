$(document).ready(function(){
	// input mask
	$("#phone").mask("+7(999)999-99-99");
	$("#footerPhone").mask("+7(999)999-99-99");
	

	// service p height
	var pheight = $('.ser p');
	var serParray = [];
	for(var i=0; i<pheight.length; i++){
		serParray.push($(pheight[i]).height()); 
	}
	var finalPheight = serParray.reduce(function(x,y){return (x>y)?x:y;});
	$('.ser p').css({'height':finalPheight});

	// sparavka template 
	var mainBlwidth = $('.spravkaImgs').width();
	var innerElem = $('.spravkaImgs').find('*')
	var innerElemWidth = 0;
	for(y=0; y<=innerElem.length;y++){
		innerElemWidth += $(innerElem[y]).width();
	}
	// console.log("new",innerElemWidth);
	var elemPaddinf = mainBlwidth - innerElemWidth;
	for(z=0; z<innerElem.length-1; z++){
		$('.spravkaImgs').find('*').eq(z).css({
			marginRight:elemPaddinf
		})
	}

	//общая высота shareScreen
	// var elems = $('.shareScreen').find('div');
	// var emptyArr = [];
	// for(j=0;j<elems.length;j++){
	// 	emptyArr.push(elems.eq(j).height());
	// 	console.log("new1",elems.eq(j).height())
	// }
	// console.log("new",emptyArr);
	// var maxH = emptyArr.reduce(function(x,y){return (x>y)?x:y;});
	// console.log("new",maxH);
	// for(u=0; u<elems.length;u++){
	// 	elems.eq(u).css({
	// 		height:maxH
	// 	})
	// }




})