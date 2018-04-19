// 'use strict'
// var a=10;
// function User(a,b,c){
//     console.log('adfasdf');
// };

// console.log(User(1,2,3));

// var object={
//     a:'12',
//     b:'23',
//     a:'15'
// };

// // const arr = [10, 12, 15, 21];
// // for (var i = 0; i < arr.length; i++) {
// //   setTimeout(function() {
// //     console.log('Index: ' + i + ', element: ' + arr[i]);
// //   }, 3000);
// // }

// // for (var i = 0; i < 3; i++) {
// //     setTimeout(function() { 
// //         console.log(i); }, 1000);
// //   }

// function multiply(x){
//     return function(y){
//         return x*y;
//     }
// }

// console.log('<<<>>>'+multiply(5)(6));

// Array.prototype.duplicate=function(){
//     return [...arr1,...arr1]
// }

// var arr1=[1,2,3,4,5];
// console.log(arr1.duplicate());

// class User1 {
//     constructor(){
//         this.firstName='sandeep';
//     }
// }
// var personalUser=new User1();
// personalUser.lastName='Chandrappa'

// class Bus extends User1{
//     constrtuctor(){
//         //super();
//     }
// }
// var buz=new Bus();
// console.log(buz);


/*

down vote
The statement "use strict"; instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.

List of features (non-exhaustive)
Disallows global variables. (Catches missing var declarations and typos in variable names)

Silent failing assignments will throw error in strict mode (assigning NaN = 5;)

Attempts to delete undeletable properties will throw (delete Object.prototype)

Requires all property names in an object literal to be unique (var x = {x1: "1", x1: "2"})

Function parameter names must be unique (function sum (x, x) {...})

Forbids octal syntax (var x = 023; some devs assume wrongly that a preceding zero does nothing to change the number.)

Forbids the with keyword

eval in strict mode does not introduce new variables

Forbids deleting plain names (delete x;)

Forbids binding or assignment of the names eval and arguments in any form

Strict mode does not alias properties of the arguments object with the formal parameters. (i.e. in function sum (a,b) { return arguments[0] + b;} This works because arguments[0] is bound to a and so on. )

arguments.callee is not supported 
*/

function getTheMostRepeatedLetter(str) {
    var str1 = str.split('');
    var count = 1;
    var max = 0;
    var maxLetter = 0;
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] == str1[i - 1]) {
            count++;
        }
        else {
            if (count > max) {
                max = count;
                maxLetter = str[i - 1];
            }
            count = 1;
        }
    }

    if (count > max) {
        max = count;
        maxLetter = str1[str1.length - 1];
    }
    return ("Maximum repeated letter is " + maxLetter + " and it has occured" + max + " times!");

}

console.log(getTheMostRepeatedLetter('Sandeep'));
