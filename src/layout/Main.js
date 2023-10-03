import Counter from "../components/Counter";
import { Switch, Route } from "react-router-dom";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import User from "../pages/UserPage";
import Login from "../pages/Login";

function Main(props) {
  const { name, users, handleUserChange } = props; //yöntem 2

  return (
    <div className="main-container">
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
