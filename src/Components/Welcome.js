import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Welcome = (props) => {
  const [initialDivStyle, setinitialDivStyle] = useState(`block`);
  const handleLogin = () => {
    props.setinitial(<Login setinitial={props.setinitial} />);
    setinitialDivStyle(`none`);
  };
  const handleRegister = () => {
    props.setinitial(<Register setinitial={props.setinitial} />);
    setinitialDivStyle(`none`);
  };
  return (
    <div className="Welcome-Screen" style={{ display: `${initialDivStyle}` }}>
      <h2 className="welcome"> Welcome to Get Social </h2>
      <h3 className="here"> The Only Place for commitments </h3>
      <p>
        <button className="button" onClick={handleLogin}>
          log in
        </button>
        <button className="button" onClick={handleRegister}>
          Register
        </button>
      </p>
      <ul className="bottomBar-ul">
        <b>
          <li className="bottomBar-li">
            <a href="/about">About</a>
          </li>
          <li className="bottomBar-li">
            <a href="/help">Help Center</a>
          </li>
          <li className="bottomBar-li">
            <a href="privacyPolicy">Privacy Policy</a>
          </li>
        </b>
      </ul>
    </div>
  );
};

export default Welcome;
