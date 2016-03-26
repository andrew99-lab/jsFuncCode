
function valitor(){
	var valitors = Array.prototype.slice(arguments);
	var size = valitors.length;

	return function (){
		for(var i=0; i<size; i++){
			if(!valitors[i](arguments)){
				return false;
			}
		}
		
		return true;
	}	
}

function always(value){
	return function (){
		return value;
	}
}

var alwaysTrue = always(true);
var alwaysFalse = always(false);

var checkTrue = valitor(alwaysTrue);

var ret = checkTrue(false);

console.log(ret);

