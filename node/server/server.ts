/**
 * Created by wdg01 on 2018/1/11.
 */

import * as express from 'express'

const bodyParser = require('body-parser');
const logger = require('morgan');
<<<<<<< HEAD
const login = require('../routes/login');
const app = express();
// 使用中间件记录日志
app.use(logger('dev'));


// 使用登录路由
app.use('/api/login', login);

=======
const util = require('util');
const app = express();

// 使用bodyParser中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 使用中间件记录日志  在控制台上会打印出日志
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.json({name: 'wangwu', sex: 'male'});
});
app.get('/api', (req, res) => {
    const json_data = {"name": "amita", "pass": "12345"};
    res.json(json_data);
});

// 处理请求
app.post('/api/login', (req, res) => {
    let json_data = req.body;
    res.json(json_data);
});
>>>>>>> 6aacf5802b72bb78cafb4cfcd0814458da2bcf27


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

app.listen(3000, "127.0.0.1", () => {
    console.log("服务器已启动,地址为：http://127.0.0.1:3000");
});

