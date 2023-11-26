import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.section}>
      <ul className={css.friend_list}>
        {friends.map(el => (
          <li className={css.item} key={el.id}>
            <span
              className={`${css.status} ${
                el.isOnline ? css.online : css.offline
              }`}
            >
              {el.isOnline}
            </span>
            <img
              className={css.avatar}
              src={el.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{el.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FriendList;
