import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom';

function Home() {

    const location = useLocation();
    const {data} = location.state || {};
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers()
    });
    const loadUsers = () => {

        const users = axios.get("https://jsonplaceholder.typicode.com/users").then(res => setUsers(res.data));

    }


    return (
        <div>
            < h1> dafdasfasdfasdfsadfsadf < /h1>
        </div>
    );
}

export default Home
