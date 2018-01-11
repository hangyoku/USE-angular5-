/**
 * Created by wdg01 on 2018/1/11.
 */

import * as express from 'express'

const app = express();

app.get('/api', (req,res) => {
    res.json({name: 'zhangsan', age: 18});
});

app.get('/api/login', (req,res) => {
    res.json({name: 'lisi', age: 19});
});

const server = app.listen(3000, "127.0.0.1", () => {
    console.log("服务器已启动,地址为：http://127.0.0.1:3000");
})

