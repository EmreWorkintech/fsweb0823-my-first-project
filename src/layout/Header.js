import { useEffect, useState } from 'react';
import { getFullName } from '../utils/utils';
import styled from 'styled-components';

function Header(props) {
    //const projectName = "My First Project";
    //console.log("props", props)
    const [clickCount, setClickCount] = useState(0);

    function handleClick() {
        setClickCount(clickCount + 1);
    }

    useEffect(()=>{
        console.log("clickCoıund:", clickCount)
    }, [clickCount])

    function getColor(){
        if(clickCount>5) {
            return "red"
        } else {
            return "blue"
        }
    }

    const Title = styled.h1`
        text-align: center;
        color: ${props => { /* props ile data almak için*/
            switch(props.type){
                case "primary":
                    return `#2196f3`
                case "danger":
                    return "red"
                case "success":
                    return "#4caf50"
                default:
                    return null
            }
        }}
    `

    const Link = styled.a`
        text-decoration:none;
        color: purple;

        &:hover {
            color: red;  /* a:hover demek */
        }

        p  {
            color: red;  /* a'nın içindeki p tag'leri */
        }

        p & {
            color: black; /* p'nin içindeki a'lar */
        }

        .else {
            color: blue; /* class'ı else olan a tagleri */
        }

    `


    const Profile = styled.button`
        height: 50px;
        width: 50px;
        border: 5px solid black;
        background-color: aqua;
        border-radius: 50%;
        cursor: pointer;
    `

    const Notifications = styled(Profile)`
        background-color: ${ getColor() }; /* template literal içinde javascript expression */
        border-color: ${Math.floor(Math.random()*2) %2 === 0 ? "red" : "blue"};
    `

    //Bonus: Template literal vs adding strings
    const name = "Emre"
    const welcomeMessage = `Merhaba ${name}, Hoş geldin!...`
  //const welcomeMessage = "Merhaba " + name + ", Hoş geldin!..."

    return (
        <header>
            <Title type="success">Welcome <Link>{getFullName(props.kullanici)} <p>burası kırmızı</p></Link> to {props.projectName}</Title>
            <Profile onClick={props.handleUserChange} />
            <Notifications onClick={handleClick} />
        </header>
    )
}

export default Header;