import React ,{ useState } from "react";




const SignIn = () => {
   const [usernameReg, setUsernameReg] = useState("");
   const [passwordReg, setPasswordReg] = useState ("");

   const registerUser = () =>{ 
      try {
       const data = {
          username : usernameReg,
          password : passwordReg
       }
       console.log(data)
       const res = fetch('http://localhost:8080/register', {
         method: 'POST',
         headers: {
           "content-type": "application/json"
         },
         body: JSON.stringify(data),
       });
       console.log(res);
    
       if (!res.ok) console.log(`POST failed with ${res.status}.`);
     } catch(err) {
       console.error(err);
     }
   };

   function RegUsernameChange(e) {
      setUsernameReg(e.target.value);
    };

    function RegPasswordChange(e) {
      setPasswordReg(e.target.value);
    };
   
    return (
        <div className="App">
           <div className="registration">
              <h1>Registration</h1>
              <label>Username</label>
              <input type="text" value={usernameReg} onChange={RegUsernameChange}   /><br/>
              <label>password</label>
              <input type="text" value={passwordReg} onChange={RegPasswordChange}  /> <br />
              <button onClick={registerUser} > Register</button>
           </div>
           <div className="login">
              <h1>Login</h1>
              <input type="text" placeholder="Username…" /> <br/>
              <input type="password" placeholder="Password…" />
              <button >Login</button>
           </div>
        </div>
      );
   };
  export default SignIn;