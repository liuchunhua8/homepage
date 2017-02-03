
/*微博和手机的*/
function Style(){
	this.mobile=document.getElementById("mobile");
	this.three=document.getElementById("three");
	this.cl=document.getElementById("cl");
	this.icon=document.getElementById("icon");
	this.asid=document.getElementById("asid");
	this.black=document.getElementById("black");
	this.white=document.getElementById("white");
	this.naxbox=document.getElementById("naxbox");
	/*女装*/
	this.one=document.getElementById("one");
	this.container=document.getElementById("container");
	/*男装*/
	this.man=document.getElementById("man");
	this.container1=document.getElementById("container1");
	/*美容*/
	this.jiankang=document.getElementById("jiankang");
	this.container2=document.getElementById("container2");
	/*家具*/
	this.chuang=document.getElementById("chuang");
	this.container3=document.getElementById("container3");
	/*数码*/
	this.wai=document.getElementById("wai");
	this.container4=document.getElementById("container4");
	/*限时*/
	this.nuan=document.getElementById("nuan");
	/*this.ll=document.getElementById("ll");*/
	this.container5=document.getElementById("container5");
	/*手机*/
	this.ping=document.getElementById("ping");
	this.container6=document.getElementById("container6");
	this.top;
	var _self=this;
	this.demo=function(){
		_self.mobile.onmouseover=function(){
			_self.three.style.display="block";
		}
		_self.cl.onmouseover=function(){
			_self.three.style.display="block";
		}
		_self.mobile.onmouseout=function(){
			_self.three.style.display="none";
			}
		_self.cl.onmouseout=function(){
			_self.three.style.display="none";
		}
		_self.icon.onmouseover=function(){
			_self.asid.style.display="block";
		}
		_self.icon.onmouseout=function(){
			_self.asid.style.display="none";
		}
		_self.three.onmouseover=function(){
			_self.three.style.display="block";
		}
		_self.three.onmouseout=function(){
			_self.three.style.display="none";
		}
		_self.asid.onmouseover=function(){
			_self.asid.style.display="block";
		}
		_self.asid.onmouseout=function(){
			_self.asid.style.display="none";
		}
		_self.one.onmouseover=function(){
			_self.container.style.display="block";
			_self.one.style.borderBottom=" 2px solid #56a496";
			_self.one.style.color=" #56a496";
		}
		_self.one.onmouseout=function(){
			_self.container.style.display="none";
			_self.one.style.borderBottom="2px solid #CDCDCD ";
			_self.one.style.color="#000000";
		}
		_self.man.onmouseover=function(){
			_self.container1.style.display="block";
			_self.man.style.borderBottom=" 2px solid #56a496";
			_self.man.style.color=" #3b6358";
		}
		_self.man.onmouseout=function(){
			_self.container1.style.display="none";
			_self.man.style.borderBottom=" 2px solid #CDCDCD ";
			_self.man.style.color=" #000000";
		}
		_self.jiankang.onmouseover=function(){
			_self.container2.style.display="block";
			_self.jiankang.style.borderBottom=" 2px solid #56a496";
			_self.jiankang.style.color=" #3b6358";
		}
		_self.jiankang.onmouseout=function(){
			_self.container2.style.display="none";
			_self.jiankang.style.borderBottom=" 2px solid #CDCDCD ";
			_self.jiankang.style.color=" #000000";
		}
		_self.chuang.onmouseover=function(){
			_self.container3.style.display="block";
			_self.chuang.style.borderBottom=" 2px solid #56a496";
			_self.chuang.style.color=" #3b6358";
		}
		_self.chuang.onmouseout=function(){
			_self.container3.style.display="none";
			_self.chuang.style.borderBottom=" 2px solid #CDCDCD ";
			_self.chuang.style.color=" #000000";
		}
		_self.wai.onmouseover=function(){
			_self.container4.style.display="block";
			_self.wai.style.borderBottom=" 2px solid #3b6358";
			_self.wai.style.color=" #3b6358";
		}
		_self.wai.onmouseout=function(){
			_self.container4.style.display="none";
			_self.wai.style.borderBottom=" 2px solid #c7c7c7";
			_self.wai.style.color=" #000000";
		}
		_self.nuan.onmouseover=function(){
			_self.container4.style.display="block";
			_self.nuan.style.borderBottom=" 2px solid #3b6358";
			_self.nuan.style.color=" #3b6358";
		}
		_self.nuan.onmouseout=function(){
			_self.container4.style.display="none";
			_self.nuan.style.borderBottom=" 2px solid #c7c7c7";
			_self.nuan.style.color=" #000000";
		}
		_self.ping.onmouseover=function(){
			_self.container6.style.display="block";
			_self.ping.style.borderBottom=" 2px solid #3b6358";
			_self.ping.style.color=" #3b6358";
		}
		_self.ping.onmouseout=function(){
			_self.container6.style.display="none";
			_self.ping.style.borderBottom=" 2px solid #c7c7c7";
			_self.ping.style.color=" #000000";
		}
	}
	
}


/*导航的悬浮*/
function Nav(){
	
	var _black=document.getElementById("black");
	var _white=document.getElementById("white");
	var _top;
	window.onscroll=function(){
		function s(){
			_top=document.documentElement.scrollTop || document.body.scrollTop;
		 if(_top>=48){
		_black.style.display="none";
		_white.style.position="fixed";
		_white.style.zIndex="30";
		//_white.style.marginLeft="98px";
		}else{
		_black.style.display="block";
		_white.style.position="absolute";
}
	}
		
		window.setTimeout(s,1000)
		}
	
	}
