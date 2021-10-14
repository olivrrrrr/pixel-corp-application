import React from 'react'
// import { users } from '../users'
import {useState, useEffect} from 'react'
import SearchBox from './components/SearchBox'
import CardList from './components/CardList'

 function App(){
    const [users, setUsers] = useState([])
    const [input, setInput] = useState(``)

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(data =>{
            setUsers(data)
        }, [])
    })

    const onSearchChange = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    const filteredUsers = 
        users.filter((users)=>{
            return users.name.toLowerCase().includes(input.toLowerCase())
        })
    
        return (
            <div className="tc">
                <h1 className="pageTitle">PixelCorp Directory</h1>
                <SearchBox searchChange={onSearchChange} value={input}/> 
                <CardList users={filteredUsers}/> 
            </div>
        )
}

export default App
