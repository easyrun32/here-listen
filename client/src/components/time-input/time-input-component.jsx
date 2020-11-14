import React, { useState } from "react";

import "./time-input.component.styles.scss";

export const TimeInput = (props) => {
  const [totalTime, setTime] = useState("");

  const [hour, setHour] = useState("");

  const [minute, setMinute] = useState("");

  const [am_or_pm, setAM_OR_PM] = useState(
    props.am_or_pm === undefined ? "pm" : props.am_or_pm
  );

  const on_Hour_Change = (event) => {
    setHour(event.target.value);
  };

  const on_Minute_Change = (event) => setMinute(event.target.value);

  const on_AM_OR_PM_Change = () => {
    if (am_or_pm === "am") setAM_OR_PM("pm");
    else {
      setAM_OR_PM("am");
    }
  };

  const [diffhour, diffsetHour] = useState("");

  const [diffminute, diffsetMinute] = useState("");

  const [diff_am_or_pm, diff_setAM_OR_PM] = useState(
    props.am_or_pm === undefined ? "pm" : props.am_or_pm
  );

  const diff_on_Hour_Change = (event) => {
    diffsetHour(event.target.value);
  };

  const diff_on_Minute_Change = (event) => diffsetMinute(event.target.value);

  const diff_on_AM_OR_PM_Change = () => {
    if (diff_am_or_pm === "am") diff_setAM_OR_PM("pm");
    else {
      diff_setAM_OR_PM("am");
    }
  };
  return (
    <div>
      <input
        value={hour}
        style={{ width: `${(hour.length + 1) * 7}px` }}
        onChange={on_Hour_Change}
        inputMode="numeric"
        type="tel"
        pattern="[0-9]*"
        className="time-input"
        size="2"
        maxLength="2"
      />
      :
      <input
        value={minute}
        style={{ width: `${(minute.length + 1) * 7}px` }}
        onChange={on_Minute_Change}
        inputMode="numeric"
        type="tel"
        pattern="[0-9]*"
        className="time-input"
        size="2"
        maxLength="2"
      />
      <button onClick={on_AM_OR_PM_Change}>{am_or_pm}</button>
      -
      <input
        value={diffhour}
        style={{ width: `${(diffhour.length + 1) * 7}px` }}
        onChange={diff_on_Hour_Change}
        inputMode="numeric"
        type="tel"
        pattern="[0-9]*"
        className="time-input"
        size="2"
        maxLength="2"
      />
      :
      <input
        value={diffminute}
        style={{ width: `${(diffminute.length + 1) * 7}px` }}
        onChange={diff_on_Minute_Change}
        inputMode="numeric"
        type="tel"
        pattern="[0-9]*"
        className="time-input"
        size="2"
        maxLength="2"
      />
      <button onClick={diff_on_AM_OR_PM_Change}>{am_or_pm}</button>
    </div>
  );
};
