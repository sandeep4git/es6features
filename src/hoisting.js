// res();
// var res=function(){ console.log('123')};

// A();
// function A(){ console.log('A')};

function count(str,char){
    var str=str.split('');
    var result=str.filter(function(x){
        return x===char;
    })
    return result.length;
}

console.log(count("sandeep","e"));

var arr=[1,2,3,4,5,6,8,2];
console.log();

function dup(arr){
    var result=[];
    var arr=arr.sort();
    for(var i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(dup(arr));

function sum(arr){
    var result1=arr.reduce(function(pre,cur){
        return pre+cur;
    },0)
    return result1;
}
console.log(sum(arr));
var arr2=['sandeep','sunil','shiv','assfsdfs']
console.log(arr2.reduce((a,b)=>{return a.length<b.length?a:b}))