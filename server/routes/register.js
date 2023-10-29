import express from 'express'
import db from "../database/db.js";
const register = express.Router();


const emailExists = async emailAddress => new Promise((resolve, reject) => {
  db.query(`
     SELECT EXISTS(
       SELECT id FROM users WHERE email = ?
     );
    `,
    [emailAddress],
    (err, result) => {
      if (err) { reject(err); }
      resolve(result);
    }
  )}
);

const userExists = async username => new Promise((resolve, reject) => {
  db.query(`
     SELECT EXISTS(
       SELECT id FROM users WHERE username = ?
     );
    `,
    [username],
    (err, result) => {
      if (err) { reject(err); }
      resolve(result);
    }
  )}
);

register.post("/", (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const type = 'normal';
    const newEmail = emailExists(email);
    const newUser = userExists(username);
    if (!(username.match("^([A-Za-z0-9]{4,32})$"))){
      res.status(401);
      res.send('Username in wrong format');
    }
    else if (!(password.match("^([A-Za-z0-9]{4,32})$"))){
      res.status(401);
      res.send('Password in wrong format');
    }
    else if (!(email.match("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"))){
      res.status(401);
      res.send('Email in wrong format');
    }
    else if (newEmail.length){
      res.status(401);
      res.send('Email already exists');
    }
    else if (newUser.length){
      res.status(401);
      res.send('User already exists');
    }
    else{
      db.execute(
        "INSERT INTO users (username, email, password, type,validated) VALUES (?,?,?,?,?)",
        [username,email, password,type,'No'],
        (err, result)=> {
        if (err) {
            // Throw your error output here.
            console.log("An error occurred.");
            console.log(err)
            res.sendStatus(500)
        } else {
            // Throw a success message here.
            console.log("1 record successfully inserted into db");
            res.send('registered');
            
        }}
      );
    }
  });

export default register