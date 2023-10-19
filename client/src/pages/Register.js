import React ,{ useState } from "react";

const Register = () => {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState ("");
    const [confirmPasswordReg, setConfirmPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
 
    const registerUser = () =>{ 
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
        const res = fetch('http://localhost:8080/register', {
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
                <label>Username</label>
                <input type="text" value={usernameReg} onChange={RegUsernameChange}   /><br/>
                <label>Password</label>
                <input type="text" value={passwordReg} onChange={RegPasswordChange}  /> <br />
                <label>Retype password</label>
                <input type="text" value={confirmPasswordReg} onChange={RegConfirmPasswordChange}  /> <br />
                <div id="matchingPasswords" display = "none">
                    <label>Passwords do not match</label>
                </div>
                <label>Email</label>
                <input type="text" value={emailReg} onChange={RegEmailChange}  /> <br />
                <button onClick={registerUser} > Register</button>
            </div>
         </div>
       );
    };
   export default Register;