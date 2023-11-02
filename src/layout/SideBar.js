import { useSelector } from "react-redux";
import UserList from "../components/user/UserList";
import "./SideBar.css";
import { NavLink, Route } from "react-router-dom";
import { SiteGlobalContext } from "../contexts/SiteGlobalProvider";
import { useContext } from "react";

function SideBar() {
  const users = useSelector((store) => store.users);
  const { loggedUser } = useContext(SiteGlobalContext); //CONTEXT.STEP 3: use context data

  return (
    <div className="side-container w-1/5 bg-blue-600">
      <NavLink
        to="/counter"
        className={(isActive) => `${isActive ? "active" : ""} navLink`}
        data-cy="counter-page"
      >
        Counter
      </NavLink>
      <NavLink
        to="/user/add"
        className={(isActive) => `${isActive ? "active" : ""} navLink`}
        data-cy="add-user-page"
      >
        Add User
      </NavLink>
      <NavLink
        to="/users"
        className={(isActive) => `${isActive ? "active" : ""} navLink`}
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
        className={(isActive) => `${isActive ? "active" : ""} navLink`}
        data-cy="contactus-page"
      >
        Contact Us
      </NavLink>
      <div>
        Logged User: <br />
        {loggedUser?.first_name}
      </div>
    </div>
  );
}

export default SideBar;
