import React from 'react';

export const TodoList = (props) =>{

    const {
        inCompleteTodos,
        active,
        classToggle,
        onClickDelete
    } = props;

    return (
    <div className="todo_task_table">
        <h2>todo_task</h2>
        <ul id="task_list">
          {inCompleteTodos.map((todo, index) => {

            return (
                
                // (() => {
                //     if (!todo === '') {
                        <li key={todo}>
                            <p className={active ? 'js_done_text' : ''}>{todo}</p>
                            <button className="js_delete_btn" onClick={() =>onClickDelete(index)}>Delete</button>
                            <button className="js_done_btn" onClick={() => classToggle(index)}>Done</button>
                            <p className="js_deadline">期限日: 2022年2月11日</p>
                        </li>
                //     }
                // }) ()
            );
          })}
        </ul>
    </div>
    )
}