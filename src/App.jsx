import React, { useState } from 'react';
import './App.css';
import { InputTodo } from './components/InputTodo'
import { TodoList } from './components/TodoList'
 
export const App  = () => {

  // stateの設定
  const [inCompleteTodos, setInCompleteTodos] = useState([]);
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

  return (
    <>
    <div className="js_todo_app">
      <InputTodo 
        todotext={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <TodoList
        inCompleteTodos={inCompleteTodos}
        active={active}
        classToggle={classToggle}
        onClickDelete={onClickDelete}
        // deadLine={deadLine}
      />
    </div>
    </>
  )
}

export default App;