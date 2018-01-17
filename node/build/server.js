"use strict";
/**
 * Created by wdg01 on 2018/1/11.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require('body-parser');
var logger = require('morgan');
var util = require('util');
var app = express();
// 使用bodyParser中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 使用中间件记录日志  在控制台上会打印出日志
app.use(logger('dev'));
app.get('/', function (req, res) {
    res.json({ name: 'wangwu', sex: 'male' });
});
app.get('/api', function (req, res) {
    var json_data = { "name": "amita", "pass": "12345" };
    res.json(json_data);
});
// 处理请求
app.post('/api/login', function (req, res) {
    var json_data = req.body;
    res.json(json_data);
});
// 处理404错误
// app.use((req, res, next) =>{
//     const err = new Error('Not Found');
//     err['status'] = 404;
//     next(err);
// });
//
// // 错误处理
// app.use((err, req, res, next) =>{
//     // 设置本地错误信息仅在开发环境中提供
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') ===  'development' ? err: {};
//     // 渲染错误页面
//     res.status(err.status || 500);
//     res.render('error');
//
// });
app.listen(3000, "127.0.0.1", function () {
    console.log("服务器已启动,地址为：http://127.0.0.1:3000");
});
