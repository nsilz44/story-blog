import register from "./routes/register.js";
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

app.use("/register",register);

app.post("/post", (req, res) => { 
  console.log("Connected to React"); 
  res.redirect("/"); 
}); 

app.post("/email",(req, res) => { 
  console.log("Connected to React");
  res.redirect("/"); 
}); 
  
const PORT = process.env.PORT || 8080; 
  
app.listen(PORT, console.log(`Server started on port ${PORT}`)); 
