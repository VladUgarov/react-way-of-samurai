import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  };
};

let mapDispatchToProps = (disptch) => {
  return {
    follow: (userID) => {
      disptch(followAC(userID));
    },
    unfollow: (userID) => {
      disptch(unfollowAC(userID));
    },
    setUsers: (users) => {
      disptch(setUsersAC(users));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
