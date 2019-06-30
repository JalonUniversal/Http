
const http = require('http');
const url = require('url');
const lg = console.log;
 
// http.get('http://localhost:9001',function(req,res){  
//     var html='';  
//     req.on('data',function(data){  
//         html+=data;  
//     });  
//     req.on('end',function(){  
//         console.info(html);  
//     });  
// });
const option = {
  host: '127.0.0.1:9001',
  port: '9001',
  method: 'GET'
}
// lg('parse: ', url.parse('http://localhost:9001'));
var req = http.request(option, (res) => {
  lg(123);
  res.setEncoding('utf-8');
  res.on('data', (chunk) => {
    lg('chunk: ', chunk);
  });
  res.on('end', () => {
    lg('end');
  })
});

req.on('error', (err) => {
  lg('err', err)
})