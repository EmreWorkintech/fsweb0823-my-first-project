import { useState } from "react";
import UserList from "../components/user/UserList";
import Search from "../components/user/Search";
import SpinnerButton from "../components/atomic/SpinnerButton";
import { getUsers } from "../store/actions/usersActions";
import { useDispatch } from "react-redux";

function Users() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function handleChange(evt) {
    setSearch(evt.target.value);
  }

  const handleClick = () => {
    dispatch(getUsers());
  };

  return (
    <section className="user-area">
      <SpinnerButton
        color="success"
        size="lg"
        onClick={handleClick}
        emre={"true"}
      >
        <div>kullanıcıları</div>
        download et
      </SpinnerButton>
      <Search search={search} handleChange={handleChange} />
      <UserList search={search} />
    </section>
  );
}

export default Users;
