/* Generators are a type of function call allows use to 
A GeneratorFunction is a special type of function that works as a factory for iterators. When it is executed it returns a new Generator object. A function becomes a GeneratorFunction if it uses the function* syntax.
*/

function* myGenerator(){
    yield 'Milk';
    yield 'Cheese';
    yield 'Chips';
}

let shopping =myGenerator();
//console.log(myGenerator().next());
console.log(shopping.next());
console.log(shopping.next());
console.log(shopping.next());
console.log(shopping.next());
console.log(shopping.next());


function makeIterator(array) {
    var nextIndex = 0;
    
    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true