var uniqueCharacters=function(str){
    //console.log(str.split('').sort());
    var str=str.split('').sort();
    for(var i=0;i<str.length;i++){
    //    for(var j=i+1;j<str.length;j++){
    //        console.log('i:'+str[i]+'j:'+str[j])
    //         // if(str[i]===str[j]){
                
    //         //     return false;
    //         //    } 
    //         //    else{
    //         //        return true;
    //         //    } 
    //        }

        if(str[i]==str[i+1]){
             break; 
        }
        
       }
            
    }

console.log(uniqueCharacters("sandeep"));

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => {
    console.log(init.length +' ' +current);
    if (init.length === 0 || init[init.length - 1] !== current) {
        init.push(current);
    }
    return init;
}, []);

console.log(result);