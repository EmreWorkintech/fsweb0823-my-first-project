import { useEffect } from "react";

function CounterDisplay({name,sayac}) {  //get props by destructuring Yöntem 3

        //component yüklendiğinde bir kere çalışır
        useEffect( ()=>{
            console.log("[componentDidMount()] event fired");

            return ()=> {
                console.log("[componentWillUnMount()] event fired");
            }
            
        }, []) 

    return (
        <h2>{name}'s Counter: {sayac}</h2>
    )
}

export default CounterDisplay;