import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Spinner,
} from "reactstrap";
import { useAxios } from "../hooks/useAxios";
import { deleteUsersParams, getUserParams } from "../utils/endpoints";
import { useHistory } from "react-router-dom";

const UserPageAxiosHook = () => {
  const { id } = useParams();
  const [getUser, user, loading, userErr] = useAxios({});
  const [deleteUser, deleteUserRes, deleteUserLoading, deleteUserErr] =
    useAxios();
  const history = useHistory();

  useEffect(() => {
    getUser(getUserParams(id));
  }, []);

  const handleDelete = () => {
    deleteUser(deleteUsersParams(id));
    history.push("/users/axios");
  };

  if (deleteUserLoading) {
    return <Spinner size="lg" />;
  }

  return (
    <>
      <Card
        className="shadow-sm my-2"
        style={{
          width: "18rem",
        }}
      >
        <img src={user.avatar} alt={user.first_name} />
        <CardBody>
          <CardTitle tag="h5">{user.first_name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {user.email}
          </CardSubtitle>
          <Button onClick={handleDelete}>Delete</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default UserPageAxiosHook;
