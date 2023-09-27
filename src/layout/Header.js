import './Header.css';
import { getFullName } from '../utils/utils';

function Header(props) {
    //const projectName = "My First Project";
    //console.log("props", props)

    return (
        <header>
            <h1>Welcome {getFullName(props.kullanici)} to {props.projectName}</h1>
            <button onClick={props.handleUserChange}></button>
        </header>
    )
}

export default Header;