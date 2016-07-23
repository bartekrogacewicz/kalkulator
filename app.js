var main =function () {

	$('#sum').click(function() {
		
		var a = parseNumber('#number_a');
		var b = parseNumber('#number_b');
		var sum = add(a,b);
		printScore(sum);
	});
	$('#sub').click(function(){
		var a = parseNumber('#number_a');
		var b = parseNumber('#number_b');
		var sub = ode(a,b);
		printScore(sub);
	})
	$('#mul').click(function(){
		var a = parseNumber('#number_a');
		var b = parseNumber('#number_b');
		var mul = mno(a,b);
		printScore(mul);
	})
	$('#div').click(function(){
		var a = parseNumber('#number_a');
		var b = parseNumber('#number_b');
		var div = dzi(a,b);
		printScore(div);
	})
}
function checkCommas(temp) {
	if(temp.indexOf(',') > -1) {
		temp.replace(',','.');
	}
	return temp;
}

function add(a,b) {
	var c = a + b;
	return c;
}
function ode(a,b) {
	var c = a - b;
	return c;
}
function mno(a,b) {
	var c = a * b;
	return c;
}
function dzi(a,b) {
	if (b==0) {
		return('You can not divide any number by 0');
	}
	var c = a / b;
	return c;
}
function printScore(score) {
	$('#score_indicator').text(score);
}

function parseNumber(id) {
	var number = $(id).val();
	number = checkCommas(number);
	number = parseFloat(number);
	return number;
}
$(document).ready(main);