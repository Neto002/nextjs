import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

type User = {
    name: string
}

type UserPageProps = {
    users: User[]
}

const UsersPage: NextPage<UserPageProps> = (props) => {

    const {users} = props;

    return (
        <div>
            <h1>Usuários</h1>
            <ul>
                {users.map((user: any, key) => <li key={key}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default UsersPage

export const getServerSideProps: GetServerSideProps = async () => {
    
    const {data} = await axios.get("http://localhost:3001/db.json")
    const users = data.users

    return {
        props: {
            users,
        },
    }
}
