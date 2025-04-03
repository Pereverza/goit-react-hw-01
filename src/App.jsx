import Profile from "./Profile/Components/Profile";
import userData from "./userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./Transaction/TransactionHistory";
import transactions from "./transaction.json"





function App() {
  return (
    <div className="container">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}


export default App;
