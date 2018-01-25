// destructuring 

var foo = {
    bar1: 1,
    bar2: 2
}
var { bar1 } = foo;
console.log(foo);

var cars = ["BMW", "TOYOTA", "KIA", "FORD"];

var [german, japanese, korean, US] = cars;
console.log(US);

//Template String

var str = `Hi,I am Sandeep.
        I would like to request you to please get me a new MackBook Pro.
        The Cost of teh MacBook Pro would be around $1250.
`;

console.log(str);

//Block Scope:
let a = 1;
let b = 1;
if (a = 1) {
    let b = 2;
    console.log("value of 'b' within if block " + b);
}
console.log("value of 'b' outside if block " + b);

class Parent {
    // age = 34;
    constructor() {

    }
    foo() {

    }
    bar() {

    }
}

var parent = new Parent();
parent.foo();

class Child extends Parent {
    constructor() {
        super()
    }
    baz() {

    }
}
var child = new Child();
child.baz();

//arrow functions
var func1 =(a,b)=>{
    return a+b;
}
// func2 ((a,b) => a+b);
// console.log();

var module ={
    age:30,
    foo:function(){
        setTimeout(()=>{
            console.log(this.age);
            // If we use arrow functions, we need not to use bind function to bind
            // This is called Lexical scope.
        },6000)   
    }
};
module.foo();


/*
import and exports.Need not to use modeule.exports to export any function. 
 example:
 export var foo1=3;
 export function bar(){
 }

For Import need no to use require 
We can just do this.
import {bar,foo1} from "myModule";
*/

//Generator functions

async function sampleAsync(){
    await module.foo();
    console.log('excuting the async function!');
}

sampleAsync();

//Default + Rest +Spread
function f(x, y=12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
  }
  //f(3) == 15
  //The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
  function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10

//Displaying the Max number in an Array using Spread Operator.
let numbers=[1,4,6,9,4,6,78];
let max= Math.max(...numbers);

console.log('Max Number within the Array! '+max);