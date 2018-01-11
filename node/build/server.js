"use strict";
/**
 * Created by wdg01 on 2018/1/11.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/api', function (req, res) {
    res.json({ name: 'zhangsan', age: 18 });
});
app.get('/api/login', function (req, res) {
    res.json({ name: 'lisi', age: 19 });
});
var server = app.listen(3000, "127.0.0.1", function () {
    console.log("服务器已启动,地址为：http://127.0.0.1:3000");
});
