import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <section className="section">
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
