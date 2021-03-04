import React, { useState, useEffect } from "react";
import Timeline from "./Timeline";
import Register from "./Register";
import { useCookies } from "react-cookie";

function Login(props) {
  // this will act as loader
  const [loader, setloader] = useState("");
  const [cookies, setCookie] = useCookies("");

  useEffect(() => {
    var x = cookies.user;
    // console.log("from cookies ", x);
    if (x !== undefined) {
      x = x.split("&");
      var conf = window.confirm("Continue as : @" + x[0] + " ?")
      // console.log(x);
      if (conf == true) {
        handleLogin({ username: x[0], password: x[1] });
      }
    }
  }, []);

  const handleStateToRegister = () => {
    document.title = "Register";
    props.setinitial(<Register setinitial={props.setinitial} />);
  };

  const handleLogin = (LoginData) => {
    // console.log(LoginData);
    setloader(<div><br /><div className="loader small"></div></div>);

    fetch("https://thegetsocial.azurewebsites.net/verify-user", {
      method: "POST",
      body: JSON.stringify(LoginData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((result) => result.json())
      .then((result) => {
        if (result.responseMessage === "success") {

          setCookie("user", LoginData.username + "&" + LoginData.password, {
            path: "/",
            expires: new Date(Date.now() + 3600 * 1000 * 24 * 365)
          });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const LoginData = {
      username: document.getElementById("username").value.trim(),
      password: document.getElementById("password").value.trim(),
    }
    // console.log("handeling submit", LoginData);
    if (LoginData.username === "" || LoginData.password === "") {
      alert("Please fill all the fields");
    } else {
      handleLogin(LoginData);
    }
  }

  return (
    <div className="Form">
      <h2 className="get-social">Get Social</h2>
      <h3 className="here">Log In here ...</h3>

      <form>

        <label htmlFor="username">User Name</label> <br />
        <input type="text" id="username" name="username" required /> <br />

        <label htmlFor="password">Password</label><br />
        <input type="password" id="password" name="password" required /><br />

        <button className="button" onClick={(e) => handleSubmit(e)}>Log In</button>

      </form>

      {loader}

      <p>Want to Register Instead ?<button className="button" onClick={handleStateToRegister}>Register</button></p>

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
}

export default Login;
