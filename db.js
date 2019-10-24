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

    static all(sql, params = []){

        return new Promise((resolve, reject) => {

            database.all(sql, params, function(err, rows){

                if(err){

                    reject(new Error(err));

                }

                resolve({ rows });

            });

        });
    }


    static get(sql, params = []){

        return new Promise((resolve, reject) => {

            database.get(sql, params = [], function(err, row){

                if(err){
                    reject(new Error(err));
                }

                resolve({ row });

            });

        });


    }

}

module.exports = db;