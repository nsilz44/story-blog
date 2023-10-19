import db from "./database/db.js";
import require from "./require.js";

const express = require("express"); 
const app = express(); 
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(
  cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
  })
 );

app.post("/post", (req, res) => { 
  console.log("Connected to React"); 
  res.redirect("/"); 
}); 

app.post("/register", (req, res)=> {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const type = 'normal'
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
  
});
  
const PORT = process.env.PORT || 8080; 
  
app.listen(PORT, console.log(`Server started on port ${PORT}`)); 
