var result=function(arr){
    var temp=[];
    for(var i=0;i<arr.length;i++){
        //console.log(Math.sqrt(arr[i]));
        if(arr[i]>0 && Math.sqrt(arr[i])===Math.floor(Math.sqrt(arr[i]))){
            //console.log(arr[i]);
            temp.push(arr[i]);
        }
    }
    return temp;
}
var arr=[2,6,7,-81,64,125,625,400];
console.log(result(arr));