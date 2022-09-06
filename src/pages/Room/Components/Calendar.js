import { useState, useEffect, useRef } from "react";
const weekData = ["日", "一", "二", "三", "四", "五", "六"];

function Calendar({ bookingData }) {
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
  const [bookingAllData, setBookingAllData] = useState([]);
  const currentCalendarData = useRef([]);
  const bookingList = useRef([]);

  useEffect(() => {
    // 每次執行changeMonth重新取得資料時，都要將currentCalendarData.current淨空，防止資料不斷往上加上去
    currentCalendarData.current = [];
    // 最大的目的是要知道月曆上的第一天是星期幾
    const calendarFirstDate = new Date(
      calendar.year,
      calendar.month,
      1 - new Date(calendar.year, calendar.month, 1).getDay()
    );
    // console.log(calendarFirstDate)

    let date;
    for (let i = 0; i < 42; i++) {
      date = new Date(
        calendarFirstDate.getFullYear(),
        calendarFirstDate.getMonth(),
        calendarFirstDate.getDate() + i
      );
      currentCalendarData.current.push({
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay(),
      });
    }
    setCurrentCalendar(currentCalendarData.current);

    // bookData
    const list = [];
    bookingData.forEach((data) =>
      list.push(`${data.date.substring(6, 7)}-${data.date.substring(9, 10)}`)
    );
    bookingList.current = list;
    setBookingAllData(bookingList.current);
  }, [bookingData, calendar.month, calendar.year]);

  const changeMonth = (e) => {
    const { id } = e.target;
    const currentMonth = calendar.month;
    if (id === "right") {
      if (currentMonth > 10) {
        setCalendar((state) => ({ ...state, year: state.year + 1 }));
        setCalendar((state) => ({ ...state, month: 0 }));
      } else {
        setCalendar((state) => ({ ...state, month: state.month + 1 }));
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
          <button
            id="left"
            onClick={changeMonth}
            className={calendar.month === today.month ? "opacity0" : ""}
          >
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
                Number(item.month) !== Number(calendar.month) ? "opacity0" : ""
              } ${
                Number(item.month) === Number(today.month) &&
                item.date < today.date
                  ? "passDate"
                  : ""
              } ${
                bookingAllData.includes(item.month + 1 + "-" + item.date)
                  ? "reserved"
                  : ""
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
