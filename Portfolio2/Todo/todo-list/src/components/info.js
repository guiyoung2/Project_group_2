import React, { useEffect, useState } from "react";

export default function Time(props) {
  const [clock, setClock] = useState("");
  const [sec, setSec] = useState("");
  let Days = ["Sun", "Mon", "Tue", "Wed", "Tur", "Fri", "Sat"];

  // useEffect(() => {
  //   let time = new Date();
  //   setDay(
  //     time.getFullYear() +
  //       "년 " +

  //       +
  //       (time.getMonth() + 1) +
  //       "월 " +
  //       time.getDate() +
  //       "일"
  //   );
  // }, [props.showTime]);
  const dayday = new Date();

  // let [hour,setHour] = useState("")
  // let [min, setMin] = useState("");
  // const [sec, setSec] = useState("");

  let ampm = dayday.getHours();

  useEffect(() => {
    const Timer = setInterval(() => {
      setClock(dayday.getHours() + " : " + dayday.getMinutes());
      // setHour(dayday.getHours())
      // setMin(dayday.getMinutes());
      setSec(dayday.getSeconds());
    }, 1000);
    return () => {
      clearInterval(Timer);
    };
  });

  return (
    <div className="today">
      <div className="week">{Days[dayday.getDay()]}</div>
      <div className="day-time">
        <div className="day">
          {dayday.getFullYear()} . {dayday.getMonth() + 1} . {dayday.getDate()}
        </div>
        <div className="now-clock">
          <span className="now-ampm">{ampm <= 11 ? "AM" : "PM"}</span>
          <span className="time-box">
            <span className="now-time">{clock}</span>
            {/* <span className="seconds">{sec}</span> */}
            {/* {clock} */}
            {sec}
          </span>
        </div>
      </div>
    </div>
  );
}
