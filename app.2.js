
const fs = require('fs');
const url = require('url')
GetAsset('https://www.baidu.com/img/bd_logo1.png', data => {
    fs.writeFile('百度.png', data);
})
/**
 * 抓取网页资源方法
 * @param {String} sUrl 资源的路径
 * @param {*} success 回调函数
 */
function GetAsset(sUrl, success) {
    var urlObj = url.parse(sUrl);
    var http = '';
    if (urlObj.protocol == 'http:') {
        http = require('http');
    }
    else {
        http = require('https');
    }

    let req = http.request({
        'hostname': urlObj.hostname,
        'path': urlObj.path
    }, res => {
        console.log(res)

        var arr = [];
        res.on('data', buffer => {
            arr.push(buffer);
        });
        res.on('end', () => {
            let b = Buffer.concat(arr);
            success && success(b);

        })

    });

    req.end();
    req.on('error', () => {
        console.log('404了，哥们');
    })
}
/*
let req = http.request({
	'hostname':'img.alicdn.com',
	'path':'/tps/i4/TB1_1BLMXXXXXb3XXXXlkjU.VXX-346-200.jpg_350x1000q90.jpg_.webp'
},res=>{
	var arr =[];
	var str = ''
	res.on('data',buffer=>{
		arr.push(buffer)
		str+=buffer
	});

	res.on('end',()=>{
		let b = Buffer.concat(arr);


		fs.writeFile('tb.jpg',b,()=>{
			console.log('成功了，抓取成功')
		})
		//fs.writeFile('download.html',arr,'utf8');
		//console.log(arr,str)
	});
	//console.log(res)
	//console.log(1)
});

req.end();
*/