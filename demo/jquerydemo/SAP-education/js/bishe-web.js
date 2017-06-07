$(function(){
	var i=0;
	var clone=$(".banner-img li").first().clone();
	$(".banner-img").append(clone);
	var size=$(".banner-img li").size();
	for(j=0;j<size-1;j++){
		$(".banner-icon").append("<li></li>");
	}
	$(".banner-icon li").first().addClass("hc");
	//图片轮播
	$(".banner-icon li").hover(function(){
		var index=$(this).index();//获取鼠标悬浮li的index
		i=index;
		$(".banner-img").stop().animate({left:-index*1250},500)
		$(this).addClass("hc").siblings().removeClass("hc")//图标变颜色
	});
	//自动轮播
	var t=setInterval(function(){
		i++;
		move();
	},2000);
	function move(){
		if(i==size){
			$(".banner-img").css({left:0});
			i=1;
		}
		if(i==-1){
			$(".banner-img").css({left:-(size-1)*1250});
			i=size-2;
		}
		$(".banner-img").stop().animate({left:-i*1250},500);
		if(i==size-1){
			$(".banner-icon li").eq(0).addClass("hc").siblings().removeClass("hc");
		}else{
			$(".banner-icon li").eq(i).addClass("hc").siblings().removeClass("hc");
		}
	}
	//导航栏固定在顶部
	var h=$(".banner").height();//获取导航栏的高度
	$(window).scroll(function(){
		var headscroll=$(document).scrollTop();//滚动条的垂直位置
		if(headscroll>460){
			$(".header").css({"position":"fixed","top":0})//fixed相对于浏览器的绝对定位
			$(".banner").css("margin-top",60);
		}else{
			$(".header").css({"position":"static"});//静态定位
			$(".banner").css("margin-top",0);
		}
	});
	//侧边按键滑动图片
	var img=$(".banner-img");
	var icon=$(".banner-icon");
	function init(){
		for(var k=0;k<img.length;k++){
			img[k].style.display="none";
			icon[k].className="";
		}
	}
	function show(n){
		img[n].style.display="block";
		icon[n].className="hc";
	}
	//banner定时器的操作
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move();
		},2000)
	});
	//左边滑动按钮
	$(".next").click(function(){
		i++;
		move();
	});
	//右边滑动按钮
	$(".pre").click(function(){
		i--;
		move();
	});
	//侧面菜单栏
	$(".cont-txt li").mouseover(function(){
		var index=1;
		index=$(this).index();
		$(".sub-cont").eq(index).show();
		});
	$(".sub-cont").mouseover(function(){
		$(this).show();
	});
	$(this).mouseout(function(){
		$(".sub-cont").hide();
		});
	//登录弹出框
	$(".btn1").click(function(){  //点击登录按钮
		$('.login').show();  //登录界面显示
		$('.box').show();
		$('.login').css('left',($(window).width()-$('.login').outerWidth())/2);//弹出框的位置定位
		$('.login').css('top',($(window).height()-$('.login').outerHeight())/2);
		
		$('.close').click(function(){//点击关闭按钮
			$('.login').fadeOut();//弹出框淡出
			$('.box').fadeOut();
		});
	});
	$(window).on('resize scroll',function(){//滚动鼠标弹出框位置不变
		$('.login').css('left',($(window).width()-$('.login').outerWidth())/2);
		$('.login').css('top',($(window).height()-$('.login').outerHeight())/2+$(window).scrollTop());
	});
	
	
		
		
});


	

