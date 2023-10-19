import React ,{ useState } from "react";

const SignIn = () => {
   const [usernameSign, setUsernameSign] = useState("");
   const [passwordSign, setPasswordSign] = useState ("");

   const signInUser = () =>{ 
      try {
       const data = {
          username : usernameSign,
          password : passwordSign
       }
       console.log(data)
       const res = fetch('http://localhost:8080/signin', {
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
     } catch(err) {
       console.error(err);
     };
   };

   function SignUsernameChange(e) {
      setUsernameSign(e.target.value);
    };

    function SignPasswordChange(e) {
      setPasswordSign(e.target.value);
    };


    return (
      
           <div className="Login">
              <h1>Login</h1>
              <label>Username</label>
              <input type="text" value={usernameSign} onChange={SignUsernameChange}   /><br/>
              <label>password</label>
              <input type="text" value={passwordSign} onChange={SignPasswordChange}  /> <br />
              <button onClick={signInUser} > SignIn</button>
           </div>
      );
   };
  export default SignIn;