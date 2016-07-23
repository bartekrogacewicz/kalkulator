var main =function () {

	$('#sum').click(function() {
		
		var a = parseNumber('#number_a');
		var b = parseNumber('#number_b');
		var sum = add(a,b);
		printScore(sum);
		printHistory(a,b,sum, '+');
	});
	$('#sub').click(function(){
		var a = parseNumber('#number_a');
		var b = parseNumber('#number_b');
		var sub = ode(a,b);
		printScore(sub);
		printHistory(a,b,sub,'-');
	})
	$('#mul').click(function(){
		var a = parseNumber('#number_a');
		var b = parseNumber('#number_b');
		var mul = mno(a,b);
		printScore(mul);
		printHistory(a,b,mul,'*');
	})
	$('#div').click(function(){
		var a = parseNumber('#number_a');
		var b = parseNumber('#number_b');
		var div = dzi(a,b);
		printScore(div);
		printHistory(a,b,div,'/');
	})
	$('#clearhistory').click(function (){
		clearHistory();
	})
	$('#pwr').click(function (){
		var a = parseNumber('#number_a');
		var b = parseNumber('#number_b');
		var pow = pwr(a,b);
		printScore(pow);
		printHistory(a,b,pow,'power');
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
function pwr(a,b) {
	var z = a;
	for (var i=1; i < b; i++) {
		z = z * a;

	}
	return z;
}
function printScore(score) {
	$('#score_indicator').text(score);
}
function printHistory(a,b,score,typeofaction) {
	$('#history').append('<p>' + a + ' ' + typeofaction + ' ' + ' ' + b + ' ' + '=' + ' ' + score + '</p>');
}

function parseNumber(id) {
	var number = $(id).val();
	number = checkCommas(number);
	number = parseFloat(number);
	return number;
}
function clearHistory() {
	$('#history').empty();
}



$(document).ready(main);