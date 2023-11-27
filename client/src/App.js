import "./App.css"; 
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import SuperUser from "./pages/SuperUser";
import SignIn from "./pages/SignIn";
import useToken from "./components/useToken";
import Register from "./pages/Register";
import Verification from "./pages/Verification";

  
function App() {

  const { token, setToken } = useToken()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout token={token} />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="superUser" element={<SuperUser />} />
          <Route path="register" element={<Register  />} />
          <Route path="signIn" element={<SignIn  setToken={setToken} />} />
          <Route path="verification" element={<Verification  />}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 
  
export default App; 

 


