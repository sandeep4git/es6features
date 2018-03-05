var result =function(str){
    //var str=str.split('');
    var temp=[];
    for(var i=str.length-1;i>=0;i--){
        temp.push(str[i]);
    }
    return temp.join('');
}
console.log(result("sandeep"))