import { useState, useEffect, useRef, useCallback } from "react";
const weekData = ["日", "一", "二", "三", "四", "五", "六"];

function Calendar() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const date = new Date().getDate();
  const day = new Date().getDay();
  const today = { year, month, date };
  const [calendar, setCalendar] = useState({
    year: year,
    month: month,
    date: date,
    day: day,
  });
  const [currentCalendar, setCurrentCalendar] = useState([]);
  const data = useRef([]);
  const calendarMonth = useCallback(() => {
    const calendarFirstDate = new Date(
      calendar.year,
      calendar.month,
      1 - new Date(calendar.year, calendar.month, 1).getDay()
    );
    let date;
    for (let i = 0; i < 42; i++) {
      date = new Date(
        calendarFirstDate.getFullYear(),
        calendarFirstDate.getMonth(),
        calendarFirstDate.getDate() + i
      );
      data.current.push({
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay(),
      });
    }
  }, [calendar.month, calendar.year]);
  useEffect(() => {
    calendarMonth();
    data.current.splice(42, 84);
    setCurrentCalendar(data.current);
  }, [calendarMonth]);
  const changeMonth = (e) => {
    const { id } = e.target;
    const currentMonth = calendar.month;
    if (id === "right") {
      if (currentMonth > 10) {
        setCalendar((state) => ({ ...state, year: state.year + 1 }));
        setCalendar((state) => ({ ...state, month: 0 }));
        console.log("0:", currentMonth);
      } else {
        setCalendar((state) => ({ ...state, month: state.month + 1 }));
        console.log("10:", currentMonth);
      }
    } else {
      if (currentMonth < 1) {
        setCalendar((state) => ({ ...state, month: 11 }));
        setCalendar((state) => ({ ...state, year: state.year - 1 }));
      } else {
        setCalendar((state) => ({ ...state, month: state.month - 1 }));
      }
    }
  };
  return (
    <>
      <div className="calendar">
        <div className="calendarYearMonth">
          <button id="left" onClick={changeMonth}>
            &#60;
          </button>
          <p>
            {calendar.year} / {calendar.month + 1}
          </p>
          <button id="right" onClick={changeMonth}>
            &#62;
          </button>
        </div>
        <ul className="calendarWeek">
          {weekData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="calendarDate">
          {currentCalendar.map((item) => (
            <li
              className={`${
                Number(item.month) !== Number(calendar.month)
                  ? "opacity0"
                  : null
              } ${
                Number(item.month) === Number(calendar.month) &&
                item.date < today.date
                  ? "passDate"
                  : null
              }`}
              key={item.date + Math.random()}
            >
              {item.date}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Calendar;
