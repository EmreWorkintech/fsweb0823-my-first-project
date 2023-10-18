import { useState } from "react";
import { Button, Input } from "reactstrap";
import { useInput } from "../hooks/useInput";

const Welcome = () => {
  const [name, handleNameChange] = useInput("");
  const [password, handlePassChange] = useInput("");

  //sayfa açıldığında localstorage'dan değer okusun => initialState'ini localstorage'dan almaya çalıştık
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("registeredUser")
  );

  const handleClick = (e) => {
    //localStorage'a kayıt etsin.
    localStorage.setItem("registeredUser", name);
    //loggedInUser değerini değiştirsin.
    setLoggedInUser(name);
    //ınput alanını sıfırla
  };

  const handleLogout = () => {
    localStorage.removeItem("registeredUser");
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
            value={name}
            onChange={handleNameChange}
            placeholder="Adınız"
          />
          <Input
            type="text"
            value={password}
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
