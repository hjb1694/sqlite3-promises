const db = require('./db');

(async function(){
try{

    const {details} = await db.run(`
    INSERT INTO users(name)
    VALUES(?)
    `,['Hayden']);

    console.log(details);


}catch(e){

    console.log(e);


}

})();