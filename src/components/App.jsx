import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

import Profile from "./profile/Profile";
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',       
        background: 'linear-gradient(to right, #74ebd5, #acb6e5)',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        alignItems: 'center',
        fontSize: 40,
        color: '#003f5c',        
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
