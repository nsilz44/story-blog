import React ,{ useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

async function signInUser(data){ 
   console.log(data)
   return fetch('http://localhost:8080/signin', {
     method: 'POST',
     headers: {
       "content-type": "application/json"
     },
     body: JSON.stringify(data),
   }).then(res => res.json())
  }
    

export default function SignIn({ setToken }) {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState ("");
   const navigate = useNavigate();
   const completeSignIn = async e => {
    e.preventDefault();
    const token = await signInUser({
      username: username,
      password: password
    });
    setToken(token);
    navigate(-1);
  }
   
   
   function SignUsernameChange(e) {
      setUsername(e.target.value);
    };

    function SignPasswordChange(e) {
      setPassword(e.target.value);
    };

    return (
      
           <div className="Login">
              <h1>Login</h1>
              <form onSubmit={completeSignIn}>
                <label>Username</label>
                <input type="text" value={username} onChange={SignUsernameChange}   /><br/>
                <label>password</label>
                <input type="password" value={password} onChange={SignPasswordChange}  /> <br />
                <button id="submit" type="submit" > SignIn</button>
              </form>
           </div>
      );
   };

SignIn.propTypes = {
    setToken: PropTypes.func.isRequired
  };