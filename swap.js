// swap 
// 1st
var a = 5;
var b = 7;
console.log('Before 1st swap: a = ',a,', b = ',b);
var temp = a;
var a = b;
var b = a;
console.log('After 1st swap: a = ',a,', b = ',b);

// 2nd
var x = 9;
var y = 11;
console.log('Before 2nd swap: x = ',x,', y = ',y);
x = x + y;
y = x - y;
x = x - y;
console.log('After 2nd swap: x = ',x,', y = ',y);

// 3rd
var p = 3;
var q = 5;
console.log('Before 3rd swap: p = ',p,', q = ',q);
[p, q] = [5, 3];
console.log('After 3rd swap: p = ',p,', q = ',q);
