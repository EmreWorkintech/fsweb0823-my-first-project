import { Button, Spinner } from "reactstrap";

const SpinnerButton = ({ children, loading, ...rest }) => {
  console.log("rest", rest);
  return (
    <Button {...rest}>
      {loading && <Spinner />}
      {children}
    </Button>
  );
};

export default SpinnerButton;
