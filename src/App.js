import './App.css';
import Header from './layout/Header';
import Main from './layout/Main';
import { user } from './api/getUser';
import { useEffect, useState } from 'react';
import Users from './layout/Users';
import axios from 'axios';

function App() {
  const [loggedUser, setLoggedUser] = useState(user);
  const [users, setUsers] = useState([]);

  function handleUserChange () {
    const newUser = {...user, name: "Yeni User" + Math.floor(Math.random()*100)};
    setLoggedUser(newUser);
  }
  //console.log("user", loggedUser);

  useEffect( ()=>{
    axios.get('https://reqres.in/api/users?per_page=12')
          .then( response => {
              setUsers(response.data.data);
          })
          .catch( error=> {
              console.error(error.response.message)
          })
          .finally(()=>{
              console.log("istek sonlandırıldı")
          })
  }, []) ;//didMount

  return (
    <>
      <Header kullanici={loggedUser} handleUserChange={handleUserChange} projectName="My Second Project" total={300}/>
      <Main name={loggedUser.name}/>
      <Users users={users} />
    </>
  );
}

export default App;
