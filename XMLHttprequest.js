import {
  defaultOption,
  formateQuery,
  throwError
} from './utils';

export function http(option) {
		option = Object.assign({}, defaultOption, option);

		let { 
			method, 
			url, 
			async,
			success: successCallBack, 
			failed: failedCallBack, 
			data: sendData, 
			headers, 
			timeout
		} = option;

		let xhr;
		let result;
		method = method.toLowerCase();
		let queryStr = formateQuery(sendData);
		let postData = null;
	
		if(!window.hasOwnProperty('XMLHttpRequest')) {
			throwError('Your browser does not support XMLHttpRequest Ojbect');
		}
		// 实例化 XMLHttpRequest
		xhr = new XMLHttpRequest();
		// 监听状态改变
		xhr.onreadystatechange = () => {
			if(xhr.readyState === 4) {
				if(xhr.status >= 200 && xhr.status < 300) {
					result = JSON.parse(xhr.responseText);
					successCallBack && successCallBack(result);
				}
			}
		}
		// 监听超时事件状态
		xhr.ontimeout = () => {
		  throwError('Http request timeout!');
		}
		// 监听请求失败事件
		xhr.onerror = (error) => {
			failedCallBack && failedCallBack(error);
		}
		
		if(method === 'get') { url = `${url}?${queryStr}`}
		xhr.open(method, url, async);

		if(method === 'post') {
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			postData = null;
			if(headers) {
				for (let k in headers) {
					xhr.setRequestHeader(k, headers[k]);
				}
			}
		} else if(method === 'get') {
			url = `${url}&${Date.now()}`
			postData = queryStr;
		}

		xhr.send(postData);
}


