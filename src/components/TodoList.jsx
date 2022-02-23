import React from 'react';

export const TodoList = (props) =>{

    const {
        inCompleteTodos,
        active,
        onClickDelete,
        onClickDone,
        // deadLine
    } = props;

    console.log(inCompleteTodos);

    return (
    <div className="todo_task_table">
        <h2>todo_task</h2>
        <ul id="task_list">
          {inCompleteTodos.map((todo, index) => {
            return (
                <li key={index}>
                    <p className={todo.status === true ? 'js_done_text' : ''}>{todo.text}</p>
                    <button className="js_delete_btn" onClick={() =>onClickDelete(index)}>Delete</button>
                    <button className="js_done_btn" onClick={()=> onClickDone(index)}>Done</button>
                    <p className="js_deadline">期限日: {todo.text}</p>
                </li>
            );
          })}
        </ul>
    </div>
    )
}