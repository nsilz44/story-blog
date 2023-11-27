import express from 'express'
import db from "../database/db.js";
const newstory = express.Router();

newstory.post('/', (req, res)=> {
    // const username = req.body.username;
    // const password = req.body.password;
    // db.query(
    //     `SELECT ( 
    //        SELECT * FROM users WHERE username = ? AND password = ?;
    // `),
    // [username,password],
    // (err, result) => {
    //     if (err) { reject(err); }
    //     resolve(result);
    // }
    res.send(req.body);
})

export default newstory;