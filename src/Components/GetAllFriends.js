function getAllFriends(props) {
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
        </div>
      ))}
    </div>
  );
}

export default getAllFriends;
