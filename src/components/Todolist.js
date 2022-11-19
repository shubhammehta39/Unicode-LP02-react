import React from 'react';
import Todo from './Todo';

const Todolist = ({ todo, todos, setTodos, filtertodo }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filtertodo.map((todo) => (
                    <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text} />
                ))}

            </ul>
        </div>
    );
};

export default Todolist;

