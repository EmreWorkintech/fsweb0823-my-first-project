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
import { useDispatch } from "react-redux";
import { addUser, setUsers } from "./store/actions/usersActions";

function App() {
  const [loggedUser, setLoggedUser] = useState(user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?per_page=12")
      .then((response) => {
        //setUsers(response.data.data);
        dispatch(setUsers(response.data.data));
      })
      .catch((error) => {
        console.error(error.response.message);
      })
      .finally(() => {
        console.log("istek sonlandırıldı");
      });
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
  return (
    <Router>
      <Header
        kullanici={loggedUser}
        handleUserChange={handleUserChange}
        projectName="My Second Project"
        total={300}
      />
      <div className="middle-area h-screen">
        <SideBar />
        <Main
          name={loggedUser.name}
          handleUserChange={handleUserChange}
          handleAddNewUser={addNewUser}
        />
      </div>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
