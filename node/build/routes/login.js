"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by wdg01 on 2018/1/16.
 */
var express = require("express");
var router = express.Router();
// 登录get 请求
router.get('/api/login', function (req, res) {
    var json_data = { "name": "zhangsan", "pass": "hhhhhhhhhhhhhhhhhh" };
    res.end('123123123asdasdasd');
});
// 登录提交数据请求
router.post('/api/login', function (req, res) {
    var json_data1 = { "name": "node", "pass": "asaaaaaaaaaaaaaaa" };
    res.end('123123123');
});
module.exports = router;
