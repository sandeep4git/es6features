let arr=[1,1,2];
let myMap= new Map();
for(let i=0;i<arr.length;i++){
    if(myMap.has(arr[i])){
       myMap.set(arr[i],myMap.get(arr[i])+1);
    }
    else{
        myMap.set(arr[i],1);
    }
}

console.log(myMap.keys());

for(let i of myMap.keys()){
    console.log(i);
}


var removeDuplicates = function(nums) {
    let myMap= new Map();
for(let i=0;i<nums.length;i++){
    if(myMap.has(nums[i])){
       myMap.set(nums[i],myMap.get(nums[i])+1);
    }
    else{
        myMap.set(nums[i],1);
    }
}
 return myMap.keys();
};

//console.log("<<<>>>>"+removeDuplicates(arr));

let removeDup=function(arr){
    
    var j=0;
    var temp=[];
    var length=arr.length;
    for(i=0;i<length-1;i++){
        console.log('i:'+i)
        if(arr[i]!==arr[i+1]){
            temp[j]=arr[i];
            j++;
            console.log('j:'+j)
        }
    }
    temp[j]=arr[length-1]; 
    return temp;  
}

console.log(removeDup(arr));

let removeDup2=function(arr){
    var j=0;
    var length=arr.length;
    console.log(length);
    for(let i=0;i<length-1;i++){
        console.log('i'+i);
        if(arr[i]!==arr[i+1]){
            arr[j]=arr[i];
            j++;
            console.log(arr[j]);
        }
    }
    //arr[j]=arr[length-1];
    return arr;
}
console.log(removeDup2(arr));