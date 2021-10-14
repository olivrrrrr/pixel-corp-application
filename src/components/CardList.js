import React from 'react'
import Card from './Card'
// import { users } from '../users'
// import {useState, useEffect} from 'react'
// import SearchBox from './SearchBox'

function CardList({ users }) {

    return (
        <div>
            {users.map(user=> 
                <Card 
                name={user.name}
                email={user.email}
                key={user.id}/>)}
        </div>
    )
}

export default CardList
