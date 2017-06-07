/**
 * Created by Administrator on 2017/5/22 0022.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;
//新建表结构
var artSchema = new schema({
   tit :String,
    intro : String,
    detail : String
});
//抛出数据
module.exports=artSchema;
