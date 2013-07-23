/*
	@author:	J.D. Lowe
	@input:		Current prime number
	@output:	Next prime number after the above current
*/

function nextPrime(current) {
	//Always step the nextPrime by just one; it's i itself that will be doing the actual dividing
	var nextPrime = current + 1, i = 2;
	while(nextPrime > i) {
		//if the value is divisible by a number, then add one to nextPrime and reset i back to 2.
		if(nextPrime % i == 0) {
			nextPrime++;
			i = 2;
		}
		else i++;
	}
	return nextPrime;
}

function main() {
	var current = 2;
	while(confirm("Would you like the next prime number?")) {
		console.log(current);
		current = nextPrime(current);
	}
}