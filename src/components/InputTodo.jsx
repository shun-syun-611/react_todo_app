import { logDOM } from '@testing-library/react';
import React from 'react';

export const InputTodo = (props) => {

    let select_year = document.getElementById("select_year");
    let select_month = document.getElementById("select_month");
    let select_day = document.getElementById("select_day");

    const date = new Date();
    const thisYear = date.getFullYear();
    const thisMonth = date.getMonth();
    const thisDate = date.getDate();

    const isLeapYear = year => (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
    let datesOfFebruary = isLeapYear(thisYear) ? 29 : 28;
    let datesOfMonth = [31, datesOfFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // // 年月日を生成する関数
    const createOption = (id, startNum, endNum, current) => {
    }

    const optionNumCreate = (startNum ,EndNum) => {
        const arr = [...Array(EndNum)].map((_, i) => i + startNum);
        return arr;
    }
    const optionNumDay = optionNumCreate(1,31);
    const optionNumMonth = optionNumCreate(1,12);
    const optionNumYear = optionNumCreate(2022,10);
    console.log(optionNumDay);
    console.log(optionNumMonth);
    console.log(optionNumYear);

    // // リアルタイムの年月日を初期表示
    createOption("select_year", thisYear, thisYear + 10, thisYear);
    // const pullDownMonth = createOption("select_month", 1, 12, thisMonth);
    // const pullDownDate = createOption("select_day", 1, datesOfMonth[thisMonth], thisDate);

    // const selectYearBox = select_year
    // const selectMonthBox = select_month;
    // const selectDayBox = select_day;

    // // 月の変更時に、日を1日にして、月に合わせた日数に更新
    // selectMonthBox.addEventListener("change", e => {
    //     select_day.innerHTML = "";
    //     const updatedMonth = e.target.value;
    //     createOption("select_day", 1, datesOfMonth[updatedMonth - 1], 1);
    // });
    // // 年の変更時に、日を1日にして、月に合わせた日数に更新
    // selectYearBox.addEventListener("change", e => {
    //     select_month.innerHTML = "";
    //     select_day.innerHTML = "";
    //     const updateYear = e.target.value;
    //     datesOfFebruary = isLeapYear(updateYear) ? 29 : 28;
    //     datesOfMonth = [31, datesOfFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //     createOption("select_month", 1, 12, 1);
    //     createOption("select_day", 1, datesOfMonth[0], 1);
    // });

    const deadLine = "2022年1月15日";

    const { todoText, onChange, onClick } = props;

    return (
        <>
            <h1>React ToDoアプリ</h1>
            <form>
                <input id="task_value" type="text" value={todoText} onChange={onChange}/>
                <label>期限日:
                    <select id="select_year" name="year">
                        {optionNumYear.map((num) =>
                            <option key={num.toString()}>{num}</option>
                        )}
                    </select>
                    <select id="select_month" name="month">
                        {optionNumMonth.map((num) => 
                            <option key={num.toString()}>{num}</option>
                        )}
                    </select>
                    <select id="select_day" name="day">
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