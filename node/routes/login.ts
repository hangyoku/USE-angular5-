/**
 * Created by wdg01 on 2018/1/16.
 */
import * as express from 'express'
const router = express.Router();


// 登录get 请求
router.get('/api/login', (req, res) => {
    const json_data = {"name":"zhangsan","pass":"hhhhhhhhhhhhhhhhhh"};
    res.end('123123123asdasdasd');
});

// 登录提交数据请求
router.post('/api/login', (req, res) => {
    const json_data1 = {"name":"node","pass":"asaaaaaaaaaaaaaaa"};
    res.end('123123123');
});

module.exports = router;