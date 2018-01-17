"use strict";
/**
 * Created by wdg01 on 2018/1/11.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger = require('morgan');
var login = require('../routes/login');
var app = express();
// 使用中间件记录日志
app.use(logger('dev'));
// 使用登录路由
app.use('/api/login', login);
// 处理404错误
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// 错误处理
app.use(function (err, req, res, next) {
    // 设置本地错误信息仅在开发环境中提供
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // 渲染错误页面
    res.status(err.status || 500);
    res.render('error');
});
app.listen(3000, "127.0.0.1", function () {
    console.log("服务器已启动,地址为：http://127.0.0.1:3000");
});
