var movie_ids = [
    474350, 522938, 540901,
    384018, 419704, 420818,
    521029, 301528, 484641,
    515195, 466272, 441282,
    423204, 533642, 530385,
    568012, 535544, 456740,
    523077, 531309
]

async function insert_ids(movie_ids) {

    var promiseArray = [];

    for (var i = 1; i <= movie_ids.length; i++) {
        promiseArray.push(new Promise((resolve, reject) => {
            var url1 = "FIRST PART";
            var url2 = "SECOND PART";

            request(url1 + movie_ids[i] + url2, function (err, res, body) {
                    if (!err & res.statusCode == 200) {
                        var data = JSON.parse(body);
                        resolve(data.imdb_id);
                        console.log(data.imdb_id); // This prints the correct ids 
                    } else {
                        console.log(err); //> Prints "null"
                    }
                });
        }));
    };


    await Promise.all(promiseArray).then(function(result) {
        console.log(result);
    });

}

insert_ids(movie_ids);