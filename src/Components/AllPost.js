import React from "react";

function AllPost(props) {
  return props.allpost.map((p) => (
    <div className="post">
      <p>
        <b>@{p.username}</b>
      </p>
      <p>
        <i>{p.post}</i>
      </p>
    </div>
  ));
}

export default AllPost;
