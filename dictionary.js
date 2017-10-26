function merge(dict1, dict2, decision_func) {
	let ob = dict1; 
	let keys = Object.keys(dict2);	

	for (let key of keys) {
		let value1 = ob[key];
		let value2 = dict2[key];

		if (!value1) {
			ob[key] = value2;
		}
		else if (typeof value2 === 'object' && value2 !== null 
				&& typeof value1 === 'object' && value1 !== null) {
			merge(value1, value2, decision_func)
		}
		else if (decision_func) {
			ob[key] = decision_func(value1, value2);
		}
	}

	return ob;

} 

module.exports = merge