window.onload=function(){
	var obanner=document.getElementsByClassName("banner")[0];
	var opicture=document.getElementsByClassName("picture")[0];
	var otet=document.getElementsByClassName("tet")[0];
	var oimg=opicture.getElementsByTagName("li");
	var otext=otet.getElementsByTagName("li");
	oimg[0].style.display="block";
	
	for(var i=0;i<otext.length;i++){
		otext[i].index=i;//表示下标[0,1,2,3,4]
		otext[i].onclick=function(){
			num=this.index;
			fntext();
		}
	}
	function fntext(){
		for(var j=0;j<otext.length;j++){
			otext[j].className=""; //属性设置或返回元素的 class 属性。
			oimg[j].style.display="none";
		}
		otext[num].className="active";
		oimg[num].style.display="block";
	}
	
	//自动播放图片，设定时间
	var num=0;
	var timer=null;
	function autoplay(){
		timer=setInterval(function(){
			num++;
			num=parseInt(num%otext.length);
			fntext();
		},2000);
    }
	//鼠标移入停止播放图片
	obanner.onmouseover=function(){
		clearInterval(timer);
	}
	//鼠标移出播放图片
	obanner.onmouseout=function(){
		autoplay();
	}
}
