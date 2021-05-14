// compare 3 value for finding max value

var businessMan = 450;
var minister = 780;
var doctor = 980;

if (businessMan > minister) {
    if (businessMan > doctor){
        console.log('Businessman is rich');
    } else {
        console.log('Doctor is rich.')
    }
} else {
    if (minister > doctor) {
        console.log('Minister is rich');
    } else {
        console.log('Doctor is rich');
    }
}

// same program in Function

function max (value1, value2, value3) {
    
    if (value1 > value2) {
        if (value1 > value3){
            console.log(value1 + ' is max');
        } else {
            console.log(value3 + ' is max.')
        }
    } else {
        if (value2 > value3) {
            console.log(value2 + ' is max');
        } else {
            console.log(value3 + ' is max');
        }
    }
}

// Testing

var maxValue = max(53, 97, 41);
console.log(maxValue)