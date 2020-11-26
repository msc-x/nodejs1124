/*
 * @Author: msc
 * @Date: 2020-11-25 19:49:32
 * @LastEditors: msc
 * @LastEditTime: 2020-11-25 22:12:08
 * @FilePath: \weekf:\代码\三阶段\week1\day3\project-demo\07_zdyzj.js
 * @Copyright (C) 2020 msc. All rights reserved.
 * @Description: 
 */
//导入模块
const expreess=require("express")
//创建实例
const app=expreess();
//导入自定义中间件
const createlog =require("./middlewares/createlog")
//使用中自定义中间件
app.use(createlog)



//监听路由
app.get("/get", (req, res) => {
    console.log(req.body);
    
    
    
});



//启动服务
app.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080")
})