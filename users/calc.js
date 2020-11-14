const moment = require("moment");
var startTime = moment("10:16:59 am", "HH:mm:ss a");
var endTime = moment("02:12:07 pm", "HH:mm:ss a");
var duration = moment.duration(endTime.diff(startTime));
var hours = parseInt(duration.asHours());
var minutes = parseInt(duration.asMinutes()) - hours * 60;
var result =
  endTime.diff(startTime, "hours") +
  " Hrs and " +
  endTime.diff(startTime, "minutes") +
  " Mns";

console.log(result);
