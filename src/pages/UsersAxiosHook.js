import { useEffect, useState } from "react";
import Search from "../components/user/Search";
import SpinnerButton from "../components/atomic/SpinnerButton";
import UserListAxiosHook from "../components/user/UserListAxiosHook";
import { getUsersParams } from "../utils/endpoints";
import { useAxios } from "../hooks/useAxios";

function UsersAxiosHook() {
  const [search, setSearch] = useState("");
  const [getUsers, users, usersLoading, usersError] = useAxios([]);

  function handleChange(evt) {
    setSearch(evt.target.value);
  }

  useEffect(() => {
    getUsers(getUsersParams());
  }, []);

  const handleClick = () => {
    getUsers(getUsersParams());
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
      <UserListAxiosHook
        users={users}
        loading={usersLoading}
        error={usersError}
        search={search}
      />
    </section>
  );
}

export default UsersAxiosHook;
