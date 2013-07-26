/*
	@author:	J.D. Lowe
	@input:		width, height, and dollar amount of floor tiles
	@output:	String with the calculated amounts
*/

function main() {
	var w = prompt("Enter the width of the floor plan.", "");
	var h = prompt("Enter the height of the floor plan.", "");
	var cost = prompt("Enter the cost of the tiles, without the dollar sign.", "");
	return "For " + (w * h) + " square feet of tile, you will need to spend $" + (w * h * cost) + ".";
}