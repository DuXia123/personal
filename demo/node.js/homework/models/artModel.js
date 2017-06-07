/**
 * Created by Administrator on 2017/5/22 0022.
 */
var mongoose = require ('mongoose');
var artSchema = require('../schema/artSchema');

var artModel = mongoose.model('artModel',artSchema);

module.exports=artModel;