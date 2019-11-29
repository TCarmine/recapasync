console.log('Before');

//let commits = ['ahagsd','ahshgegeh','jeheee'];

getUser(1,(user)=>{
    getRepository(user.gitHubUsername,(repos)=>{
       console.log(repos); 
       getCommits('Carmine',(commits)=>{
            console.log(commits);
            sayHello();
       });
    });
}); 
console.log('After');

function getCommits(getUser, callback){
    setTimeout(()=>{
        callback({name:'Carmine',array:['ahagsd','ahshgegeh','jeheee']});
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

function sayHello(){
    setTimeout(()=>{
     console.log(`cmq sasi e'...`)+
         setTimeout(()=>{
             console.log(`è gay`);
         },2500);
    },1500);
}