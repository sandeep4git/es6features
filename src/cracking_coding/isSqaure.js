var result=function(arr){
    var temp=[];
    for(var i=0;i<arr.length;i++){
        //console.log(Math.sqrt(arr[i]));
        if(arr[i]>0 && Math.sqrt(arr[i])%1===0){
            //console.log(arr[i]);
            temp.push(arr[i]);
        }
    }
    return temp;
}
var arr=[2,6,7,-81,64,125,625,400];
console.log(result(arr));

var result1=function(arr){
for(var i=0;i<arr.length;i++){
return (Math.sqrt(arr[i]) %1===0)? "Square":"Not Square"
}    
}


console.log(result1(arr));