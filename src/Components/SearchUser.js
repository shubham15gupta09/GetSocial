import React, { useState } from "react";

function SearchUser(props) {

  const [user, setuser] = useState(<p><b>--{" "}User will appear here{" "}--</b></p>)

  const handleInvitation = (e, result) => {
    alert('feature will be released soon');
    const Data = {
      id: props.id,
      username: props.username,
      to_username: result.data.username
    }
    fetch("http://localhost:8080/send-invite", {
      method: "POST",
      body: JSON.stringify(Data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let username_search = {
      username: document.getElementById("username_search").value.trim()
    };
    fetch("http://localhost:8080/get-user", {
      method: "POST",
      body: JSON.stringify(username_search),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then(result => result.json())
      .then(result => {
        if (result.response === "success") {
          setuser(<div className="post" key={result.data.username}>
            <p>Name : <b>{result.data.name}</b></p>
            <p>Username : <b>@{result.data.username}</b></p>
            <button className="button" onClick={(e) => handleInvitation(e, result)}>Send invitation</button>
          </div>)
        } else {
          setuser(<p><b>--{" "}User will appear here{" "}--</b></p>);
          alert(`No user found with username : @${username_search.username}`);
        }
      })
  };
  return (
    <div>
      <h3 className="here">Search</h3>
      <input type="text"
        placeholder="Write the username.."
        id="username_search"
        name="username_search" />
      <button className="button" onClick={(e) => handleSubmit(e)}>Search</button>
      { user}
    </div >
  );
}

export default SearchUser;
