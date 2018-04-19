//Different ways of creating Objects

var d = new Object();

var a =Object.create(null);

var b={};


var Obj = function(name){
    this.name=name;
}

var c = new Obj('Hello!');

class myObject {
    constructor (name){
        this.name=name;
    }
}

var e = new myObject('Hello!');

var l = new function(){
    this.name='Hello!';
}

var list = [{name:'Sandeep',email:'sandy@gmail.com'},{name:'Supriya',email:'supriya@gmail.com'}];
var Obj1={};
for(var i=0;i<list.length;i++){
    Obj1[list[i].name]=list[i].email;
}

console.log(Obj1);