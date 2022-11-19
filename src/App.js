import React, { useState, useEffect } from 'react';
import './App.css';
import Formm from './components/Formm';
import Todolist from './components/Todolist';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtertodo, setFiltertodo] = useState([]);
  const [search, setSearch] = useState('');



  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {

      case "completed":
        setFiltertodo(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFiltertodo(todos.filter((todo) => todo.completed === false));
        break;

      case "stared":
        setFiltertodo(todos.filter((todo) => todo.completed === true));
        break;

      default:
        setFiltertodo(todos);
        break;

    }
  };


  return (
    <div className="App">
      {/* <div className="search">
        <input type="text" placeholder='search' />
      </div> */}
      <header>
        <div className='heading'>
          <h1>to-do list</h1>
        </div>
      </header>
      <Formm todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} setStatus={setStatus} />
      <Todolist setTodos={setTodos} todos={todos} filtertodo={filtertodo} />

    </div>
  );
}

export default App;
