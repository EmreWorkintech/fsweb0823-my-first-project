import './App.css';
import Header from './layout/Header';
import Main from './layout/Main';
import { user } from './api/getUser';

function App() {

  console.log("user", user);

  return (
    <>
      <Header kullanici={user} projectName="My Second Project" total={300}/>
      <Main name={user.name}/>
    </>
  );
}

export default App;
