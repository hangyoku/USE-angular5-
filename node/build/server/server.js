"use strict";
/**
 * Created by wdg01 on 2018/1/11.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require('body-parser');
var logger = require('morgan');
var login = require('../routes/login');
var app = express();
// 使用中间件记录日志
app.use(logger('dev'));
// 使用登录路由
app.use('/api/login', login);
app.listen(3000, "127.0.0.1", function () {
    console.log("服务器已启动,地址为：http://127.0.0.1:3000");
});
