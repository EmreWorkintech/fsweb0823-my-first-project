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
        data-cy="counter-page"
      >
        Counter
      </NavLink>
      <NavLink
        to="/user/add"
        className={(isActive) => (isActive ? "active" : null)}
        data-cy="add-user-page"
      >
        Add User
      </NavLink>
      <NavLink
        to="/users"
        className={(isActive) => (isActive ? "active" : null)}
        data-cy="users-page"
      >
        Users
      </NavLink>
      {/*Nested Routing*/}
      <Route path="*/users">
        <UserList type="listMode" users={users} />
      </Route>
      <NavLink
        to="/contactus"
        className={(isActive) => (isActive ? "active" : null)}
        data-cy="contactus-page"
      >
        Contact Us
      </NavLink>
    </div>
  );
}

export default SideBar;
