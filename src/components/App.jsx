import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

import Profile from "components/profile/Profile";
import Statistics from 'components/statistics/Statistics';
import FriendList from 'components/friendList/FriendList';
import TransactionHistory from 'components/transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{               
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

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
