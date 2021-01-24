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
  const reRender = (fnName) => {
    if (fnName === "AllPost") {
      handleAllPost();
    } else if (fnName === "getAllFriends") {
      handleMyFriends();
    } else if (fnName === "AllInvitation") {
      handleAllInvitation();
    }
  };

  const handlePostSomething = () => {
    document.title = "Post Something";
    settimeline(
      <PostSomething
        settimeline={settimeline}
        username={props.username}
        id={props.id}
        name={props.name}
      />
    );
  };
  const handleAllPost = () => {
    document.title = "All Post";
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
            reRender={reRender}
          />
        );
      })
      .catch((error) => alert("Error occured : " + error));
  };
  const handleMyFriends = () => {
    document.title = "My Friends";
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
              reRender={reRender}
            />
          );
        }
      })
      .catch((error) => console.log(error));
  };
  const handleSearchUser = () => {
    document.title = "Search User";

    settimeline(
      <SearchUser
        settimeline={settimeline}
        username={props.username}
        id={props.id}
        name={props.name}
      />
    );
  };
  const handleAllInvitation = () => {
    document.title = "All Invitation";
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
              reRender={reRender}
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
        <button className="button" onClick={() => handlePostSomething()}>
          Post Something
        </button>{" "}
        {"   "}
        <button className="button" onClick={() => handleAllPost()}>
          All Post
        </button>
        {"   "}
        <button className="button" onClick={() => handleMyFriends()}>
          My Friends
        </button>
        {"   "}
        <button className="button" onClick={() => handleSearchUser()}>
          Search a User
        </button>
        {"   "}
        <button className="button" onClick={() => handleAllInvitation()}>
          All Invitation
        </button>
        {"   "}
        <button className="button" onClick={() => handleLogOut()}>
          Log out !
        </button>
        {"   "}
      </p>
      {timeline}
    </div>
  );
};

export default Timeline;
