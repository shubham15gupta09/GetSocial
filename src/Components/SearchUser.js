import React, { useState } from "react";

function SearchUser(props) {
  // initial state
  const [user, setuser] = useState(
    <p>
      <b>-- User will appear here --</b>
    </p>
  );

  // to handle the send invitation button to invite user
  const handleInvitation = (e, result) => {
    const Data = {
      id: props.id,
      username: props.username,
      to_username: result.data.username,
      name: props.name,
    };
    fetch("https://thegetsocial.azurewebsites.net/send-invite", {
      method: "POST",
      body: JSON.stringify(Data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((result) => result.json())
      .then((result) => {
        if (result.response === "success") {
          alert("Invitation sent successfully");
          setuser(
            <p>
              <b>-- User will appear here --</b>
            </p>
          );
        } else {
          alert("error occured : " + result.message);
        }
      })
      .catch((error) => alert("Some Error Occured : " + error));
  };

  // to handle the submit button to search user
  const handleSubmit = (e) => {
    e.preventDefault();
    let username_search = {
      username: document.getElementById("username_search").value.trim(),
    };
    fetch("https://thegetsocial.azurewebsites.net/get-user", {
      method: "POST",
      body: JSON.stringify(username_search),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((result) => result.json())
      .then((result) => {
        if (result.response === "success") {
          setuser(
            <div className="post" key={result.data.username}>
              <p>
                Name : <b>{result.data.name}</b>
              </p>
              <p>
                Username : <b>@{result.data.username}</b>
              </p>
              <button
                className="button"
                onClick={(e) => handleInvitation(e, result)}
              >
                Send invitation
              </button>
            </div>
          );
        } else {
          alert(`No user found with username : @${username_search.username}`);
          setuser(
            <p>
              <b>-- User will appear here --</b>
            </p>
          );
        }
      });
  };

  return (
    <div>
      <h3 className="here">Search</h3>
      <input
        type="text"
        placeholder="Write the username.."
        id="username_search"
        name="username_search"
      />
      <button className="button" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
      {user}
    </div>
  );
}

export default SearchUser;
