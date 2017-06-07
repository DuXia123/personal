window.onload	= function(){
	/*添加便签*/
	var add	= document.getElementById("add");
	add.onclick	= function(){
		var content	= document.getElementsByClassName("content")[0];
		if(content.children.length){
			content.insertBefore(addNote(), content.children[0]);
			delNote(content);
			decreaseNote(content);
			increaseNote(content);
		}
		else{
			content.appendChild(addNote());
			delNote(content);
			decreaseNote(content);
			increaseNote(content);
		}
	}
	var bgColor	= ["red", "yellow", "blue", "green"];
	var bgColorIndex	= 0;
	function addNote(){
		var li	= document.createElement("li");
		if(bgColorIndex==bgColor.length){
			bgColorIndex	= 0;
		}
		li.style.background	= bgColor[bgColorIndex];
		bgColorIndex++;
		
		var time	=document.createElement("div");
		time.className	= "time";
		var date	= new Date();
		var apm	= "AM";
		if(date.getHours()>12){
			apm	= "PM";
		}
		time.innerHTML	= date.getMonth()+"/"+date.getDay()+"/"+date.getFullYear()+"&nbsp;"
						+date.getHours()+":"+date.getMinutes()+"&nbsp;"+apm;
		li.appendChild(time);
		
		var txt	= document.createElement("div");
		txt.className	= "txt";
		txt.innerHTML	= "Text here...";
		li.appendChild(txt);
		
		var pin	= document.createElement("img");
		pin.className	= "pin_icon";
		pin.src	= "img/pin.png";
		li.appendChild(pin);
		
		var close	= document.createElement("a");
		close.className	= "close_btn";
		close.href	= "javascript:;";
		li.appendChild(close);
		
		return li;
	}
	/*删除所有便签*/
	var del	= document.getElementById("delete");
	del.onclick	= function(){
		var content	= document.getElementsByClassName("content")[0];
		if(confirm("Are you sure deleting all the notes?")){
			while(content.children.length){
				content.removeChild(content.children[0]);
			}
		}
	}
	/*删除单个便签*/
	function delNote(content){
		var close	= document.getElementsByClassName("close_btn");
		for(var i=0;i<close.length;i++){
			close[i].onclick	= function(){
				content.removeChild(this.parentNode);
			}
		}
	}
	/*缩略图*/
	function decreaseNote(content){
		var decrease	= document.getElementById("decrease");
		decrease.onclick	= function(){
			var txts	= content.getElementsByClassName("txt");
			for(var i=0;i<txts.length;i++){
				txts[i].style.display	= "none";
			}
		}
	}
	/*大图*/
	function increaseNote(content){
		var increase	= document.getElementById("increase");
		increase.onclick	= function(){
			var txts	= content.getElementsByClassName("txt");
			for(var i=0;i<txts.length;i++){
				txts[i].style.display	= "block";
			}
		}
	}
}
