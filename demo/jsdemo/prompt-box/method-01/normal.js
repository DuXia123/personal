//构造函数
function Message(){
	this.Message = null;
    this.settings = {
       w : 400,			//默认宽度
      type:'default',   //类型 defalut error  warn  info  log
      title:'标题',		//标题
      text:'文字描述',     //描述文字
      dir:'center'		//消息框位置  center right
    }
}

Message.prototype.json = {}//为了防止多次点击,只能点击一次
Message.prototype.init=function(opt){
	extend(this.settings,opt);

    if( this.json[opt.iNow]==undefined){
       this.json[opt.iNow] = true;
    }

    if(this.json[opt.iNow]){
      this.create();
      this.close();
      this.json[opt.iNow] = false;
    }  
}
//创建弹框DOM
Message.prototype.create = function(){
	//创建遮罩mask
	this.mask=document.createElement("div");
	this.mask.className = "mask";
	document.body.appendChild(this.mask);
	
	//创建消息框dialog
    this.dialog = document.createElement("div");
    this.dialog.className = "dialog";
    
    this.dialog.innerHTML ='<div class="dialog-title '+this.settings.type+' ">'
    						+this.settings.title
    						+'</div><div class="dialog-discription">'
    						+this.settings.text
							+'</div><div class="dialog-operation"><span class="btn-span '
							+this.settings.type+'">确定</span><span class="btn-span '
						+this.settings.type+'">取消</span></div>';
    
  
    document.body.appendChild(this.dialog);

    this.dialog.style.width = this.settings.w + 'px';
   
     

	//dialog出现的位置
    if(this.settings.dir =="center"){

      this.dialog.style.left  = (viewWidth() - this.dialog.offsetWidth)/2 + 'px';
      this.dialog.style.top  = (viewHeight() - this.dialog.offsetHeight)/2 + 'px';

    }
    else if( this.settings.dir == 'right' ){
      this.dialog.style.left =  (viewWidth() - this.dialog.offsetWidth) + 'px';
      this.dialog.style.top =  (viewHeight() - this.dialog.offsetHeight) + 'px';
    }
    else if( this.settings.dir == 'left' ){
      this.dialog.style.right =  (viewWidth() - this.dialog.offsetWidth) + 'px';
      this.dialog.style.top =  (viewHeight() - this.dialog.offsetHeight) + 'px';
    }
  }

//点击按钮
  Message.prototype.close = function(){
    var aSpan = document.getElementsByClassName("btn-span");
    var This = this;
    
    //确认按钮和取消按钮,目前功能一样，如有需要，可在下方自行扩展
	aSpan[0].onclick = function(){
      document.body.removeChild(This.dialog);
      This.json[This.settings.iNow] = true; //在关闭按钮的时候 变成true 然后下次可点击
      document.body.removeChild(This.mask);
      //扩展代码
    }

    aSpan[1].onclick = function(){
      document.body.removeChild(This.dialog);
      This.json[This.settings.iNow] = true; //在关闭按钮的时候 变成true 然后下次可点击
      document.body.removeChild(This.mask);
      //扩展代码
    }
  }

  function viewWidth(){//可视区宽度
    return document.documentElement.clientWidth;
  }

  function viewHeight(){//可视区高度
    return document.documentElement.clientHeight;
  }

//继承函数
  function extend ( obj1,obj2){
    for(var attr in obj2){
      obj1[attr] = obj2[attr];
    }
  }