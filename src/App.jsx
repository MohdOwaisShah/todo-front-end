import React from 'react'
import Home from './Home.jsx'

const App = () => {
  return (
    <>
    <Home/>
    </>
  )
}

export default App

// when you add "Buy milk" process

// 1. 🖱️ You type "Buy milk" and click Add

// 2. 📤 CreateTask sends to backend: POST /add {data: "Buy milk"}

// 3. ✅ Backend saves to MongoDB, returns success

// 4. 📢 CreateTask calls onTaskAdded() (which is fetchTodos)

// 5. 🔄 fetchTodos executes:
//  - Sends GET /get request
//  - Receives updated list including "Buy milk"
//  - Updates todolists state with setTodolists()

// 6. 🖥️ React re-renders Home with the new list