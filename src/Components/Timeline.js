import React, { useState } from "react";
import Login from "./Login";

import SearchUser from "./SearchUser";
import PostSomething from "./PostSomething";
import AllInvitation from "./AllInvitation";
import AllPost from "./AllPost";

/*
setinitial = { props.setinitial }
username = { LoginData.username }
id = { result.userDetails._id }
*/
const Timeline = (props) => {
  const [timeline, settimeline] = useState(<PostSomething username={props.username} id={props.id} />);
  const handlePostSomething = (e) => {
    e.preventDefault();
    settimeline(
      <PostSomething settimeline={settimeline} username={props.username} id={props.id} />
    );
  };
  const handleAllPost = (e) => {
    e.preventDefault();
    // fetch("http://localhost:8080/get-all-post")
    fetch("https://get-social.azurewebsites.net/get-all-post")
      .then((result) => result.json())
      .then((result) => {
        settimeline(
          <AllPost
            settimeline={settimeline}
            allpost={result.result.reverse()}
            username={props.username}
            id={props._id}
          />
        );
      });
  };
  const handleSearchUser = (e) => {
    e.preventDefault();
    settimeline(
      <SearchUser settimeline={settimeline} username={props.username} id={props._id} />
    );
  };
  const handleAllInvitation = (e) => {
    e.preventDefault();
    settimeline(
      <AllInvitation settimeline={settimeline} username={props.username} id={props._id} />
    );
  };
  const handleLogOut = () => {
    if (window.confirm("Are you sure ? ...")) {
      props.setinitial(
        <Login setinitial={props.setinitial} username={props.username} id={props._id} />
      );
    } else {
      settimeline("Your timeline");
    }
  };
  return (
    <div>
      <p>
        Hello <b>@{props.username}</b>
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
