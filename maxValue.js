// Max value finder from a array

var number = [45, 56, 98, 78, 14, 23, 1, 21, 11];
var maxNumber = number[0];
for (var i = 0; i < number.length; i++) {
    newElement = number[i];
    if(newElement > maxNumber) {
        maxNumber = newElement;
    }
}
console.log(maxNumber)