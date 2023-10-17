
const [usernameReg, setUernameReg] = useState("");
const [passwordReg, setPasswordReg] = useState ("");

const SignIn = () => {
    return (
        <div className="App">
           <div className="registration">
              <h1>Registration</h1>
              <label>Username</label>
              <input type="text" onChange={(e) => {
              setUernameReg(e.target.value);
           }}  /><br/>
              <label>password</label>
              <input type="text" onChange={(e) =>{
              setPasswordReg(e.target.value);
           }}  /> <br />
              <button> Register</button>
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