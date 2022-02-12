import React from 'react';
import './App.css';
 
export const App  = () => {
  return (
    <>
    <div className="js_todo_app">
    <h1>JS ToDoアプリ</h1>
    <form>
        <input id="task_value" type="text" />
        <label for="">期限日:
            <select id="select_year" name="year">
              <option selected="true">2022</option>
              <option>2021</option>
            </select>
            <select id="select_month" name="month">
              <option selected="true">2</option>
              <option>3</option>
            </select>
            <select id="select_day" name="day">
              <option selected="true">12</option>
              <option>13</option>
            </select>
        </label>
        <button id="task_submit" type="button">Add task</button>
    </form>

    <div className="todo_task_table">
        <h2>todo_task</h2>
        <ul id="task_list">
          {/* ここはjsで動的に出力する */}
        <li>
          <p className="js_done_text">タスク内容</p>
            <button className="js_delete_btn">Delete</button>
            <button className="js_done_btn">Done</button>
          <p className="js_deadline">期限日: 2022年2月11日</p>
          </li>
          {/* ここはjsで動的に出力する ここまで*/}
        </ul>
    </div>
</div>
    </>
  )
}

export default App;