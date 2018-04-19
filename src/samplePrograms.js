function sum(x,y,z){
    return x+y+z;
  }
  
  let num=[1,2,3,4,5,6,7];
  console.log(sum(...num));
  
  console.log(Math.max.apply(null,num));
  console.log(Math.max(...num));
  
  const result = num.filter(word => word < 6);
  
  console.log(result);
  
  var result1=num.reduce(function(a,b){
    return a+b;
  })
  
  console.log(result1);
  
  var arr=['sandeep','Daya','Sriram','a','Anand','don'];
  
  var result2=arr.reduce(function(a,b){
    return a.length<b.length?a:b
  })
  console.log(result2);
  
  var arr1=[1,1,3,5,6,6,7,1]
  arr1=arr1.sort();
  
  temp=[];
  
  for(var i=0;i<arr1.length;i++){
    if(arr1[i]!==arr1[i+1]){
      temp.push(arr1[i])
    }
  }
  
  console.log(temp);
  
  var mySet = new Set();
  for(var i=0;i<arr1.length;i++){
   mySet.add(arr1[i]);
  }
  
  for (let item of mySet) console.log(item);
  
  //Remove duplicates from an array.
  
  var result3=arr1.sort().reduce((a,b) =>{
   const length=a.length;
    if(length===0 || a[length-1]!==b){
       a.push(b);
       }
    return a;
    
  },[])
  
  console.log(result3);
  
  let result4 = arr1.sort().reduce((accumulator, current) => {
      const length = accumulator.length
      if (length === 0 || accumulator[length - 1] !== current) {
          accumulator.push(current);
      }
      return accumulator;
  }, []);
  
  
  console.log(result4);
  
  
  var arr5=[{name:"sandeep",s:"true"},{name:"supriya",s:"true"},{name:"roopa",s:"false"}];
  
  var result5=arr5.filter(ele=>ele.s==="true")
  
  
  console.log(result5);
  
  
  var arr6=[1,2,4,0,89,67,0, 7 ,0, 9 ];
  
  var result6=arr6.filter(ele=>ele!==0);
  console.log(result6);
  
  for(var i=0;i<arr6.length;i++){
  
  }