/*点击图片出现小框*/
function power(){
	/*$('.row .sele-leaf:eq(0)').hover(function(){$(".subtile:eq(i)").stop().animate({top:'265px'},
	{queue:false,duration:180});},
	function(){$(".subtile").stop().animate({top:'300px'},
	{queue:false,duration:180});
});*/
$.each( $('.row .sele-leaf'), function(i, n){
 $(n).hover(function(){$(".subtile:eq("+(i)+")").stop().animate({top:'265px'},
	{queue:false,duration:180});},function(){$(".subtile").stop().animate({top:'300px'},
	{queue:false,duration:180});
});
});
/*图片轮播图*/

}

var timer      = null;
var autoTime   = null;
var ms         = 30;
var autoMs     = 3000;
var iTarget    = 0;
var speed      = 0;
var nextTarget = 0;

function main(){
	new Style().demo();
	Nav();
	power();
   /* var _nv=new Json();
    _nv.ss();*/
	/*json();*/

	
	var obj    = document.getElementById("play");/*大盒*/
    var oOl    = obj.getElementsByTagName("ol")[0];/*数字*/
    var aLis   = oOl.getElementsByTagName("li");
    var oUl    = obj.getElementsByTagName("ul")[0];//图片
    var oUlLis = oUl.getElementsByTagName("li");
    var oPrev  = obj.getElementsByTagName("p")[0];//左轮
    var oNext  = obj.getElementsByTagName("p")[1];//右轮

    oUl.style.width = oUlLis.length * oUlLis[0].offsetWidth + "px";

    for( var i = 0; i < aLis.length; i+=1 )
    {
        aLis[i].onmouseover = getIndx;
    }

    obj.onmouseover = function()
    {
        clearInterval(currentTime);
         oOl.style.display="block";
         oPrev.style.display="block";
         oNext.style.display="block";
    }
    obj.onmouseout = function()
    {
    	 oOl.style.display="none";
         oPrev.style.display="none";
         oNext.style.display="none";
        if(currentTime)
        {
            clearInterval(currentTime);
        }
        currentTime = setInterval("autoPlay()",autoMs);
    }

    oPrev.onmousedown = fnPrev;
    oNext.onmousedown = fnNext;

    currentTime = setInterval("autoPlay()",autoMs);

   /* var _nv=new Json();
    _nv.ss();*/
   json();
	coot();
	chu();
}



// 前一张
function fnPrev()
{
    var obj    = document.getElementById("play");/*大盒*/
    var oOl    = obj.getElementsByTagName("ol")[0];//数字
    var oOl    = obj.getElementsByTagName("ol")[0];
    var aLis   = oOl.getElementsByTagName("li");
    nextTarget-=1;
    if(nextTarget < 0){ nextTarget = aLis.length-1; }
    goTime(nextTarget);
}

// 后一张
function fnNext()
{
    var obj    = document.getElementById("play");
    var oOl    = obj.getElementsByTagName("ol")[0];
    var aLis   = oOl.getElementsByTagName("li");
    nextTarget+=1;
    if(nextTarget === aLis.length){ nextTarget = 0; }
    goTime(nextTarget);
}

// 自动播放
function autoPlay()
{
    var obj    = document.getElementById("play");
    var oOl    = obj.getElementsByTagName("ol")[0];
    var aLis   = oOl.getElementsByTagName("li");

    nextTarget+=1;
    if( nextTarget >= aLis.length ) { nextTarget = 0; }
    goTime(nextTarget)
}

// 获取当前的索引值
function getIndx()
{
    var obj    = document.getElementById("play");
    var oOl    = obj.getElementsByTagName("ol")[0];
    var aLis   = oOl.getElementsByTagName("li");

    for( var i = 0; i < aLis.length; i+=1 )
    {
        if(aLis[i] === this)
        {
            goTime(i);
        }
    }
}

// 开始启动
function goTime(index)
{
    var obj      = document.getElementById("play");
    var oUl      = obj.getElementsByTagName("ul")[0];//图片
    var oOl      = obj.getElementsByTagName("ol")[0];
    var aLis     = oOl.getElementsByTagName("li");
    var iLiWidth = oUl.getElementsByTagName("li")[0].offsetWidth;

    for( var i = 0; i < aLis.length; i+=1 )
    {
        aLis[i].className = "";
    }
    aLis[index].className = "active";

    iTarget = -index * iLiWidth;

    if(timer){ clearInterval(timer); }
   timer = setInterval("doMove("+ iTarget +")",ms)
   doMove(iTarget);
}

// 图片滑动
function doMove(target)
{
   var obj = document.getElementById("play");
    var oUl = obj.getElementsByTagName("ul")[0];

    oUl.style.left = speed + "px";
    speed+=(target - oUl.offsetLeft)/3;

    if( Math.abs(target-oUl.offsetLeft) === 0 )
    {
        oUl.style.left = target + "px";
        clearInterval(timer); timer = null;
    }
}
/*尾部微信二维码*/
function coot() {
	var _icong=document.getElementById("icong");
	var _qrweixin=document.getElementById("qrweixin");
	_icong.onmousemove=function () {
			_qrweixin.style.display="block";
    }
    _icong.onmouseleave=function () {
		_qrweixin.style.display="none";
    }

}
/*请求数据库*/
function chu() {
    $.post("api/login.php", null, function (data,textStatus) {
        try{
            if(data=="0"){
                $("#top").html("<a href=\"log.html\">login</a>");
            }else{
                $("#top").html("欢迎:"+data+" 光顾!!");
            }
        }catch (e){
            //alert("忘记密码了吗?");
        }
    });
}
window.onload=main;