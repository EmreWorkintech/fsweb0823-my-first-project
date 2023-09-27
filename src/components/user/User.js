import './User.css';

function User(props) {
    const { user } = props;

    return (
        <div className="user-card">
            <h2>{user.first_name}</h2>
            <p>{user.email}</p>
            <img src={user.avatar} alt={user.first_name}/>
        </div>
    )
}

export default User;