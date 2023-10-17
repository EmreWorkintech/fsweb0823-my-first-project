import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { user } from "./api/getUser";
import { useEffect, useState } from "react";

import SideBar from "./layout/SideBar";
import Footer from "./layout/Footer";
import axios from "axios";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loggedUser, setLoggedUser] = useState(user);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?per_page=12")
      .then((response) => {
        setUsers(response.data.data);
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
    setUsers([...users, user]);
  }
  return (
    <>
      <Header
        kullanici={loggedUser}
        handleUserChange={handleUserChange}
        projectName="My Second Project"
        total={300}
      />
      <div className="middle-area h-screen">
        <SideBar users={users} />
        <Main
          name={loggedUser.name}
          handleUserChange={handleUserChange}
          users={users}
          handleAddNewUser={addNewUser}
        />
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
