import React from "react";

function AllPost(props) {
  return (
    <div>
      <h3 className="here">All Posts</h3>
      {
        props.allpost.map((p) => (
          <div className="post" key={p.username}>
            <p>
              <b>@{p.username}</b>
            </p>
            <p>
              <i>{p.post}</i>
            </p>
          </div>
        ))
      }
    </div>
  )
}

export default AllPost;


