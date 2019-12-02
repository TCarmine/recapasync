const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Async operation 1...');
        reject(new Error('First Operation, Something went wrong'));
        //resolve(1);
    },2000)
});


const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async operation 2...');
        resolve(2);
    },500)
});

// will return a new promise when all the promises in the array are resolved
Promise.all([p1,p2])
  .then(result => console.log(result))
  .catch(err => console.log('Err: ', err.message))