var http = require('http');
var https = require('https');
var url = require('url');
const lg = console.log;

const config = {
  url: 'https://wwww.baidu.com:80',
  method: 'GET',
  headers: {
    'Content-Type': 'text/html'
  }
}

var parseUrl= url.parse(config.url);
lg('parseUrl: ', parseUrl);
var mergeOption = {};
mergeOption.protocol = parseUrl.protocol || 'http';
mergeOption.hostname = parseUrl.hostname || '';
mergeOption.port = parseUrl.port || 80;
mergeOption.search = parseUrl.search || '';
mergeOption.method = config.method.toUpperCase() || 'GET';
mergeOption.headers = config.headers || {};
lg(mergeOption);


var isHttps = parseUrl.protocol === 'https:';
const option = {
  hostname: 'localhost',
  port: 9001,
  method: 'GET',
  headers: {
    'Content-Type': 'text/html',
    'Content-Length': 40,
    'referer': 'www.sina.com'
  }
}
var protocolBrand = isHttps ? https : http;
lg('protocolBrand: ', protocolBrand);
var req = protocolBrand.request(mergeOption, res => {
  res.setEncoding('utf8');
  res.on('data', chunk => {
    lg(chunk);
  });
});

req.on('error', e => {
  lg('e: ', e)
});

req.end();