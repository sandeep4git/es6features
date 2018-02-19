var getTheMostRepeatedLetter=function(str){
    var str=str.replace( /\s/g, '');
    console.log(str);
    var count={};
    var max='';
    for(var i=0;i<str.length;i++){
        var key= str[i];
        
        if(!count[key]){
            count[key]=0;
        }
        count[key]++;
        if(max== '' || count[key] > count[max]){
            max=key;
        }
    }
    return max;
}

console.log(getTheMostRepeatedLetter('This is my favorite string'));