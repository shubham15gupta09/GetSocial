import React from "react";

const AllPost = (props) => {
  // deleting a post
  const handleDelete = (p) => {
    const data = {
      post: p.post,
      id: p._id,
      username: p.username,
      from_username: props.username,
      from_id: props.id,
    };
    fetch("https://thegetsocial.azurewebsites.net/remove-post", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((result) => result.json())
      .then((result) => {
        alert(result.message);
        props.reRender("AllPost");
      })
      .catch((error) => alert(error));
  };
  return (
    <div>
      <h3 className="here">All Posts</h3>

      {props.allpost.map((p) => (
        <div className="post" key={p._id}>

          <p><b>@{p.username}</b></p>
          <p><i>{p.post}</i></p>

          {props.username === p.username ? (
            <button className="button" onClick={() => handleDelete(p)}>Delete</button>
          ) : null}

        </div>
      ))}

    </div>
  );
};

export default AllPost;
