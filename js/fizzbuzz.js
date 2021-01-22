function fizzBuzz(num_x, num_y) {
	var arr = new Array();
	for(x=1; x<=100; x++){
		if(x%num_x == 0 && x%num_y == 0){
			arr.push('FizzBuzz ');
		} else if(x%num_x == 0){
			arr.push('Fizz ');
		} else if(x%num_y == 0){
			arr.push('Buzz ');
		} else{
			arr.push(x.toString() + ' ');
		}
	}
	return arr;
}

function run() {
	var num_x = document.getElementById('num_x').value;
	var num_y = document.getElementById('num_y').value;
	var result = fizzBuzz(num_x, num_y);
	document.getElementById('results').innerHTML = result;
}