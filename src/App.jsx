import React, { useState } from 'react';
import './App.css';
import { InputTodo } from './components/InputTodo'
import { TodoList } from './components/TodoList'
 
export const App  = () => {

  const date = new Date();
  const thisYear = date.getFullYear();
  const thisMonth = date.getMonth() +1;
  const thisDate = date.getDate();

  const isLeapYear = year => (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
  let datesOfFebruary = isLeapYear(thisYear) ? 29 : 28;
  let datesOfMonth = [31, datesOfFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const optionNumCreate = (startNum ,EndNum) => {
      const arr = [...Array(EndNum)].map((_, i) => i + startNum);
      return arr;
  }


  // stateの設定
  const [inCompleteTodos, setInCompleteTodos] = useState([]);
  const [todoList, setTodoList] = useState({
    text: "",
    status: false
  });
  console.log(todoList.text);
  const [selectYear, setSelectYear] = useState(thisYear);
  const [selectMonth, setSelectMonth] = useState(thisMonth);
  const [selectDate, setSelectDate] = useState(thisDate);

  // セレクトボックスに変化があった場合は計算し直したい
  const optionNumDay = optionNumCreate(1,datesOfMonth[selectMonth -1]);
  const optionNumMonth = optionNumCreate(1,12);
  const optionNumYear = optionNumCreate(thisYear,10);

  const [active, setActive] = useState(false);

  const onChangeTodoText = (event) => setTodoList({...todoList ,text:event.target.value});
  const onChangeSelectYear = (event) =>  setSelectYear(Number(event.target.value));
  const onChangeSelectMonth = (event) =>  setSelectMonth(Number(event.target.value));
  const onChangeSelectDate = (event) =>  setSelectDate(Number(event.target.value));



  // ボタンクリック処理 ここにセレクトボックスの値オブジェクトとして渡す
  const onClickAdd = () => {
    if(todoList.text === '') return;
      const addTodos = [...inCompleteTodos, todoList];
      setInCompleteTodos(addTodos);
      setTodoList({...todoList, text: ""});
  }
  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  }
  const onClickDone = (index) => {
    const newTodos = [...inCompleteTodos];
    if (newTodos[index].status === false) {
      newTodos[index].status = true;
      setInCompleteTodos(newTodos);
    }
    else {
      newTodos[index].status = false;
      setInCompleteTodos(newTodos);
    } 
  }

  return (
    <>
    <div className="js_todo_app">
      <InputTodo 
        todoList={todoList}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        onChangeSelectYear={onChangeSelectYear}
        onChangeSelectMonth={onChangeSelectMonth}
        onChangeSelectDate={onChangeSelectDate}
        selectYear={selectYear}
        selectMonth={selectMonth}
        selectDate={selectDate}
        optionNumYear={optionNumYear}
        optionNumMonth={optionNumMonth}
        optionNumDay={optionNumDay}
      />
      <TodoList
        inCompleteTodos={inCompleteTodos}
        active={active}
        onClickDelete={onClickDelete}
        onClickDone={onClickDone}
        // deadLine={deadLine}
      />
    </div>
    </>
  )
}

export default App;