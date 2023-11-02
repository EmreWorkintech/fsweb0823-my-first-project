import { Button } from "reactstrap";

function CounterController(props) {
  return (
    <div className="my-4">
      <Button
        className="me-4"
        color="danger"
        disabled={props.sayac <= 0 ? true : false}
        onClick={props.decrease}
        data-cy="decrease"
        data-testid="decrease"
      >
        -1 azalt
      </Button>
      <Button
        color="success"
        disabled={props.sayac >= 10 ? true : false}
        onClick={props.increase}
        data-cy="increase"
        data-testid="increase"
      >
        +1 artır
      </Button>
    </div>
  );
}

export default CounterController;
