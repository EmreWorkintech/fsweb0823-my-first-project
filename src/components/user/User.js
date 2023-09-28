import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import "./User.css";

function User(props) {
  const { user } = props;

  //template - JSX
  return (
    <Card className="shadow-sm my-2"
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
      </CardBody>
    </Card>
  );
}

export default User;
