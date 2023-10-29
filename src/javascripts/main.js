//TODO - Your ES6 JavaScript code (if any) goes here
//import "bootstrap"

// getMax function with 3 numbers
function getMax(x,y,z){
    let max = 0;
    if (x > y) {
        max = x;
    }
    else {
        max = y;
    }
    if (z > max) {
        max = z;
    } 
    return max;
}
getMax();

console.log(getMax(45,34,23))

// getMin function with 3 numbers
function getMin (x,y,z) {
    let min = 0;
    if (x < y) {
        min = x;
    }
    else {
        min = y;
    }
    if (z < min) {
        min = z;
    }
    return min;
}

getMin();
console.log(getMin(5,1,4));

// getMean function for average 
function getMean(x,y,z) {
    return (x + y + z) / 3;
}

console.log(getMean(9,11,7));

// Compare word
function compare(word1, word2) {
    let val = 0;
    if (word1 == word2) {
        val = 0;
    }
    else if (word1 > word2) {
        val = 1;
    }
    else {
        val = -1;
    }
return val;
}

console.log(compare('julio','lupe'));

// getCharPerLine funtion for boolean
function getCharPerLine(str,indent) {
    str = str.replace(/ /g,'');
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}
console.log(getCharPerLine('Hello World!'));

// arrow function 
function arrow(size) {
    for (let i = 1; i < size; i ++) {
        for (let c = 0; c < size; c ++){
        console.log("*");
    }
    console.log("\n");
}
for (let i = 1; i <= size -1; i++) {
    for (let c = 0; c < size -1; c++) {
        console.log("*");
    }
    console.log("\n");
}
}

console.log(arrow(3));