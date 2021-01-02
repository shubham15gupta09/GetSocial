import React from "react";

const Allinvitation = () => {
  const i = [
    { name: "Sample Name 1", username: "Sample username 1" },
    { name: "Sample Name 2", username: "Sample username 2" },
  ];
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
        i.map((i) => (
          <div className="AllInvitation">
            <p><b>Name</b> : {i.name}</p>
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
