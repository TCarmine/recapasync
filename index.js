console.log('Before');

getUser(1,(user)=>{
    getRepository(user.gitHubUsername,(repos)=>{
       getCommits('Carmine',)
    });
}); 
console.log('After');

function getCommits(getUser, callback){
    setTimeout(()=>{
            let commits = ['ahagsd','ahshgegeh','jeheee'];
            callback({commits});
            return;
    },2000); 
};

function getUser(id, callback){
    setTimeout(()=>{
        console.log('Reading user info from DB...');
        callback({id:id, gitHubUsername:'carmine'});
        return;
    },2000);
};

function getRepository(username,callback){
   setTimeout(()=>{
       let repos= ['repo1','repo2','repo3'];
       //here the array need to be wrapped otherwise callback is seen as a function
       // and not a callback
       callback({repos});
       return;
   },2000);
}