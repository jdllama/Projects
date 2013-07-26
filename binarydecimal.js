/*
	@author:	J.D. Lowe
	@input:		Integer that needs changed into binary.
	@output:	String representation of said integer.
*/

function decimalToBinary(decimal) {
	var binary = "";
	var i = 1;
	while((i*=2) <= decimal) {}
	if(i !== decimal)	i /= 2;
	while(i > 1) {
		if(decimal - i >= 0) {
			binary += "1";
			decimal -= i;
		}
		else {
			binary += "0";
		}
		i /= 2;
	}
	if(decimal == 1) binary += "1";
	else binary += "0";
	return binary;
}

/*
	@author:	J.D. Lowe
	@input:		String to be converted to decimal.
	@output:	Integer representation of the binary given.
*/

function binaryToDecimal(binary) {
	var decimal = 0;
	for(var i = 1, charAt = binary.length - 1;charAt >= 0; charAt--, i *= 2) {
		if(binary[charAt] === "1") decimal += i;
	}
	return decimal;
}