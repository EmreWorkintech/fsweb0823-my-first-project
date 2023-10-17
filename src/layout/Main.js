import Counter from "../components/Counter";
import { Switch, Route } from "react-router-dom";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import User from "../pages/UserPage";
import Login from "../pages/Login";
import AddUser from "../pages/AddUser";
import ContactUs from "../pages/ContactUs";

function Main(props) {
  const { name, users, handleUserChange, handleAddNewUser } = props; //yöntem 2

  return (
    <div className="main-container dark:bg-slate-900 dark:text-white">
      <Switch>
        <Route exact path="/">
          {name === "" && <Login handleUserChange={handleUserChange} />}
        </Route>
        <Route path="/counter">
          <Counter name={name} />
        </Route>
        <Route exact path="/users">
          <Users users={users} />
        </Route>
        <Route path="/users/:id">
          <User />
        </Route>
        <Route exact path="/user/add">
          <AddUser handleAddNewUser={handleAddNewUser} />
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
