

/*function main(){
	var _timer=0;
	var _left=0;
	var _lunbo=document.getElementById("lunbo").children[0];
	var _box=document.getElementById("box");
	(function star(){
		window.clearTimeout(_timer);
		_left-=9;
		_box.style.left=_left+"px";
		if(Math.abs(_left)>=1940*5){
			_left=0;
			_box.style.left="0px";
		}
		_timer=window.setTimeout(star,500);
	})();
}



function createDemo(){
	var _lunbo=document.getElementById("lunbo");
	var _div=null;
	var _img=null;
	for(var i=0;i<6;i++){
		_div=document.createElement("li");
		_lunbo.children[0].appendChild(_div);
		_img=document.createElement("img");
		_img.alt="";
		_img.src="img/n"+(i+1==6?1:i+1)+".jpg";
		_div.appendChild(_img);
		
	}
}






*/