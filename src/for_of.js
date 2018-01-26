//for of loop
let obj={
    obj1:[
    "firstName",
    "School"
]
}

//for of loop for function
let foo = function*(){
    yield 1;
    yield 2;
    yield 3;
}

for(let i of obj.obj1){
    console.log(i);
}
for(let i of foo()){
    console.log(i);
}

//for of loop example
var str="sandeep";
for(i of str){
    console.log(i)
}

// for in loop
let obj2={
    "1":"a",
    "2":"b",
    "3":"c",
    "4":"d",
}

for (let i in obj2){
    console.log(i);
}
//for an array, for in will give you te index and properties 
let arr= [3,5,7];
arr.foo ="sandeep";

for (let i in arr ){
    console.log(i);
}

