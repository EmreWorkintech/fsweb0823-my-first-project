import { useEffect, useState } from "react";
import UserList from "../components/user/UserList";
import Search from "../components/user/Search";

function Users() {
  const [search, setSearch] = useState("");

  function handleChange(evt) {
    setSearch(evt.target.value);
  }

  return (
    <section className="user-area">
      <Search search={search} handleChange={handleChange} />
      <UserList search={search} />
    </section>
  );
}

export default Users;
