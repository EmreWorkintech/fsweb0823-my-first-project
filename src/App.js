import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { user } from "./api/getUser";
import { useContext, useEffect } from "react";

import SideBar from "./layout/SideBar";
import Footer from "./layout/Footer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUsers } from "./store/actions/usersActions";
import { Alert, Spinner } from "reactstrap";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { SiteGlobalContext } from "./contexts/SiteGlobalProvider";

function App() {
  const [loggedUser, setLoggedUser] = useLocalStorage("loggedUser", user);
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  const { theme } = useContext(SiteGlobalContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]); //didMount

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
    <>
      {" "}
      {/* CONTEXT.STEP 2: create context Provider component and pass values to value prop */}
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
    </>
  );
}

export default App;
