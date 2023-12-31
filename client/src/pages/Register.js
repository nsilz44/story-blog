import React ,{ useState } from "react";

const Register = () => {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState ("");
    const [confirmPasswordReg, setConfirmPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
 
    const registerUser = (e) =>{
      e.preventDefault();
       try {
        if(confirmPasswordReg !== passwordReg){
            const matchingPassword = document.getElementById("matchingPasswords");
            matchingPassword.style.display = "block";
            console.log('now');
        }
        else {
        const data = {
           username : usernameReg,
           password : passwordReg,
           email: emailReg
        }
        console.log(data)
        async function exampleFetch() {
        const res = await fetch('http://localhost:8080/register', {
          method: 'POST',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(data),
        });
        if  (res.ok) {
          console.log(res)
        }
        if (!res.ok) {
          console.log(`POST failed with ${res.status}.`)
          console.log(res);};
        }
        exampleFetch();
      }}catch(err) {
        console.error(err);
      };
    
    }
 
    function RegUsernameChange(e) {
       setUsernameReg(e.target.value);
     };
 
     function RegPasswordChange(e) {
       setPasswordReg(e.target.value);
     };

     function RegConfirmPasswordChange(e) {
        setConfirmPasswordReg(e.target.value);
      };
 
     function RegEmailChange(e) {
       setEmailReg(e.target.value);
     };
    
     return (
         <div className="App">
            <div className="registration">
                <h1>Registration</h1>
                <form onSubmit={registerUser}>
                <label>Username</label>
                <input type="text" value={usernameReg} onChange={RegUsernameChange} required minLength="4" maxLength="32"  /><br/>
                <label>Password</label>
                <input type="password"  value={passwordReg} onChange={RegPasswordChange} required  minLength="8" maxLength="500" pattern="^([A-Za-z0-9]{4,32})$"/> <br />
                <label>Retype password</label>
                <input type="password"  value={confirmPasswordReg} onChange={RegConfirmPasswordChange} required minLength="8" maxLength="500" pattern="^([A-Za-z0-9]{4,32})$"/> <br />
                <label>Email</label>
                <input type="email"  value={emailReg} onChange={RegEmailChange}  required/> <br />
                <button id="submit" type="submit" > Register</button>
                </form>
                
            </div>
         </div>
       );
    };
   export default Register;