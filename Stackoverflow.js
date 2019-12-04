// var movie_ids = [
//     474350, 522938, 540901,
//     384018, 419704, 420818,
//     521029, 301528, 484641,
//     515195, 466272, 441282,
//     423204, 533642, 530385,
//     568012, 535544, 456740,
//     523077, 531309
// ]

// async function insert_ids(movie_ids) {

//     var promiseArray = [];

//     for (var i = 1; i <= movie_ids.length; i++) {
//         promiseArray.push(new Promise((resolve, reject) => {
//             var url1 = "FIRST PART";
//             var url2 = "SECOND PART";

//             request(url1 + movie_ids[i] + url2, function (err, res, body) {
//                     if (!err & res.statusCode == 200) {
//                         var data = JSON.parse(body);
//                         resolve(data.imdb_id);
//                         console.log(data.imdb_id); // This prints the correct ids 
//                     } else {
//                         console.log(err); //> Prints "null"
//                     }
//                 });
//         }));
//     };


//     await Promise.all(promiseArray).then(function(result) {
//         console.log(result);
//     });

// }

// insert_ids(movie_ids);

// const fs = require("fs");

// function readLocal(filename, encoding) {
//   const readP = new Promise((resolve, reject)=>{
//     fs.readFile(filename, encoding,(err, data) => {
//           if(!err){
//             console.log(`Promise :${readP} is been resolved`);
//             resolve(data);
//           }else{
//             console.log(`Promise :${readP} is been rejected`);
//             reject(err);
//           }
//     });
//   })
//   return readP;
// }

// // /home/ca/Desktop/nodejs/recapasync/
// readLocal("./hello.txt", "utf-8")
//           .then( data =>{ console.log(data); return;})
//           .catch( err =>{ console.log('Err: ', err.message);return;});


const fs = require("fs");
const zlib = require("zlib");

function zlibPromise(data) {
  return new Promise((resolve, reject)=>{
      zlib.gzip(data, (error, result) => {
        if(!error){
          resolve(result);
        }else{
          reject(error);
        }
      });   
  });

}

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

readFile("./hello.txt", "utf-8")
    .then(data => zlibPromise(data))
    .then(result => console.log(result))
    .catch(err => console.log(`The error : ${error.message}, accurred`))

   // --> Load it then zip it and then print it to screen
