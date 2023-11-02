import { useState, useEffect } from "react";
import "./Counter.css";
import CounterDisplay from "./CounterDisplay";
import CounterController from "./CounterController";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../store/actions/counterActions";

const Counter = (props) => {
  //let counter = 0;
  //const [counter, setCounter] = useState(0);
  //const [counter, dispatchCount] = useReducer(countReducer, 0);
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const [showCounter, setShowCounter] = useState(true);

  function artir() {
    /*
    const newState = countReducer(counter, { type: "INCREASE" });
    setCounter(newState);
    */
    dispatch(increase());
    //dispatchCount({ type: "INCREASE" });
    //console.log("artır:", counter);
  }

  function azalt() {
    /*
    const newState = countReducer(counter, { type: "DECREASE" });
    setCounter(newState);
    */
    dispatch(decrease());
    //dispatchCount({ type: "DECREASE" });
    //console.log("azalt", counter);
  }

  useEffect(() => {
    if (counter >= 10) {
      setShowCounter(false);
    }
    console.log("Counter updated to ", counter);

    return () => {
      console.warn("Use Effec for counter bitti", counter);
    };
  }, [counter]);

  useEffect(() => {
    console.log("Name updated to ", props.name);
  }, [props.name]);

  //değişikliğini track ettiğimiz prop veya state güncellendiğinde! çalışır.
  useEffect(() => {
    console.log("some changes happened");
  }, [props.name, counter]);

  //component yüklendiğinde bir kere çalışır
  useEffect(() => {
    console.log("[componentDidMount()] event fired");
  }, []);

  //component update olduğunda çalışır
  useEffect(() => {
    console.log("[componentDidUpdate()] event fired");
  });

  return (
    <>
      {showCounter ? <CounterDisplay sayac={counter} /> : null}
      <CounterController sayac={counter} increase={artir} decrease={azalt} />
    </>
  );
};

export default Counter;
