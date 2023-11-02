import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedPage = ({ pageComponent: PageComponent, fromURL, ...rest }) => {
  let { id } = useParams();

  const isLoggedIn = () => {
    if (localStorage.getItem("token")) {
      return <PageComponent {...rest} />;
    } else {
      localStorage.removeItem("registeredUser");
      toast.warning("Bu sayfaya devam edebilmek için log in olmalısınız!..");
      return (
        <Redirect
          to={{
            pathname: "/login/protected",
            state: { referrer: `${fromURL}${id ? id : ""}` },
          }}
        />
      );
    }
  };

  return isLoggedIn();
};

export default ProtectedPage;
