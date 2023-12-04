import  db  from "../database/db.js";

export default async function idExists(id){
    let response = db.query(`
     SELECT EXISTS(
       SELECT id FROM users WHERE id = ?
     );
    `,
    [id])
    return response
}
