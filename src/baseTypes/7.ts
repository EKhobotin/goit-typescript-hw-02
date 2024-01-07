/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  Monday="Monday",
  Tuesday="Tuesday",
  Wednesday="Wednesday",
  Thursday="Thursday",
  Friday="Friday",
  Saturday="Saturday",
  Sunday="Sunday"
}
function isWeekend(day: Days) {
  
  switch (day) {
    case Days.Monday:
    case Days.Tuesday:
    case Days.Wednesday:
    case Days.Thursday:
    case Days.Friday: return false;
    case Days.Saturday:
    case Days.Sunday: return true;
    default: console.log('Invalid day');
    
  }
}

