import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        // console.log(todo)
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };

            }
            return item;
        })
        );

    };

    const starHandler = () => {
        setTodos(todos.filter((el) => el.id2 === todo.id2))


        // setTodos(todos.map((item) => {
        //     if (item.id2 === todo.id2) {
        //         return {
        //             ...item
        //         };

        //     }
        //     return item;
        // })
        // );


    };


    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn' >
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn' >
                <i className='fas fa-trash'></i>
            </button>
            <button onClick={starHandler} className='star-btn' >
                <i className='fas fa-star'></i>
            </button>

            {/* <button className='fas fa-check'></button>
            <button className='fas fa-trash'></button>  */}
        </div>
    );
}
export default Todo;
