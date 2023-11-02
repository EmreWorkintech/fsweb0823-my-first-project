import { Link } from "react-router-dom";
import UserAxiosHook from "./UserAxiosHook";
import "./UserList.css";
import { useEffect, useState } from "react";
import { Alert, Spinner } from "reactstrap";

function UserListAxiosHook(props) {
  const { search, type, users, loading, error } = props;

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const searchResult = users.filter((user) =>
      user.first_name.includes(search)
    );
    setFilteredUsers(searchResult);
  }, [search, users]);

  if (loading) {
    return <Spinner size="lg" />;
  }

  if (error) {
    return (
      <div className="main-container flex items-center justify-center content-center">
        <Alert color="danger">{error}</Alert>
      </div>
    );
  }

  return (
    <div className="user-container">
      {filteredUsers.map((user) => (
        <Link className="user-list" to={`/users/axios/${user.id}`}>
          <UserAxiosHook user={user} key={user.id} type={type} />
        </Link>
      ))}
    </div>
  );
}

export default UserListAxiosHook;
