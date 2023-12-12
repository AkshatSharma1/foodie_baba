import { useState } from "react";

// ? Header Component
const HeaderComponent = () => {
 
  // let btnName = "Login"; doesnot work on clicking the login to logout
  const [btnName, setBtnName] = useState("Login")

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="/assets/images/logo.png" alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>
            btnName==="Login"?setBtnName("Logout"):setBtnName("Login")
            }>
              {btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
