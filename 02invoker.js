
function invoker(name, mothod) {
	return function (obj){
		var func = obj[name];
		if(obj && obj[name] && (obj[name]===mothod))
			return func.apply(obj, Array.prototype.slice(arguments, 1));
		else 
			return undefined;
	}
}

var arr1 = [1, 2, 3];

var rev = invoker('reverse', Array.prototype.reverse);

var ret = rev(arr1);

console.log(ret);