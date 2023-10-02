import { Link } from "react-router-dom";
import User from "./User";
import "./UserList.css";

function UserList(props) {
  const { users, type } = props;

  return (
    <div className="user-container">
      {users.map((user) => (
        <Link className="user-list" to={`/users/${user.id}`}>
          <User user={user} key={user.id} type={type} />
        </Link>
      ))}
    </div>
  );
}

export default UserList;
