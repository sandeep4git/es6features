var primeCheck1=function(n){
    for(var i=2;i<Math.floor(Math.sqrt(n));i++){
        if((n%i)==0){
            return "The given number is not prime!";;
            break;
        }
    } 
    if(i===Math.floor(Math.sqrt(n+1))){
        return "Prime number!";
    }
}

var primeCheck2=function(n){
    for(var i=2;i<n;i++){
        if((n%i)==0){
            return "The given number is not prime!";
            break;
        }
    } 
    if(i===n){
        return "Prime number!";
    }
}

console.log(primeCheck1(29));
console.log(primeCheck2(113));