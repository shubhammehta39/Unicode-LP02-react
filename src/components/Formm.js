import React from 'react';
// import Button from '@mui/material/Button';


const Formm = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodohandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000, id2: Math.random() * 100 },
        ]);
        setInputText('');
    };
    const statusHandler = (e) => {
        // console.log(e.target.value);
        setStatus(e.target.value);

    };
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodohandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            {/* <Button variant="outlined">Outlined</Button> */}

            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    <option value="stared">Stared</option>
                </select>
            </div>
        </form>
    );
};

export default Formm;
