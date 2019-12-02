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
            console.log('Commits: ',commits);    
            resolve(commits);
        },2000); 
    }) 
   
};

function displayCommits(commits){
    console.log(commits);
}

// getUser(1)
//   .then(user => getRepository(user.gitHubUsername))
//   .then(repos => getCommits(repos))
//   .then(commits => (commits))
//   .catch(err => console.log('Err: ', err.message))

// Async and Await method
async function displayAll(){
    const user    = await getUser(1);
    const repos   = await getRepository(user.gitHubUsername);
    const commits = await getCommits(repos);
    console.log(commits);
}

displayAll();


function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Reading user info from DB...');
            console.log({id:id, gitHubUsername:'carmine'});
            resolve({id:id, gitHubUsername:'carmine'});
        },2000);  
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
            console.log('Repos:  ',repos);
            resolve(repos);
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