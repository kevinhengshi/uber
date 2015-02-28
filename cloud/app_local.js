var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static')
var app = express();

require('ejs') 

app.set('views','cloud/views');   // 设置模板目录
app.set('view engine', 'ejs');    // 设置 template 引擎
app.use(bodyParser.urlencoded({ extended: true }));
app.use(serveStatic('public'))

app.listen(3000);