import React from 'react';

export const InputTodo = (props) => {
    const { todoText, onChange, onClick } = props;
    return (
        <>
            <h1>JS ToDoアプリ</h1>
            <form>
                <input id="task_value" type="text" value={todoText} onChange={onChange}/>
                <label>期限日:
                    <select id="select_year" name="year">
                        <option>2022</option>
                        <option>2021</option>
                    </select>
                    <select id="select_month" name="month">
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <select id="select_day" name="day">
                        <option>12</option>
                        <option>13</option>
                    </select>
                </label>
                <button id="task_submit" type="button" onClick={onClick}>Add task</button>
            </form>
        </>
    )
}