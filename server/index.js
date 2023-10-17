import db from "./database/db.js";
import require from "./require.js";

const express = require("express"); 
const app = express(); 

  
app.post("/post", (req, res) => { 
  console.log("Connected to React"); 
  res.redirect("/"); 
}); 

app.post("/register", (req, res)=> {
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
