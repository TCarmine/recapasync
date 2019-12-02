// Unit Test: usefull to have a Promise that is already created
// ex check is connection with web server is established

//Promise that is already resolved
const p = Promise.resolve({"id":1, "name": "basic"});

p.then(p => console.log(p));

//a Promise that is already rejected
// new Error will include all the call stack for the error
const p2 = Promise.reject(new Error('reason for rejection...'));

p2.catch(p => console.log(p2));