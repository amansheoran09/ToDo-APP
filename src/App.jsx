import './index.css'
import './App.css'
import { useState, useEffect } from 'react'
function App() {
  const [value, setvalue] = useState('')
  const [todos, settodos] = useState([])
  const handlechange = (e) => {
    const inputValue = e.target.value
    if (!/[a-zA-Z0-9]/.test(inputValue) && inputValue !== "") {
      alert("Only symbols are not allowed!");
      return;
    }

    setvalue(inputValue);
  }
  const handleclick = () => {

    if (value == '') {
      alert("Please Enter Something")
    }
    else {
      settodos([...todos, value])
      setvalue('')
    }
  }
  const deletetodo = (index) => {
    const updatedtodo = [...todos]
    updatedtodo.splice(index, 1)
    settodos(updatedtodo)
  }
  return (
    <>
      <div className='container'>
        <h1>Manage your Todos</h1>
        <h2>Add a Todo</h2>
        <div className='addtodo'>
          <input type="text" className='input' value={value} onChange={handlechange} />
          <button className='btn' onClick={handleclick}>Add</button>
        </div>
        <div className="display">
          <h2>Your Todos:</h2>
          <div className="todos">
            <ul className='list'>
              {todos.map((item, index) => (
                <div className="flex" key={index}>
                  <li>{item}
                  </li>
                  <button className="delbtn" onClick={() => deletetodo(index)}></button>
                </div>

              ))}</ul>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
