let promise1= new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Success!");
    },250);
})
promise1.then((sucessMessage)=>{
    console.log('Yay!'+sucessMessage);
})

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  
  async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
  }

  add1(10).then(v=>{
      console.log(v);
  })

 