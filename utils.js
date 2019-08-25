const defaultOption = {
	url: '',
	method: 'get',
	async: true,
	success: () => {},
	failed: () => {},
	data: null,
	headers: null,
	timeout: 0
};

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

/**
 * 抛出错误事件
 */
function throwError(errorMessage) {
	throw new Error(`[Error] ${errorMessage}`);
}

export {
  defaultOption,
  formateQuery,
  throwError
}


