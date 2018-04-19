var arr=[1,3,4,5,6,1,2,3,4,4,4,5,6,3];

var myMap= new Map;

for(var i=0;i<arr.length;i++){
    if(!myMap.has(arr[i])){
    myMap.set(arr[i],1);
    }
    else {
        myMap.set(arr[i],myMap.get(arr[i])+1);
    }
}

for (var [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value);
  }

  console.log(Math.max(...myMap.values()));
