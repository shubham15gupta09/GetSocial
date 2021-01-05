import React from "react";

const Allinvitation = (props) => {
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
      // fetch("http://localhost:8080/accept-invite", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((result) => result.json())
      .then((result) => alert("Accepted the invitation"))
      .catch((error) => console.log(error));
  };
  const handleRejectInvitation = (e, d) => {
    alert("feature is comming very soon");
    // e.preventDefault();
    // const data = {
    //   from_username: props.username,
    //   from_id: props.id,
    //   name: d.name,
    //   username: d.username,
    // };
    // // fetch("https://thegetsocial.azurewebsites.net/accept-invite", {
    // fetch("http://localhost:8080/accept-invite", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: { "Content-type": "application/json; charset=UTF-8" },
    // })
    //   .then((result) => result.json())
    //   .then((result) => {
    //     if (result.response === "success") {
    //       alert("Done : " + result.message);
    //     } else {
    //       alert("Error Occured :" + result.message);
    //     }
    //   })
    //   .catch((error) => alert("Unexpected Error Occures"));
  };
  return (
    <div>
      <h3 className="here">All Invitation</h3>
      {props.data.map((i) => (
        <div className="AllInvitation" key={i.username}>
          <p>
            <b>Name</b> : @{i.name}
          </p>
          <p>
            <b>Username</b> : @{i.username}
          </p>
          <button
            className="button"
            onClick={(e) => handleAcceptinvitation(e, i)}
          >
            Accept invitation
          </button>
          <button
            className="button"
            onClick={(e) => handleRejectInvitation(e, i)}
          >
            Reject invitation
          </button>
        </div>
      ))}
    </div>
  );
};

export default Allinvitation;
