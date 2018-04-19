//Lexical Scoping:

function init(){
    var name="Sandeep";
    function displayName(){
        console.log(name);
    }
    displayName();
}

init();

//Closure:

function makeFunc(){
    var name='Mozilla';
    function display(){
        console.log(name);
    }
    return display;
}

var myFunc=makeFunc();
myFunc();


function makeAdder(x){
    return function(y){
        return x+y;
    }
}

var add5=makeAdder(5);

console.log(add5(2));

