function CounterDisplay({name,sayac}) {  //get props by destructuring Yöntem 3

    return (
        <h2>{name}'s Counter: {sayac}</h2>
    )
}

export default CounterDisplay;