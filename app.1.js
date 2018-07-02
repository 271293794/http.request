
var fs = require('fs'),
    url = require('url'),
    sUrl = '',
    http = {},
    oUrl = {};
sUrl = 'https://www.baidu.com/img/bd_logo1.png'
oUrl = url.parse(sUrl)
if (oUrl.protocol == 'http:')
    http = require('http')
else
    http = require('https')

const options = {
    hostname: oUrl.hostname,
    path: oUrl.path,
    method: 'get'

};
/**
 * 返回客户端请求对象
 */
var req = http.request(options, res => {
    console.log(1)
    let arr = [];
    res.on('data', (chuck) => {
        arr.push(chuck)


    })
    res.on('end', () => {
        let imgBuffer = Buffer.concat(arr)
        fs.writeFileSync('./百度图标1.png', imgBuffer)
        console.log(res.headers.location)
    })

})
// 一定要结束请求对象
req.end()