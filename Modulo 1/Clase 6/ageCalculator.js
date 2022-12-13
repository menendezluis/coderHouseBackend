const moment = require("moment");

const today = moment();
const myBirthday = moment("1991-12-13");
if (myBirthday.isValid()) {
  console.log(today.diff(myBirthday, "days"));
}
