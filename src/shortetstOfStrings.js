let arr=["Strawberry","Orange","Apple","Banana",'Pinapple'];

// let myMap=new Map();
// for(let i=0;i<arr.length;i++){
    
//     myMap.set(arr[i],arr[i].length);
// }

let min=Math.min(...arr.map(function(str){
    return str.length;
}));
console.log(min);


let short=arr.reduce(function(a,b){
    //console.log(a,b);
    return a.length<=b.length?a:b;
})
console.log(short); 

var stringRotation = function(string1, string2) {
    if (string1.length !== string2.length) {
      return false;
    }
    return (string2 + string2).includes(string1); // one call of isSubString
  };
  console.log(stringRotation('waterbottle', 'erbottlewat'), true);

