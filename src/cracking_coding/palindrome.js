var result=function(arr){
    var temp=[];
    for(var i=0;i<arr.length;i++){
       if(arr[i]==arr[i].split('').reverse().join('')){
        temp.push(arr[i]);
       }
    }
    return temp;
}
var arr=["sandeep","madam","abcba"]
console.log(result(arr));