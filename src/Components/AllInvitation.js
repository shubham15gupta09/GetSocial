import React from "react";

const Allinvitation = (props) => {
  const handleAcceptinvitation = (e) => {
    e.preventDefault();
    alert("Wait for functionality !!...");
  };
  const handleRejectInvitation = (e) => {
    e.preventDefault();
    alert("Wait for functionality !!...");
  };
  return (
    <div>
      <h3 className="here">All Invitation</h3>
      {
        props.data.map((i) => (
          <div className="AllInvitation">
            <p><b>Name</b> : @{i.name}</p>
            <p><b>Username</b> : @{i.username}</p>
            <button className="button" onClick={(e) => handleAcceptinvitation(e)}>
              Accept invitation
      </button>
            <button className="button" onClick={(e) => handleRejectInvitation(e)}>
              Reject invitation
      </button>
          </div>
        ))
      }
    </div>
  );
};

export default Allinvitation;
