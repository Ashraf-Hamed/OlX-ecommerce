import React , {useState} from 'react'


const Register = () => {


    const [email ,setEmail] = useState("") 
    const [password ,setPassword] = useState("") 
    const [rePassword, setRePassword] = useState("");
    const [confirm, setConfirm] = useState(false);


    function Submit (e) {
        e.preventDefault();
        setConfirm(true)
    }

  return (

    
    <div className="form container my-5 py-5">
          <div className="form-body">
              <div className="username mb-4">
                  <label className="form__label" htmlFor="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname mb-4">
                  <label className="form__label" htmlFor="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
                                               
              <div className="email mb-4">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="password mb-4">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                  {password.length < 8 && confirm && (<p>Password Must be More Than 8 Char </p>)}
                  {password.length < 8 && (<p>Password Must be More Than 8 Char </p>)}

              </div>
              <div className="confirm-password mb-4">
                  <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" onChange={(e) => setRePassword(e.target.value)}/>
                  
                        {rePassword !== password && setConfirm && <p>Pasword does not match</p>}
              </div>
          </div>
          <div className="footer">
              <button  type="submit" className="btn btn-primary">Register</button>
          </div>
      </div>      

     
  )
}

export default Register
