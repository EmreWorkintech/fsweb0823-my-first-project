function CounterController(props){

    return (
        <div>
            <button disabled={props.sayac>=10 ? true: false} onClick={props.increase}>+1</button>
            <button disabled={props.sayac<=0 ? true: false} onClick={props.decrease}>-1</button>
        </div>
    )
}

export default CounterController;