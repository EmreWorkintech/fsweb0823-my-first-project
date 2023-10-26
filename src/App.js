import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { user } from "./api/getUser";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import SideBar from "./layout/SideBar";
import Footer from "./layout/Footer";
import axios from "axios";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUsers } from "./store/actions/usersActions";
import { Alert, Spinner } from "reactstrap";

function App() {
  const [loggedUser, setLoggedUser] = useState(user);
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []); //didMount

  function handleUserChange(user) {
    /*     const newUser = {
      ...user,
      name: "Yeni User" + Math.floor(Math.random() * 100),
    }; */
    setLoggedUser(user);
  }
  //console.log("user", loggedUser);

  function addNewUser(user) {
    //setUsers([...users, user]);
    dispatch(addUser(user));
  }

  /*
  if (users.isFetching) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spinner color="info">Loading...</Spinner>
      </div>
    );
  }

  if (users.error) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Alert color="danger">{users.error}</Alert>
      </div>
    );
  }
*/
  return (
    <Router>
      <Header
        kullanici={loggedUser}
        handleUserChange={handleUserChange}
        projectName="My Second Project"
        total={300}
      />
      <div className="middle-area">
        <SideBar />
        {users.isFetching && (
          <div className="main-container flex items-center justify-center content-center">
            <Spinner color="info">Loading...</Spinner>
          </div>
        )}

        {users.error && (
          <div className="main-container flex items-center justify-center content-center">
            <Alert color="danger">{users.error}</Alert>
          </div>
        )}
        {!users.isFetching && !users.error && (
          <Main
            name={loggedUser.name}
            handleUserChange={handleUserChange}
            handleAddNewUser={addNewUser}
          />
        )}
      </div>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
