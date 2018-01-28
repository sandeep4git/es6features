//for of loop
let obj = {
    obj1: [
        "firstName",
        "School"
    ]
}

//for of loop for function
let foo = function* () {
    yield 1;
    yield 2;
    yield 3;
}

for (let i of obj.obj1) {
    console.log(i);
}
for (let i of foo()) {
    console.log(i);
}

//for of loop example
var str = "sandeep";
for (i of str) {
    console.log(i)
}

// for in loop
let obj2 = {
    "1": "a",
    "2": "b",
    "3": "c",
    "4": "d",
}
for (let i in obj2) {
    console.log(i);
}
const data = {
    sonia: true,
    maria: false,
    john: false,
    michael: true
}
// for (const [key, value] of Object.entries(data)) {
//     console.log(`${value}`);
// }
for (let i in data) {
    console.log(i);
}

//for an array, for in will give you te index and properties 
let arr = [3, 5, 7];
arr.foo = "sandeep";

for (let i in arr) {
    //console.log(i);
}

var data1 = function (data) {
    for (let i in data) {
        return i;
    }
}
var arr1=Object.keys(data).map((keyName, keyIndex)=> keyName);
console.log(arr1);
