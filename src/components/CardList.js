import React from 'react'
import Card from './Card'
// import { users } from '../users'
import {useState, useEffect} from 'react'

function CardList() {

    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(data =>{
            setUsers(data)
        }, [])
})
    return (
        <div>
            {users.map(user=> <Card name={user.name} email={user.email} key={user.id}/>)}
        </div>
    )
}

export default CardList
