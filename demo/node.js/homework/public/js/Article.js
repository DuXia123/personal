/**
 * Created by Administrator on 2017/5/19 0019.
 */
$(function () {
    $('#artPub .btn').on('click',function () {
      // alert(1);
       $.ajax({
          url:'/admin/add',
           type:'post',
           data:{
              tit:$('#artPub .tit').val(),
               intro:$('#artPub .intro').val(),
               detail:$('#artPub .detail').val()
           },
        success:function(result){
        alert(result);
        }
       });
    });
    
    $('#artEdit .btn').on('click',function () {
        //console.log(1);
        var dataId=$(this).attr('data-id');
        $.ajax({
            url:'/admin/save',
            type:'post',
            data:{
                tit:$('#artEdit .tit').val(),
                intro:$('#artEdit .intro').val(),
                detail:$('#artEdit .detail').val(),
                id:dataId
            },
            success:function(result){
                alert(result);
            }
        });
    });
//删除
    $('#artList .btn-danger').on('click',function () {
        //alert(1);
       var delId=$(this).attr('data-id');
       var _this=$(this);
       var con=confirm("确定要删除吗？");
       $.ajax({
           url:'/admin/del',
           type:'post',
           data:{
               id:delId
           },
           success:function (result) {
               alert(result);
               if(result=='删除成功'){
                   _this.closest('tr').remove();
               }
           }
       });
    });
//搜索
$('#search .btn').on('click',function () {
    //alert(1);
    if($('#search input').val()==''){
        return false;
    }
   $.ajax({
       url:'/admin/search',
       type:'post',
       data:{
         tit:$('#search input').val()
       },
       success:function (result) {
           if(result==''){
               alert("没找到搜索项");
           }else{
               var str='';
               var len=result.length;
               for(var i=0;i<=len;i++){
                   str+='<tr>'
                   +'<td>'+result[i].tit+'</td>'
                  +'<td>'+result[i].intro+'</td>'
                   +'<td >'
                   +'<a href="/admin/edit?id='+result[i]._id+'">编辑</a>'
                       +'<button class="btn btn-danger" data-id="'+result[i]._id+'">删除</button>'
                       +'</td>'
                       +'</tr>'
               }
               $('#tBody').html(str);
           }
       }
   }) ;
});
//翻页
//     $('#page .roll-page').on('click',function () {
//         alert(1);
//         $.ajax({
//             url:'/admin/list',
//             type:'get',
//             data:{
//                 listTab:tab
//             },
//             success:function (result) {
//                     var str='';
//                     var len=result.length;
//                     for(var i=0;i<len;i++){
//                         str+='<tr>'
//                             +'<td>'+result[i].tit+'</td>'
//                             +'<td>'+result[i].intro+'</td>'
//                             +'<td >'
//                             +'<a href="/admin/edit?id='+result[i]._id+'">编辑</a>'
//                             +'<button class="btn btn-danger" data-id="'+result[i]._id+'">删除</button>'
//                             +'</td>'
//                             +'</tr>'
//
//                     }
//                     $('#tBody').html(str);
//                 }
//             }
//         }) ;
//     });
});