/*
	@author:	J.D. Lowe
	@input:		Number to determine if it is prime or not
	@output:	false if the number is not prime, true if it is.
*/
function isPrime(num) {
    for (var i = 1; ++i < num;) {
        if (num % i === 0) return false;
    }
    return true;
}

/*
	@author:	J.D. Lowe
	@input:		Number to get prime factors of
	@output:	Array of prime numbers that, when multiplied together, result in the inputted number
*/
function factorialize(num) {
    num = Math.floor(num);
    var factors = [];
    if (isPrime(num)) factors.push(num);
    else {
        while (!isPrime(num)) {
            var i = 2;
            while (num % i && i++ < num) {}
            factors.push(i);
            num = Math.floor(num / i);
        }
        factors.push(num);
    }
    return factors;
}