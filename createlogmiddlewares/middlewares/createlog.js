/*
 * @Author: msc
 * @Date: 2020-11-25 19:54:05
 * @LastEditors: msc
 * @LastEditTime: 2020-11-25 23:02:02
 * @FilePath: \weekf:\代码\三阶段\week1\day3\project-demo\middlewares\createlog.js
 * @Copyright (C) 2020 msc. All rights reserved.
 * @Description: 
 */
//导入模块
const fs = require("fs");
const express = require("express");

const app = express();
//自定义中间件
const createlog = (req, res, next) => {
    //定义一个数组arr 存放信息并且写入
    let arr = [];
   
        //获取IP地址
        let ip = req.ip;
        let method = req.method;
        let httpr = req.httpVersion;
        let httpt=req.headers['user-agent'];
        let url = req.url;
        arr.push(ip)
        arr.push(method)
        arr.push(httpr)
        arr.push(httpt)
        arr.push(url)
        let time=new Date();
        let year=time.getFullYear();
        let month=time.getMonth()+1;
        let data=time.getDate()
        //写入文件，fs.writeFile()
        fs.appendFile(`./${year}${month}${data}.log`, arr, err => {
            console.log(err);
            next();
        })       
}



//导出
module.exports = createlog;
