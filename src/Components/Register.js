import React, { useState } from "react";
import Login from "./Login";
import Timeline from "./Timeline";

const Register = (props) => {
  // the local statre for loader
  const [loader, setloader] = useState("");

  // this function will handle the login state render
  const handleStateToLogin = () => {

    document.title = "Login";
    props.setinitial(<Login setinitial={props.setinitial} />);

  };

  const handleSubmit = (e) => {

    e.preventDefault();
    //register data to be sent to the server
    const RegisterData = {
      name: document.getElementById("name").value.trim(),
      username: document.getElementById("username").value.trim(),
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("password").value.trim(),
      invitation: [],
      friends: [],

    };

    if (RegisterData.name === "" || RegisterData.username === "" || RegisterData.email === "" || RegisterData.password === "") {
      alert("Please fill all the fields");
    } else if (document.getElementById("confirm-password").value.trim() !== document.getElementById("password").value.trim()) {
      alert("Password and Confirm password should be same !!");
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(RegisterData.email)) {
      alert("Email id format is not Correct !");
    } else {
      setloader(<div><br /><div className="loader small"></div></div>);
      fetch("https://thegetsocial.azurewebsites.net/add-user", {
        method: "POST",
        body: JSON.stringify(RegisterData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((result) => result.json())
        .then((result) => {
          if (result.response === "success") {
            props.setinitial(
              <Timeline
                setinitial={props.setinitial}
                username={RegisterData.username}
                id={result.userDetails._id}
                name={result.userDetails.name}
              />
            );
          } else if (result.response === "failed") {
            setloader("");
            alert(result.message);
            document.getElementById("username").value = "";
            document.getElementById("email").value = "";
          }
        })
        .catch((error) => alert("Error occured : " + error));
    }
  };

  return (
    <div className="Form">

      <h2 className="get-social">Get Social</h2>
      <h3 className="here">Register here ...</h3>

      <form>

        <label htmlFor="name">Name</label><br />
        <input type="text" name="name" id="name" required /><br />

        <label htmlFor="username">User Name</label><br />
        <input type="text" name="username" id="username" required /><br />

        <label htmlFor="email">Email id</label><br />
        <input type="email" name="email" id="email" required /><br />

        <label htmlFor="password">Password</label><br />
        <input type="password" name="password" id="password" required /><br />

        <label htmlFor="confirm-password">Confirm Password</label><br />
        <input type="password" name="confirm-password" id="confirm-password" required /><br />

        <p style={{ fontSize: "small" }}>
          <b>
            By Clicking on Register you agree to our <a href="/html/privacy.html"> Privacy Policy</a>{" "}and{" "}<a href="/html/tnc.html">Terms & Condition</a>
          </b>
        </p>

        <button className="button" onClick={(e) => handleSubmit(e)}>Register</button><br />
      </form>

      {loader}

      <p>Want to Login In Instead ?<button className="button" onClick={handleStateToLogin}>Log In</button></p>

      <ul className="bottomBar-ul"><b>
        <li className="bottomBar-li">
          <a href="/about.html">About</a>
        </li>
        <li className="bottomBar-li">
          <a href="/help.html">Help Center</a>
        </li>
        <li className="bottomBar-li">
          <a href="/privacy.html">Privacy Policy</a>
        </li>
        <li className="bottomBar-li">
          <a href="/tnc.html">Terms & Condition</a>
        </li>
      </b></ul>

    </div>
  );
};

export default Register;
