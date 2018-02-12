function http(option) {
		let xhr;
		let result;
		let method = option.method.toLowerCase() || 'get';
		let url = option.url;
		let async = option.async || true;
		let successCallBack = option.success || function(){};
		let failedCallBack = option.failed || function(){};
		let sendData = option.data || null;
		let headers = option.headers || null;
		let timeout = option.timeout || 0;
		let queryStr = formateQuery(sendData);
	
		if(window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			xhr = new ActiveXObject();
		} else {
			console.error('[Error] Your browser does not support XMLHttpRequest');
			return;
		}
		
		xhr.onreadystatechange = () => {
			if(xhr.readyState === 4) {
				if(xhr.status === 304 || (xhr.status >= 200 && xhr.status < 300)) {
					result = JSON.parse(xhr.responseText);
					successCallBack(result);
				}
			}
		}
		xhr.ontimeout = () => {
		  console.error('[Error] Http request timeout!')
		}
		xhr.onerror = (error) => {
			failedCallBack(error)
		}
		
		if(method === 'get') { url = `${url}?${queryStr}`}

		xhr.open(method, url, async);
		if(method === 'post') {
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			if(headers) {
				for (let k in headers) {
					xhr.setRequestHeader(`${k}`, `${headers[k]}`);
				}
			}
		}
		let postData = method === 'get' ? null : queryStr;
		xhr.send(postData);
}

/**
 * 将数据转换为querystring的形式 
 * eg. { name: 'abc', job: 'doctor'} => "name=abc&job=doctor"
 * @param {Object} object
 */
function formateQuery(object) {
	if(!object) return '';
	let result = '';
	Object.keys(object).forEach(key => {
		result += `${key}=${object[key]}&`;
	});
	return result.substring(0, result.length - 1);
}
