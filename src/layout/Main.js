import Counter from "../components/Counter";
import { Switch, Route } from "react-router-dom";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import User from "../pages/UserPage";
import UserPageAxiosHook from "../pages/UserPageAxiosHook";
import Login from "../pages/Login";
import AddUser from "../pages/AddUser";
import ContactUs from "../pages/ContactUs";
import Welcome from "../pages/Welcome";
import ProtectedPage from "../pages/ProtectedPage";

import { useSelector } from "react-redux";
import UsersAxiosHook from "../pages/UsersAxiosHook";

function Main(props) {
  const { name, handleUserChange, handleAddNewUser } = props; //yöntem 2
  const users = useSelector((store) => store.users);

  return (
    <div className="main-container dark:bg-slate-900 dark:text-white">
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/login/protected">
          <Welcome />
        </Route>
        <Route exact path="/login">
          {name === "" && <Login handleUserChange={handleUserChange} />}
        </Route>
        <Route path="/counter">
          <Counter name={name} />
        </Route>
        <Route exact path="/users">
          <ProtectedPage pageComponent={Users} fromURL={"/users"} />
        </Route>
        <Route exact path="/users/axios">
          <ProtectedPage
            pageComponent={UsersAxiosHook}
            fromURL={"/users/axios"}
          />
        </Route>
        <Route exact path="/users/:id">
          <ProtectedPage pageComponent={User} fromURL={"/users/"} />
        </Route>
        <Route exact path="/users/axios/:id">
          <ProtectedPage
            pageComponent={UserPageAxiosHook}
            fromURL={"/users/axios"}
          />
        </Route>
        <Route exact path="/user/add">
          <ProtectedPage
            pageComponent={AddUser}
            fromURL={"/user/add"}
            handleAddNewUser={handleAddNewUser}
          />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
