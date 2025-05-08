import React, { useState } from 'react'
import axios from 'axios'

const CreateTask = ({ onTaskAdded }) => {
    // stores the input field data
    const [input, setInput] = useState()

    // store input data
    const [task, setTask] = useState()

    const handleClick = () => {
        // sends data to the backend route
        if (task !== "") {
            const trimTask = task.trim()
            
            axios.post('http://localhost:3000/add', { data: trimTask })
                .then((result) => {
                    // backend data
                    console.log(result)
                    // because this we are displaying the updated data without refresh the page
                    onTaskAdded()
                })
                .catch(error => console.log(error))
                // set input value as empty
                setInput("")
        }
    }

    return (
        <>
            <div className="add-input-n-btn">
                {/* store the input data into task useState */}
                <input type="text" value={input} onChange={(e) => {
                    const userInputValue = e.target.value
                    setInput(userInputValue)
                    setTask(userInputValue)
                }} />
                <button onClick={handleClick} type='button'>Add</button>
            </div>
        </>
    )
}

export default CreateTask