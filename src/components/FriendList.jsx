export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(el => (
        <li className="item" key={el.id}>
          <span className="status">{el.isOnline}</span>
          <img
            className="avatar"
            src={el.avatar}
            alt="User avatar"
            width="48"
          />

          <p className="name">{el.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
