import React, { useEffect, useState } from 'react'
// component
import CreateTask from './components/CreateTask'
// icons
import { FaRegTrashAlt } from "react-icons/fa";

// style
import './styles/App.css'
import './styles/App.css'
import axios from 'axios'

const Home = () => {
    const [todolists, setTodolists] = useState([])

    const fetchTodoFromDB = () => {
        axios.get("http://localhost:3000/get")
            .then(result => setTodolists(result.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchTodoFromDB()
    }, [])

    // handleDelete
    const handleDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/delete` + id)
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }

    return (
        // todo-list-container
        <div className='todo-list-container'>
            <h2 className='heading'>todo app</h2>
            <CreateTask onTaskAdded={fetchTodoFromDB} />
            {/* todo-list-container */}
            <div>
                {
                    todolists.length === 0 ? <h4>Please add the data</h4> :
                        todolists.map((todo, ind) => {
                            return <div className='todo-list-datas'><li key={ind}>{todo.data}</li>
                                <a href="" className='trash-icon' onClick={() => handleDelete(todo._id)}><FaRegTrashAlt/></a></div>
                        })
                }
            </div>
        </div>
    )
}

export default Home