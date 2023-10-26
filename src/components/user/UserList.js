import { Link } from "react-router-dom";
import User from "./User";
import "./UserList.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function UserList(props) {
  const { search, type } = props;
  const users = useSelector((store) => store.users.userList);

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const searchResult = users.filter((user) =>
      user.first_name.includes(search)
    );
    setFilteredUsers(searchResult);
  }, [search, users]);

  return (
    <div className="user-container">
      {filteredUsers.map((user) => (
        <Link className="user-list" to={`/users/${user.id}`}>
          <User user={user} key={user.id} type={type} />
        </Link>
      ))}
    </div>
  );
}

export default UserList;
