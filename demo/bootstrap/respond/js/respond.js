$(function(){
	//固定导航栏
	var h=$(".navbar").height();//获取导航栏高度
	$(window).scroll(function(){  //滚动函数
		var headscroll=$(document).scrollTop();//滚动条的垂直位置
		//console.log(11);
		if(headscroll>h){
			$(".navbar").css({"background":"#ccc"});
			$(".active").children('a').addClass("on");
			$(".logo-light").css({"display":"none"});
			$(".logo-mid").css({"display":"block","padding-top": "7px"});
			//$(".logo-light").children('img').css()
		}else{
			$(".active").children('a').removeClass("on");
			$(".logo-light").css({"display":"block"});
			$(".logo-mid").css({"display":"none"});
			$(".navbar").css({"background":"transparent"});
		}
	});
	//下拉菜单样式
    $("#du a").mouseenter(function(){
		var index=0;
		index=$(this).index();
		$("#down").eq(index).show();
    	$("#down").show().css({"background":"transparent"});
		});
	$("#down").mouseenter(function(){
		$(this).show();
		$(".navbar-nav #down li a").css("color","red !important");
		//console.log(this);
	});
	$("#du a").mouseout(function(){
		$("#down").hide();
	});
	
});

