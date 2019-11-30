console.log('Before');

let commits = ['ahagsd','ahshgegeh','jeheee'];

getUser(1,(user)=>{
    getRepository(user.gitHubUsername,displyRepos);
    getCommits('Carmine',displayCommits(commits));
    sayHello();
});    
 
console.log('After');



function getCommits(getUser, commits){
    setTimeout(()=>{
        displayCommits(commits);
        return;
    },2000); 
};

function displayCommits(commits){
    console.log(commits);
}

function getUser(id, callback){
    setTimeout(()=>{
        console.log('Reading user info from DB...');
        callback({id:id, gitHubUsername:'carmine'});
        return;
    },1500);
};

function displyRepos(repos){
    console.log(repos);
}

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
         },1500);
    },2000);
}