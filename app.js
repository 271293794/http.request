
var http = require('http'),
    fs = require('fs')
const options = {
    hostname: 'www.baidu.com',
    port: 80,
    path: '/img/bd_logo1.png',
    method: 'get'

};
/**
 * 返回客户端请求对象
 */
var req = http.request(options, res => {
    console.log(1)
    // let str = '', arr = [];
    // res.on('data', (chuck) => {
    //     arr.push(chuck)
    //     let imgBuffer=Buffer.concat(arr)
    //     // str += chuck
    //     // console.log(str)
    //     fs.writeFileSync('./百度图标.png', imgBuffer)
        
    // })
})
// 一定要结束请求对象
req.end()