import Counter from "../components/Counter";

function Main(props) {
    const {name} = props; //yöntem 2
    return (
        <Counter name={name}/>
    )
}

export default Main;