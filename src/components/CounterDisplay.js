import { useEffect } from "react";
import { useSelector } from "react-redux";

function CounterDisplay({ sayac }) {
  //get props by destructuring Yöntem 3
  const users = useSelector((store) => store.users);

  const name = users[7] ? users[7].first_name : "";

  //component yüklendiğinde bir kere çalışır
  useEffect(() => {
    console.log("[componentDidMount()] event fired");

    return () => {
      console.log("[componentWillUnMount()] event fired");
    };
  }, []);

  return (
    <h2
      data-cy="counter-display"
      data-testid="counter-display"
      className="text-emre md:text-black"
    >
      {name}'s Counter: {sayac}
    </h2>
  );
}

export default CounterDisplay;
