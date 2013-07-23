function isPrime(num) {
	for(var i = 1;++i<num;) {
		if(num % i === 0) return false;
	}
	return true;
}

//WAY OFF, work on this!
function factorialize(num) {
	var s = "";
	for(var i = 2;i<num;i++) {
		if(num % i === 0 && isPrime(i)) {
			console.log(i);
			factorialize(num/i);
		}
	}
	return s;
}