import React from "react";
import Login from "./Login";
import Timeline from "./Timeline";

const Register = (props) => {
  const handleStateToLogin = () => {
    props.setinitial(<Login setinitial={props.setinitial} />);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const RegisterData = {
      name: document.getElementById("name").value.trim(),
      username: document.getElementById("username").value.trim(),
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("password").value.trim(),
    };

    if (
      RegisterData.name === "" ||
      RegisterData.username === "" ||
      RegisterData.email === "" ||
      RegisterData.password === ""
    ) {
      alert("Please fill all the fields");
    } else {
      // fetch("http://localhost:8080/add-user", {
      fetch("https://thegetsocial.azurewebsites.net/add-user", {
        method: "POST",
        body: JSON.stringify(RegisterData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((result) => result.json())
        .then((result) => {
          if (result.response === "success") {
            alert("Success");
            props.setinitial(
              <Timeline
                setinitial={props.setinitial}
                username={RegisterData.username}
                id={result.userDetails._id}
              />
            );
          } else if (result.response === "failed") {
            alert(result.message);
            document.getElementById("username").value = "";
            document.getElementById("email").value = "";
          }
        });
    }
  };

  return (
    <div className="Form">
      <h2 className="get-social">Get Social</h2>
      <h3 className="here">Register here ...</h3>
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" name="name" id="name" required />
        <br />
        <label htmlFor="username">User Name</label>
        <br />
        <input type="text" name="username" id="username" required />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" name="email" id="email" required />
        <br />
        <label htmlFor="password1">Password</label>
        <br />
        <input type="password" name="password" id="password" required />
        <br />
        <button className="button" onClick={(e) => handleSubmit(e)}>
          Register
        </button>
        <br />
      </form>
      <p>
        Want to Login In Instead ?
        <button className="button" onClick={handleStateToLogin}>
          Log In
        </button>
      </p>
    </div>
  );
};

export default Register;
