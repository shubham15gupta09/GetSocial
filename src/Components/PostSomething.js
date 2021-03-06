import React from "react";

const PostSomething = (props) => {
  //handle a new post
  const handlePostSubmit = (e) => {
    e.preventDefault();
    const Post = {
      id: props.id,
      username: props.username,
      post: document.getElementById("post").value.trim(),
    };
    if (Post.post === "") {
      alert("Please write something :(");
    } else {
      fetch("https://thegetsocial.azurewebsites.net/add-post", {
        method: "POST",
        body: JSON.stringify(Post),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((result) => result.json())
        .then((result) => {
          if (result.response === "success") {
            alert(result.message);
          } else if (result.response === "failed") {
            alert(result.message);
          } else {
            alert("Unknown error occured . Sorry:/");
          }
        })
        .catch((error) => alert("Error occured : " + error));
    }
  };

  return (
    <div>

      <h3 className="here">Post Something</h3>

      <form>
        <textarea name="post"
          id="post" required
          rows="7" cols="30"
          maxLength="80"
          placeholder="Write something here .... max length 80 :)" />
        <br />
        <button className="button" onClick={(e) => handlePostSubmit(e)}>Post</button>
      </form>

    </div>
  );
};

export default PostSomething;
