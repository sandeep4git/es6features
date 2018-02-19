var arr=[3,2,2,3];
// var removeElement=function(arr,val){
//     arr.reduce(function(a,b){
//         if(a!==val){
//             return ;    
//         }
//         console.log(a);
//         return b;
//     })    
// };

// var map1=arr.map(function(a){
//     if(a===)
//     return ;
// });
// console.log(map1);

var removeEle=function(arr,val){
    var temp=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==val){
            temp.push(arr[i]);
        }
    }
    return temp
}
console.log(removeEle(arr,3));

var removeElem=function(arr,val){
    var j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==val){
            arr[j]=arr[i];
            j++;
        }
    }
    return arr;
}
console.log(removeElem(arr,3));
