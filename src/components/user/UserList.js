import User from './User';
import './UserList.css';

function UserList(props) {
    const { users } = props

    return (
        <div className='user-container'>
            {
                users.map(user=>(
                    <User user={user} key={user.id} />
                ))
            }
        </div>
    )
}

export default UserList;