/*
	@author:	J.D. Lowe
	@input:		String to be reversed
	@output:	Reversed string
*/

function reverse(str) {
	return str.split("").reverse().join("");
}

/*
	@author:	J.D. Lowe
	@input:		n/a
	@output:	n/a
*/

function main() {
	var str = "I am the very model of a modern major general";
	console.log(str);
	console.log(reverse(str));
}