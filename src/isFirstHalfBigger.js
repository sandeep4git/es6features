function isFirstHalfBigger(num){
    //console.log((num).toString(2));
    var num=(num).toString(2);
    var first=[];
    var second=[];
   for(var i=0;i<num.length;i++){
        if(i<num.length/2){
            first.push(num[i]);            
        }
        else {
            second.push(num[i]);
        }
   }
var first=parseInt(first.join(''), 2);
var second=parseInt(second.join(''), 2);
return first>second?'true':'false';
}

console.log(isFirstHalfBigger(231));