console.log('Before');

getUser(1,(user)=>{
    console.log('User', user);
});

console.log('After');

function getUser(id, callback){
    setTimeout(()=>{
        console.log('Reading user info from DB...');
        callback({id:id, gitHubUsername:'carmine'});
        return;
      },2000);
}