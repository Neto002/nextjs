import axios from "axios";
import { useEffect, useState } from "react";

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/db.json")
            .then((response) => setUsers(response.data.users));
    }, []);

    return (
        <div>
            <h1>Usuários</h1>
            <ul>
                {users.map((user: any, key) => <li key={key}>{user.name}</li>)}
            </ul>
        </div>
    );
}

export default UsersPage
