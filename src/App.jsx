import React, { useState } from 'react';
import './App.css';
 
export const App  = () => {

  // stateの設定
  const [inCompleteTodos, setInCompleteTodos] = useState(["初期値", "変更値"]);
  const [todoText, setTodoText] = useState('');
  const [active, setActive] = useState(false);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const classToggle = (index) => setActive(!active);

  // ボタンクリック処理
  const onClickAdd = () => {
    if(todoText === '') return;
      const addTodos = [...inCompleteTodos, todoText];
      setInCompleteTodos(addTodos);
      setTodoText('');
  }
  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  }
  // const onClickDone = (index) => {
  //   classToggle(index);
  // }

  return (
    <>
    <div className="js_todo_app">
    <h1>JS ToDoアプリ</h1>
    <form>
        <input id="task_value" type="text" value={todoText} onChange={onChangeTodoText}/>
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
        <button id="task_submit" type="button" onClick={onClickAdd}>Add task</button>
    </form>

    <div className="todo_task_table">
        <h2>todo_task</h2>
        <ul id="task_list">
          {/* liはjsで動的に出力する */}
          {inCompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <p className={active ? 'js_done_text' : ''}>{todo}</p>
                <button className="js_delete_btn" onClick={() =>onClickDelete(index)}>Delete</button>
                <button className="js_done_btn" onClick={() => classToggle(index)}>Done</button>
                <p className="js_deadline">期限日: 2022年2月11日</p>
              </li>
            );
          })}
          {/* liはjsで動的に出力する ここまで*/}
        </ul>
    </div>
</div>
    </>
  )
}

export default App;