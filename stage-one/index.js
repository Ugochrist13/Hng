const currentDate = new Date();
const currentDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
  currentDate
);

const currentUTCTime = `(${currentDate.getTime()})`;

document.querySelector('[data-testid="currentDayOfTheWeek"]').innerText =
  currentDay;
document.querySelector('[data-testid="currentUTCTime"]').innerText =
  currentUTCTime;
