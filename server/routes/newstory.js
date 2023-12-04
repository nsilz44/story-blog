import express from 'express'
import db from "../database/db.js";
import userExists from '../dbqueries/userExists.js';

const newstory = express.Router();

newstory.post('/', async (req, res)=> {
    const username = req.body.username
    const exists = await userExists(username) 
    if(!exists){
        res.send('Does not exist',404);
    }
    else {
        res.status(200)
        res.send(req.body);
    }
})

export default newstory;