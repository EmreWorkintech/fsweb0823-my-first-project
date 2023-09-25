import { useState } from "react";
import "./Counter.css";

const Counter = () => {
    //let counter = 0;
    const [counter,setCounter] = useState(0);

    console.log("component", counter);

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
            <h2>Counter: {counter}</h2>
            <div>
              <button disabled={counter>=10 ? true: false} onClick={artir}>+1</button>
              <button disabled={counter<=0 ? true: false} onClick={azalt}>-1</button>
            </div>
        </>
    )
}

export default Counter;
