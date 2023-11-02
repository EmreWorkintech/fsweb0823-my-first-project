import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import {
  addToFavorites,
  removeFromFavorites,
} from "../store/actions/favUsersActions";

const Users = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const favUsers = useSelector((store) => store.favUsers);

  function handlePrev() {
    history.goBack();
  }

  function handleNavigation() {
    history.push("/");
  }
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {
        console.error(error.response.message);
      })
      .finally(() => {
        console.log("istek sonlandırıldı");
      });
  }, [id]);

  const handleAddToFav = () => {
    dispatch(addToFavorites(user));
  };

  const handleRemoveFromFav = () => {
    dispatch(removeFromFavorites(Number(id)));
  };

  const isFavUser = favUsers.find((user) => user.id === Number(id));
  console.log(favUsers);

  return (
    <>
      <Button onClick={handlePrev}>Geri</Button>
      <Button onClick={handleNavigation}>Ana Sayfa</Button>
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
          {isFavUser ? (
            <Button onClick={handleRemoveFromFav}>Favorilere Çıkar</Button>
          ) : (
            <Button onClick={handleAddToFav}>Favorilere Ekle</Button>
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default Users;
