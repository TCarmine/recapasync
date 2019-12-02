console.log('Before');

// let commits = ['ahagsd','ahshgegeh','jeheee'];

// getUser(1,(user)=>{
//     getRepository(user.gitHubUsername,displyRepos);
//     let commits = ['ahagsd','ahshgegeh','jeheee'];
//     getCommits('Carmine',displayCommits(commits));
//     sayHello();
// });    
 
console.log('After');



function getCommits(getUser){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let commits = ['ahagsd','ahshgegeh','jeheee'];
            this.commits = commits;
            displayCommits(commits);
            return;
        },2000); 
    }) 
   
};

function displayCommits(commits){
    console.log(commits);
}

const p = getUser(1);
p.then(user => console.log(user));

function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Reading user info from DB...');
            resolve({id:id, gitHubUsername:'carmine'});
        },1500);  
    });
  
}

function displyRepos(repos){
    console.log(repos);
}

function getRepository(username){
   
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let repos= ['repo1','repo2','repo3'];
            //here the array need to be wrapped otherwise callback is seen as a function
            // and not a callback
            resolve({repos});
            return;
        },2000);
    }) 
  
}

function sayHello(){
    setTimeout(()=>{
     console.log(`Hello...`)+
         setTimeout(()=>{
             console.log(`to you`);
         },1500);
    },2000);
}