import React, { useState } from "react";
import Login from "./Login";

import SearchUser from "./SearchUser";
import PostSomething from "./PostSomething";
import AllInvitation from "./AllInvitation";
import AllPost from "./AllPost";

const Timeline = (props) => {
  const [timeline, settimeline] = useState(
    <PostSomething username={props.username} id={props.id} />
  );
  const handlePostSomething = (e) => {
    e.preventDefault();
    settimeline(
      <PostSomething
        settimeline={settimeline}
        username={props.username}
        id={props.id}
        name={props.name}
      />
    );
  };
  const handleAllPost = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/get-all-post")
      // fetch("https://thegetsocial.azurewebsites.net/get-all-post")
      .then((result) => result.json())
      .then((result) => {
        settimeline(
          <AllPost
            settimeline={settimeline}
            allpost={result.result.reverse()}
            username={props.username}
            name={props.name}
            id={props.id}
          />
        );
      });
  };
  const handleSearchUser = (e) => {
    e.preventDefault();
    settimeline(
      <SearchUser
        settimeline={settimeline}
        username={props.username}
        id={props.id}
        name={props.name}
      />
    );
  };
  const handleAllInvitation = (e) => {
    e.preventDefault();
    const data = { id: props.id, username: props.username };
    // fetch("https://thegetsocial.azurewebsites.net/get-all-invitation")
    fetch("http://localhost:8080/get-all-invitation", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((result) => result.json())
      .then((result) => {
        settimeline(
          <AllInvitation
            settimeline={settimeline}
            username={props.username}
            id={props.id}
            data={result.data}
          />
        );
      })
      .catch((error) => console.log(error));
  };
  const handleLogOut = () => {
    if (window.confirm("Are you sure ? ...")) {
      props.setinitial(
        <Login
          setinitial={props.setinitial}
          username={props.username}
          id={props.id}
        />
      );
    } else {
      settimeline("Your timeline");
    }
  };
  return (
    <div>
      <p>
        Hello <b>{props.name}</b> <i>(@{props.username})</i>
      </p>
      <p>
        {"   "}
        <button className="button" onClick={(e) => handlePostSomething(e)}>
          Post Something
        </button>{" "}
        {"   "}
        <button className="button" onClick={(e) => handleAllPost(e)}>
          All Post
        </button>
        {"   "}
        <button className="button" onClick={(e) => handleSearchUser(e)}>
          Search a User
        </button>
        {"   "}
        <button className="button" onClick={(e) => handleAllInvitation(e)}>
          All Invitation
        </button>
        {"   "}
        <button className="button" onClick={(e) => handleLogOut(e)}>
          Log out !
        </button>
        {"   "}
      </p>
      {timeline}
    </div>
  );
};

export default Timeline;
