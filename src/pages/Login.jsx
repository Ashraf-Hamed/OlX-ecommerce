import React, { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [confirm, setConfirm] = useState(false);

  function Submit(e) {
    e.preventDefault();
    setConfirm(true);
  }

  return (
    <div className="login">
      <div className="form container py-5 px-5">
        <div className="form-body">
          <form onSubmit={Submit}>
          <label className="form__label" htmlFor="email">Email:</label>
          <input className="form__input mb-4" type="text" id="email" placeholder="Enter Your email" value={email} onChange={(e) => setEmail(e.target.value)} />


          <label className="form__label" htmlFor="password">Password: </label>
          <input className="form__input mb-4" type="password" id="password" placeholder="Password" value={password}
              onChange={(e) => setpassword(e.target.value)} />
              {password.length < 8 && (<p className="text-success">Password Must be More Than 8 Char </p>)}


          <label className="form__label" for="confirmPassword">Confirm Password </label>
          <input className="form__input mb-4" type="password" id="confirmPassword" placeholder="Confirm Password" 
          onChange={(e) => setRePassword(e.target.value)} />  
         
          {rePassword !== password && setConfirm && <p className="text-danger">Pasword does not match</p>}
         

            <button to="/" type="submit" class="btn btn-primary mt-5">
          Login
        </button> 
                
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
