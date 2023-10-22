import express from 'express'
import db from "../database/db.js";

const register = express.Router();
register.post("/", (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const type = 'normal';
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
    else{
      db.execute(
        "INSERT INTO users (username, email, password, type) VALUES (?,?,?,?)",
        [username, password,email,type],
        (err, result)=> {
        if (err) {
            // Throw your error output here.
            console.log("An error occurred.");
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