const arr=['san','asdasd','I','asdasdfasdf','rt'];
  const result=arr.reduce(function(a,b){
      return a.length<b.length?a:b;
  })

  console.log(result);


const arr1=[1,4,6,7,66,78,89];
const result1=arr1.reduce(function(a,b){
    console.log(b);
    return a+b;
})  

console.log(result1);

const result2=[0, 1, 2, 3, 4].reduce(
    function (accumulator,currentValue) {
      return accumulator + currentValue;
    }
  );

  console.log(result2);

  var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(a, b) {
      return a.concat(b);
    },
    []
  );
  
  console.log(flattened);

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countedNames);

// for(var prop in countedNames){
//     console.log(countedNames[prop])
// }

