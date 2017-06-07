/**
 * Created by Administrator on 2017/5/18 0018.
 */
//引入express
var express = require('express');
//引入swig
var swig = require('swig');
//引入listData
var listData = require('./data/listData');
//console.log(listData.length);
//连接mongoose
var mongoose = require ('mongoose');
//引入bodyparser
var bodyParser=require ('body-parser');
//引入model对象增删改
var artModel = require ('./models/artModel');

//创建对象
var app= express();
app.use('/public',express.static(__dirname + '/public'));
app.use('/images',express.static(__dirname + '/images'));
app.use('/img',express.static(__dirname+'/img'));
//console.log(__dirname);
app.use('/font-awesome',express.static(__dirname+'/font-awesome'));
app.use(bodyParser.urlencoded({extended:true}));
//模板引擎的配置
app.engine('html',swig.renderFile);
//指定模板目录：第一个参数是视图（模板）关键字，第二个参数是模板的存放目录
app.set('views','./list');
app.set('view engine','html');
//swig.setDefaults设置swig模板缓存
swig.setDefaults({cache:false});
//创建表结构
app.post('/admin/add',function (req,res) {
    //console.log(req.body);
    new artModel({
        tit:req.body.tit,
        intro:req.body.intro,
        detail:req.body.detail
    }).save().then(function (result) {
        res.send('提交成功');
    });
});
//提交数据显示后台列表及分页
app.get('/admin/list',function (req,res) {
    artModel.count().then(function (allNum) {
        artModel.find().limit(5).skip().then(function (result) {
            var skipNum=(Number(req.query.page)-1)*5;
            var tabs=Math.ceil(allNum/result.length);
            var tab=[];
            for(var i=1;i<=tabs;i++){
                tab.push(i);
            }
            res.render('artList',{
                listData:result,
                listTab:tab
            });
        });
    });

});
//显示主页面
app.get('/',function (req,res) {
    artModel.find().then(function (result) {
        res.render('views',{
            data:result
        });
    });
});
//展示详情
app.get('/detail',function (req,res) {
    var listId=req.query.id;
    artModel.findOne({_id:listId}).then(function (result) {
        //console.log(result);
        res.render('detail',{
            item:result
        });
    });
});
//获取到提交页面
app.get('/article',function (req,res) {
    res.render('article');
});
//后端编辑
app.get('/admin/edit',function (req,res) {
   // console.log(req.query.id);
    var listId=req.query.id;
    artModel.findOne({_id:listId}).then(function (result) {
        //console.log(result);
        res.render('artEdit',{
            editData:result
        });
    });
});
//编辑页面中的保存按钮后端处理
app.post('/admin/save',function (req,res) {
    //console.log(1);
    artModel.update({_id:req.body.id},{
        tit:req.body.tit,
        intro:req.body.intro,
        detail:req.body.detail
    }).then(function (result) {
        res.send('保存成功');
    });
});
//前端点击编辑博客
app.get('/admin/change',function (req,res) {
    res.render('article');
});
//前端点击文章列表
app.get('/admin/artList',function (req,res) {
    res.render('artList');
});
//删除数据
app.post('/admin/del',function (req,res) {
    artModel.remove({_id:req.body.id}).then(function (result) {
        res.send('删除成功');
    });
});
//搜索数据
app.post('/admin/search',function (req,res) {
    var searchTit=req.body.tit;//页面中所有tit
    console.log(searchTit);
    var reg=new RegExp(searchTit);//正则匹配
    artModel.find({tit:reg}).then(function (result) {
        console.log(result);
        res.send(result);

    });
});

//连接数据库 端口为27017
mongoose.connect('mongodb://localhost:27017',function (err) {
    if(err){
        console.log('连接失败');
    }else {
        console.log('连接成功');
        app.listen(8083);
    }
})
