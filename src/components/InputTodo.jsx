import { logDOM } from '@testing-library/react';
import React from 'react';

export const InputTodo = (props) => {

    const { todoList, onChangeTodoText, onClick, onChangeSelectYear, onChangeSelectMonth, onChangeSelectDate, selectYear, selectMonth, selectDate, optionNumYear ,optionNumMonth, optionNumDay } = props;
    // console.log(Number(selectYear));

    return (
        <>
            <h1>React ToDoアプリ</h1>
            <form>
                <input id="task_value" type="text" value={todoList.text} onChange={onChangeTodoText}/>
                <label>期限日:
                    <select id="select_year" name="year" onChange={onChangeSelectYear} defaultValue={selectYear}>
                        {optionNumYear.map((num) =>
                            <option key={num.toString()}>{num}</option>
                        )}
                    </select>
                    <select id="select_month" name="month" onChange={onChangeSelectMonth} defaultValue={selectMonth}>
                        {optionNumMonth.map((num) => 
                            <option key={num.toString()}>{num}</option>
                        )}
                    </select>
                    <select id="select_day" name="day" onChange={onChangeSelectDate} defaultValue={selectDate}>
                        {optionNumDay.map((num) => 
                            <option key={num.toString()}>{num}</option>
                        )}
                    </select>
                </label>
                <button id="task_submit" type="button" onClick={onClick}>Add task</button>
            </form>
        </>
    )
}