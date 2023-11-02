import db from "../database/db.js";


async function idExists(id){
    let response = db.query(`
     SELECT EXISTS(
       SELECT id FROM users WHERE id = ?
     );
    `,
    [id])
    return response
}
export default idExists;