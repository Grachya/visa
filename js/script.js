$(document).ready(function(){
	// input mask
	$("#phone").mask("+7(999)999-99-99");

	// service p height
	var pheight = $('.ser p');
	var serParray = [];
	for(var i=0; i<pheight.length; i++){
		serParray.push($(pheight[i]).height()); 
	}
	var finalPheight = serParray.reduce(function(x,y){return (x>y)?x:y;});
	$('.ser p').css({'height':finalPheight});

	// next
})