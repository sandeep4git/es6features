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

var result1=function(num){
//console.log(num);
var a,b,num,temp=0;
    b=num;
while(num>0){ 
    a=num%10;
    num=parseInt(num/10);
    temp=temp*10+a;
}
    return (b===temp ? "The given number is palindrome":"The Given number is not palindrome")
}

console.log(result1(12321));
