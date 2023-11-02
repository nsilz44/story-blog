import db from "../database/db.js";


async function userExists(username){
    let response = db.query(`
     SELECT EXISTS(
       SELECT id FROM users WHERE username = ?
     );
    `,
    [username])
    return response
}