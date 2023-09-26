import { useState } from "react";
import "./Counter.css";
import CounterDisplay from "./CounterDisplay";
import CounterController from "./CounterController";

const Counter = (props) => {
    //let counter = 0;
    const [counter,setCounter] = useState(0);

    function artir() {
        setCounter(counter+1);
        //console.log("artır:", counter);
    }

    function azalt() {
        setCounter(counter-1);
        //console.log("azalt", counter);
    }

    return (
        <>
            <CounterDisplay sayac={counter} name={props.name /*Yöntem 1*/}/>
            <CounterController sayac={counter} increase={artir} decrease={azalt}/>
        </>
    )
}

export default Counter;
