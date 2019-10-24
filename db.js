const sqlite = require('sqlite3');

const database = new sqlite.Database('./database.sqlite');

class db{

    static run(sql, params = []) {

        return new Promise((resolve, reject) => {

            database.run(sql, params, function(err){

                if(err){

                    reject(new Error(err));

                }

                resolve({details : this});


            });
        });

    }

}

module.exports = db;