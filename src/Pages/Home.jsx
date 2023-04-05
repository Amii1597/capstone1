import React from 'react'
import { useState } from "react";
import Banner from '../components/Home/Banner'
import Login from '../components/Home/Login'
import './Home.css'
// import SingUpForm from '../components/Home/SingUpForm'

const Home = () => {
  const [focused, setFocused] = useState(false);
    const [values, setValues] = useState({
      name:"",
      username: "",
      email: "",
      mobile: ""
  
    });
  
    const inputs = [
      {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Name",
        errorMessage:
          "name should be 5 characters and shouldn't include any special character!",
     
        // pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id: 2,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
      
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id: 3,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        required: true,
      },
      
      {
        id: 4,
        name: "mobile",
        placeholder: "Mobile",
        errorMessage: "Enter 10 digit Number",
      //  pattern:"/^[0-9\b]+$/",
        required: true,
      },
      
      
     
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const data=new FormData(e.target)
      console.log(Object.fromEntries(data.entries()))
      window.localStorage.setItem("userData", JSON.stringify(Object.fromEntries(data.entries())));
    };
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  return (
 <>
<div style={{display:"flex"}}>
<Banner/>
<div className="body">
      <form onSubmit={handleSubmit}>
    
       <p className="super">Super App</p>
        <p>Create a new Account</p>
        <p>
          Email <b style={{ color: "#72DB73" }}>|</b> Google
        </p>
        {inputs.map((input) => (
          <Login
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <label>
            <input
              onChange={(e) =>
                setFocused({
                  ...focused,
                  [e.target.name]: e.target.checked,
                })
              }
              type="checkbox"
              name="check"
            />
            <h4>Share my registration data with Superapp</h4>
          </label>
        <button>Submit</button>
      </form>
      <footer className="footer">
          <p>
            By clicking on Sign up. you agree to Superapp
            <b style={{color:'#72DB73'}}>
              {" "}
              Terms and Conditions 
                 of Use
            </b>
          </p>
      
        <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp<b style={{color:'#72DB73'}}> Privacy Policy</b>
          </p>
  
        </footer>
    </div>


</div>
 </>
  )
}

export default Home