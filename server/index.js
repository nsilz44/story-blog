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
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  db.execute(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err, result)=> {
    console.log(err);
    }
  );
});
  
const PORT = process.env.PORT || 8080; 
  
app.listen(PORT, console.log(`Server started on port ${PORT}`)); 
