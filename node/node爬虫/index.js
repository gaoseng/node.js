
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.get('/',function(res,req){
	request('http://www.jikexueyuan.com/',function(error,response,body){
		if(!error&&response.statusCode==200){
			$ = cheerio.load(body);   //类似jQuery里面的$符 
			console.log($('.story-content p').text());
		}
	});
});


//https://www.baidu.com/robots.txt    后面加上robots.txt指这些东西不让动








app.listen(3000,function(){
	console.log('爬虫服务器已启动');
});













