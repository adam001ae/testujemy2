import React from 'react';
import './App.css';

const allUsers = ["Adam", "Ewa", "Beata", "Jakub", "Norbert", "Martyna"]

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            filteredUsers: allUsers
        }
    }

    render() {
        return(
            <div>
                <input onInput={this.filterUsers.bind(this)}/>
                <UsersList users={this.state.filteredUsers}/>
            </div>
        )
    }

    filterUsers(e){
        const text = e.currentTarget.value;
        const filteredUsers = this.getFilteredUsersForText(text)
        this.setState({
            filteredUsers
        })
    }

    getFilteredUsersForText(text){
        return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
    }
}

const UsersList = ({users}) => {
    if(users.length>0) {
        return (
            <ul>
                {users.map(user => <li key={user}>{user}</li>)}
            </ul>
        )
    }
    return (
        <p>Nie ma takich imion w bazie danych.</p>
    )
}



export default App;
