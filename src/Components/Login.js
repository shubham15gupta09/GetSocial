import React, { useState } from "react";
import Timeline from "./Timeline";
import Register from "./Register";

function Login(props) {
  const [loader, setloader] = useState("");
  const handleStateToRegister = () => {
    props.setinitial(<Register setinitial={props.setinitial} />);
  };
  const handleSubmit = (e) => {
    setloader(
      <div>
        <br />
        <div className="loader small"></div>
      </div>
    );
    e.preventDefault();
    const LoginData = {
      username: document.getElementById("username").value.trim(),
      password: document.getElementById("password").value.trim(),
    };

    if (LoginData.username === "" || LoginData.password === "") {
      setloader("");
      alert("Please fill all the fields");
    } else {
      // fetch("http://localhost:8080/verify-user", {
      fetch("https://thegetsocial.azurewebsites.net/verify-user", {
        method: "POST",
        body: JSON.stringify(LoginData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((result) => result.json())
        .then((result) => {
          if (result.responseMessage === "success") {
            props.setinitial(
              <Timeline
                setinitial={props.setinitial}
                username={LoginData.username}
                name={result.userDetails.name}
                id={result.userDetails._id}
              />
            );
          } else if (result.responseMessage === "failedWrongPassword") {
            setloader("");
            alert("Wrong password");
            document.getElementById("password").value = "";
          } else {
            setloader("");
            alert("No User Found");
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
          }
        })
        .catch((error) => alert("Error occured : " + error));
    }
  };
  return (
    <div className="Form">
      <h2 className="get-social">Get Social</h2>
      <h3 className="here">Log In here ...</h3>
      <form>
        <label htmlFor="username">User Name</label> <br />
        <input type="text" id="username" name="username" required /> <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="password" required />
        <br />
        <button className="button" onClick={(e) => handleSubmit(e)}>
          Log In
        </button>
      </form>
      {loader}
      <p>
        Want to Register Instead ?
        <button className="button" onClick={handleStateToRegister}>
          Register
        </button>
      </p>
    </div>
  );
}

export default Login;
