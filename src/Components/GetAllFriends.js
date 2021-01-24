const getAllFriends = (props) => {
  // this will handle the remove friends
  const handleRemoveFriend = (f) => {
    const data = {
      currentUser: {
        username: props.username,
        id: props.id,
      },
      username: f.username,
    };
    fetch("https://thegetsocial.azurewebsites.net/remove-friend", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((result) => result.json())
      .then((result) => {
        alert(result.message);
        props.reRender("getAllFriends");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <h3 className="here">All Friends</h3>
      {props.data.map((p) => (
        <div className="friends" key={p.username}>
          <p>
            <b>@{p.username}</b>
          </p>
          <p>
            <i>{p.name}</i>
          </p>
          <button className="button" onClick={() => handleRemoveFriend(p)}>
            Remove Friend
          </button>
        </div>
      ))}
    </div>
  );
};

export default getAllFriends;
