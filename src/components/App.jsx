import Profile from "./Profile";
import Statistics from "./Statistics";
import user from '../data/user.json'; 



export const App = () => {
  return (
    //     <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
     <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        <Statistics />
      </div>

  );
};
