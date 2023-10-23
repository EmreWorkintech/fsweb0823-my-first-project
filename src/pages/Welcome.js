import { Button, Input } from "reactstrap";
import { useInput } from "../hooks/useInput";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";

const initialState = {
  name: "",
  password: "",
};

const Welcome = () => {
  /* useReducer için depreciated
  const [name, handleNameChange] = useInput("");
  const [password, handlePassChange] = useInput("");
  */

  const [loginForm, dispatchLoginForm] = useReducer(loginReducer, initialState);

  //sayfa açıldığında localstorage'dan değer okusun => initialState'ini localstorage'dan almaya çalıştık
  const [loggedInUser, setLoggedInUser] = useLocalStorage("registeredUser", "");

  const handleNameChange = (e) => {
    dispatchLoginForm({ type: "CHANGE_NAME", payload: e.target.value });
  };

  const handlePassChange = (e) => {
    dispatchLoginForm({ type: "CHANGE_PASSWORD", payload: e.target.value });
  };

  const handleClick = (e) => {
    setLoggedInUser(loginForm.name);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  // kayıtlı bir isim varsa Welcome :name şeklinde bir metin çıkarsın
  // çıkış butonu olsun.=> localstorage'ı silsin.
  return (
    <>
      {loggedInUser ? (
        <>
          <div>Welcome {loggedInUser}</div>
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
