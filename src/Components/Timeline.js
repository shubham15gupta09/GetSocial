import React, { useState } from "react";
import Login from "./Login";

import SearchUser from "./SearchUser";
import PostSomething from "./PostSomething";
import AllInvitation from "./AllInvitation";
import AllPost from "./AllPost";
import GetAllFriends from "./GetAllFriends";

const Timeline = (props) => {
  const [timeline, settimeline] = useState(
    <PostSomething username={props.username} id={props.id} />
  );
  const handlePostSomething = (e) => {
    document.title = "Post Something";
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
    document.title = "All Post";
    e.preventDefault();
    settimeline(
      <div>
        <br />
        <div className="loader big"></div>
      </div>
    );
    fetch("https://thegetsocial.azurewebsites.net/get-all-post", {
      method: "POST",
      body: JSON.stringify({ username: props.username, id: props.id }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
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
      })
      .catch((error) => alert("Error occured : " + error));
  };
  const handleMyFriends = (e) => {
    document.title = "My Friends";
    e.preventDefault();
    settimeline(
      <div>
        <br />
        <div className="loader big"></div>
      </div>
    );
    fetch("https://thegetsocial.azurewebsites.net/get-all-friends", {
      method: "POST",
      body: JSON.stringify({ username: props.username, id: props.id }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((result) => result.json())
      .then((result) => {
        if (result.data.length === 0) {
          settimeline(
            <p>
              <br />
              <b>-- Your Friend List is Empty --</b>
            </p>
          );
        } else {
          settimeline(
            <GetAllFriends
              settimeline={settimeline}
              username={props.username}
              name={props.name}
              id={props.id}
              data={result.data}
            />
          );
        }
      })
      .catch((error) => console.log(error));
  };
  const handleSearchUser = (e) => {
    document.title = "Search User";
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
    document.title = "All Invitation";
    e.preventDefault();
    settimeline(
      <div>
        <br />
        <div className="loader big"></div>
      </div>
    );
    const data = { id: props.id, username: props.username };
    fetch("https://thegetsocial.azurewebsites.net/get-all-invitation", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((result) => result.json())
      .then((result) => {
        if (result.data.length === 0) {
          settimeline(
            <p>
              <br />
              <b>-- No Invitation Available --</b>
            </p>
          );
        } else {
          settimeline(
            <AllInvitation
              settimeline={settimeline}
              username={props.username}
              id={props.id}
              data={result.data}
              name={props.name}
            />
          );
        }
      })
      .catch((error) => alert("Error occured : " + error));
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
        <button className="button" onClick={(e) => handleMyFriends(e)}>
          My Friends
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
