import UserList from "../components/user/UserList";
import "./SideBar.css";
import { NavLink, Route } from "react-router-dom";

function SideBar(props) {
  const { users } = props;
  return (
    <div className="side-container">
      <NavLink
        to="/counter"
        className={(isActive) => (isActive ? "active" : null)}
      >
        Counter
      </NavLink>
      <NavLink
        to="/users"
        className={(isActive) => (isActive ? "active" : null)}
      >
        Users
      </NavLink>
      {/*Nested Routing*/}
      <Route path="*/users">
        <UserList type="listMode" users={users} />
      </Route>
    </div>
  );
}

export default SideBar;
