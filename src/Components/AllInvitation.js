import React from "react";

const Allinvitation = (props) => {
  // this will handle accept invitation
  const handleAcceptinvitation = (e, d) => {

    e.preventDefault();

    const data = {
      from_username: props.username,
      from_id: props.id,
      from_name: props.name,
      name: d.name,
      username: d.username,
    };

    fetch("https://thegetsocial.azurewebsites.net/accept-invite", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((result) => result.json())
      .then((result) => {
        alert("Accepted the invitation");
        props.reRender("AllInvitation");
      })
      .catch((error) => alert("Error occured : " + error));
  };

  // this will handle reject invitation
  const handleRejectInvitation = (e, d) => {

    const data = {
      username: props.username,
      id: props.id,
      remove: {
        username: d.username,
        name: d.name,
      },
    };

    fetch("https://thegetsocial.azurewebsites.net/reject-invite", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((result) => result.json())
      .then((result) => {
        alert(result.message);
      })
      .catch((error) => alert("Error occured : " + error));
  };

  return (
    <div>

      <h3 className="here">All Invitation</h3>

      {props.data.map((i) => (
        <div className="AllInvitation" key={i.username}>

          <p><b>Name</b> : @{i.name}</p>
          <p><b>Username</b> : @{i.username}</p>

          <button className="button" onClick={(e) => handleAcceptinvitation(e, i)} >Accept invitation</button>
          <button className="button" onClick={(e) => handleRejectInvitation(e, i)} >Reject invitation</button>

        </div>
      ))}

    </div>
  );
};

export default Allinvitation;
