const crypto = require('crypto');
import { query } from "express";
import db from "../database/db.js";
import { idExists } from "../dbqueries/idExists.js" 
const verification = express.Router();
import sendEmail from "../emails/email.js";

const generateVerificationToken = () => {
    return crypto.randomBytes(16).toString('hex');
  };

const site = " http://localhost:3000/"


const checkUserId = async(id) => new Promise((resolve, reject) =>{
  db.query(`
  SELECT EXISTS( SELECT id FROM users WHERE id = ?); `,
 [id],
 (err, result) => {
   if (err) { reject(err); }
   resolve(result);
  })
})
  

const checkValidation = (id) => new Promise((resolve, reject) =>{
  db.query(`
  SELECT ( SELECT validated FROM users WHERE id = ?); `,
 [id],
 (err, result) => {
   if (err) { reject(err); }
   resolve(result);
  })
})

const sendVerificationEmail = (username,email) => {
  const verificationToken = generateVerificationToken()
  const verificationLink = site + verificationToken
  const subject = "Account verification at yourshortstoryblog"
  const text = "Hi" + username+ ",We just need to verify your email address before you can access \
  wwww.yourshortstoryblog.com \
  Verify your email address"+ verificationLink + ".\
  Thanks! – yourshortstoryblog "
  const html = "<p>Hi " +username+",</p><p>We just need to verify your email address before you can access \
  wwww.yourshortstoryblog.com</p><p>Verify your email address by clicking this link "+ verificationLink+" </p><p>Thanks! – yourshortstoryblog</p>"
  sendEmail(email,subject,text,html);
}



verification.get("/:id" , (req,res) => { 
  var id = req.params.id;
  // check if userExists
  var userExists = idExists(id)
  // check if user verified if no
  // check if token expiry 1 mins old
  // send verification token to email
  // update database
  // send success to client-side
  res.send('lol')
})

export default verification;