import { Button, Input } from "reactstrap";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changePassword } from "../store/actions/loginFormActions";
import { setLoggedInUser } from "../store/actions/loginActions";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

const Welcome = () => {
  /* useReducer için depreciated
  const [name, handleNameChange] = useInput("");
  const [password, handlePassChange] = useInput("");
  */

  //const [loginForm, dispatchLoginForm] = useReducer(loginReducer, initialState);

  const loginForm = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  //sayfa açıldığında localstorage'dan değer okusun => initialState'ini localstorage'dan almaya çalıştık
  const [loggedUser, setLoggedUser] = useLocalStorage("registeredUser", "");

  const handleNameChange = (e) => {
    //dispatchLoginForm({ type: "CHANGE_NAME", payload: e.target.value });
    dispatch(changeName(e.target.value));
  };

  const handlePassChange = (e) => {
    //dispatchLoginForm({ type: "CHANGE_PASSWORD", payload: e.target.value });
    dispatch(changePassword(e.target.value));
  };

  const handleClick = (e) => {
    //axios isteği ile login olalım.
    axios
      .get("https://6540a96145bedb25bfc247b4.mockapi.io/api/login")
      .then((res) => {
        setLoggedUser(loginForm.name);
        const user = { ...loginForm, role: "Admin" };
        localStorage.setItem("token", res.data[0].token);

        dispatch(setLoggedInUser(user));
        history.push(location.state.referrer);
      })
      .catch((err) => console.error(err));

    // response'daki token'ı local storage'a ekleyelim.
  };

  const handleLogout = () => {
    setLoggedUser(null);
  };

  // kayıtlı bir isim varsa Welcome :name şeklinde bir metin çıkarsın
  // çıkış butonu olsun.=> localstorage'ı silsin.
  return (
    <>
      {loggedUser ? (
        <>
          <div>Welcome {loggedUser}</div>
          <Button onClick={handleLogout} className="bg-blue-500">
            Logout
          </Button>
        </>
      ) : (
        <>
          <Input
            type="text"
            value={loginForm.name}
            onChange={handleNameChange}
            placeholder="Adınız"
          />
          <Input
            type="text"
            value={loginForm.password}
            onChange={handlePassChange}
            placeholder="Şifreniz"
          />
          <Button onClick={handleClick} className="bg-blue-500">
            Giriş
          </Button>
        </>
      )}
    </>
  );
};

export default Welcome;
