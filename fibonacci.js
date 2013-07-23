/*
	@author:	J.D. Lowe
	@input:		Current iteration of the Fibonacci sequence
	@output:	The previous two values added together in said Fibonacci sequence
*/
function fibo(num) {
	if(num <= 2) return 1;
	else return fibo(num - 1) + fibo(num - 2);
}

/*
	@author:	J.D. Lowe
	@input:		n/a
	@output:	n/a
*/

function main(count) {
	//var count = 8;	//using 8 as an example, it can be user entered;
	var i = 1;
	while(count >= i) {
		console.log(fibo(i));
		i++;
	}	
}